import React from "react";
import "../components/contact.css";
import mail_icon from "../assets/images/mail_icon2.svg";
import location_icon from "../assets/images/location_icon.svg";
import phone_icon from "../assets/images/phone_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently looking for new opportunities. If you have a project
            that you want to discuss or just want to connect, feel free to reach
            out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>wmvrisso@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" /> <p>915.346.9771</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>OR, USA</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
          <label htmlFor="name">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
