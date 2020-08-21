import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1, H2, H3 } from "../atoms/Headings"
import StyledLink from "../atoms/StyledLink"
import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"

import CatalogLink from '../atoms/CatalogLink';
import LinkedInLinks from '../atoms/LinkedInLinks';
import Dot from '../atoms/Dot';
import ResettedLink from "../atoms/ResettedLink"

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    /* flex-direction: column; */
  }
`

const PostDateBlock = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  margin-left: auto;
  margin-top: 0.3em;
`

const LinkedInLinksWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightblue};
  color: ${({ theme }) => theme.colors.darkblue};
  margin-top: 1.6rem;
`;

const HeaderTop = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const PageHeader = styled(H1)`
  line-height: 1;
  ${({ theme }) => theme.media.phone} {
    font-size: 2.65rem;
  }
`

const StyledDiv = {
  padding: "0 3rem 1.6rem"
};


export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter } = mdx
  const facebookThumbnail = frontmatter.facebookThumbnail && frontmatter.facebookThumbnail.childImageSharp.fluid.src;

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Let me in UX!</title>
        <link
          rel="canonical"
          href={"https://letmeinux.com/" + frontmatter.slug}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content={"https://letmeinux.com/" + frontmatter.slug}
        />
        <meta
          property="og:title"
          content={frontmatter.title + " - Let me in UX!"}
        />
        <meta property="og:description" content={frontmatter.description} />
        {facebookThumbnail
          ? <meta property="og:image" content={`https://letmeinux.com${facebookThumbnail}`} />
          : ""}
        <script async src="https://widget.spreaker.com/widgets.js"></script>
      </Helmet>
      <Layout>
        <RegularSection>
          <StyledLink to="/">Go to main page</StyledLink>
          <DivFlex>
            <H2 as={H1}>{frontmatter.title}</H2>
            <PostDateBlock>{frontmatter.date}</PostDateBlock>
          </DivFlex>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <LinkedInLinksWrapper>
          <HeaderTop>
            <PageHeader as={ResettedLink} to={"/"}>
                ZOSTAŃMY W KONTAKCIE
              </PageHeader>
              <Dot />
              <Dot />
              <Dot />
            </HeaderTop>
            <LinkedInLinks style={StyledDiv}>
              <CatalogLink target="_blank" href="//linkedin.com/in/monika-rybinska"><span>Monika Rybińska</span></CatalogLink>
              <CatalogLink target="_blank" href="//linkedin.com/in/anna-m-michalik"><span>Anna Michalik</span></CatalogLink>
              <CatalogLink target="_blank" href="//linkedin.com/in/mateusz-w-kozlowski"><span>Mateusz Kozłowski</span></CatalogLink>
            </LinkedInLinks>
          </LinkedInLinksWrapper>
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        facebookThumbnail {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
