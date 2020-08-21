import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  ${({ theme }) => theme.media.phone} {
    flex-direction: row;
    margin-left: auto;
    margin-top: 1em;
  }

  a {
    padding: .6rem 0.6rem 0.5rem;
  }
`

const Navigation = ({ atHome }) => (
  <Nav atHome={atHome}>
    <Link to="/" >Blog</Link>
    <Link to="/valuable-resources" >Valuable resources</Link>
    {/* <Link to="/useful-tools" >Useful tools</Link> */}
  </Nav>
)

export default Navigation
