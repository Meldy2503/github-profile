import styled from "styled-components";
import bgImg from "../../assets/bgco.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(rgb(4, 11, 17, 0.5), rgb(4, 11, 17, 0.75)),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;
export const Contents = styled.div`
  color: #fff;
  margin: 20rem auto 0 auto;
  max-width: 120rem;
  width: 90%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    margin: 15rem auto 0 auto;
  }
`;

export const Text = styled.div`
  z-index: 100;

  h1 {
    font-family: "Bakbak One", cursive;
    font-size: 6rem;
    letter-spacing: 0.3rem;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 2rem;
    margin: 1.5rem auto;
    line-height: 1.5;
    width: 70%;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
  }
`;

export const Link = styled(NavLink)`
  padding: 1.5rem 4.2rem;
  background-color: #4afcb2;
  text-decoration: none;
  z-index: 100;
  color: #181717;
  transition: all 0.5s;
  z-index: 100;
  text-transform: uppercase;
  font-family: "Bakbak One", cursive;

  &:hover {
    box-shadow: inset 20rem 0 #fff;
  }
`;

export const SearchLink = styled(Link)`
  padding: 1.4rem 3rem;
  background-color: #040b11;
  border: 0.2rem solid #4afcb2;
  color: #fff;

  &:hover {
    box-shadow: inset 20rem 0 #fff;
    border: 0.2rem solid #fff;
    background-color: #4afcb2;
    color: #1f1e1e;
  }
`;
export const Image = styled.div`
  & > img {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    max-width: 100%;
    margin: 0 auto;
    opacity: 0.8;
    animation: move 5s infinite;
  }
  @keyframes move {
    0% {
      transform: translateY(-40px);
    }

    50% {
      transform: translateY(60px);
    }
    100% {
      transform: translateY(-40px);
    }
  }
`;
