import { createGlobalStyle } from "styled-components";
// import bgImg from "./src/assets/background-img.jpg";
// import bgImg from "../assets/background-img.jpg";
export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100vh;
   


@media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {

        font-size: 60%;

}
   
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {    
        font-size: 58%; 
    }

  }

  body {
   font-size: 1.6rem;
   /* background-color: #0f0b29; */
   background-color: #070522;
   /* background-color: #06053d; */
   /* font-family: 'Mulish', sans-serif; */
   font-family: 'Work Sans', sans-serif;
  

  
 
  
}

`;
