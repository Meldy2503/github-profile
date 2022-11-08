import React from "react";
import {
  Container,
  Contents,
  Text,
  Image,
  Link,
  SearchLink,
} from "./homeStyle";
import bgImg from "../../assets/gif2.gif";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container>
      <Contents>
        <Text>
          <motion.h1
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Welcome to GitHub Finder
          </motion.h1>
          <motion.p
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            Search, Checkout and Explore Github Profiles.
          </motion.p>
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <Link to="/profile">View Profile</Link>
            <SearchLink to="/search-profile">Search Profile</SearchLink>
          </motion.div>
        </Text>
        <Image>
          <img src={bgImg} alt="gif" />
        </Image>
      </Contents>
    </Container>
  );
};

export default Home;
