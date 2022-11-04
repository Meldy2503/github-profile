import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* background-color: #fff; */
  height: fit-content;
`;

export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 5rem auto;
  padding-top: 8rem;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  h1 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 4rem;
  }
`;
export const ProfileContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20rem;
`;
export const ProfileCard = styled.div`
  text-align: center;
  border: 0.2rem solid #fff;
  width: 62rem;
  padding: 5rem 3rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
  img {
    max-width: 100%;
    width: 15rem;
    border-radius: 50%;
  }
`;
export const Text = styled.div`
  margin-left: 2rem;
  h1 {
  }
  & > div {
    a {
      text-decoration: none;
      color: #fff;
      padding: 1rem;
      width: fit-content;
      margin: 0 0.5rem;
      border-radius: 2rem;
    }

    a:first-child {
      background-color: #59cad1;
    }
    a:nth-child(2) {
      background-color: #6267f0;
    }
    a:nth-child(3) {
      background-color: #d462f0;
    }
  }

  p {
    margin: 3rem 0 0.5rem 0;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    gap: 1rem;

    .icon {
      margin-right: 1rem;
    }
  }
`;

export const Repos = styled.div`
  margin: 8rem 0 10rem 0;
  width: 80%;
`;

export const RepoCard = styled.div`
  background-color: blueviolet;
  padding: 4rem 3rem;
  margin-bottom: 3rem;
  display: flex;
  p {
    margin-bottom: 1rem;
  }
`;
