// src/components/ArrowDown.js
import React, { useState, useEffect } from 'react';
import './ArrowDown.css';

const ArrowDown = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;
    setIsAtBottom(scrollPosition >= bottomPosition - 1); // -1 لضبط الفارق الطفيف
  };

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      });
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
