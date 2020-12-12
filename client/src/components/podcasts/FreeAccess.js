import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import {BackButton, patreonLink} from "./utils";
import {Button, Card} from "react-bootstrap";
import {FaExternalLinkAlt, FaPatreon, FaRegEnvelope} from "react-icons/all";
import React from "react";

export default function FreeAccess() {
  const url = {url: "https://gnothiai.com"}
  const shareText = "Gnothi - a journal that uses AI to provide insights & resources"
  const shareImg = "https://gnothiai.com/logo192.png"
  function shareButtons() {
    return <>
      <FacebookShareButton
        {...url}
        quote={shareText}
        className='mr-2'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        {...url}
        title={shareText}
        className='mr-2'
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        {...url}
        className='mr-2'
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <PinterestShareButton
        {...url}
        description={shareText}
        media={shareImg}
        className='mr-2'
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <RedditShareButton
        {...url}
        title={shareText}
        className='mr-2'
      >
        <RedditIcon size={32} round />
      </RedditShareButton>

      <EmailShareButton
        {...url}
        subject={shareText}
        body=""
        className='mr-2'
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </>
  }
  return <div>
    <BackButton />
    <h3 className='h4'>Get Free MLA Access</h3>
    <p>
      <em>Machine Learning Applied</em> is a $1/m exclusive podcast. <Button size='sm' href={patreonLink} target='_blank' className='patreon-btn'><FaPatreon /> Subscribe on Patreon</Button> for access, or get it for free below.
    </p>

    <Card className='mb-3 shadow-sm free-mla-card'>
      <Card.Body>
        <Card.Title>Share | 3 Months Free</Card.Title>
        <Card.Text>
          <p>Get 3 months of free access by posting a link to <a href="https://gnothiai.com">Gnothi <FaExternalLinkAlt /></a> on your social media, then <a href="mailto:tylerrenelle@gmail.com">email me <FaRegEnvelope /></a> the link or screenshot. Helper buttons below, but post wherever you want.</p>
          {shareButtons()}
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='shadow-sm free-mla-card'>
      <Card.Body>
        <Card.Title>Contribute | Lifetime Free</Card.Title>
        <Card.Text>
          <p>Get free access for life by contributing to Gnothi. Submit a Pull Request on Github (see <a href="https://github.com/lefnire/ocdevel/issues" target='_blank'>active issues</a>) and ping me in the PR or email that you want MLA access.</p>
          <a className='zocial github' href="https://github.com/lefnire/gnothi" target='_blank'>Github</a>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}