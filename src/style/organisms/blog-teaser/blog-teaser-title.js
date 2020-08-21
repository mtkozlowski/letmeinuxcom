import styled from "styled-components"
import { H2 } from "../../atoms/Headings"

const BlogTeaserTitle = styled(H2)`
  font-size: 1.5rem;
  line-height: 1;
  margin-right: auto;
  max-width: calc(100% - 200px);
  min-width: 350px;

  ${({ theme }) => theme.media.phone} {
    margin-top: 1em;
    line-height: 1.2;
  }
`

export default BlogTeaserTitle
