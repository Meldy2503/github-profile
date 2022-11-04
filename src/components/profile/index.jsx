import { useEffect, useState, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loading from "../Loading";
import {
  Container,
  Contents,
  ProfileContents,
  ProfileCard,
  Text,
  RepoCard,
  Repos,
} from "./profileStyle";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const apiCall = setTimeout(() => {
      axios
        .get("https://api.github.com/users/Meldy2503")
        .then((res) => setData(res.data));
      axios
        .get("https://api.github.com/users/Meldy2503/repos")
        .then((res) => setRepos(res.data));
    }, 1500);
    return () => clearTimeout(apiCall);
  }, []);

  const PER_PAGE = 6;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <Container>
      <Contents>
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="Checkout my profile on github" />
          <link rel="canonical" href="/profile/my-profile" />
        </Helmet>
        <h1>My GitHub Profile</h1>
        <ProfileContents>
          {data.length !== 0 ? (
            <>
              <ProfileCard>
                <img alt="avatar" src={data.avatar_url} />
                <Text>
                  <h1>{data.name}</h1>
                  <div>
                    <a href="https://github.com/Meldy2503?tab=repositories">
                      <b>Repos: {data.public_repos}</b>
                    </a>

                    <a href="https://github.com/Meldy2503?tab=followers">
                      <b>Followers: {data.followers}</b>
                    </a>

                    <a href="https://github.com/Meldy2503?tab=following">
                      <b>Following: {data.following}</b>
                    </a>
                  </div>

                  <p>
                    {" "}
                    <GoLocation />
                    {data.location}
                  </p>

                  <a href={`${data.blog}`}>
                    {" "}
                    <BsLinkedin className="icon" />
                    {data.blog}
                  </a>
                </Text>
              </ProfileCard>
              {/* list of repositories */}
              <Repos ref={ref}>
                <div>
                  {repos?.slice(skip, skip + PER_PAGE).map((repo) => (
                    <RepoCard key={repo.id}>
                      <p>{repo.name}</p>
                      <Link to={`/profile/${repo.id}`}>view repo</Link>
                    </RepoCard>
                  ))}
                </div>
              </Repos>
              <div>
                Pages: {page} of {pages}
              </div>

              <button
                disabled={page <= 1}
                onClick={() => {
                  setPage((prev) => prev - 1);
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                prev
              </button>

              {Array.from({ length: pages }, (value, index) => index + 1).map(
                (repo) => (
                  <div
                    key={repo}
                    onClick={() => {
                      setPage(repo);
                      ref.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {repo}
                  </div>
                )
              )}
              <button
                disabled={page >= pages}
                aria-disabled={page >= pages}
                onClick={() => {
                  setPage((prev) => prev + 1);
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                next
              </button>
            </>
          ) : (
            <Loading />
          )}
        </ProfileContents>
      </Contents>
    </Container>
  );
};

export default MyProfile;
