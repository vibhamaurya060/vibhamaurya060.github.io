import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Phone:</strong> 6394522720</p>
          <p><strong>Email:</strong> vibhamaurya@gmail.com</p>
          <div className="social-links">
            <a href="https://github.com/vibhamaurya060" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/vibhamaurya060/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
