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

const Home = () => {
  return (
    <Container>
      <Contents>
        <Text>
          <h1>Welcome to GitHub Finder</h1>
          <p>Search, Checkout and Explore Github Profiles.</p>
          <div>
            <Link to="/profile">View Profile</Link>
            <SearchLink to="/search-profile">Search Profile</SearchLink>
          </div>
        </Text>
        <Image>
          <img src={bgImg} alt="gif" />
        </Image>
      </Contents>
    </Container>
  );
};

export default Home;
