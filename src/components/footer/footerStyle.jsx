import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  /* background-color: #070522; */
  background-color: #06053d;
  /* background-color: #0e0c8a; */
  border-top: 0.2rem solid #090764;
  /* border-top: 0.2rem solid #d0d0d0; */
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  color: #c1bbf4;
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
    color: #fff;
  }
`;
