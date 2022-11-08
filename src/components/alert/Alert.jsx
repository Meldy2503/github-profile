import React from "react";
import { AlertStyle, Tick } from "./alertStyle";

const Alert = () => {
  return (
    <AlertStyle>
      <p>
        <Tick />
        Thanks for reaching out, I will get back to you soon!!
      </p>
    </AlertStyle>
  );
};

export default Alert;
