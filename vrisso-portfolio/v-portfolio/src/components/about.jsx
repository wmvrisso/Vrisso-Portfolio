import React from "react";
import "../components/about.css";
import full_profile_img from "../assets/images/vp_profile.png";
import resume_pdf from "../assets/files/Vrisso-Resume-25.pdf"; // Import resume
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>
          <span>Will Vrisso |</span> Full-stack Developer
        </h1>
        <p>Based in Oregon, USA.</p>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <p>
            With 15 years of experience in Hospitality Management, I have built
            a strong foundation in leadership, critical thinking and
            problem-solving. In recent years, I’ve been further developing my
            skills by learning new technologies and I have embraced a new
            challenge—expanding my expertise into software development.
          </p>
          <p>
            I am a recent graduate of the University of Oregon’s Coding
            Bootcamp, where I gained hands-on experience in full-stack app
            development. I hope to join a team where I can leverage my skills
            and contribute to innovative projects. Some of the transferable
            skills from my recent work include:
          </p>

          {/* === Buttons Section (moved from Hero.jsx) === */}
          <div className="about-buttons">
            <div className="about-connect">
              <AnchorLink className="btn" offset={50} href="#contact">
                Connect
              </AnchorLink>
            </div>
            <div className="about-resume">
              <a
                className="btn secondary"
                href={resume_pdf}
                download="Vrisso-Resume-25.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-img">
            <img src={full_profile_img} alt="Will Vrisso" />
          </div>
        </div>
      </div>

      <div className="about-achievements"></div>
    </div>
  );
};

export default About;
