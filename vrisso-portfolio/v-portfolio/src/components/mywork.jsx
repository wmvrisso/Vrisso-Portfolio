import React, { useRef } from "react";
import "../components/mywork.css";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/images/right_arrow_icon.svg";
import github_icon from "../assets/images/github-icon.svg"; // GitHub icon

const chunkArray = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );

const MyWork = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 460; // Approx. image width + gap

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>

      {/* Carousel arrows */}
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => scroll("left")}>
          ←
        </button>
        <button className="carousel-arrow" onClick={() => scroll("right")}>
          →
        </button>
      </div>

      <div className="mywork-container" ref={carouselRef}>
        {mywork_data.map((work, index) => (
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
              {work.w_name}
            </a>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>GitHub Projects</p>
        <img src={github_icon} alt="GitHub" />
      </div>
    </div>
  );
};

export default MyWork;
