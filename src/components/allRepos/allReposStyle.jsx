import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  background-color: #040b11;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #fff;

  & > img {
    max-width: 100%;
    position: absolute;
    opacity: 0.1;
    animation: rotate 10s infinite;
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
    width: 20rem;
    left: 0;
    bottom: 20%;
  }

  img:nth-child(3) {
    width: 25rem;
    right: 0;
    bottom: 0;
  }

  img:nth-child(4) {
    width: 20rem;
    right: 5rem;
    top: 20%;
  }
`;

export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 15rem 0 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  & > h1 {
    text-align: center;
    font-size: 4rem;
    font-family: "Bakbak One", cursive;
  }

  & > h2 {
    margin-bottom: 5rem;
  }
`;

export const Repos = styled.div`
  width: 85%;
  border-left: 0.5rem solid #767676;
  padding-left: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;

export const RepoCard = styled.div`
  background-color: #141b22;
  padding: 4rem 3rem;
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    padding: 3rem 1rem;
  }

  &:nth-child(6) {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    height: 0.3rem;
    width: 3rem;
    position: absolute;
    top: 50%;
    left: -3rem;
    background-color: #767676;
  }

  &::before {
    content: "";
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    border-radius: 50%;
    top: 40%;
    left: -4.5rem;
    background-color: #767676;
  }

  &:hover {
    &::before {
      background-color: #1fd37c;
    }
    &::after {
      background-color: #1fd37c;
    }
  }

  span {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
`;

export const Links = styled(NavLink)`
  border: 0.2rem solid #21e786;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;

  &:hover {
    border: 0.2rem solid #fff;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;
  gap: 1rem;

  span {
    display: flex;
    gap: 0.5rem;
  }
`;
export const Btn = styled.button`
  outline: none;
  border: none;
  background-color: #21e786;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Bakbak One", cursive;
`;

export const Nos = styled.div`
  border: 0.2rem solid #21e786;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const Pg = styled.div`
  margin: 5rem 0 2rem 0;
  font-size: 1.8rem;
`;
