import { Gamepad2, Cat, Feather, Sparkles } from 'lucide-react';

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

const FunFacts = () => {
  return (
    <section className="container section">
      <h2 className="section-title">
        <Sparkles className="section-icon" /> Fun Facts
      </h2>
      <div className="card-grid">
        {facts.map((fact, idx) => (
          <div key={idx} className="sketch-panel card">
            <div className="card-header">
              <div className="card-icon">{fact.icon}</div>
            </div>
            <h3 className="card-title">{fact.title}</h3>
            <p className="card-description">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
