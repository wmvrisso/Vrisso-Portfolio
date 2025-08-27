import React from "react";
import "../components/about.css";
import full_profile_img from "../assets/images/vp_profile.png";
import resume_pdf from "../assets/files/Vrisso-Resume-25.pdf"; // Import resume
import github_icon from "../assets/images/icons8-github.svg"; // GitHub icon

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
            With 15 years of experience in Technical Management, I have built a
            strong foundation in leadership, critical thinking and
            problem-solving. In recent years, I’ve been further developing my
            skills by expanding my expertise into software development.
          </p>
          <p>
            I am a recent graduate of the University of Oregon’s Coding
            Bootcamp, gaining hands-on experience in full-stack development. By
            partnering with other like-minded developers, I've been able to
            effectively combine our efforts and strengthen our expertise. I look
            forward to joining a team where I can contribute my skills.
          </p>

          {/* === Buttons Section === */}
          <div className="about-buttons">
            {/* Replaced Connect button with My GitHub */}
            <a
              href="https://github.com/wmvrisso"
              target="_blank"
              rel="noopener noreferrer"
              className="about-connect"
            >
              <span>GitHub</span>
              <img src={github_icon} alt="GitHub" />
            </a>

            {/* Resume button remains unchanged */}
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
