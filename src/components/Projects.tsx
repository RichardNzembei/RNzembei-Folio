import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Sematica",
      subtitle: "AI-First Automation Platform",
      description:
          "AI-first Voice + Chat + Commerce automation platform designed for modern businesses. Automates customer engagement, sales, and AI-enhanced support across WhatsApp, Instagram, Web, and voice calls.",
      impact: [
        { metric: "5x", label: "Faster Response" },
        { metric: "24/7", label: "Availability" },
        { metric: "Multi", label: "Platform" }
      ],
      tags: ["AI", "Automation", "Multi-platform", "Voice AI"],
      liveUrl: "https://sematicake.vercel.app/",
      mainAppUrl: "https://sematica-main.vercel.app/",
      isPublic: true,
      year: "2024"
    },
    {
      id: 2,
      number: "02",
      title: "Budget Hair",
      subtitle: "Stock Management System",
      description:
          "Custom-built stock management system for Budget Hair, a braids retail shop in Kenya. Features real-time inventory tracking, sales management, and automated restocking alerts.",
      impact: [
        { metric: "Real-time", label: "Tracking" },
        { metric: "Auto", label: "Restocking" },
        { metric: "Smart", label: "Analytics" }
      ],
      tags: ["React", "Inventory", "Real-time", "Retail"],
      isPublic: false,
      clientBased: true,
      year: "2024"
    },
    {
      id: 3,
      number: "03",
      title: "Reuben_FarmS",
      subtitle: "Agricultural Operations Manager",
      description:
          "Comprehensive Farm End-To-End Activity Manager designed to streamline agricultural operations. Manages crop cycles, inventory, worker scheduling, and financial tracking.",
      impact: [
        { metric: "360°", label: "Farm View" },
        { metric: "Smart", label: "Scheduling" },
        { metric: "Full", label: "Tracking" }
      ],
      tags: ["Agriculture", "Management", "Analytics", "Scheduling"],
      isPublic: false,
      clientBased: true,
      year: "2023"
    },
    {
      id: 4,
      number: "04",
      title: "Expensifly.iO",
      subtitle: "Expense Management Platform",
      description:
          "Modern expense tracking and management application with intelligent categorization, budget planning, and financial insights for businesses and individuals.",
      impact: [
        { metric: "Smart", label: "Categorization" },
        { metric: "Budget", label: "Planning" },
        { metric: "Deep", label: "Insights" }
      ],
      tags: ["Finance", "Tracking", "Analytics", "Business"],
      liveUrl: "https://e-xpensefly-i-o.vercel.app/",
      isPublic: true,
      year: "2024"
    },
  ];

  const handleContactForDetails = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <section id="projects" className="py-20 sm:py-32 px-6 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20 sm:mb-32">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
              <Sparkles className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-black dark:text-white tracking-tight leading-tight">
              Selected Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting digital experiences that drive real business value
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    onMouseEnter={() => setActiveProject(project.id)}
                    onMouseLeave={() => setActiveProject(null)}
                    className="group border-t border-gray-200 dark:border-gray-800 last:border-b transition-all duration-500"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeIn 0.8s ease-out forwards',
                      opacity: 0
                    }}
                >
                  <div className="py-12 sm:py-16 lg:py-20 transition-all duration-500 group-hover:bg-gray-50 dark:group-hover:bg-gray-950">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      {/* Left: Number & Year */}
                      <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-8">
                        <div>
                          <div className="text-6xl sm:text-7xl font-extralight text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-all duration-500">
                            {project.number}
                          </div>
                        </div>
                        <div className="lg:mt-auto">
                          <div className="text-sm font-light text-gray-400 dark:text-gray-600">
                            {project.year}
                          </div>
                        </div>
                      </div>

                      {/* Center: Content */}
                      <div className="lg:col-span-6 space-y-6">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-3xl sm:text-4xl font-light text-black dark:text-white tracking-tight mb-2">
                                {project.title}
                              </h3>
                              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-light">
                                {project.subtitle}
                              </p>
                            </div>
                            {project.clientBased && (
                                <span className="text-xs bg-transparent border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-full font-light whitespace-nowrap">
                            Client Project
                          </span>
                            )}
                          </div>

                          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                            {project.description}
                          </p>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          {project.impact.map((item, idx) => (
                              <div key={idx} className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl font-light text-black dark:text-white mb-1">
                                  {item.metric}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 font-light">
                                  {item.label}
                                </div>
                              </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="text-xs bg-transparent border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-full font-light"
                              >
                          {tag}
                        </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="lg:col-span-4 flex flex-col gap-3 lg:pt-2">
                        {project.isPublic ? (
                            <>
                              <Button
                                  asChild
                                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm py-6 rounded-full border-0 font-light tracking-wide transition-all duration-300 group/btn"
                              >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Live
                                  <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                              </Button>
                              {project.mainAppUrl && (
                                  <Button
                                      asChild
                                      className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm py-6 rounded-full font-light tracking-wide transition-all duration-300 group/btn"
                                  >
                                    <a href={project.mainAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      Main App
                                      <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    </a>
                                  </Button>
                              )}
                            </>
                        ) : (
                            <Button
                                onClick={handleContactForDetails}
                                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm py-6 rounded-full border-0 font-light tracking-wide transition-all duration-300 group/btn"
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact for Details
                              <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-32 pt-20 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-3xl sm:text-4xl font-light mb-6 text-black dark:text-white tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 font-light max-w-xl mx-auto">
              Let's create something exceptional together
            </p>
            <Button
                onClick={handleContactForDetails}
                className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 border border-gray-300 dark:border-gray-700 text-base py-6 px-12 rounded-full font-light tracking-wide transition-all duration-300"
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </section>
  );
};

export default Projects;