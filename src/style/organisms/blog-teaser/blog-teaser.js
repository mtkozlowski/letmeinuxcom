import React from "react"
import styled from "styled-components"

import BlogTeaserTitle from "./blog-teaser-title"
import BlogTeaserDateBlock from "./blog-teaser-date-block"
import StyledLink from "../../atoms/StyledLink"

const BlogTeaserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  position: relative;

  margin-bottom: 50px;
`

const BlogTeaserText = styled.div`
  width: 100%;

  line-height: 1.2;
  margin: 1em 0 0;
  position: relative;
  order: 3;

  ${({ theme }) => theme.media.phone} {
    margin-top: 1em;
  }

  &::after {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.1em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`

const BlogTeaser = ({ teaserData, index }) => (
  <BlogTeaserWrapper>
    <BlogTeaserTitle>
      <StyledLink to={teaserData.slug}>
        {teaserData.title}
      </StyledLink>
    </BlogTeaserTitle>
    <BlogTeaserText dangerouslySetInnerHTML={{ __html: teaserData.excerpt }} />
    <BlogTeaserDateBlock index={index}>
      {teaserData.date}
    </BlogTeaserDateBlock>
  </BlogTeaserWrapper>
)

export default BlogTeaser
