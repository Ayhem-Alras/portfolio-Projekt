import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Movie-Search',
    description: '',
    link: 'https://example.com/project1',
    image: '/public/images/Screenshot 665.png'
  },
  {
    title: 'Wetter-App',
    description: '',
    link: 'https://weather-app-eta-five-31.vercel.app',
    image: '/public/images/Screenshot 2024-06-27 123554.png'
  },
  {
    title: 'To-do-List',
    description: '',
    link: 'https://example.com/project3',
    image: '/public/images/Screenshot 2024-06-27 131658.png'
  },
  {
    title: 'Taschenrschener',
    description: '',
    link: '/-06-27 133058.png',
    image: '/public/images/Screenshot 2024-06-27 133058.png'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projekte</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Projekt zeigen</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
