import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #fff;
  background-color: #040b11;

  & > img {
    max-width: 100%;
    position: absolute;
    animation: rotate 10s infinite;
    opacity: 0.1;
    filter: blur(10px);
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  & > img:nth-child(1) {
    width: 25rem;
    left: 0;
  }

  img:nth-child(2) {
    width: 45rem;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  img:nth-child(3) {
    width: 25rem;
    right: 0;
    bottom: 0;
  }
`;

export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  h1 {
    text-align: center;
    margin: 4rem 0;
    font-size: 4rem;
    font-family: "Bakbak One", cursive;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Bakbak One", cursive;
`;
export const RepoLink = styled(NavLink)`
  color: #090909;
  display: inline-block;
  text-decoration: none;
  border-radius: 1rem;
  padding: 1.3rem 2rem;
  background-color: #4c58db;
`;
export const GitLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  border-radius: 1rem;
  background-color: #21e786;
  text-decoration: none;
  padding: 1.3rem 2rem;
  color: #090909;
`;
export const ProfileContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileCard = styled.div`
  text-align: center;
  background-color: #141b22;
  position: relative;
  width: 70%;
  padding: 8rem 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0) 0px 2px 4px, rgba(0, 0, 0) 0px 7px 15px -5px,
    rgba(0, 0, 0) 0px -3px 0px inset;
  transition: all 0.8s;

  &::before,
  &::after {
    content: "";
    height: 10rem;
    width: 10rem;
    position: absolute;
    background-color: transparent;
    transition: transform 0.5s ease-in;
    transform: scaleX(1.3);
  }
  &::before {
    bottom: 0;
    right: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &:hover {
    transform: scale(1.07);

    &::before {
      border-right: 0.5rem solid #21e786;
      border-bottom: 0.5rem solid #21e786;
      transform: scaleX(1);
    }
    &::after {
      border-left: 0.5rem solid #21e786;
      border-top: 0.5rem solid #21e786;
      transform: scaleX(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    padding: 8rem 3rem;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    padding: 6rem 2rem;
  }
  img {
    max-width: 100%;
    width: 25rem;
    border-radius: 50%;
    border: 1rem solid #040b11;
  }
`;

export const Text = styled.div`
  margin-left: 2rem;
  width: 65%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    margin-left: 0;
    width: 100%;
    margin-top: 3rem;
  }
  h2 {
    font-size: 4rem;
  }

  p {
    margin-top: 0.7rem;
  }

  p {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.8rem;
    }
  }
`;

export const Follows = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    padding: 0.7rem 1.2rem;
    width: fit-content;
    border-radius: 2rem;
    background-color: #040b11;
  }
`;
