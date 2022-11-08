import styled from "styled-components";
import BgImg from "../../assets/search.png";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #040b11;
`;
export const Contents = styled.div`
  color: #fff;
  margin: 20rem auto 0 auto;
  max-width: 120rem;
  justify-content: center;
  width: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;

export const SearchWrapper = styled(motion.div)`
  background: url(${BgImg}),
    linear-gradient(
      268.28deg,
      rgb(35, 51, 222, 0.7) -1.34%,
      rgb(10, 190, 102, 0.7)
    );
  padding: 2.5rem 3rem 4.5rem 3rem;
  border-radius: 2rem;
  text-align: center;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    word-spacing: 0.5rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    font-family: "Bakbak One", cursive;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;

    margin-bottom: 4rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    input {
      padding: 1.5rem;
      border: none;
      outline: none;
      font-family: "Mulish", sans-serif;
      width: 45rem;
      background-color: transparent;
      border: 0.2rem solid #1fd37c;
      border-radius: 1rem;
      color: #fff;
      font-size: 1.7rem;

      &::placeholder {
        color: #ffffffe1;
        font-size: 1.7rem;
      }
    }

    button {
      border-radius: 1rem;
      padding: 1.35rem 2.6rem;
      color: #1b1b1b;
      font-size: 1.5rem;
      border: none;
      outline: none;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.7;
      background-color: #1fd37c;
      font-family: "Bakbak One", cursive;

      &:hover {
        background-color: #18a761;
      }
    }
  }
`;

export const SearchResult = styled(motion.div)`
  margin: 8rem 0 15rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;
export const Card = styled.div`
  width: 30rem;
  padding: 2rem 2rem 4rem 2rem;
  background-color: #141b22;
  text-align: center;
  border-radius: 1rem;

  img {
    max-width: 100%;
    border-radius: 50%;
    width: 15rem;
    border: 1rem solid #040b11;
  }
`;

export const Text = styled.div`
  margin-top: 2rem;

  h1 {
    margin: 0 0 2.5rem 0;
    font-weight: 500;
    text-transform: capitalize;
    opacity: 0.96;
  }

  a {
    text-transform: uppercase;
    border: 0.1rem solid #767676;
    background-color: #040b11;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.3rem 3rem;
    border-radius: 1rem;
    color: #fff;
  }
`;
