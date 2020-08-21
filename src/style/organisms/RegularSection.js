import styled from "styled-components"

const RegularSection = styled.section`
  width: ${({ theme }) => theme.regularSection};
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10rem;

  ${({ theme }) => theme.media.regularSection} {
    padding: 0 0.5rem;
  }
`

export default RegularSection
