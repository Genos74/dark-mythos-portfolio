import React, { useState, FormEvent } from "react";
import { Github, Mail, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after some time
      setTimeout(() => {
        setSubmitMessage({ type: null, text: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent"></div>
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-neon/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-neon uppercase bg-neon/10 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-neon">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-dark-border rounded-md focus:outline-none focus:ring-1 focus:ring-neon"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-dark-border rounded-md focus:outline-none focus:ring-1 focus:ring-neon"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-dark-border rounded-md focus:outline-none focus:ring-1 focus:ring-neon resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              {submitMessage.type && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    submitMessage.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-neon to-purple-accent text-primary-foreground font-medium rounded-md transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <ArrowRight size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-purple-accent">Connect</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:contact@gamedev.portfolio"
                  className="flex items-center p-4 bg-muted/50 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center mr-4">
                    <Mail size={18} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@gamedev.portfolio</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-muted/50 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center mr-4">
                    <Github size={18} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/gamedev</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-muted/50 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center mr-4">
                    <Linkedin size={18} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/gamedev</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-4">
                Looking for a game developer for your next project? Let's create something amazing together!
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-md border border-neon text-neon hover:bg-neon/10 transition-colors text-sm font-medium"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
