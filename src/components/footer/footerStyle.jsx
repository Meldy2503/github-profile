import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  border-top: 0.1rem solid #333;
  background-color: #040b11;
  overflow: hidden;
  color: #d0d0d0;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;

  p {
    line-height: 1.4;
  }

  span {
    color: #4afcb2;
  }
`;
