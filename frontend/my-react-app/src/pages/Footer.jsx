// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>CodeMatch</h3>
          <p>Your go-to platform to find coding and project partners.</p>
          <p>&copy; {new Date().getFullYear()} CodeMatch. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Stay Connected</h4>
          <form className="footer-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="3" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
