import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/v_gradient_logo_1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src={logo} alt="Home" />
      </a>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Let's Connect</div>
    </nav>
  );
};

export default Navbar;
