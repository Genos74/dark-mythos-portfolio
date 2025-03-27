
import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-bg py-8 border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-display font-bold text-white">
              <span className="bg-gradient-to-r from-neon to-purple-accent bg-clip-text text-transparent">
                GameDev
              </span>
              <span>.Portfolio</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Crafting immersive gaming experiences.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground/80 hover:text-neon transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground/80 hover:text-neon transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contact@gamedev.portfolio"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground/80 hover:text-neon transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <a
            href="#home"
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground/80 hover:text-neon transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
        
        <div className="border-t border-dark-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Game Developer Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
