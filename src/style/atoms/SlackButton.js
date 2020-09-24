import styled from "styled-components"
import slackImg from "./CatalogsLinksPictures/slack.svg"
import React from "react"

const Anchor = styled.a`
  height: 3rem;
  margin: 1rem 4px 0 0;
  max-width: 170px;
  position: relative;
  transition: transform .3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  span {
    position: absolute;
    font-size: 1px;
    opacity: 0;
  }
  
  img {
    height: 100%;
  }
`;

function SlackButton( props ) {
  return (
    <Anchor href={props.link}>
      <span>{props.text}</span>
      <img src={slackImg} alt={props.text} />
    </Anchor>
  )
}

export default SlackButton;