import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profilr.jpeg";
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
      className="min-h-[80vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 46, 0.85), rgba(34, 39, 46, 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 animate-fade-up">
            <img
              src={profileImage}
              alt="Reuben Nzembei"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-blue-500/30 hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Reuben Nzembei
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 dark:text-gray-200 mb-6 sm:mb-8 font-medium">
              Fullstack Software Engineer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Specializing in web development, enterprise systems, mobile apps, web scraping, 
              web design, and system management. Building innovative solutions that drive business success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToProjects} 
              variant="hero" 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToContact} 
              variant="glass" 
              size="lg"
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-300 dark:border-gray-600 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://www.linkedin.com/in/richard-reuben9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
            </a>
            <a
              href="https://github.com/RichardNzembei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
            </a>
            <a
              href="https://wa.me/+254716899396"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;