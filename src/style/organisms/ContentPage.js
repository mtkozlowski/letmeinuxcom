import styled from "styled-components"

const ContentPage = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 200px) minmax(680px, 960px) minmax(
      344px,
      760px
    );
  grid-template-rows: 100px auto 100px;

  grid-template-areas:
    ". . iconsWaterfall"
    ". content iconsWaterfall"
    ". . iconsWaterfall";

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    grid-template-columns: 0 minmax(auto, 924px) minmax(auto, 100px);
    grid-template-rows: 50px auto 100px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.tabletVertical}) {
    grid-template-columns: 0 1fr 0;
  }
`

export default ContentPage
