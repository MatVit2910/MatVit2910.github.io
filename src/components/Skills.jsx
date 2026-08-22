import { User } from 'lucide-react';

const skillCategories = [
  { title: "Languages", skills: ["C", "C++", "CSS", "HTML", "JavaScript", "TypeScript", "Python", "Java", "Go"] },
  { title: "Technologies & Frameworks", skills: ["Flask", "Git", "Google Cloud", "Linux", "MySQL", "PyQt6", "Pydub", "React", "Tailwind CSS", "FastAPI", "Docker", "Elasticsearch", "CrewAI"] },
];

const Skills = () => {
  return (
    <section className="container section">
      <h2 className="section-title">
        <User className="section-icon" /> Skills & Education
      </h2>

      <div className="card-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="sketch-panel">
            <h3 className="skill-panel-title">{cat.title}</h3>
            <div className="skill-badges">
              {cat.skills.map((skill, i) => (
                <span key={i} className="badge badge-skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="sketch-panel">
          <h3 className="skill-panel-title">Education</h3>
          <div>
            <h4 className="education-degree">University of Illinois Chicago</h4>
            <p className="education-detail">B.S. in Computer Science • May 2027</p>
            <div className="flex items-center gap-2 education-gpa">
              <strong>GPA:</strong> <span className="mono-text">4.0 / 4.0</span>
            </div>
            <div className="education-awards">
              <strong>Awards:</strong> Dean's List, Remarkable Futures Scholarship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
