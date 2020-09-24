import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"

import { H1, H2, H3, H4, H5, H6 } from "../atoms/Headings"
import StyledLink from "../atoms/StyledLink"
import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"

import CatalogLink from '../atoms/CatalogLink';
import LinkedInLinks from '../atoms/LinkedInLinks';
import SlackButton from '../atoms/SlackButton';

import Dot from '../atoms/Dot';
import ResettedLink from "../atoms/ResettedLink"
import { ApplePodcastLink, SpotifyLink, AmazonLink, GoogleLink } from "../atoms/CatalogsLinks"

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    /* flex-direction: column; */
  }
`

const PostDateBlock = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  margin-left: auto;
  margin-top: 0.3em;
`

const LinkedInLinksWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightblue};
  color: ${({ theme }) => theme.colors.darkblue};
  margin-top: 1.6rem;
`;

const HeaderTop = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const PageHeader = styled(H1)`
  line-height: 1;
  ${({ theme }) => theme.media.phone} {
    font-size: 2.65rem;
  }
`

const StyledDiv = {
  padding: "0 3rem 1.6rem"
};

export default function Template({ data }) {
  const { wpPost } = data;

  return (
    <>
      <Helmet>
        <title>{wpPost.title} - Let me in UX!</title>
        <link
          rel="canonical"
          href={"https://letmeinux.com/" + wpPost.slug}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content={"https://letmeinux.com/" + wpPost.slug + "/"}
        />
        <meta
          property="og:title"
          content={wpPost.title + " - Let me in UX!"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={wpPost.facebookExcerpt} />
        {wpPost.featuredImage
          ? <meta property="og:image" content={wpPost.featuredImage.node.mediaItemUrl} />
          : ""}
        <meta property="og:image:alt" content={wpPost.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script async src="https://widget.spreaker.com/widgets.js"></script>
      </Helmet>
      <Layout>
        <RegularSection>
          <StyledLink to="/">Powrót do strony głównej</StyledLink>
          <DivFlex>
            <H2 as={H1}>{wpPost.title}</H2>
            <PostDateBlock>{wpPost.date}</PostDateBlock>
          </DivFlex>
        </RegularSection>
        <RegularSection dangerouslySetInnerHTML={{ __html: wpPost.content }} />
        <RegularSection>
          <DivFlex>
            <ApplePodcastLink link="https://podcasts.apple.com/us/podcast/let-me-in-ux/id1526632774?uo=4" text="Apple Podcasts" />
            <SpotifyLink link="https://open.spotify.com/show/7L90p5HHdi7lb6BvlEk3s9?si=b6r21s0TRtODuoFn4_rwYQ" text="Spotify" />
            <GoogleLink link="https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDUzMDYxNS9lcGlzb2Rlcy9mZWVk" text="Google Podcasts" />
            <AmazonLink link="https://music.amazon.com/podcasts/f721ff32-51e2-4cf0-88df-172ec09f86c2/LET-ME-IN-UX" text="Amazon Music" />
          </DivFlex>
          <DivFlex style={{backgroundColor: "#eee", color: "#212B38", padding: "1rem", justifyContent: "center", marginTop: "1.6rem", textAlign: "center"}}>
            <H6>Nurtują Cię jakieś pytania na temat projektowania? Nas też! 🙌 Pisz śmiało na naszej grupie na:</H6>
            <SlackButton link="https://letmeinux.slack.com/join/shared_invite/zt-hcjqwkok-abSPXKhvvYF0nPim9RB_vQ" text="Slack" />
          </DivFlex>
          <LinkedInLinksWrapper>
            <HeaderTop>
              <PageHeader as={ResettedLink} to={"/"}>
                ZOSTAŃMY W KONTAKCIE
              </PageHeader>
              <Dot />
              <Dot />
              <Dot />
            </HeaderTop>
            <LinkedInLinks style={StyledDiv}>
              <CatalogLink target="_blank" href="//linkedin.com/in/monika-rybinska" rel="noopener noreferrer" ><span>Monika Rybińska</span></CatalogLink>
              <CatalogLink target="_blank" href="//linkedin.com/in/anna-m-michalik" rel="noopener noreferrer" ><span>Anna Michalik</span></CatalogLink>
              <CatalogLink target="_blank" href="//linkedin.com/in/mateusz-w-kozlowski" rel="noopener noreferrer" ><span>Mateusz Kozłowski</span></CatalogLink>
            </LinkedInLinks>
          </LinkedInLinksWrapper>
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query EpisodeById($id:String!) {
    wpPost(id: {eq: $id}) {
      content
      id
      slug
      title
      date(formatString: "DD/MM/YYYY")
      facebookExcerpt
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`
