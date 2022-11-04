import React, { useState } from "react";
import { Container, Contents, Form, Btn } from "./contactStyle";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <Container>
      <Contents>
        <Helmet>
          <title>Contact Me</title>
          <meta name="description" content="Contact Me" />
          <link rel="canonical" href="/contact-me" />
        </Helmet>
        <h2>Get in touch with us</h2>

        <Form>
          <label htmlFor="name">
            <input
              type="text"
              name={formData.name}
              id={formData.name}
              onChange={handleFormData}
              value={formData.value}
              placeholder="Enter your name"
              required
            />
          </label>
          <br />
          <label htmlFor="email">
            <input
              type="email"
              name={formData.email}
              id={formData.email}
              onChange={handleFormData}
              value={formData.value}
              placeholder="Enter your emaIL"
              required
            />
          </label>
          <br />
          <textarea
            name={formData.message}
            id={formData.message}
            cols="30"
            value={formData.value}
            onChange={handleFormData}
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <Btn type="submit" onClick={handleSubmit}>
            SEND MESSAGE
          </Btn>
        </Form>
      </Contents>
    </Container>
  );
};

export default Contact;
