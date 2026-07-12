import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentTab, setCurrentTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container flex justify-end items-center">
        {/* Desktop Menu */}
        <div className="flex gap-8" style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
          <button onClick={() => handleTabClick('home')} className={`hidden-mobile ink-link ${currentTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleTabClick('experience')} className={`hidden-mobile ink-link ${currentTab === 'experience' ? 'active' : ''}`}>Experience</button>
          <button onClick={() => handleTabClick('projects')} className={`hidden-mobile ink-link ${currentTab === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => handleTabClick('skills')} className={`hidden-mobile ink-link ${currentTab === 'skills' ? 'active' : ''}`}>Skills</button>
          <button onClick={() => handleTabClick('funfacts')} className={`hidden-mobile ink-link ${currentTab === 'funfacts' ? 'active' : ''}`}>Fun Facts</button>
        </div>
        
        {/* Mobile Hamburger Icon */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button onClick={() => handleTabClick('home')} className={`mobile-ink-link ${currentTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleTabClick('experience')} className={`mobile-ink-link ${currentTab === 'experience' ? 'active' : ''}`}>Experience</button>
          <button onClick={() => handleTabClick('projects')} className={`mobile-ink-link ${currentTab === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => handleTabClick('skills')} className={`mobile-ink-link ${currentTab === 'skills' ? 'active' : ''}`}>Skills</button>
          <button onClick={() => handleTabClick('funfacts')} className={`mobile-ink-link ${currentTab === 'funfacts' ? 'active' : ''}`}>Fun Facts</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
