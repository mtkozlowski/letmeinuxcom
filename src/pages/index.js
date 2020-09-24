import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"

import Header from "../style/organisms/Header"
import { ApplePodcastLink, SpotifyLink, AmazonLink, GoogleLink } from "../style/atoms/CatalogsLinks"

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    /* flex-direction: column; */
  }
`
const BackToTopLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
`;

const IndexPage = ({
  data: {
    allWpPost: { edges },
  },
}) => {
  const Posts = edges
    .map((edge, index) => (
      <BlogTeaser key={edge.node.id} teaserData={edge.node} index={index} />
    ))

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Let me in UX!</title>
        <link rel="canonical" href="https://letmeinux.com/" />
      </Helmet>
      <Layout>
        <Header mostRecentLink={edges[0].node.slug} />
        <RegularSection id="main-section">
          <BackToTopLink to='/'>Wróć na górę</BackToTopLink>
          {Posts}
        </RegularSection>
        <RegularSection>
          <DivFlex>
            <ApplePodcastLink link="https://podcasts.apple.com/us/podcast/let-me-in-ux/id1526632774?uo=4" text="Apple Podcasts" />
            <SpotifyLink link="https://open.spotify.com/show/7L90p5HHdi7lb6BvlEk3s9?si=b6r21s0TRtODuoFn4_rwYQ" text="Spotify" />
            <GoogleLink link="https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDUzMDYxNS9lcGlzb2Rlcy9mZWVk" text="Google Podcasts" />
            <AmazonLink link="https://music.amazon.com/podcasts/f721ff32-51e2-4cf0-88df-172ec09f86c2/LET-ME-IN-UX" text="Amazon Music" />
          </DivFlex>
        </RegularSection>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: {order: DESC, fields: date}) {
      edges {
        node {
          slug
          id
          date(formatString: "DD/MM/YYYY")
          title
          excerpt
        }
      }
    }
  }
`
