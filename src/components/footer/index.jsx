import React from "react";
import { Container, Contents } from "./footerStyle";

const Footer = () => {
  return (
    <Container>
      <Contents>
        <p>
          Designed and built by <span>Emelder Okafor</span>
        </p>
        <p>&copy; altSchool Africa 2022</p>
      </Contents>
    </Container>
  );
};

export default Footer;
