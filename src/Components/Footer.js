// src/Footer.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Excellence Art Gallery. All rights reserved.</p>
      <p>
        Follow us on
        <a
          href="https://www.instagram.com/__thor__finn__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="www.linkedin.com/in/harshil-patel-7121442bb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.reddit.com/user/Quiet-Week-9005/" target="_blank" rel="noopener noreferrer">
          <FaReddit />
        </a>
      </p>
    </div>
  );
}

export default Footer;
