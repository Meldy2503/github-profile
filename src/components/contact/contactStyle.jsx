import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  padding: 10rem 0;
  overflow: hidden;
  margin-bottom: 6rem;

  h2 {
    color: #f7992b;
    font-family: "Oswald", sans-serif;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  h2 {
    line-height: 1.4;
    font-size: 3.5rem;
    margin-bottom: 4rem;
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
    padding: 1.2rem 1.5rem;
    margin-top: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    background-color: #ffffffe6;
    border-radius: 0.2rem;
    border: none;
    outline: none;
    color: #000;

    &::placeholder {
      color: #000;
    }

    &:focus {
      border-bottom: 0.3rem solid #c77a22;
    }
  }
`;
export const Btn = styled.button`
  color: #f79c35;
  padding: 1.5rem 4.5rem;
  margin-top: 2rem;

  font-weight: 600;
  background-color: transparent;
  border: 0.2rem solid #f79c35;

  &:hover {
    background-color: #c77a23;
    border: 0.2rem solid #c77a23;
    color: #fff;
  }
`;
