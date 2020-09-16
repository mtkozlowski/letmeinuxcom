import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import GlobalStyle from "./GlobalStyle"
import RegularSection from "./RegularSection"
import CookieConsent from 'react-cookie-consent';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Main>{children}</Main>
      <CookieConsent
        location="bottom"
        buttonText="Akceptuj"
        enableDeclineButton="true"
        declineButtonText="Odrzuć"
        contentClasses="cookie-consent-class"
        cookieName="gatsby-gdpr-google-analytics">
          <RegularSection>
            Ta strona używa ciasteczek, jeśli ich nie chcesz kliknij przycisk 'Odrzuć'.
          </RegularSection>
      </CookieConsent>
    </>
  </ThemeProvider>
)

export default Layout
