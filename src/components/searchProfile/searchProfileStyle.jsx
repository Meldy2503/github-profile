import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  /* background-color: #090909; */
`;
export const Contents = styled.div`
  color: #fff;
  margin: 20rem auto 0 auto;
  max-width: 120rem;
  justify-content: center;
  /* font-family: "Oswald", sans-serif; */
  width: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;

export const SearchWrapper = styled.div`
  text-align: center;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    word-spacing: 0.5rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    font-family: "Oswald", sans-serif;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 2.5rem;
    font-weight: 700;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#59cad1),
      color-stop(56%, #6267f0),
      to(#d462f0)
    );
    background-image: linear-gradient(
      125deg,
      #59cad1 35%,
      #6267f0 50%,
      #d462f0 65%
    );
    /* color: #f3f1f1; */

    margin-bottom: 4rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    input {
      padding: 1.6rem;
      border: none;
      outline: none;
      /* font-family: "Work Sans", sans-serif; */
      font-family: "Mulish", sans-serif;
      width: 45rem;
      background-color: transparent;
      border: 0.15rem solid #6267f0;
      border-radius: 1.5rem;
      color: #fff;
      font-size: 1.7rem;

      &::placeholder {
        color: #ffffffc8;
        font-size: 1.7rem;
      }
    }

    button {
      border-radius: 1.5rem;
      padding: 1.35rem 2.6rem;
      color: #fff;
      font-size: 1.5rem;
      border: none;
      outline: none;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.7;
      letter-spacing: 0.2rem;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#59cad1),
        color-stop(56%, #6267f0),
        to(#d462f0)
      );
      background-image: linear-gradient(90deg, #59cad1, #6267f0 56%, #d462f0);
      /* box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 12%); */

      &:hover {
        background-color: #c4771f;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  margin: 5rem 0 15rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;
export const Card = styled.div`
  width: 33rem;
  padding: 4rem 2rem;
  border-radius: 8px;
  background-color: #120d30;
  border: 0.2rem solid #2b2453;
  text-align: center;
  border-radius: 1rem;

  img {
    max-width: 100%;
    border-radius: 50%;
    width: 12rem;
  }
`;

export const Text = styled.div`
  margin-top: 2rem;

  h1 {
    margin: 1rem 0 2.5rem 0;
    font-weight: 500;
    text-transform: capitalize;
    opacity: 0.96;
  }

  a {
    text-transform: uppercase;
    border: 0.2rem solid #2b2453;

    background-color: #0f0b29;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.3rem 3rem;
    border-radius: 1rem;
    color: #c1bbf4;
  }
`;
