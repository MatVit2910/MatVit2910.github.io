import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TABS = [
  { key: 'home', label: 'Home' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'funfacts', label: 'Fun Facts' },
];

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
        <div className="flex gap-8 nav-links">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`hidden-mobile ink-link ${currentTab === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        
        {/* Mobile Hamburger Icon */}
        <button 
          className="mobile-menu-btn hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`mobile-ink-link ${currentTab === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
