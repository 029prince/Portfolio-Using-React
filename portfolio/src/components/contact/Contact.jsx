import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c7ab1912-dc7d-4a77-8f59-48a94bf4cc86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      console.log("Error", data);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects...</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>snyderprince@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91-7526843629</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>GTB Nagar, Ludhiana, Punjab, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter Your Name' required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter Your Email' required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
          {result && <p style={{ marginTop: '10px', color: 'green' }}>{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
