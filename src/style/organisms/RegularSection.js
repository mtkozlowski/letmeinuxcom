import styled from "styled-components"

const RegularSection = styled.section`
  width: ${({ theme }) => theme.regularSection};
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.regularSection} {
    padding: 0 0.5rem;
  }
`

export default RegularSection
