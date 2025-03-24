import React from "react";
import "./navbar.css";
import logo from "../assets/images/vrisso_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <ul className="nav-menu ${menuOpen ? 'active' : ''}">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Let's Connect</div>
    </div>
  );
};

export default Navbar;
