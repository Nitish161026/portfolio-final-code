
import React from 'react';
import './Contact.css';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="fancy-contact">
      <h1>🚀 I'm Open to Work!</h1>
      <p>Let’s collaborate, chat, or connect — I’m just one message away.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name ✍️" required />
        <input type="email" placeholder="Your Email 📧" required />
        <textarea placeholder="Your Message 💬" required></textarea>
        <button type="submit">Send Message 🚀</button>
      </form>

      <div className="social-links">
        <p>Or reach out via:</p>
        <div className="icons">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
