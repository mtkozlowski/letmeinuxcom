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

  position: relative;

  &:before {
    content: "";
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
  }

  a:hover {
    background: none;
  }
`

export default BlogTeaserTitle
