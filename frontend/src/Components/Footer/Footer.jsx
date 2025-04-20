import React from "react";
import "./Footer.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>NKY Portfolio</h2>
          <p>Crafting clean & modern web experiences with style.</p>
        </div>

        <div className="footer-center">
          <h3>Connect</h3>
          <div className="social-icons">
            <a
              href="https://github.com/Nitish161026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </a>
            <a
              href="www.linkedin.com/in/nitish-kumar-yadav-962324355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nitishkumaryadav1698@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk />
            </a>
            <a
              href="https://www.instagram.com/108_n_k_y_45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>Phone no.: 8651179672</p>
          <p>Location: Madhubani , Bihar , India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NKY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
