import React, { useState } from "react";
import {
  Container,
  Contents,
  SearchWrapper,
  SearchResult,
  Card,
  Text,
} from "./searchProfileStyle";
import axios from "axios";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";

const SearchProfiles = () => {
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  //! SEARCH USER FUNCTION
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/search/users?q=${input}`
      );
      setUserSearch(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Contents>
        <Helmet>
          <title>Search A Profile</title>
          <meta name="description" content="Search A Profile on Github" />
          <link rel="canonical" href="/search-profile" />
        </Helmet>
        <SearchWrapper
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>GITHUB FINDER</h1>
          <p>Search for a GitHub Profile</p>
          <form>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setUserSearch([]);
              }}
              type="search"
              placeholder="Search profile"
            />
            <button onClick={onSubmitHandler}>Search</button>
          </form>
        </SearchWrapper>

        {/* USER LIST */}
        <SearchResult
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {userSearch.map((user) => {
            return (
              <Card key={user.id}>
                <img alt="avatar" src={user.avatar_url} />
                <Text>
                  <h1>{user.login}</h1>
                  <a href={user.html_url} target="_blank">
                    View Profile
                  </a>
                </Text>
              </Card>
            );
          })}
        </SearchResult>
      </Contents>
    </Container>
  );
};

export default SearchProfiles;
