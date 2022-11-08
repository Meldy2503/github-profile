import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const AlertStyle = styled.div`
  position: fixed;
  width: 32rem;
  top: 8rem;
  right: 1rem;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0rem 0.3rem 0.3rem #000;
  background-color: #141b22;
  color: #fff;
  border-radius: 0.2rem;
  animation: slideIn 2s ease-in;

  @media (max-width: 500px) {
    width: 30rem;
  }
  @media (max-width: 340px) {
    width: 95%;
    right: 0.5rem;
    top: 11rem;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }
  p {
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    line-height: 1.5;
    gap: 1.3rem;
    font-size: 1.7rem;

    @media (max-width: 500px) {
      padding: 2rem 0.5rem;
    }
  }
`;

export const Tick = styled(FaCheckCircle)`
  display: block;
  font-size: 5rem;
  color: #21e786;
`;
