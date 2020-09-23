import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { H1, H2 } from "../atoms/Headings"
import Navigation from "../molecules/Navigation"
import ResettedLink from "../atoms/ResettedLink"
import headerBackground01 from "../images/header-background-01.png"
import headerBackgroundLady from "../images/header-background-lady.png"
import recentPodcastLinkBackground from "../images/recent-podcast-link-background.png"
import zapraszamyDoKontaktuBackground from "../images/zapraszamy-do-kontaktu-background.png"
import CatalogLink from '../atoms/CatalogLink';
import LinkedInLinks from '../atoms/LinkedInLinks';
import Dot from '../atoms/Dot';

const StyledHeader = styled.header`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.darkblue};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.regularSection} {
    padding: 0 0.5rem;
  }
`

const HeaderWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.lightblue};
  position: relative;

  &:before {
    content: "";
    background-image: url(${headerBackground01});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    --size: 650px;
    position: absolute;
    top: -90px;
    left: -100px;
    width: var(--size);
    height: var(--size);
    z-index: -1;

    ${({ theme }) => theme.media.phone} {
      opacity: 0;
      display: none;
    }
  }
`

const PageHeader = styled(H1)`
  line-height: 1;
  ${({ theme }) => theme.media.phone} {
    font-size: 2.65rem;
  }
`

const HeaderTop = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 400px;
  padding: 0 1rem 2rem 200px;
  position: relative;

  &:before {
    content: "";
    background-image: url(${headerBackgroundLady});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    position: absolute;
    top: 0;
    left: -100px;
    width: 300px;
    height: 435px;
  }

  ${({ theme }) => theme.media.phone} {
    padding: 0 0.5rem 2rem;
    &:before {
      top: unset;
      left: 0px;
      bottom: 30px;
      width: 100px;
      height: 140px;
    }
  }
`;


const BottomLinksWrapper = styled.div`
  text-align: right;
`;

const RecentLink = styled(Link)`
  background-image: url(${recentPodcastLinkBackground});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 6px 8px;
  width: 220px;
  height: 65px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform .3s ease-in-out;

  &:hover, &:focus {
    background-color: transparent;
    transform:  scale(1.1);
  }
`;

const ContactLink = styled.a`
  background-image: url(${zapraszamyDoKontaktuBackground});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-top: 1rem;
  padding: 6px 8px;
  width: 260px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform .3s ease-in-out;

  &:hover, &:focus {
    background-color: transparent;
    transform:  scale(1.1);
  }
`;

const ReadMore = styled(Link)`
  display: flex;
  align-items: center;
  width: 220px;
  text-align: center;
  background: #726EFF;
  color: #fff;
  height: 30px;
  line-height: 50px;
  margin: 0 auto 0.5rem;
  padding: 0 1rem;

  text-decoration: none;
  text-transform: uppercase;
  transition: transform .3s ease-in-out;

  &:hover, &:focus {
    background: #726EFF;
    transform:  scale(1.1);
  }
`;

const Header = ({ mostRecentLink }) => (
  <StyledHeader>
    <HeaderWrapper>
      <HeaderTop>
        <PageHeader as={ResettedLink} to={"/"}>
          LET ME IN UX
        </PageHeader>
        <Dot />
        <Dot />
        <Dot />
      </HeaderTop>
      <HeaderMain>
        <LinkedInLinks>
          <CatalogLink target="_blank" href="//linkedin.com/in/monika-rybinska"><span>Monika Rybińska</span></CatalogLink>
          <CatalogLink target="_blank" href="//linkedin.com/in/anna-m-michalik"><span>Anna Michalik</span></CatalogLink>
          <CatalogLink target="_blank" href="//linkedin.com/in/mateusz-w-kozlowski"><span>Mateusz Kozłowski</span></CatalogLink>
        </LinkedInLinks>
        <BottomLinksWrapper>
          <RecentLink to={mostRecentLink} ><span>Najnowszy odcinek</span></RecentLink>
          <ContactLink as={Link} to={'/#main-section'}>Lista odcinków</ContactLink>
          <ContactLink href="mailto:hello@letmeinux.com"><span>Zapraszamy do kontaktu</span></ContactLink>
        </BottomLinksWrapper>
      </HeaderMain>
    </HeaderWrapper>
  </StyledHeader>
)

export default Header
