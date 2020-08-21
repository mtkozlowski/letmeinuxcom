import styled from "styled-components"

const BlogTeaserDateBlock = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  order: 2;
  margin-left: auto;
  margin-top: 0.3em;
`

export default BlogTeaserDateBlock
