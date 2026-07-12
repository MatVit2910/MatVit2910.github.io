import React from 'react';
import { Code2, Award, Terminal } from 'lucide-react';

const Projects = () => {
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

  return (
    <section className="container" style={{ borderBottom: 'none', padding: '0' }}>
      <h2 className="section-title">
        <Code2 style={{display:'inline', verticalAlign:'bottom', marginRight:'10px', color: 'var(--text-primary)'}}/> Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="sketch-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--text-primary)' }}>{project.icon}</div>
              <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{project.date}</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem', fontSize: '0.92rem' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', height: '115px', alignContent: 'flex-start' }}>
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
