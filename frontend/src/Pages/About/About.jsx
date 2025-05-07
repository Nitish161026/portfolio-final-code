import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import nky3 from "../../assets/Nitish.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img
          src={nky3}
          alt="Your Name"
          className="profile-pic"
        />
        <h1 className="about-title">Hi, I'm Nitish Kumar Yadav 👋</h1>
        <p className="about-desc">
          I'm a passionate <span>Full Stack Developer</span> who loves building
          elegant and performant web apps with React, Node.js, and beyond. I
          also enjoy learning new tech and solving real-world problems with
          clean code ✨.
          <br />
          Apart from developer roles I also have a keen interest in roles such as <span>Business Development Executive </span> and <span> Data Analytics</span> and I am always eager to learn more about them ✨.
          <br />
          Apart from these works , I love to explore new places, read books, and play
          video games. I believe in continuous learning and always strive to
          my best in everything I do ✨.
          <br />
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/Nitish161026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/nitish-kumar-yadav-962324355"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:shivansh9771@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
