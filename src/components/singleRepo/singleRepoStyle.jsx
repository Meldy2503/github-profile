import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;

  & > img {
    max-width: 100%;
    width: 25rem;
    position: absolute;
    opacity: 0.08;
    animation: rotate 10s infinite;
    filter: blur(10px);
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  & > img:nth-child(1) {
    left: 0;
    bottom: 0;
  }

  & > img:nth-child(2) {
    top: 0;
    right: 0;
  }
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 17rem 0 10rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  & > h2 {
    margin-bottom: 3rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: 3rem;
  }
`;

export const RepoContainer = styled(motion.div)`
  color: #fff;
  width: 85%;
  border-left: 0.5rem solid #1fd37c;
  padding-left: 3rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    border-left: none;
    padding-left: 0;
  }
`;

export const RepoCard = styled.div`
  padding: 4rem 3rem;
  background-color: #141b22;
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &::after {
    content: "";
    height: 0.4rem;
    width: 3rem;
    position: absolute;
    top: 46%;
    left: -3rem;
    background-color: #1fd37c;
  }

  &::before {
    content: "";
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    border-radius: 50%;
    top: 43%;
    left: -4.5rem;
    background-color: #1fd37c;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    &::after,
    &::before {
      content: "";
      height: 0;
      width: 0;
    }
    padding: 4rem 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1.8rem;

    span {
      width: fit-content;
      background-color: #040b11;
      padding: 0.4rem 1.2rem;
      border-radius: 1.5rem;
      text-transform: capitalize;
    }
  }
`;

export const Links = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 2rem;
  }

  a {
    border-radius: 1rem;
    text-decoration: none;
    color: #090909;
    padding: 1rem 2rem;
    background-color: #1fd37c;
    font-family: "Bakbak One", cursive;
    transition: all 0.5s;
    display: flex;
    column-gap: 0.7rem;
    align-items: center;

    &:hover {
      box-shadow: inset 10rem 0 #fff;
    }
  }

  a:nth-child(1) {
    border: 0.2rem solid #1fd37c;
    background-color: transparent;
    color: #fff;

    &:hover {
      box-shadow: inset 15rem 0 #fff;
      color: #090909;
      border: 0.2rem solid #fff;
    }
  }
`;
