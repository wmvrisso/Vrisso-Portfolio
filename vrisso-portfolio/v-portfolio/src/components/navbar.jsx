import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/v_gradient_logo_1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/images/hamburger-menu-icon.svg";
import menu_close from "../assets/images/menu-close.svg";

const Navbar = () => {
  const [menuOpen, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src={logo} alt="" />
        <img src="" alt="" className="nav-mob-open" />
      </a>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <img src="" alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
