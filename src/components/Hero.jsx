import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-name">
            Mateo Viteri
          </h1>
          <h2 className="hero-subtitle">
            CS Student &amp; Software Engineer
          </h2>
          <div className="hero-description">
            <p>
              I&apos;m a Computer Science student at the University of Illinois Chicago (Class of 2027). I&apos;ve always been fascinated by how software impacts our daily lives, and now I focus on building programs that solve real problems. I enjoy working in fast-paced environments, learning new tech, and pushing myself to improve everyday!
            </p>
          </div>

          <div className="hero-actions">
            <a href="/Mateo_Viteri_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
              <FileText size={18} /> Resume
            </a>
            <span className="tooltip-wrapper">
              <a href="mailto:mateoviteri13579@gmail.com" className="btn btn-secondary">
                <Mail size={18} /> Get In Touch
              </a>
              <span className="tooltip-text">mateoviteri13579@gmail.com</span>
            </span>
            <a href="https://github.com/MatVit2910" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/mateoviteri" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
