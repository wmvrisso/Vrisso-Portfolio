import React from "react";
import "../components/mywork.css";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/images/right_arrow_icon.svg";
import github_icon from "../assets/images/github-icon.svg"; // GitHub icon

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_img} alt="Project" className="project-image" />
              <a
                href={work.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              ></a>
              <a
                href={work.deployed_link}
                target="_blank"
                rel="noopener noreferrer"
                className="deployed-link"
              >
                {work.w_name} {/* Display project name dynamically */}
              </a>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>GitHub Projects</p>
        <img src={github_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
