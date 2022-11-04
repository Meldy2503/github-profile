import React, { useState, useEffect } from "react";
import {
  Container,
  Contents,
  RepoContainer,
  RepoCard,
} from "./singleRepoStyle";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { data, price } from "./data";

const SingleRepo = () => {
  const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const apiCall = setTimeout(() => {
      // setLoading(true);
      axios
        .get(`https://api.github.com/repositories/${params.profileId}`)
        .then((res) => setRepos(res.data));
      // setLoading(false);
    }, 1500);
    return () => clearTimeout(apiCall);
  }, [params]);

  // return (
  //   <>
  //     {loading ? (
  //       <Loading />
  //     ) : (
  //       <RepoContainer>
  //         {repos && (
  //           <div>
  //             <p>Name: {repos.name}</p>
  //             <p>Language: {repos.language}</p>
  //             <p>Fork Count: {repos.forks}</p>

  return (
    <Container>
      <Contents>
        <RepoContainer>
          {repos && (
            <div>
              <RepoCard>
                <p>Name: {repos.name}</p>
                <p>Language: {repos.language}</p>
                <p>Fork Count: {repos.forks}</p>
              </RepoCard>
            </div>
          )}
        </RepoContainer>
        <Link to="/profile/my-profile">back</Link>
      </Contents>
    </Container>
  );
};

export default SingleRepo;
