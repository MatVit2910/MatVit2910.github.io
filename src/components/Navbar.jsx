import React from 'react';

const Navbar = ({ currentTab, setCurrentTab }) => {
  return (
    <nav className="navbar">
      <div className="container flex justify-end items-center">
        <div className="flex gap-8" style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
          <button onClick={() => setCurrentTab('home')} className={`hidden-mobile ink-link ${currentTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => setCurrentTab('experience')} className={`hidden-mobile ink-link ${currentTab === 'experience' ? 'active' : ''}`}>Experience</button>
          <button onClick={() => setCurrentTab('projects')} className={`hidden-mobile ink-link ${currentTab === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => setCurrentTab('skills')} className={`hidden-mobile ink-link ${currentTab === 'skills' ? 'active' : ''}`}>Skills</button>
          <button onClick={() => setCurrentTab('funfacts')} className={`hidden-mobile ink-link ${currentTab === 'funfacts' ? 'active' : ''}`}>Fun Facts</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
