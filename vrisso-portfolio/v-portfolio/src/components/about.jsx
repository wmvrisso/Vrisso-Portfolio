import React from "react";
import "../components/about.css";
import full_profile_img from "../assets/images/vp_profile.png";

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
        </div>
        <div className="about-right">
          <div className="about-img">
            <img src={full_profile_img} alt="" />
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15 yrs.</h1>
          <p>
            Managment
            <br />
            Experience
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10 yrs.</h1>
          <p>
            Sales & <br />
            Marketing
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5 yrs.</h1>
          <p>
            Mechanical
            <br />
            Skills
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5 yrs.</h1>
          <p>IT Support</p>
        </div>
      </div>
    </div>
  );
};
export default About;
