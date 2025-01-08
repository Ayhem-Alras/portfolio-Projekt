import './Projects.css';

const projects = [
  {
    title: "Umzug-Entrümpelung",
    description: 'A project for managing and organizing moves and cleanouts.',
    link: 'https://umzug-projekt.vercel.app/',
    image: '/src/public/images/umzug.png'
  },
  {
    title: "E-Commerce",
    description: 'An e-commerce platform built with modern web technologies.',
    link: 'https://github.com/Ayhem-Alras/Ampes',
    image: '/images/E.png'
  },
  {
    title: 'Movie-Search',
    description: 'A movie search application with a list of favorite movies.',
    link: 'https://favorite-movies-list-mqtx.vercel.app/',
    image: '/images/Screenshot 665.png'
  },
  {
    title: 'Wetter-App',
    description: 'A weather application providing current weather updates.',
    link: 'https://weather-app-eta-five-31.vercel.app',
    image: '/images/Screenshot 2024-06-27 123554.png'
  },
  {
    title: 'To-do-List',
    description: 'A simple and efficient to-do list application.',
    link: 'https://to-do-list-bh17488zn-ayhem-alras-projects.vercel.app/',
    image: '/images/Screenshot 2024-06-27 131658.png'
  },
  {
    title: 'Taschenrechner',
    description: 'A calculator application for basic arithmetic operations.',
    link: 'https://taschenrechner-z8z8.vercel.app/',
    image: '/images/Screenshot 2024-06-27 133058.png'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projekte</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
              onError={(e) => e.target.src = '/images/fallback.png'} // Fallback image
            />
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
