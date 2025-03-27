
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "shadowrealm",
      title: "Shadow Realm",
      category: "Horror Game",
      description: "A first-person psychological horror game where players navigate a shifting reality while being stalked by an intelligent entity that learns from their behavior.",
      features: [
        "Advanced AI enemy with adaptive learning",
        "Dynamic stealth mechanics",
        "Inventory and resource management",
        "Environmental puzzles",
        "Multiple endings based on player choices"
      ],
      technologies: ["Unity", "C#", "FMOD", "Shader Graph"],
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
    },
    {
      id: "divinequest",
      title: "Divine Quest",
      category: "Mythical Adventure",
      description: "An atmospheric third-person adventure set in a world where ancient gods walk among mortals. Players embark on a journey of divine trials and moral choices.",
      features: [
        "Stylized open environments",
        "Narrative-driven gameplay",
        "Ability system based on mythical powers",
        "Moral choice system affecting world state",
        "Dynamic day/night cycle with gameplay implications"
      ],
      technologies: ["Unreal Engine", "Blueprint", "Maya", "Substance Painter"],
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="projects" className="section relative bg-gradient-to-b from-dark-bg to-dark-bg/95">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-radial from-purple-accent/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-neon uppercase bg-neon/10 rounded-full mb-3">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of immersive gaming experiences, each with its unique atmosphere and gameplay mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative glass-card overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.imageUrl})`,
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
                
                <div className="absolute bottom-0 w-full p-6">
                  <span className="inline-block mb-2 px-2 py-1 bg-dark-bg/80 text-xs font-medium text-neon rounded">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-accent mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground grid grid-cols-1 gap-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon mt-1.5 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-dark-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`#${project.id}`} 
                  className="inline-flex items-center text-sm font-medium text-neon hover:text-glow transition-all"
                >
                  View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-2 border border-dark-border rounded-lg text-sm font-medium hover:bg-dark-card/50 transition-colors"
          >
            View All Projects <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
