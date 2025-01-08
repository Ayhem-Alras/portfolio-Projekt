import './Projects.css';

const projects = [
  {
    title: "Umzug-Entrümpelung",
    description: 'Planung und Durchführung eines Umzugs mit gleichzeitiger Entrümpelung.',
    link: 'https://umzug-projekt.vercel.app/',
    image: '/images/umzug.png'
  },
  {
    title: "E-Commerce",
    description: 'Entwicklung einer Plattform für den Online-Verkauf von Produkten.',
    link: 'https://github.com/Ayhem-Alras/Ampes',
    image: '/images/E.png'
  },
  {
    title: 'Movie-Search',
    description: 'Eine App zum Durchsuchen und Speichern von Lieblingsfilmen.',
    link: 'https://favorite-movies-list-mqtx.vercel.app/',
    image: '/images/Screenshot 665.png'
  },
  {
    title: 'Wetter-App',
    description: 'Anzeige aktueller Wetterdaten basierend auf dem Standort des Nutzers.',
    link: 'https://weather-app-eta-five-31.vercel.app',
    image: '/images/Screenshot 2024-06-27 123554.png'
  },
  {
    title: 'To-do-List',
    description: 'Ein Tool zur Verwaltung und Organisation täglicher Aufgaben.',
    link: 'https://to-do-list-bh17488zn-ayhem-alras-projects.vercel.app/',
    image: '/images/Screenshot 2024-06-27 131658.png'
  },
  {
    title: 'Taschenrechner',
    description: 'Eine einfache und intuitive Taschenrechner-App für den täglichen Gebrauch.',
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
