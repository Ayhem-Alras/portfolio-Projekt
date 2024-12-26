// src/components/Footer.jsx

import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa'; // استيراد أيقونات GitHub و Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/YourUsername" // ضع رابط GitHub الخاص بك
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://instagram.com/YourUsername" // ضع رابط Instagram الخاص بك
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <p></p>
    </footer>
  );
};

export default Footer;
