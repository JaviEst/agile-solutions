import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contactusbutton.css';

const ContactButton = ({ children = 'Contact Us' }) => {
    const navigate = useNavigate();
    return (
      <button className="contact-button" onClick={() => navigate('/') }>
        {children}
      </button>
    );
  };

export default ContactButton; 