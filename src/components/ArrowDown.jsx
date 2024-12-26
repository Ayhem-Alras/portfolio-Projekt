// src/components/ArrowDown.js
import  { useState, useEffect } from 'react';
import './ArrowDown.css';

const sections = ['about-me', 'projects', 'skills', 'contact']; // IDs of the sections to scroll through

const ArrowDown = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;
    setIsAtBottom(scrollPosition >= bottomPosition - 1);
  };

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setCurrentSection(0);
    } else {
      const nextSection = currentSection + 1;
      const sectionElement = document.getElementById(sections[nextSection]);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(nextSection);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="arrow-container" onClick={handleClick}>
      <div className={`arrow ${isAtBottom ? 'up' : 'down'}`}></div>
    </div>
  );
};

export default ArrowDown;
