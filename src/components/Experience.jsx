// src/components/Experience.js
import React from 'react';
import './Experience.css'; 

const experiences = [
  { title: 'HTML', image: '/public/images/html5.jpg', description: 'Erfahrung mit HTML' },
  { title: 'CSS', image: '/public/images/wp-advanced-css-techniques.jpg', description: 'Erfahrung mit CSS' },
  { title: 'JavaScript', image: '/public/images/javascript-series.jpg', description: 'Erfahrung mit JavaScript' },
  { title: 'GitHub', image: '/public/images/2022-08-18-GitHub.jpg', description: 'Erfahrung mit GitHub' },
  { title: 'React', image: '/public/images/React_Native_Logo.png', description: 'Erfahrung mit React' }, // إضافة React
  { title: 'SCSS', image: '/public/images/1_VMM3yJ94Rydzn96y3Xit7Q.jpg', description: 'Erfahrung mit SCSS' }   // إضافة SCSS
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Skills</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="image-container">
              <img src={experience.image} alt={experience.title} className="experience-image" />
            </div>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
