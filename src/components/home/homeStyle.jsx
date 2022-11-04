import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(#00084e, #000638);

  img {
    /* transition: 0.2s linear infinite; */
    margin-top: 10rem;
    max-width: 70%;
    position: absolute;
    right: 0;
    /* top: 15%; */
    /* transform: rotate(180deg); */
  }
`;
export const Contents = styled.div`
  color: #fff;
  margin: 10rem auto;
  max-width: 120rem;

  width: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 50%;
`;
export const Right = styled.div`
  width: 50%;
`;
