import React from "react";
import "../components/services.css";
import Services_Data from "../assets/services_data.js"; // Import the services data
import arrow_icon from "../assets/images/right_arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
