import React, { useState } from "react";
import "../components/contact.css";
import mail_icon from "../assets/images/mail_icon2.svg";
import location_icon from "../assets/images/location_icon.svg";
import phone_icon from "../assets/images/phone_icon.svg";

const Contact = () => {
  // State to hold error messages for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle the blur event and validate the fields
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required.",
      }));
    } else if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Connect</h1>
          <p>
            I'm currently looking for new opportunities to make honest,
            hard-working contributions to innovative projects. If you have a
            project that you want to discuss or just want to connect, feel free
            to reach out. Cheers.
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
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onBlur={handleBlur} // Trigger validation on blur
          />
          {errors.name && <p className="error-message">{errors.name}</p>}{" "}
          {/* Error message for name */}
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onBlur={handleBlur} // Trigger validation on blur
          />
          {errors.email && <p className="error-message">{errors.email}</p>}{" "}
          {/* Error message for email */}
          <label htmlFor="message">Write your message here:</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            onBlur={handleBlur} // Trigger validation on blur
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}{" "}
          {/* Error message for message */}
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
