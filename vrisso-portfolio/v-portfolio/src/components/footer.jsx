import React from "react";
import "../components/footer.css";
import footer_logo from "../assets/images/v-gradient-logo-bold.png"; // Placeholder for the footer logo
import github_icon from "../assets/images/github-icon.svg"; // GitHub icon
import linkedin_icon from "../assets/images/linkedin-icon.svg"; // LinkedIn icon
import discord_icon from "../assets/images/discord-icon.svg"; // Discord icon

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <p></p>
        </div>
        <div className="footer-socials">
          {/* Discord Icon */}
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <img src={discord_icon} alt="Discord" className="social-icon" />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={github_icon} alt="GitHub" className="social-icon" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin_icon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Will Vrisso. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
