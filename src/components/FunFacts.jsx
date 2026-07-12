import React from 'react';
import { Gamepad2, Cat, Feather, Sparkles } from 'lucide-react';

const FunFacts = () => {
  const facts = [
    {
      title: "From Games to Code",
      description: "My passion for coding actually started with video games! I initially wanted to be a game developer, which naturally evolved into my love for Software Engineering.",
      icon: <Gamepad2 className="filter-rough" size={28} />
    },
    {
      title: "Animal Person",
      description: "I absolutely love animals and have a small zoo's worth of pet experience over the years: dogs, cats, hamsters, fish, turtles, rabbits, and even a crab!",
      icon: <Cat className="filter-rough" size={28} />
    },
    {
      title: "Edgar Allan Poe Fan",
      description: "While I don't read a ton of books, I am a huge fan of Edgar Allan Poe. I love his stories and he is definitely my favorite author.",
      icon: <Feather className="filter-rough" size={28} />
    }
  ];

  return (
    <section className="container" style={{ borderBottom: 'none', padding: '0' }}>
      <h2 className="section-title">
        <Sparkles style={{display:'inline', verticalAlign:'bottom', marginRight:'10px', color: 'var(--text-primary)'}}/> Fun Facts
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {facts.map((fact, idx) => (
          <div key={idx} className="sketch-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {fact.icon}
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>{fact.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, fontSize: '0.92rem' }}>{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
