import React from "react";
import "../components/hero.css";
import profile_img from "../assets/images/profile_will.png";
import resume_pdf from "../assets/files/Will-Vrisso-Resume.pdf"; // Import the resume file
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>Will Vrisso |</span> Full-stack Developer Graduate
      </h1>
      <p>
        Based in Oregon, USA, I am seeking an apprenticeship opportunity in
        Audio Development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume_pdf} download="Will_Vrisso_Resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
