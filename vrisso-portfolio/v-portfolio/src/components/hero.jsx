import React from "react";
import "../components/hero.css";
import profile_img from "../assets/images/profile_will.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Will Vrisso,</span> full-stack developer based in USA.
      </h1>
      <p>I am a junior full-stack audio developer based out of Portland, OR.</p>
      <div className="hero-action">
        <div className="hero-connect">Let's Connect</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
