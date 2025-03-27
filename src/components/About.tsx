
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
      year: "2021",
      title: "First Solo Project",
      description: "Developed and released a small horror game demo that gained positive feedback from the indie community.",
    },
    {
      year: "2022",
      title: "AI Programming Focus",
      description: "Specialized in AI systems for games, creating more dynamic and reactive enemy behaviors.",
    },
    {
      year: "2023",
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
              I'm a solo game developer with a passion for creating immersive worlds that blend horror and mythical elements. 
              My journey began with a fascination for how games could transport players to entirely new realities.
            </p>
            <p className="mb-4 text-balance">
              With expertise in AI programming, environmental design, and narrative development, I strive to create games 
              that not only challenge players but also leave a lasting impression through atmospheric storytelling.
            </p>
            <p className="text-balance">
              My approach combines technical precision with creative vision, allowing me to build unique gaming experiences 
              from concept to completion.
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
