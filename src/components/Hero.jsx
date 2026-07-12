import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section className="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minHeight: 'calc(100vh - 160px)', borderBottom: 'none' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '700px', marginRight: 'auto', marginLeft: '0', textAlign: 'left' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontWeight: '700', letterSpacing: '-1px' }}>
            Mateo Viteri
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-subheading)', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: '700' }}>
            CS Student &amp; Software Engineer
          </h2>
          <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            <p>
              I&apos;m a Computer Science student at the University of Illinois Chicago (Class of 2027). I&apos;ve always been fascinated by how software impacts our daily lives, and now I focus on building programs that solve real problems. I enjoy working in fast-paced environments, learning new tech, and pushing myself to improve everyday!
            </p>
          </div>

          <div className="flex gap-4" style={{ flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <a href="/Mateo_Viteri_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
              <FileText size={18} /> Resume
            </a>
            <a href="mailto:mateoviteri13579@gmail.com" className="btn btn-secondary">
              <Mail size={18} /> Get In Touch
            </a>
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
