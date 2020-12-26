import {
  Button,
  Popover,
  OverlayTrigger,
  ButtonGroup,
  Nav
} from "react-bootstrap";
import {useLocation} from 'react-router-dom'
import {FaArrowLeft} from "react-icons/all";
import {LinkContainer} from "react-router-bootstrap";
import React from "react";
import ReactMarkdown from "react-markdown";

export const dateFmt = 'MMM DD, YYYY';

export function BackButton() {
  return <LinkContainer to='/mlg'>
    <Button className="text-dark mb-2" variant="link">
      <FaArrowLeft /> All Episodes
    </Button>
  </LinkContainer>
}

export const patreonLink = 'https://www.patreon.com/machinelearningguide'

export function Popover_({children, content, id=null, title=null, opts={}}) {
  const popover = (
    <Popover id={id || +new Date}>
      {title && <Popover.Title as="h3">Popover right</Popover.Title>}
      <Popover.Content>
        {content}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={["hover", "focus"]} overlay={popover} {...opts}>
      {children}
    </OverlayTrigger>
  );
}

export const btns = {
  on: {
    size: "sm",
    variant: "outline-dark",
    className: "text-left filter-selected"
  },
  off: {
    size: "sm",
    variant: "outline-secondary",
    className: "text-left"
  },
  iconBtn: {
    variant: 'light',
    size: "sm",
    className: 'icon-btn'
  },
  icon: {
    size: 20
  },
}

export function ReactMarkdown_({source}) {
  // TODO turn h2s into h3s
  return <ReactMarkdown
    source={source}
    linkTarget="_blank"
  />
}