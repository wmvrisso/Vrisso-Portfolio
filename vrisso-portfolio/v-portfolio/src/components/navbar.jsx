import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/v-gradient-logo-bold.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/images/open-menu.svg";
import menu_close from "../assets/images/x-menu.svg";

const Navbar = () => {
  const [menuOpen, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src={logo} alt="" />
      </a>

      {/* Mobile Menu Open Icon (only when menu is closed) */}
      {!menuOpen && (
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={() => setMenu(true)}
        />
      )}

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {/* Mobile Menu Close Icon (only when menu is open) */}
        {menuOpen && (
          <img
            src={menu_close}
            alt="Close Menu"
            className="nav-mob-close"
            onClick={() => setMenu(false)}
          />
        )}

        {/* Your menu items */}
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu(false)}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu(false)}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu(false)}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu(false)}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu(false)}>Contact</p>
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
