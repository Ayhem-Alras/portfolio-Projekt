import React from 'react';
import './NavigationDots.css';

const sections = [
  { id: 'start', label: 'Start' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const NavigationDots = () => {
  return (
    <div className="navigation-dots">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="dot-container">
          <div className="dot">
            <span className="inner-dot"></span>
          </div>
          <span className="label">{section.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
