import { Briefcase, BookOpen, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "JPMorgan Chase",
    role: "Software Engineer Intern",
    date: "June 2026 - August 2026",
    location: "Chicago, IL",
    description: [
      "Developed a multi-agent observability system using Python and Amazon Bedrock, designing an orchestrator architecture that intelligently routes complex system queries to specialized sub-agents.",
      "Integrated Model Context Protocol (MCP) to connect deployed agents with enterprise telemetry and version control systems, implementing a localized RAG workflow utilizing embedding models to retrieve diagnostic data from a vector store for automated error resolution.",
      "Deployed the containerized application to Amazon EKS using Spinnaker, implementing standard unit tests to verify core agent logic.",
      "Won 1st Place at the JPMC Global Hackathon (Chicago), and concurrently developed a full-stack web app (React, Java/Spring Boot) during an AI Challenge initiative focused on the effective leverage and proper use of AI tools."
    ]
  },
  {
    company: "Tech In Residence - AbbVie",
    role: "SWE Student Participant",
    date: "January 2026 - May 2026",
    location: "Chicago, IL",
    description: [
      "Engineered a multi-agent AI system to automate the generation of complex competitive intelligence reports, significantly reducing manual analysis time.",
      "Partnered with corporate stakeholders to identify system requirements, interview subject matter experts, and translate high-level business needs into technical objectives.",
      "Presented project milestones and insights to diverse teams, ensuring technical concepts are accessible and actionable for non-technical leadership."
    ]
  },
  {
    company: "SEO TECH Developer Program",
    role: "SEO Tech Developer Intern",
    date: "June 2025 - August 2025",
    location: "New York, NY - Remote",
    description: [
      "Collaborated in Agile teams of 5 to design, build, and test full-stack applications.",
      "Managed development workflow using SCRUM-like sprints and Kanban boards.",
      "Developed BookKeep, a full-stack web app that helps users track reading goals and discover books, using Flask, SQLite, React, and APIs like Open Library and ZenQuotes.",
      "Implemented RESTful API endpoints and database schemas to support user authentication, data persistence, and real-time content updates."
    ]
  },
  {
    company: "University of Illinois Chicago",
    role: "IT Specialist Intern",
    date: "June 2024 - August 2024",
    location: "Chicago, IL",
    description: [
      "Developed a Python desktop app with PyQt6 to help faculty capture, structure, and retrieve institutional knowledge.",
      "Integrated Google Cloud Speech and Pydub for high-accuracy audio-to-text transcription.",
      "Leveraged Gemini and Groq LLMs to generate context-aware summaries and knowledge bases.",
      "Collaborated with professors to gather feedback and iterated on the design to enhance usability and functionality."
    ]
  }
];

const Experience = () => {
  return (
    <section className="container section">
      <h2 className="section-title">
        <Briefcase className="section-icon" /> Experience
      </h2>
      <div className="experience-timeline">
        <div className="timeline-line"></div>
        
        <div className="timeline-entries">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-entry">
              <div className="timeline-dot"></div>
              
              <div className="experience-header">
                <h3 className="experience-role">
                  {exp.role} <span className="experience-company">@ {exp.company}</span>
                </h3>
                <div className="experience-meta">
                  <span className="flex items-center gap-1.5"><BookOpen size={14} /> {exp.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>
              <ul className="experience-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
