
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center"
    >
      {/* Parallax effect divs */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-bg/5 to-dark-bg pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Content container with tagline and CTA */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-accent/30 bg-dark-card/40 text-sm font-medium text-purple-accent animate-fade-in">
          Game Developer & Designer
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Building Worlds,
          <br />
          <span className="bg-gradient-to-r from-neon to-purple-accent bg-clip-text text-transparent">
            One Line of Code
          </span>
          <br />
          at a Time
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-balance">
          Crafting immersive game experiences through innovative mechanics, atmospheric environments, and compelling narratives.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-neon to-purple-accent text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg bg-dark-card border border-dark-border text-foreground font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground animate-float"
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
