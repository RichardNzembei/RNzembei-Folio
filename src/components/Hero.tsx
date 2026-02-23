import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-950 opacity-60"></div>
        <div className="container mx-auto px-6 lg:px-8 z-10 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <img
                  src={profileImage}
                  alt="Reuben Nzembei"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 border border-gray-200 dark:border-gray-800 object-cover transition-all duration-700"
              />
            </div>
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 text-black dark:text-white tracking-tight leading-tight">
                Reuben Nzembei
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-400 font-light tracking-wide">
                Fullstack Software Engineer
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                Crafting elegant digital solutions that drive innovation and business growth
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                  onClick={scrollToProjects}
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-base py-6 px-10 rounded-full font-light tracking-wide group border-0"
              >
                View Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                  onClick={scrollToContact}
                  className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 border border-gray-300 dark:border-gray-700 text-base py-6 px-10 rounded-full font-light tracking-wide"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                  href="https://www.linkedin.com/in/richard-reuben9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                  href="https://github.com/RichardNzembei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                  href="https://wa.me/+254716899396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                  aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-600" />
        </div>
        <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
      </section>
  );
};

export default Hero;