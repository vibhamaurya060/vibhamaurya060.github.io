import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>Got a project? Reach out and let's work together on something exciting. Big or <br /> small. Mobile or web.</p>
          <p><b>Phone No : </b> 6394522720</p>
          <p><b>Email : </b> vibhamaurya@gmail.com</p>
          <a className='git' href="https://github.com/vibhamaurya060">GitHub</a>
          <br /> <br />
          <a className='linkedin' href="https://www.linkedin.com/in/vibhamaurya060/">LinkedIn</a>
        </div>
        <div className="contact-right">
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder='Your Name' />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder='Your Email'/>
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" required placeholder='Subject' />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" required placeholder='Your Message'></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
