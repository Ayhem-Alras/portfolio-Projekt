// src/components/Experience.js

import './Experience.css'; 

const experiences = [
  { title: 'HTML', image: '/images/pngegg (6).png', description: 'Erfahrung mit HTML' },
  { title: 'CSS', image: '/images/pngegg (5).png', description: 'Erfahrung mit CSS' },
  { title: 'JavaScript', image: '/images/pngegg (4).png', description: 'Erfahrung mit JavaScript' },
  { title: 'GitHub', image: '/images/pngegg (3).png', description: 'Erfahrung mit GitHub' },
  { title: 'React', image: '/images/pngegg (2).png', description: 'Erfahrung mit React' },
  { title: 'SCSS', image: '/images/pngegg (1).png', description: 'Erfahrung mit SCSS' },
  { title: 'MongoDB', image: '/images/1175140.webp', description: 'Erfahrung mit MongoDB' },
  { title: 'MySQL', image: '/images/mysql-1-logo-black-and-white.png', description: 'Erfahrung mit MySQL' }
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
