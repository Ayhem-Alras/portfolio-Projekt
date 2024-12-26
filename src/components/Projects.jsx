import './Projects.css';

const projects = [
  {
    title: "E-Commerce",
    description: '',
    link: 'git@github.com:Ayhem-Alras/Ampes.git',
    image: '/images/E.png'
  },
  {
    title: 'Movie-Search',
    description: '',
    link: 'https://favorite-movies-list-mqtx.vercel.app/',
    image: '/images/Screenshot 665.png'
  },
  {
    title: 'Wetter-App',
    description: '',
    link: 'https://weather-app-eta-five-31.vercel.app',
    image: '/images/Screenshot 2024-06-27 123554.png'
  },
  {
    title: 'To-do-List',
    description: '',
    link: 'https://to-do-list-bh17488zn-ayhem-alras-projects.vercel.app/',
    image: '/images/Screenshot 2024-06-27 131658.png'
  },
  {
    title: 'Taschenrschener',
    description: '',
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
