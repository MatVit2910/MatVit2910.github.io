import React from 'react';
import { Briefcase, BookOpen, MapPin } from 'lucide-react';

const Experience = () => {
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

  return (
    <section className="container" style={{ borderBottom: 'none', padding: '0' }}>
      <h2 className="section-title">
        <Briefcase style={{display:'inline', verticalAlign:'bottom', marginRight:'10px', color: 'var(--text-primary)'}}/> Experience
      </h2>
      <div className="experience-timeline">
        <div className="experience-timeline-line" style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(255, 255, 255, 0.1)', filter: 'url(#rough-edge)' }}></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <div className="experience-timeline-dot" style={{ 
                position: 'absolute', 
                left: '-2.5rem', 
                marginLeft: '-6px', 
                top: '7px', 
                width: '14px', 
                height: '14px', 
                borderRadius: '50%', 
                background: 'var(--text-primary)', 
                border: '3px solid var(--bg-color)',
                filter: 'url(#rough-edge)',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.2)'
              }}></div>
              
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>
                  {exp.role} <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-subheading)', fontWeight: '700' }}>@ {exp.company}</span>
                </h3>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  <span className="flex items-center gap-1.5"><BookOpen size={14} /> {exp.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyleType: 'circle' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>{item}</li>
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
