import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Handlers for hover
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  // Handler for click on TRAINING
  const handleTrainingClick = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    navigate("/training");
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo-section" style={{ textDecoration: 'none' }}>
        <img src="/logo.png" alt="Agile Solutions Logo" className="header__logo-image" />
      </Link>

      {/* Navigation Section */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/assessment" className="header__nav-link">ASSESSMENT</Link>
          </li>
          <li
            className="header__nav-item header__nav-item--dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="header__nav-link header__nav-link--dropdown"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={handleTrainingClick}
              type="button"
              tabIndex={0}
            >
              TRAINING
              <svg className="header__dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                <Link
                  to="/training/upcoming-courses"
                  className="header__dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  Upcoming Courses
                </Link>
                <Link
                  to="/training/corporate"
                  className="header__dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  Corporate
                </Link>
              </div>
            )}
          </li>
          <li className="header__nav-item">
            <Link to="/coaching" className="header__nav-link">COACHING</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/resources" className="header__nav-link">RESOURCES</Link>
          </li>
          <li className="header__nav-item">
            <button className="header__courses-btn">
              <span className="header__courses-btn-text">View Courses</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Actions Section */}
      <div className="header__actions">
        <a href="#" className="header__social-link header__social-link--twitter" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="header__social-link header__social-link--linkedin" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="header__social-link header__social-link--facebook" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
