import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import InkCanvas from './components/InkCanvas';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import FunFacts from './components/FunFacts';

const App = () => {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div>
      <InkCanvas isHome={currentTab === 'home'} />

      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="content-section">
        {currentTab === 'home' && (
          <div className="fade-in">
            <Hero />
          </div>
        )}
        {currentTab === 'experience' && (
          <div className="fade-in">
            <Experience />
          </div>
        )}
        {currentTab === 'projects' && (
          <div className="fade-in">
            <Projects />
          </div>
        )}
        {currentTab === 'skills' && (
          <div className="fade-in">
            <Skills />
          </div>
        )}
        {currentTab === 'funfacts' && (
          <div className="fade-in">
            <FunFacts />
          </div>
        )}
      </main>

      {currentTab !== 'home' && (
        <footer className="fade-in" style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '2px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
          <p>Thanks for visiting my website!</p>
        </footer>
      )}
    </div>
  );
};

export default App;
