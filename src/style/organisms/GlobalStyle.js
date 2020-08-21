import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => theme.font.import};

    *, *::before, *::after {box-sizing: border-box;}

    h1, h2, h3, h4, h5, h6, p, .gatsby-highlight {margin: 0;
        * + & {margin-top: 1.1em}
    }

    a {margin: 0; font-weight: ${({ theme }) => theme.font.boldFontWeight};
        &:hover {background-color: ${({ theme }) => theme.colors.darkblue}}
    }

    html, body {
        min-height: 100vh;
        margin: 0;
        font-family: ${({ theme }) => theme.font.primaryFamily};
        font-size: ${({ theme }) => theme.font.regularTextSize};
        color: ${({ theme }) => theme.colors.white};
    }

    body {
        background-color: ${({ theme }) => theme.colors.darkblue};
        padding-top: 1px;
        padding-bottom: 10rem;
    }
    p {
        line-height: 1.6;
    }

    pre {
        @media(max-width: ${({ theme }) => theme.responsive.mobile}) {
            overflow-x: scroll !important;
            max-width: 100%;
        }
    }

    img {
        max-width: 100%;
    }

    a {
        color: inherit;
        li & {
            letter-spacing: 1px;
            font-weight: 400;
        }
    }

    li + li {
        margin-top: 1em;
    }
    li ul {
        margin-top: 1em;
    }

    .gatsby-highlight {
        @media(max-width: ${({ theme }) => theme.responsive.mobile}) {
            max-width: 100%;
        }
    }

    .codeblock-label {
        font-family: ${({ theme }) => theme.font.secondaryFamily};
        font-size: .75rem;
        background-color: #e1e7ef;
        padding: .25rem .25rem .25rem 1rem;
        margin-top: 1.1rem;
        margin-bottom: -0.5rem;
        border-left: 10px solid #358ccb;
        box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;

        & + .gatsby-highlight {margin-top: 0;}
    }
`

export default GlobalStyle
