import styled from 'styled-components';
import headerLinkedIn from "../images/header-linkedin-background.png"

const CatalogLink = styled.a`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${headerLinkedIn});
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 6px 8px;
  width: 120px;
  height: 85px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform .3s ease-in-out;

  span {
    transition: transform .3s ease-in-out;

  }

  &:hover, &:focus {
    background-color: transparent;
    transform: rotate(-4.5deg) scale(1.1);

    span {
      transform: rotate(4.5deg)
    }

  }
`;

export default CatalogLink;