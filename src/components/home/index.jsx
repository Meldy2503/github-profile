import React from "react";
import { Container, Contents, Row, Left, Right } from "./homeStyle";
import bgImg from "../../assets/home-img.png";

const Home = () => {
  return (
    <Container>
      <img src={bgImg} alt="home image" />
      <Contents>
        <Row>
          <Left>
            <h1>home</h1>
          </Left>
          {/* <Right> */}
          {/* </Right> */}
        </Row>
      </Contents>
    </Container>
  );
};

export default Home;
