import React from "react";
import "../components/contact.css";
import mail_icon from "../assets/images/mail_icon2.svg";
import location_icon from "../assets/images/location_icon.svg";
import phone_icon from "../assets/images/phone_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f8bd14be-d881-4de6-b352-4636d4109c03");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
    }
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
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label htmlFor="message">Write your message here:</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
