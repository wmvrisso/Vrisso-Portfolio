import React from "react";
import "../components/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>

      <div className="about-skills">
        {/* Column 1 - Front-End */}
        <div className="skills-column">
          <h2 className="skills-column-title">Front-End</h2>
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
            <p>Tailwind CSS</p>
            <hr className="skill-bar tailwind" />
          </div>
          <div className="about-skill">
            <p>TypeScript</p>
            <hr className="skill-bar ts" />
          </div>
        </div>

        {/* Column 2 - Back-End */}
        <div className="skills-column">
          <h2 className="skills-column-title">Back-End</h2>
          <div className="about-skill">
            <p>Node.js</p>
            <hr className="skill-bar node" />
          </div>
          <div className="about-skill">
            <p>Express.js</p>
            <hr className="skill-bar express" />
          </div>
          <div className="about-skill">
            <p>PostgreSQL</p>
            <hr className="skill-bar postgres" />
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <hr className="skill-bar mongo" />
          </div>
          <div className="about-skill">
            <p>Git</p>
            <hr className="skill-bar git" />
          </div>
        </div>

        {/* Column 3 - Management */}
        <div className="skills-column">
          <h2 className="skills-column-title">Management</h2>
          <div className="about-skill">
            <p>Agile Workflow</p>
            <hr className="skill-bar agile" />
          </div>
          <div className="about-skill">
            <p>Scrum</p>
            <hr className="skill-bar scrum" />
          </div>
          <div className="about-skill">
            <p>Team Leadership</p>
            <hr className="skill-bar leadership" />
          </div>
          <div className="about-skill">
            <p>Project Planning</p>
            <hr className="skill-bar planning" />
          </div>
          <div className="about-skill">
            <p>Communication</p>
            <hr className="skill-bar communication" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
