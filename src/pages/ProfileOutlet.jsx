import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, NavLink } from "react-router-dom";

const ProfileOutlet = () => {
  return (
    <div style={{ marginTop: "20rem" }}>
      <Helmet>
        <title>My Profile</title>
        <meta name="description" content="Checkout my profile on github" />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <NavLink to="/profile/my-profile"> View My Profile </NavLink>

      <h1>hi....</h1>
      <Outlet />
    </div>
  );
};

export default ProfileOutlet;
