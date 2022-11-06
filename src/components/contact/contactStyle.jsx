import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  min-height: 100vh;
  padding: 10rem 0;
  overflow: hidden;
  margin-bottom: 6rem;
  background-color: #040b11;
  position: relative;

  h2 {
    font-family: "Oswald", sans-serif;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

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
    width: 30rem;
    left: 0;
  }

  img:nth-child(2) {
    width: 20rem;
    top: 0;
    right: 0;
    margin: 0 auto;
  }

  img:nth-child(3) {
    width: 30rem;
    right: 0;
    bottom: 0;
  }
`;

export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  text-align: center;
  margin: 5rem auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  h2 {
    line-height: 1.4;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-family: "Bakbak One", cursive;
  }
`;
export const Form = styled.form`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 85%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    margin-top: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    background-color: hsla(220, 3%, 77%, 0.15);
    border-radius: 0.2rem;
    border: none;
    outline: none;
    color: #fff;

    &::placeholder {
      color: #ffffffb2;
    }

    &:focus {
      border-bottom: 0.3rem solid #19c572;
    }
  }
`;
export const Btn = styled.button`
  padding: 1.5rem 4.5rem;
  font-family: "Bakbak One", cursive;
  margin-top: 2rem;
  color: #090909;
  border: none;
  font-weight: 900;
  cursor: pointer;
  background-color: #1fd37c;

  &:hover {
    background-color: #1bc472;
  }
`;
