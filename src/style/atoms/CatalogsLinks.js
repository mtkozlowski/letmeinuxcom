import styled from "styled-components"
import applePodcastImg from "./CatalogsLinksPictures/applePodcast.svg"
import spotifyImg from "./CatalogsLinksPictures/spotify.svg"
import googleImg from "./CatalogsLinksPictures/google.svg"
import amazonImg from "./CatalogsLinksPictures/amazonMusic.svg"
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

export function ApplePodcastLink( props ) {
  return (
    <Anchor href={props.link}>
      <span>{props.text}</span>
      <img src={applePodcastImg} alt={props.text} />
    </Anchor>
  )
}

export function SpotifyLink( props ) {
  return (
    <Anchor href={props.link}>
      <span>{props.text}</span>
      <img src={spotifyImg} alt={props.text} />
    </Anchor>
  )
}

export function AmazonLink( props ) {
  return (
    <Anchor href={props.link}>
      <span>{props.text}</span>
      <img src={amazonImg} alt={props.text} />
    </Anchor>
  )
}

export function GoogleLink( props ) {
  return (
    <Anchor href={props.link}>
      <span>{props.text}</span>
      <img src={googleImg} alt={props.text} />
    </Anchor>
  )
}