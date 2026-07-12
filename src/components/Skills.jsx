import React from 'react';
import { User } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C", "C++", "CSS", "HTML", "JavaScript", "TypeScript", "Python", "Java", "Go"] },
    { title: "Technologies & Frameworks", skills: ["Flask", "Git", "Google Cloud", "Linux", "MySQL", "PyQt6", "Pydub", "React", "Tailwind CSS", "FastAPI", "Docker", "Elasticsearch", "CrewAI"] },
  ];

  return (
    <section className="container" style={{ borderBottom: 'none', padding: '0' }}>
      <h2 className="section-title">
        <User style={{display:'inline', verticalAlign:'bottom', marginRight:'10px', color: 'var(--text-primary)'}}/> Skills & Education
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="sketch-panel">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {cat.skills.map((skill, i) => (
                <span key={i} className="badge" style={{ fontSize: '0.85rem' }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="sketch-panel">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>Education</h3>
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>University of Illinois Chicago</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>B.S. in Computer Science • May 2027</p>
            <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              <strong>GPA:</strong> <span style={{ fontFamily: 'var(--font-mono)' }}>4.0 / 4.0</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginTop: '0.8rem' }}>
              <strong>Awards:</strong> Dean’s List, Remarkable Futures Scholarship<br/>
              <strong style={{ display: 'inline-block', marginTop: '0.4rem' }}>Relevant Coursework:</strong> Data Structures, Software Design, Systems Programming, Machine Organization, Computer Design, Languages and Automata, Programming Language Design and Implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
