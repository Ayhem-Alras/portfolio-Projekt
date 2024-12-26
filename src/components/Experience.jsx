// src/components/Experience.js

import './Experience.css'; 

const experiences = [
  { title: 'HTML', image: '/public/images/pngegg (6).png', description: 'Erfahrung mit HTML' },
  { title: 'CSS', image: '/public/images/pngegg (5).png', description: 'Erfahrung mit CSS' },
  { title: 'JavaScript', image: '/public/images/pngegg (4).png', description: 'Erfahrung mit JavaScript' },
  { title: 'GitHub', image: '/public/images/pngegg (3).png', description: 'Erfahrung mit GitHub' },
  { title: 'React', image: '/public/images/pngegg (2).png', description: 'Erfahrung mit React' }, // إضافة React
  { title: 'SCSS', image: '/public/images/pngegg (1).png', description: 'Erfahrung mit SCSS' }, // إضافة SCSS
  { title: 'MongoDB', image: '/public/images/1175140.webp', description: 'Erfahrung mit MongoDB' },
  { title: 'MySQL', image: 'images/mysql-1-logo-black-and-white.png', description: 'Erfahrung mit MySQL' },
  { title: 'MongoDB', image: '/public/images/pngegg.png', description: 'Erfahrung mit MongoDB' },



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
