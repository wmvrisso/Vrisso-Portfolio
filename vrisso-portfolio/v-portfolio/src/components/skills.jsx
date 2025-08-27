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
            <div className="skill-bar">
              <div className="skill-progress html-css"></div>
            </div>
            <span className="skill-percent">90%</span>
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <div className="skill-bar">
              <div className="skill-progress react"></div>
            </div>
            <span className="skill-percent">90%</span>
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <div className="skill-bar">
              <div className="skill-progress js"></div>
            </div>
            <span className="skill-percent">80%</span>
          </div>
          <div className="about-skill">
            <p>C++</p>
            <div className="skill-bar">
              <div className="skill-progress cpp"></div>
            </div>
            <span className="skill-percent">50%</span>
          </div>
          <div className="about-skill">
            <p>TypeScript</p>
            <div className="skill-bar">
              <div className="skill-progress ts"></div>
            </div>
            <span className="skill-percent">50%</span>
          </div>
        </div>

        {/* Column 2 - Back-End */}
        <div className="skills-column">
          <h2 className="skills-column-title">Back-End</h2>
          <div className="about-skill">
            <p>Node.js</p>
            <div className="skill-bar">
              <div className="skill-progress node"></div>
            </div>
            <span className="skill-percent">80%</span>
          </div>
          <div className="about-skill">
            <p>Express.js</p>
            <div className="skill-bar">
              <div className="skill-progress express"></div>
            </div>
            <span className="skill-percent">85%</span>
          </div>
          <div className="about-skill">
            <p>PostgreSQL</p>
            <div className="skill-bar">
              <div className="skill-progress postgres"></div>
            </div>
            <span className="skill-percent">85%</span>
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <div className="skill-bar">
              <div className="skill-progress mongo"></div>
            </div>
            <span className="skill-percent">70%</span>
          </div>
          <div className="about-skill">
            <p>Git</p>
            <div className="skill-bar">
              <div className="skill-progress git"></div>
            </div>
            <span className="skill-percent">85%</span>
          </div>
        </div>

        {/* Column 3 - Management */}
        <div className="skills-column">
          <h2 className="skills-column-title">Management</h2>
          <div className="about-skill">
            <p>Agile Workflow</p>
            <div className="skill-bar">
              <div className="skill-progress agile"></div>
            </div>
            <span className="skill-percent">90%</span>
          </div>
          <div className="about-skill">
            <p>Sales & Marketing</p>
            <div className="skill-bar">
              <div className="skill-progress sales"></div>
            </div>
            <span className="skill-percent">98%</span>
          </div>
          <div className="about-skill">
            <p>Budgeting</p>
            <div className="skill-bar">
              <div className="skill-progress budgeting"></div>
            </div>
            <span className="skill-percent">90%</span>
          </div>
          <div className="about-skill">
            <p>Project Planning</p>
            <div className="skill-bar">
              <div className="skill-progress planning"></div>
            </div>
            <span className="skill-percent">98%</span>
          </div>
          <div className="about-skill">
            <p>Communication</p>
            <div className="skill-bar">
              <div className="skill-progress communication"></div>
            </div>
            <span className="skill-percent">95%</span>
          </div>
        </div>
      </div>

      {/* Additional Skills Section */}
      <div className="additional-skills">
        <h2 className="skills-column-title">Additional Skills</h2>
        <div className="skills-bubbles">
          <span className="skill-bubble">Figma</span>
          <span className="skill-bubble">MS365</span>
          <span className="skill-bubble">Power BI</span>
          <span className="skill-bubble">SolidWorks</span>
          <span className="skill-bubble">JUCE</span>
          <span className="skill-bubble">CI/CD</span>
          <span className="skill-bubble">Web API's</span>
          <span className="skill-bubble">SEO Basics</span>
          <span className="skill-bubble">Deployment</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
