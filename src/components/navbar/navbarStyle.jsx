import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #040b11;
`;

export const Nav = styled.nav`
  width: 90%;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  @media (max-width: 350px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  border: 0.2rem solid #4afcb2;
  padding: 0 1rem;
  font-family: "Bakbak One", cursive;

  span {
    color: #4afcb2;
    font-size: 3rem;
  }
`;

export const Ul = styled.ul`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    background-color: #040b11;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 7rem;
    display: block;
    z-index: 5000;
    height: 100vh;
    text-align: center;
    animation: slidein 0.6s linear;

    @keyframes slidein {
      0% {
        transform: scale(0);
        opacity: 0.25;
      }
      25% {
        transform: scale(0.25);
        opacity: 0.45;
      }
      50% {
        transform: scale(0.5);
        opacity: 0.65;
      }
      75% {
        transform: scale(0.8);
        opacity: 0.85;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 350px) {
    top: 11.8rem;
  }

  ${(props) => props.isMenuOpen} {
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }
  }

  li {
    list-style-type: none;
    margin-right: 3.5rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin-top: 3rem;
      margin-right: 0;
      border-bottom: 0.2rem solid #767676;
      padding-bottom: 1rem;
    }
  }

  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Bakbak One", cursive;
    color: #fff;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.7rem;
    }
  }

  .active {
    color: #4afcb2;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Bakbak One", cursive;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.7rem;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    font-weight: bolder;
  }
`;
