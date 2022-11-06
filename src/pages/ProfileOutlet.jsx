import React from "react";
import Footer from "../components/footer";
import Profile from "../components/profile/index";
import { Outlet } from "react-router-dom";

const ProfileOutlet = () => {
  return (
    <>
      <Profile />
      <Footer />
      <Outlet />
    </>
  );
};

export default ProfileOutlet;
