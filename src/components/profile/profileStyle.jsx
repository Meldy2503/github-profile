import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
    width: 25rem;
    animation: rotate 10s infinite;
    opacity: 0.08;
    filter: blur(10px);
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  & > img:nth-child(1) {
    left: 0;
    top: 15%;
  }

  img:nth-child(2) {
    top: -6%;
    right: 0;
  }

  img:nth-child(3) {
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
  border-radius: 0.5rem;
  padding: 1.1rem 1.8rem;
  background-color: #5c67dd;
`;
export const GitLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  border-radius: 0.5rem;
  background-color: #4afcb2;
  text-decoration: none;
  padding: 1.1rem 1.8rem;
  color: #090909;
`;
export const ProfileContents = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileCard = styled.div`
  text-align: center;
  background-color: #141b22;
  position: relative;
  width: 85%;
  padding: 8rem 5rem 10rem 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0) 0px 2px 4px, rgba(0, 0, 0) 0px 7px 15px -5px,
    rgba(0, 0, 0) 0px -3px 0px inset;
  transition: all 0.8s;

  &::before,
  &::after {
    content: "";
    height: 7rem;
    width: 7rem;
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
    transform: scale(1.03);

    &::before {
      border-right: 0.5rem solid #4afcb2;
      border-bottom: 0.5rem solid #4afcb2;
      transform: scaleX(1);
    }
    &::after {
      border-left: 0.5rem solid #4afcb2;
      border-top: 0.5rem solid #4afcb2;
      transform: scaleX(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    padding: 5rem 2rem 10rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 6rem 3rem 8rem 3rem;
    width: 95%;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    object-fit: cover;
    width: 28rem;
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
    font-size: 3rem;
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
    margin-top: 1rem;

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
