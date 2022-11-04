import React, { useState } from "react";
import {
  Container,
  Contents,
  SearchWrapper,
  CardWrapper,
  Card,
  Text,
} from "./searchProfileStyle";
import axios from "axios";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";

const SearchProfiles = () => {
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState([]);
  const [loading, setLoading] = useState(false);

  //! SEARCH USER FUNCTION
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${input}`)
        .then((res) => {
          setUserSearch(res.data.items);
          setTotalItemCount(res.data);
        });
      setLoading(false);
      console.log(userSearch);
    }, 1200);
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
        <SearchWrapper>
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
        <CardWrapper>
          {userSearch.map((user) => {
            return (
              <Card key={user.id}>
                <img alt="avatar" src={user.avatar_url} />
                <Text>
                  <h1>{user.login}</h1>
                  {/* <p>{user.location}</p> */}
                  {/* <a href={`${user.blog}`}>{user.blog}</a> */}
                  <a href={user.html_url}>View Profile</a>
                </Text>
              </Card>
            );
          })}
        </CardWrapper>
      </Contents>
    </Container>
  );
};

export default SearchProfiles;
