import React from "react";
import "../components/skills.css";

const skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr className="skill-bar html-css" />
        </div>
        <div className="about-skill">
          <p>React JS</p>
          <hr className="skill-bar react" />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          <hr className="skill-bar js" />
        </div>
        <div className="about-skill">
          <p>JUCE</p>
          <hr className="skill-bar next" />
        </div>
        <div className="about-skill">
          <p>C++</p>
          <hr className="skill-bar next" />
        </div>
      </div>
    </div>
  );
};

export default skills;
