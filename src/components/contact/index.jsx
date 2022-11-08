import React, { useState } from "react";
import { Container, Contents, Form, Btn } from "./contactStyle";
import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/star.svg";
import { motion } from "framer-motion";
import Alert from "../alert/Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 6000);
  };

  return (
    <Container>
      <img src={bgImg} alt="pattern" />
      <img src={bgImg} alt="pattern" />
      <img src={bgImg} alt="pattern" />
      <img src={bgImg} alt="pattern" />
      <Contents>
        <Helmet>
          <title>Contact Me</title>
          <meta name="description" content="Contact Me" />
          <link rel="canonical" href="/contact-me" />
        </Helmet>
        <motion.h2
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Get In Touch With Me
        </motion.h2>

        <Form
          onSubmit={handleSubmit}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Enter your name"
              required
            />
          </label>
          <br />
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              required
            />
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            value={formData.message}
            onChange={handleChange}
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
          <br />
          <Btn type="submit">SEND MESSAGE</Btn>
        </Form>
        {showAlert && <Alert />}
      </Contents>
    </Container>
  );
};

export default Contact;
