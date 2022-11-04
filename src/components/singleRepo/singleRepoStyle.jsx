import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 95%;
  }
`;

export const RepoContainer = styled.div`
  margin: 5rem;
  color: #fff;
`;

export const RepoCard = styled.div``;
