import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  /* background-image: linear-gradient(
    90deg,
    #fddd8e 0%,
    #ff987e 15%,
    #e76f51 30%,
    #ff6dac 44%,
    #a667ff 58%,
    #3a86ff 72%,
    #6dba82 86%,
    #2a9d8f 100%
  ); */
  /* background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-decoration-color: ${({ theme }) => theme.colors.grey};
  background-image: linear-gradient(
      90deg,
      #ffd05d 0%,
      #f4a261 15%,
      #e76f51 30%,
      #ff006e 44%,
      #8338ec 58%,
      #3a86ff 72%,
      #6dba82 86%,
      #2a9d8f 100%
    );

  transition: filter .1s cubic-bezier(0.42, 0, 0.64, 2.04);

  filter: contrast(85%) brightness(120%);

  &:hover {
    filter: contrast(100%) brightness(100%);
  } */
`

export default StyledLink
