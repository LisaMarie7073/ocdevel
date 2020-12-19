import React, {useState} from "react";
import scout from "../../assets/mlg_square.jpg";
import {Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";
import {btns, patreonLink, ReactMarkdown_} from "./utils";
import {FaItunesNote, FaPatreon, RiGooglePlayLine, RiSpotifyLine, SiRss, SiStitcher} from "react-icons/all";
import podcast from "../../content/podcast";
import librarian from "../../assets/mla_square.jpg";
import {LinkContainer} from "react-router-bootstrap";

export default function About() {
  const [showGetMLG, setShowGetMLG] = useState(false)
  const [showGetMLA, setShowGetMLA] = useState(false)

  function renderMLG() {
    return <>
      <div className="logo text-center">
        <img src={scout} />
      </div>

      {showGetMLG ? <>
        <ButtonGroup className='d-block' vertical>
          <Button {...btns.iconBtn} href="https://itunes.apple.com/us/podcast/machine-learning-guide/id1204521130">
            <FaItunesNote {...btns.icon} target="_blank" /> iTunes
          </Button>
          <Button {...btns.iconBtn} href="https://open.spotify.com/show/5M9yZpSyF1jc7uFp2MlhP9">
            <RiSpotifyLine {...btns.icon} target="_blank" /> Spotify
          </Button>
          <Button {...btns.iconBtn} href='https://podcasts.google.com/feed/aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdndWlkZS5saWJzeW4uY29tL3Jzcw=='>
            <RiGooglePlayLine {...btns.icon} target="_blank" /> Google Podcasts
          </Button>
          <Button {...btns.iconBtn} href="http://www.stitcher.com/s?fid=130679&refid=stpr">
            <SiStitcher {...btns.icon} target="_blank" /> Stitcher
          </Button>
          <Button {...btns.iconBtn} href="http://machinelearningguide.libsyn.com/rss"rel="nofollow">
            <SiRss {...btns.icon} target="_blank" /> Custom (RSS)
          </Button>
        </ButtonGroup>
      </> : <>
        <Button variant='outline-primary w-100' onClick={() => setShowGetMLG(true)}>Get It</Button>
      </>}

      <p className="mt-2 text-center">{podcast.body}</p>
    </>
  }

  function renderMLA() {
    return <>
       <div className="logo text-center">
        <img src={librarian} />
      </div>
      {showGetMLA ? <>
        <Button href={patreonLink} target='_blank' className='patreon-btn d-block mb-1'><FaPatreon /> Get it on Patreon</Button>
        <LinkContainer to='/mlg/free-access'>
          <Button variant="link" className='patreon-btn-free d-block mb-1'>Get it free</Button>
        </LinkContainer>
      </> : <>
        <Button variant='outline-primary w-100' onClick={() => setShowGetMLA(true)}>Get It</Button>
      </>}
      <p className="mt-2 text-center">Is an exclusive podcast series on practical/applied tech side of the same. Smaller, more frequent episodes.</p>

    </>
  }

  return <div className='sidebar-podcasts'>
    <Card className='mb-3'>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Card.Title className='text-center'>Theory</Card.Title>
            <Card.Subtitle className='text-center text-muted mb-1'>Machine Learning Guide</Card.Subtitle>
            {renderMLG()}
          </Col>
          <Col md={6}>
            <Card.Title className='text-center'>Hands-On</Card.Title>
            <Card.Subtitle className='text-center text-muted mb-1'>Machine Learning Applied</Card.Subtitle>
            {renderMLA()}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
}