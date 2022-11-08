import React, { useEffect, useState } from "react";
import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";
import Icon from "../../assets/star.svg";
import { motion } from "framer-motion";

import {
  Container,
  Contents,
  ProfileContents,
  ProfileCard,
  Follows,
  Text,
  Links,
  RepoLink,
  GitLink,
} from "./profileStyle";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfileInformation = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.github.com/users/Meldy2503"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileInformation();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <img src={Icon} alt="icon" />
      <img src={Icon} alt="icon" />
      <img src={Icon} alt="icon" />
      <Contents>
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="Checkout my profile on github" />
          <link rel="canonical" href="/profile" />
        </Helmet>

        <motion.h1
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          My GitHub Profile
        </motion.h1>
        <ProfileContents
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {data && (
            <ProfileCard>
              <img alt="avatar" src={data.avatar_url} />
              <Text>
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
                <Follows>
                  <a href="https://github.com/Meldy2503?tab=repositories">
                    <b>Repos: {data.public_repos}</b>
                  </a>
                  <a href="https://github.com/Meldy2503?tab=following">
                    <b>Following: {data.following}</b>
                  </a>
                  <a href="https://github.com/Meldy2503?tab=followers">
                    <b>Followers: {data.followers}</b>
                  </a>
                </Follows>

                <p>
                  <GoLocation />
                  {data.location}
                </p>
                <span>
                  <BsGlobe />
                  <a href={`${data.blog}`} target="_blank">
                    Personal Website
                  </a>
                </span>
                <span>
                  <BsLinkedin />
                  <a
                    href="https://www.linkedin.com/in/emelder-okafor-67b22122b/"
                    target="_blank"
                  >
                    Linkedin Profile
                  </a>
                </span>
                <Links>
                  <GitLink href={`${data.html_url}`} target="_blank">
                    <FaGithub /> View Profile
                  </GitLink>
                  <RepoLink to="/profile/all-repo">
                    View All Repositories
                  </RepoLink>
                </Links>
              </Text>
            </ProfileCard>
          )}
        </ProfileContents>
      </Contents>
    </Container>
  );
};

export default MyProfile;
