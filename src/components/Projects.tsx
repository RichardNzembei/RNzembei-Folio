import { Button } from "@/components/ui/button";
import { Eye, MessageCircle, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import budgetDashboard from "@/assets/budget-dashboard.png";
import budgetWorker from "@/assets/budget-worker.png";
import expensiflyHome from "@/assets/expensifly-home.png";
import expensiflyTracker from "@/assets/expensifly-tracker.png";
import dazelHome from "@/assets/dazel-home.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1, number: "01", title: "DAZEL\u00AE", subtitle: "E-Commerce & Brand Website",
      description: "Corporate website and e-commerce platform for DAZEL\u00AE, the flagship brand of Dazel Detergents & Skin Care. A modern web presence showcasing cleaning products proudly made in Kibwezi, Kenya.",
      features: ["Modern, responsive design", "Product catalog & discovery", "Brand storytelling & messaging", "Mobile-optimized experience"],
      impact: [{ metric: "Brand", label: "Presence" }, { metric: "Modern", label: "Design" }, { metric: "Mobile", label: "Ready" }],
      tags: ["E-Commerce", "React", "Web Design"],
      images: [dazelHome],
      liveUrl: "https://www.dazelworld.co.ke/", isPublic: true, year: "2024",
    },
    {
      id: 2, number: "02", title: "Budget Hair Supply Chain", subtitle: "Inventory & POS System",
      description: "Full real-time Inventory and Point of Sale system to streamline sales, stock management, and order processing. Instant order routing with automatic stock updates across the entire workflow.",
      features: ["Real-time POS sales processing", "Automatic stock deduction", "Order routing to shop workers", "Live inventory visibility"],
      impact: [{ metric: "Real-time", label: "Stock Updates" }, { metric: "Auto", label: "Order Routing" }, { metric: "Instant", label: "POS Processing" }],
      tags: ["React", "Inventory", "Real-time", "POS"],
      images: [budgetDashboard, budgetWorker],
      isPublic: false, year: "2025", period: "Jan 2025 – Present",
    },
    {
      id: 3, number: "03", title: "Siku Zangu", subtitle: "Menstrual Health Platform",
      description: "Culturally aware menstrual health platform for young women across East Africa. Mobile app, website, and admin portal with bilingual English/Kiswahili support.",
      features: ["Mobile app with cycle tracking", "Bilingual UI (English & Kiswahili)", "Admin portal for content management", "Real-time analytics dashboard"],
      impact: [{ metric: "East Africa", label: "Coverage" }, { metric: "3 Platforms", label: "Ecosystem" }, { metric: "Bilingual", label: "Support" }],
      tags: ["React Native", "Health Tech", "Mobile", "Express.js"],
      publicUrl: "https://sikuzangu.org/", company: "Petascale Systems",
      isPublic: true, year: "2025", period: "Jul 2024 – Jan 2025",
    },
    {
      id: 4, number: "04", title: "Reuben_FarmS", subtitle: "Agricultural Operations Manager",
      description: "End-to-end farm activity manager for crop cycles, inventory, worker scheduling, and financial tracking.",
      impact: [{ metric: "360°", label: "Farm View" }, { metric: "Smart", label: "Scheduling" }, { metric: "Full", label: "Tracking" }],
      tags: ["Agriculture", "Management", "Analytics"],
      isPublic: false, year: "2023",
    },
    {
      id: 5, number: "05", title: "Expensifly.iO", subtitle: "Finance Management Platform",
      description: "Open-source finance platform with OCR receipt scanning, automated savings plans, goal setting, and educational resources on personal finance.",
      features: ["OCR receipt scanning", "Smart categorization & budgeting", "Savings goals & tracking", "Financial education modules"],
      impact: [{ metric: "OCR", label: "Auto-Scan" }, { metric: "Real-time", label: "Updates" }, { metric: "Education", label: "Built-in" }],
      tags: ["Finance", "Open Source", "OCR", "Analytics"],
      images: [expensiflyHome, expensiflyTracker],
      liveUrl: "https://e-xpensefly-i-o.vercel.app/", isPublic: true, year: "2024", period: "Aug 2024 – Present",
    },
    {
      id: 6, number: "06", title: "ElevateYou", subtitle: "Real-time Project Management",
      description: "Open-source collaborative project management app with Kanban boards, rich document editing, real-time sync, team workspaces, role-based access, and PWA offline support.",
      features: ["Kanban boards with drag-and-drop", "Rich TipTap document editor", "Real-time Firebase sync", "Role-based access control", "PWA offline support"],
      impact: [{ metric: "Real-time", label: "Collaboration" }, { metric: "PWA", label: "Offline Ready" }, { metric: "RBAC", label: "Team Roles" }],
      tags: ["Nuxt 3", "Firebase", "TypeScript", "PWA", "TipTap"],
      liveUrl: "https://elevate-you-rho.vercel.app/", isPublic: true, year: "2025",
    },
  ];

  const handleContactForDetails = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: ((prev[projectId] || 0) + 1) % imageCount }));
  };

  const prevImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-revealed");
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 sm:py-32 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-apple">
          <p className="text-[11px] font-light text-gray-400 tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            Selected Projects
          </h2>
          <p className="text-xs text-gray-500 font-light mt-3 max-w-sm mx-auto">
            Crafting digital experiences that drive real business value
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-apple group"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="py-8 sm:py-10 transition-all duration-300 group-hover:bg-[#fafafa] -mx-6 px-6 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left: Number & Year */}
                  <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:gap-4">
                    <div className="text-3xl sm:text-4xl font-extralight text-gray-200 group-hover:text-gray-400 transition-colors duration-500 tabular-nums">
                      {project.number}
                    </div>
                    <div>
                      <div className="text-[11px] font-light text-gray-400">{project.year}</div>
                      {project.period && <div className="text-[10px] font-light text-gray-400 mt-0.5">{project.period}</div>}
                      {project.company && <div className="text-[10px] font-light text-gray-400 mt-1">{project.company}</div>}
                    </div>
                  </div>

                  {/* Center: Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-black tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-light">{project.subtitle}</p>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-[11px] text-gray-500 font-light flex items-start">
                            <span className="text-gray-300 mr-2">·</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Images */}
                    {project.images && project.images.length > 0 && (
                      <div className="relative rounded-xl overflow-hidden bg-[#f5f5f7] group/images">
                        <img
                          src={project.images[currentImageIndex[project.id] || 0]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-auto object-cover"
                        />
                        {project.images.length > 1 && (
                          <>
                            <button onClick={() => prevImage(project.id, project.images!.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-1.5 rounded-full opacity-0 group-hover/images:opacity-100 transition-all duration-300"
                              aria-label="Previous image">
                              <ChevronLeft className="h-3.5 w-3.5" />
                            </button>
                            <button onClick={() => nextImage(project.id, project.images!.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-1.5 rounded-full opacity-0 group-hover/images:opacity-100 transition-all duration-300"
                              aria-label="Next image">
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {project.images.map((_, idx) => (
                                <button key={idx}
                                  onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                                  className={`h-1 rounded-full transition-all duration-300 ${
                                    (currentImageIndex[project.id] || 0) === idx ? "w-4 bg-black/60" : "w-1 bg-black/20"
                                  }`}
                                  aria-label={`Image ${idx + 1}`} />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Impact */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.impact.map((item, idx) => (
                        <div key={idx}>
                          <div className="text-sm font-medium text-black">{item.metric}</div>
                          <div className="text-[10px] text-gray-400 font-light">{item.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="lg:col-span-3 flex flex-col gap-2">
                    {project.isPublic ? (
                      <Button asChild
                        className="w-full bg-black text-white hover:bg-gray-800 text-[11px] py-2 rounded-full h-auto font-light tracking-wide transition-all duration-300 group/btn">
                        <a href={project.liveUrl || project.publicUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <Eye className="h-3.5 w-3.5 mr-2" />
                          {project.publicUrl ? "Visit Website" : "View Live"}
                          <ArrowUpRight className="h-3.5 w-3.5 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </a>
                      </Button>
                    ) : (
                      <Button onClick={handleContactForDetails}
                        className="w-full bg-black text-white hover:bg-gray-800 text-[11px] py-2 rounded-full h-auto font-light tracking-wide transition-all duration-300 group/btn">
                        <MessageCircle className="h-3.5 w-3.5 mr-2" />
                        Contact for Details
                        <ArrowUpRight className="h-3.5 w-3.5 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
