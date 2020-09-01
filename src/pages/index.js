import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"

import Header from "../style/organisms/Header"

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
