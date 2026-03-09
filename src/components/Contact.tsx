import { Github, Linkedin, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const links = [
    { href: "mailto:richardsonreuben78@gmail.com", icon: Mail, label: "Email", display: "richardsonreuben78@gmail.com" },
    { href: "https://wa.me/+254716899396", icon: MessageCircle, label: "WhatsApp", display: "+254 716 899 396" },
    { href: "https://www.linkedin.com/in/richard-reuben9/", icon: Linkedin, label: "LinkedIn", display: "linkedin.com/in/richard-reuben9" },
    { href: "https://github.com/RichardNzembei", icon: Github, label: "GitHub", display: "github.com/RichardNzembei" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 px-6 bg-[#fafafa]">
      <div className="container mx-auto max-w-5xl">
        {/* Header — Apple centered */}
        <div className="text-center mb-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-apple">
          <p className="text-[11px] font-light text-gray-400 tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            Let's work together.
          </h2>
          <p className="text-xs text-gray-500 font-light mt-3 max-w-sm mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Contact grid — Apple 2x2 card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {links.map(({ href, icon: Icon, label, display }, index) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-apple bg-white rounded-xl p-4 flex items-center gap-3 group hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center group-hover:bg-black/[0.07] transition-colors duration-300 shrink-0">
                <Icon className="h-3.5 w-3.5 text-black" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-black">{label}</p>
                <p className="text-[11px] text-gray-500 font-light truncate">{display}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-black transition-colors duration-300 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
