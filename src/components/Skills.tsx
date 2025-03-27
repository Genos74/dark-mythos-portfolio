
import React from "react";

type Skill = {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
};

const Skills = () => {
  const skills: Skill[] = [
    {
      category: "Game Engines",
      items: [
        { name: "Unity", proficiency: 90 },
        { name: "Unreal Engine", proficiency: 75 },
        { name: "Godot", proficiency: 50 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "C#", proficiency: 85 },
        { name: "Blueprint", proficiency: 80 },
        { name: "Python", proficiency: 65 },
        { name: "JavaScript", proficiency: 60 },
      ],
    },
    {
      category: "Game Development",
      items: [
        { name: "AI Systems", proficiency: 90 },
        { name: "Level Design", proficiency: 80 },
        { name: "Game Mechanics", proficiency: 85 },
        { name: "UI/UX Design", proficiency: 75 },
      ],
    },
    {
      category: "Art & Design",
      items: [
        { name: "Environment Art", proficiency: 75 },
        { name: "Lighting", proficiency: 85 },
        { name: "Shader Creation", proficiency: 70 },
        { name: "3D Modeling", proficiency: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-purple-accent uppercase bg-purple-accent/10 rounded-full mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical and creative abilities honed through years of game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${groupIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-neon">{skillGroup.category}</h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill transition-all duration-1000 ease-out" 
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transitionDelay: `${(groupIndex * skillGroup.items.length + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools and Software */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Tools & Software</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Unity", "Unreal Engine", "Visual Studio", "Blender", 
              "Substance Painter", "Adobe Photoshop", "FMOD", "Git", 
              "Jira", "Maya", "Zbrush", "Houdini"
            ].map((tool, index) => (
              <div 
                key={tool} 
                className="glass-card p-4 flex items-center justify-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
