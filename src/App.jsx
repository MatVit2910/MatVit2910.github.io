import { useState } from 'react';

import Navbar from './components/Navbar';
import InkCanvas from './components/InkCanvas';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import FunFacts from './components/FunFacts';

const TABS = {
  home: Hero,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  funfacts: FunFacts,
};

const App = () => {
  const [currentTab, setCurrentTab] = useState('home');

  const TabContent = TABS[currentTab];

  return (
    <div>
      <InkCanvas isHome={currentTab === 'home'} />

      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="content-section">
        {TabContent && (
          <div className="fade-in" key={currentTab}>
            <TabContent />
          </div>
        )}
      </main>

      {currentTab !== 'home' && (
        <footer className="fade-in site-footer">
          <p>Thanks for visiting my website!</p>
        </footer>
      )}
    </div>
  );
};

export default App;
