import { Github, Linkedin, MessageCircle, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-revealed");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative bg-white px-6"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Profile */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-apple mb-8">
          <img
            src={profileImage}
            alt="Reuben Nzembei"
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover mx-auto ring-1 ring-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Headline — Apple centered style */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-apple">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em] leading-[1.15]">
            Crafting digital
            <br />
            experiences.
          </h1>
        </div>

        {/* Subheadline */}
        <div className="mt-5 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-apple">
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-md mx-auto">
            Fullstack Software Engineer building elegant, high&#8209;performance
            solutions from Nairobi.
          </p>
        </div>

        {/* CTAs — Apple double button pattern */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-apple">
          <button
            onClick={scrollToProjects}
            className="text-[13px] font-light text-white bg-black hover:bg-gray-800 px-6 py-2.5 rounded-full tracking-wide transition-all duration-300"
          >
            See my work
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[13px] font-light text-black hover:text-gray-600 px-6 py-2.5 rounded-full tracking-wide transition-all duration-300"
          >
            Get in touch &rsaquo;
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-5 mt-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 ease-apple">
          {[
            { href: "https://www.linkedin.com/in/richard-reuben9/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/RichardNzembei", icon: Github, label: "GitHub" },
            { href: "https://wa.me/+254716899396", icon: MessageCircle, label: "WhatsApp" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black transition-colors duration-300"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-on-scroll opacity-0 transition-all duration-1000 delay-700 ease-apple">
        <ArrowDown className="h-4 w-4 text-gray-300 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
