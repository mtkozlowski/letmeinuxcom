import React from "react"
import styled from "styled-components"
import LogoSrc from "../components/code-for-heaven-logo.png"
import MobileLogoSrc from "../components/code-for-heaven-mobile-logo.png"
import { Link } from "gatsby"

const Wrapper = styled.div`
  width: 58%;
  ${({ atHome }) =>
    atHome &&
    `
        width: 100%;
    `}

  ${({ theme }) => theme.media.tablet} {
    width: 58%;
  }
  ${({ theme }) => theme.media.phone} {
    width: auto;
    margin-right: 1rem;
  }
`

const Img = styled.img`
  display: block;
  max-width: 100%;
`

const BrowserView = styled.div`
  ${({ theme }) => theme.media.phone} {
    display: none;
  }
`

const MobileView = styled.div`
  display: none;
  ${({ theme }) => theme.media.phone} {
    display: block;
  }
`

const Logo = ({ atHome }) => (
  <Wrapper atHome={atHome}>
    <Link to="/">
      <BrowserView>
        <Img
          src={LogoSrc}
          alt="Code for Heaven Logo"
          title="Code for Heaven Logo"
        />
      </BrowserView>
      <MobileView>
        <Img
          src={MobileLogoSrc}
          alt="Code for Heaven Logo"
          title="Code for Heaven Logo"
        />
      </MobileView>
    </Link>
  </Wrapper>
)

export default Logo
