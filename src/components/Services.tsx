import { Globe, Database, Smartphone, Search, Code, Settings } from "lucide-react";
import { useEffect, useRef } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    { icon: Globe, title: "Web Development", description: "Modern, responsive websites and web applications." },
    { icon: Database, title: "Enterprise Systems", description: "Scalable solutions that streamline operations." },
    { icon: Smartphone, title: "Mobile Apps", description: "Cross-platform apps with exceptional UX." },
    { icon: Search, title: "Web Scraping", description: "Automated data extraction from web sources." },
    { icon: Code, title: "Web Design", description: "User-centered design with clean aesthetics." },
    { icon: Settings, title: "System Management", description: "Administration for performance and security." },
  ];

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
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 px-6 bg-[#fafafa]">
      <div className="container mx-auto max-w-5xl">
        {/* Section label + heading — Apple style */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-apple">
          <p className="text-[11px] font-light text-gray-400 tracking-widest uppercase mb-2">Services</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            What I can do for you.
          </h2>
        </div>

        {/* Apple 3-column icon grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-apple bg-white rounded-2xl p-6 text-center group hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black/[0.04] mb-4 group-hover:bg-black/[0.07] transition-colors duration-300">
                <service.icon className="h-4 w-4 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-[13px] font-medium text-black tracking-tight mb-1.5">
                {service.title}
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
