import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    {/* Top Section */}
    <div className="footer__top">
      <div className="footer__brand">
        <img src="/logo.png" alt="Agile Solutions Logo" className="footer__logo" />
      </div>
      <nav className="footer__nav">
        <a href="/about" className="footer__nav-link">About Us</a>
        <a href="/contact" className="footer__nav-link">Contact Us</a>
        <a href="/trainer" className="footer__nav-link">Become a Trainer</a>
        <a href="/terms" className="footer__nav-link">Terms & Conditions</a>
      </nav>
    </div>
    {/* Divider */}
    <div className="footer__divider" />
    {/* Bottom Section */}
    <div className="footer__bottom">
      <div className="footer__social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookSquare className="footer__icon facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="footer__icon linkedin" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className="footer__icon youtube" />
        </a>
      </div>
      <div className="footer__copyright">
        © 2025 Agile Solutions Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
