import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Header, Nav, Ul, MenuIcon, LogoLink } from "./navbarStyle";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenuLink = () => setIsMenuOpen(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header>
      <Nav>
        <LogoLink to="/">
          <h1>
            G<span>H</span>F
          </h1>
        </LogoLink>
        <Ul isMenuOpen={isMenuOpen}>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              end
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/profile"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              My profile
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/search-profile"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              Search Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/error-test"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              Error Test
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/contact-me"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              Contact Me
            </NavLink>
          </li>
        </Ul>
        <MenuIcon onClick={handleClick}>
          <Hamburger
            color="#fff"
            onClick={handleClick}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={25}
          />
        </MenuIcon>
      </Nav>
    </Header>
  );
};

export default Navbar;
