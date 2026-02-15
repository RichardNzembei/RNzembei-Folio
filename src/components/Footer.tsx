import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-black dark:text-white tracking-tight">
                Reuben Nzembei
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-xs">
                Fullstack Software Engineer crafting elegant digital solutions
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base font-light text-black dark:text-white tracking-wide">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <a
                      href="#projects"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-light"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                      href="#contact"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-light"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                      href="https://sematicake.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-light"
                  >
                    Sematica Platform
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-base font-light text-black dark:text-white tracking-wide">Connect</h4>
              <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/richard-reuben9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                    href="https://github.com/RichardNzembei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                    href="https://wa.me/+254716899396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
                © {currentYear} Reuben Nzembei. All rights reserved.
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Available for freelance and full-time opportunities
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;