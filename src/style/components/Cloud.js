import React from "react"
import styled from "styled-components"
import cloudSrc from "./code-for-heaven-cloud.png"

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  ${({ atHome }) =>
    !atHome &&
    `
        :after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #FFFCFC;
            opacity: .7;
        }
    `}
`

const CloudPic = styled.img`
  position: absolute;
  left: -6rem;
  bottom: -12rem;
  max-width: 100%;

  ${({ theme }) => theme.media.phone} {
    max-width: unset;
    width: 200%;
    left: -100%;
    bottom: -95px;
  }
`
const Cloud = ({ atHome }) => (
  <StyledWrapper atHome={atHome}>
    <CloudPic src={cloudSrc} />
  </StyledWrapper>
)
export default Cloud
