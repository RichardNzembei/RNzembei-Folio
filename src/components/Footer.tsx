import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Reuben Nzembei</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fullstack Software Engineer crafting innovative solutions for the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sematica Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/richard-reuben9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/30 hover:bg-card/50 hover-glow transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/RichardNzembei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/30 hover:bg-card/50 hover-glow transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/+254716899396"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/30 hover:bg-card/50 hover-glow transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Reuben Nzembei. Built </span>
              <span>using React & TypeScript</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Available for freelance and full-time opportunities
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;