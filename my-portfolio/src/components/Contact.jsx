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
          <p className='phoneEmail'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M799.13-100.78q-128.45 0-253.81-55.91-125.36-55.92-228.76-159.03-103.39-103.11-159.3-228.66-55.91-125.55-55.91-254.19 0-25.99 17.16-43.32 17.17-17.33 42.92-17.33h161.44q27 0 44.78 14.31 17.79 14.3 23.18 39.17l25.43 128.13q4.26 24.48-.72 41.7-4.97 17.21-19.76 30.3l-100.39 93.48q17.74 30.78 41.85 60.76 24.11 29.98 54.85 59.72 28.17 28.17 56.52 50.71 28.35 22.55 58.43 40.03L605-397.18q15.22-14.65 35.37-20.28 20.15-5.63 42.63-1.37l122.74 26.31q25.87 7.39 39.67 23.82 13.81 16.44 13.81 41.31v165.96q0 25.99-17.37 43.32-17.37 17.33-42.72 17.33ZM244.39-609.04l65.44-60.92-15.87-83.26h-85.05q3.87 37.05 12 73.06 8.13 36.01 23.48 71.12Zm360.26 360.82q35.61 15.31 73 24.74 37.39 9.44 75.57 13.57v-85.18l-82.7-17.87-65.87 64.74ZM244.39-609.04Zm360.26 360.82Z"/></svg> : 6394522720</p>
        
          <p className='phoneEmail'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M166.78-140.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-466.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h626.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v466.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H166.78ZM480-415.69l-313.22-200v368.91h626.44v-368.91L480-415.69Zm0-97.53 313.22-200H166.78l313.22 200ZM166.78-615.69v-97.53V-246.78v-368.91Z"/></svg> : vibhamaurya@gmail.com</p>
          <a className='git' href="https://github.com/vibhamaurya060"><img style={{width:"22px", color:"orange"}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /></a>
          <br /> <br />
          <a className='linkedin' href="https://www.linkedin.com/in/vibhamaurya060/"><img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
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
