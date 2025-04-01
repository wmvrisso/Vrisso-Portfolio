import React from "react";
import "../components/about.css";
import full_profile_img from "../assets/images/vp_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={full_profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              With 15 years of experience in Technical Management, I have built
              a strong foundation in leadership and problem-solving. In recent
              years, I’ve embraced a new challenge—expanding my expertise into
              audio development.
            </p>
            <p>
              I am a recent graduate of the University of Oregon’s Coding
              Bootcamp, where I gained hands-on experience in full-stack web
              development. My goal is to apply my skills in a real-world setting
              through an internship, with the ambition of growing into a junior
              developer role and contributing to innovative projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "400px" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "370px" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "370px" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "300px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};
export default About;
