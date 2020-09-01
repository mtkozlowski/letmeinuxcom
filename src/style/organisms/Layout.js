import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"

const Main = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  </ThemeProvider>
)

export default Layout
