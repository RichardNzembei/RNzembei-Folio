import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import profileImage from "@/assets/reuben-profile.jpg";
import heroBg from "@/assets/tech-hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 46, 0.8), rgba(34, 39, 46, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-up">
            <img
              src={profileImage}
              alt="Reuben Nzembei"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/30 hover-glow"
            />
          </div>

          {/* Main Content */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Reuben Nzembei</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
              Fullstack Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Specializing in web development, enterprise systems, mobile apps, web scraping, 
              web design, and system management. Building innovative solutions that drive business success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button onClick={scrollToProjects} variant="hero" size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button onClick={scrollToContact} variant="glass" size="lg">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://linkedin.com/in/reuben-nzembei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 hover:bg-card/50 hover-glow transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/reuben-nzembei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 hover:bg-card/50 hover-glow transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/+254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 hover:bg-card/50 hover-glow transition-all"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;