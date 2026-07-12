import { Code2, Award, Terminal } from 'lucide-react';

const projects = [
  {
    title: "JPMorgan's Code For Good Hackathon",
    date: "November 2025",
    description: "Selected from 12,000 applicants to architect a full-stack transparency platform for donor retention in a 24-hour sprint. Utilized Gemini LLM to automate data parsing from reports, powering personalized email templates.",
    tech: ["React", "TypeScript", "Python", "Gemini API", "MongoDB", "MUI", "TailwindCSS"],
    icon: <Award className="filter-rough" size={28} />
  },
  {
    title: "NASA Space Apps Chicago Hackathon",
    date: "October 2025",
    description: "Developed backend infrastructure to identify optimal plant blooming seasons. Queried complex NASA public data sets and integrated with Google Maps API for geospatial plotting.",
    tech: ["React", "TypeScript", "Python", "Flask", "Google Maps API", "AppEEARS API", "Elasticsearch"],
    icon: <Code2 className="filter-rough" size={28} />
  },
  {
    title: "AutoGit",
    date: "September 2025",
    description: "Built a Python command-line tool that automates Git workflow by intelligently generating commit messages from code differences using large language model integration.",
    tech: ["Python", "Git", "Groq API"],
    icon: <Terminal className="filter-rough" size={28} />
  }
];

const Projects = () => {
  return (
    <section className="container section">
      <h2 className="section-title">
        <Code2 className="section-icon" /> Projects
      </h2>
      <div className="card-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="sketch-panel card">
            <div className="card-header">
              <div className="card-icon">{project.icon}</div>
              <span className="card-date">{project.date}</span>
            </div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description" style={{ marginBottom: '2rem' }}>{project.description}</p>
            <div className="tech-badges">
              {project.tech.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
