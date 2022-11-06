import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";
import Icon from "../../assets/star.svg";
import {
  Container,
  Contents,
  RepoCard,
  Repos,
  Links,
  BtnWrapper,
  Btn,
  Pg,
  Nos,
} from "./allReposStyle";

const AllRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const getAllRepositories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.github.com/users/Meldy2503/repos"
        );
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAllRepositories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const PER_PAGE = 6;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <Container>
      <img src={Icon} alt="icon" />
      <img src={Icon} alt="icon" />
      <img src={Icon} alt="icon" />
      <img src={Icon} alt="icon" />

      <Contents>
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="Checkout my profile on github" />
          <link rel="canonical" href="/profile/my-profile" />
        </Helmet>
        <h1>My Repositories</h1>

        {/* list of repositories */}
        <Repos ref={ref}>
          <div>
            {repos?.slice(skip, skip + PER_PAGE).map((repo) => (
              <RepoCard key={repo.id}>
                <p>{repo.name}</p>
                <Links to={`/profile/${repo.id}`}>view details</Links>
              </RepoCard>
            ))}
          </div>
        </Repos>

        {/* pagination */}
        <Pg>
          Pages: {page} of {pages}
        </Pg>

        <BtnWrapper>
          <Btn
            disabled={page <= 1}
            onClick={() => {
              setPage((prev) => prev - 1);
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            prev
          </Btn>
          <span>
            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (repo) => (
                <Nos
                  key={repo}
                  onClick={() => {
                    setPage(repo);
                    ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {repo}
                </Nos>
              )
            )}
          </span>
          <Btn
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => {
              setPage((prev) => prev + 1);
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            next
          </Btn>
        </BtnWrapper>
      </Contents>
    </Container>
  );
};

export default AllRepos;
