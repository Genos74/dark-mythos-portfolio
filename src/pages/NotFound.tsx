
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-6">
      <div className="glass-card p-10 max-w-lg w-full text-center animate-fade-in">
        <h1 className="text-6xl font-bold mb-2 text-neon">404</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-neon to-purple-accent mx-auto mb-6"></div>
        <p className="text-xl text-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-neon to-purple-accent text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={18} className="mr-2" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
