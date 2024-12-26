// src/components/Footer.jsx

import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa'; // استيراد أيقونات GitHub و Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/Ayhem-Alras"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.instagram.com/ayham.zz/"
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
