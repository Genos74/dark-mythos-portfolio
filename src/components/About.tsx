
import React from "react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const About = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2018",
      title: "First Steps",
      description: "Began learning game development fundamentals through online courses and small prototype projects.",
    },
    {
      year: "2020",
      title: "Formal Education",
      description: "Enrolled in a Game Design & Development program, focusing on both technical and creative aspects.",
    },
    {
      year: "2024",
      title: "Current Projects",
      description: "Working on two ambitious titles combining mythical storytelling and innovative gameplay mechanics.",
    },
  ];

  return (
    <section id="about" className="section bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-purple-accent uppercase bg-purple-accent/10 rounded-full mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Developer Behind the Games</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate game creator with a focus on atmospheric experiences and innovative mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-neon">My Journey</h3>
            <p className="mb-4 text-balance">
              I'm a solo game developer with a passion for crafting immersive and engaging worlds. My journey started with a deep fascination for how games can transport players into new and compelling realities.
            </p>
            <p className="mb-4 text-balance">
              I'm still learning and evolving, I focus on environmental design, and narrative development to create meaningful and atmospheric experiences. My goal is to build games that challenge players while leaving a lasting impression through storytelling and world-building.
            </p>
            <p className="text-balance">
              I strive to balance technical skills with creative vision, continuously improving my craft to bring unique ideas to life, from concept to execution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-neon via-purple-accent to-dark-border"></div>
            <div className="space-y-8 relative z-10">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="ml-12 relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-12 top-1 flex items-center justify-center w-7 h-7 bg-dark-bg border border-dark-border rounded-full">
                    <div className="w-3 h-3 bg-neon rounded-full animate-pulse-glow"></div>
                  </div>
                  <div className="glass-card p-5">
                    <span className="text-xs font-medium text-neon">{item.year}</span>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
