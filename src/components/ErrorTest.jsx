import React, { useState } from "react";
import { motion } from "framer-motion";

const ErrorTest = () => {
  const [errorTest, setErrorTest] = useState(false);

  const handleErrorTest = () => {
    setErrorTest(true);
  };

  if (errorTest) {
    throw Error("");
  }

  return (
    <motion.div
      style={{
        width: "95%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
      }}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <h2>Click the button below to trigger an error</h2>
      <button
        onClick={handleErrorTest}
        style={{
          backgroundColor: "#1fd37c",
          padding: "1.3rem 2rem",
          color: "#090909",
          fontWeight: "600",
          borderRadius: "1rem",
          outline: "none",
          border: "none",
          marginTop: "1.5rem",
          fontSize: "1.7rem",
        }}
      >
        Click Me
      </button>
    </motion.div>
  );
};

export default ErrorTest;
