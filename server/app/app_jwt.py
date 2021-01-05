from pydantic import BaseModel
from config import settings
from fastapi_sqlalchemy import db
from fastapi import APIRouter, Depends, HTTPException, Response, Request, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse

from fastapi_jwt_auth.exceptions import AuthJWTException
from fastapi_jwt_auth import AuthJWT
from fastapi_users.router.common import ErrorCode
from fastapi_users.authentication import JWTAuthentication
from fastapi_users import FastAPIUsers

from app.app_app import app
from app.mail import send_mail
from app.google_analytics import ga
import models as M

SECRET = settings.secret


jwt_authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=60*5)
fastapi_users = FastAPIUsers(
    M.user_db, [jwt_authentication], M.FU_User, M.FU_UserCreate, M.FU_UserUpdate, M.FU_UserDB,
)

def on_after_register(user: M.FU_UserDB, request: Request):
    ga(user.id, 'user', 'register')
    send_mail(user.email, "welcome", {})

def on_after_forgot_password(user: M.FU_UserDB, token: str, request: Request):
    send_mail(user.email, "forgot-password", token)

app.include_router(
    fastapi_users.get_register_router(on_after_register), prefix="/auth", tags=["auth"]
)

app.include_router(
    fastapi_users.get_reset_password_router(
        SECRET, after_forgot_password=on_after_forgot_password
    ),
    prefix="/auth",
    tags=["auth"],
)

# in production you can use Settings management
# from pydantic to get secret key from .env
class Settings(BaseModel):
    authjwt_secret_key: str = SECRET
    # authjwt_access_token_expires: int = 10


# callback to get your configuration
@AuthJWT.load_config
def get_config():
    return Settings()


router = APIRouter()

@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message, "jwt_error": True}
    )


# Standard login endpoint. Will return a fresh access token and a refresh token
@router.post('/login')
async def login(
    credentials: OAuth2PasswordRequestForm = Depends(),
    Authorize: AuthJWT = Depends()
):
    user = await M.user_db.authenticate(credentials)

    if user is None or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=ErrorCode.LOGIN_BAD_CREDENTIALS,
        )
        # raise HTTPException(status_code=401, detail="Bad username or password")

    """
    create_access_token supports an optional 'fresh' argument,
    which marks the token as fresh or non-fresh accordingly.
    As we just verified their username and password, we are
    going to mark the token as fresh here.
    """
    access_token = Authorize.create_access_token(subject=str(user.id), fresh=True)
    refresh_token = Authorize.create_refresh_token(subject=str(user.id))
    return {"access_token": access_token, "refresh_token": refresh_token}


@router.post('/refresh')
def refresh(Authorize: AuthJWT = Depends()):
    """
    Refresh token endpoint. This will generate a new access token from
    the refresh token, but will mark that access token as non-fresh,
    as we do not actually verify a password in this endpoint.
    """
    Authorize.jwt_refresh_token_required()

    current_user = Authorize.get_jwt_subject()
    new_access_token = Authorize.create_access_token(subject=current_user)
    return {"access_token": new_access_token}

# See https://indominusbyte.github.io/fastapi-jwt-auth/usage/freshness/
# for freshness tokens required for one-time critical routes, like deleting account etc

def jwt_user(Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    uid = Authorize.get_jwt_subject()
    return db.session.query(M.User).get(uid)


app.include_router(router, prefix='/auth')
