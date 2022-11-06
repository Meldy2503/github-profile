import React, { useState, useEffect } from "react";
import {
  Container,
  Contents,
  RepoContainer,
  RepoCard,
  Links,
} from "./singleRepoStyle";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Icon from "../../assets/star.svg";
import { FaGithub } from "react-icons/fa";

const SingleRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getSingleRepository = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/repositories/${params.repoId}`
        );
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleRepository();
  }, [params]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <img src={Icon} alt="icon" />
      <Contents>
        <RepoContainer>
          {repos && (
            <RepoCard>
              <div>
                <h2>
                  Name: <span>{repos.name}</span>
                </h2>
                <p>
                  Size: <span>{repos.size}</span>{" "}
                </p>
                <p>
                  Watchers: <span>{repos.watchers}</span>
                </p>
                <p>
                  Forks Count: <span>{repos.forks_count}</span>
                </p>
                <p>
                  Subscribers Count: <span>{repos.subscribers_count}</span>{" "}
                </p>
                <p>
                  Language: <span>{repos.language}</span>
                </p>
                <p>
                  Default Branch: <span>{repos.default_branch}</span>
                </p>
                <p>
                  Date Created:{" "}
                  <span>{`${repos.created_at}`.slice(0, 10)}</span>
                </p>
              </div>
              <Links>
                <a href={`${repos.html_url}`} target="_blank">
                  <FaGithub />
                  VIEW REPO
                </a>
                <Link to="/profile/all-repo">BACK</Link>
              </Links>
            </RepoCard>
          )}
        </RepoContainer>
      </Contents>
    </Container>
  );
};

export default SingleRepo;
