import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, MessageCircle, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import budgetDashboard from "@/assets/budget-dashboard.png";
import budgetWorker from "@/assets/budget-worker.png";
import expensiflyHome from "@/assets/expensifly-home.png";
import expensiflyTracker from "@/assets/expensifly-tracker.png";
import dazelHome from "@/assets/dazel-home.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "DAZEL®",
      subtitle: "E-Commerce & Brand Website",
      description:
          "Corporate website and e-commerce platform for DAZEL®, the flagship brand of Dazel Detergents & Skin Care. A modern web presence showcasing cleaning products proudly made in Kibwezi, Kenya with the tagline 'Where Clean Meets Care.'",
      longDescription: "Built to establish DAZEL® as a trusted brand combining effective cleaning with gentle skin care. The site features product discovery, company story, and brand messaging that emphasizes quality and family values.",
      features: [
        "Modern, responsive design",
        "Product catalog & discovery",
        "Brand storytelling & messaging",
        "Contact & inquiry system",
        "Mobile-optimized experience"
      ],
      impact: [
        { metric: "Brand", label: "Presence" },
        { metric: "Modern", label: "Design" },
        { metric: "Mobile", label: "Ready" }
      ],
      tags: ["E-Commerce", "Brand Website", "React", "Web Design"],
      images: [dazelHome],
      liveUrl: "https://www.dazelworld.co.ke/",
      isPublic: true,
      year: "2024",
      clientBased: true
    },
    {
      id: 2,
      number: "02",
      title: "Budget Hair Supply Chain",
      subtitle: "Inventory & POS System",
      description:
          "Full real-time Inventory and Point of Sale (POS) system developed to streamline sales, stock management, and order processing operations for a hair supply business. The system integrates customer orders, shop workers, and inventory into a unified workflow with instant order routing and automatic stock updates.",
      longDescription: "When a customer places an order, it is instantly sent to shop staff for confirmation and disbursement, while inventory updates automatically in real time. The system provides live visibility across all operations, enabling faster decision-making and reduced stock discrepancies.",
      features: [
        "Real-time POS sales processing",
        "Automatic stock deduction after transactions",
        "Order routing to shop workers",
        "Order confirmation & disbursement tracking",
        "Live inventory visibility & stock control"
      ],
      impact: [
        { metric: "Real-time", label: "Stock Updates" },
        { metric: "Auto", label: "Order Routing" },
        { metric: "Instant", label: "POS Processing" }
      ],
      tags: ["React", "Inventory", "Real-time", "POS", "Supply Chain"],
      images: [budgetDashboard, budgetWorker],
      isPublic: false,
      clientBased: true,
      year: "2025",
      period: "Jan 2025 – Present"
    },
    {
      id: 3,
      number: "03",
      title: "Siku Zangu",
      subtitle: "Menstrual Health Platform",
      description:
          "Culturally aware menstrual health platform built for young women across East Africa under Petascale Systems. Comprehensive ecosystem including mobile app, public website, and admin portal with bilingual support in English and Kiswahili.",
      longDescription: "One of the first Swahili-first menstrual health tools designed specifically for African users—improving accessibility, menstrual education, and digital health empowerment for girls and women across the region. Developed as part of Petascale Systems' health tech initiative.",
      features: [
        "Mobile app with cycle tracking & symptom logging",
        "Public website for information & resources",
        "Admin portal for content management",
        "Bilingual UI (English & Kiswahili)",
        "Real-time analytics dashboard"
      ],
      impact: [
        { metric: "East Africa", label: "Coverage" },
        { metric: "3 Platforms", label: "Ecosystem" },
        { metric: "Bilingual", label: "Support" }
      ],
      tags: ["React Native", "Health Tech", "Mobile", "MySQL", "Express.js", "Nx.dev"],
      publicUrl: "https://sikuzangu.org/",
      company: "Petascale Systems",
      isPublic: true,
      clientBased: true,
      year: "2025",
      period: "Jul 2024 – Jan 2025"
    },
    {
      id: 4,
      number: "04",
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
      id: 5,
      number: "05",
      title: "Expensifly.iO",
      subtitle: "Finance Management Platform",
      description:
          "An open-source finance management platform designed to track expenses, savings, and financial goals with real-time updates. Supports financial education and budgeting tools for individuals and small businesses.",
      longDescription: "Built to empower users with comprehensive financial literacy tools, including expense tracking with OCR receipt scanning, automated savings plans, goal setting, and educational resources on personal finance, small business management, and digital assets.",
      features: [
        "OCR receipt scanning for automatic expense entry",
        "Smart categorization & budget planning",
        "Savings goals & progress tracking",
        "Financial education modules",
        "Real-time expense breakdown & analytics"
      ],
      impact: [
        { metric: "OCR", label: "Auto-Scan" },
        { metric: "Real-time", label: "Updates" },
        { metric: "Education", label: "Built-in" }
      ],
      tags: ["Finance", "Open Source", "OCR", "Analytics", "Education"],
      images: [expensiflyHome, expensiflyTracker],
      liveUrl: "https://e-xpensefly-i-o.vercel.app/",
      isPublic: true,
      year: "2024",
      period: "Aug 2024 – Present"
    },
  ];

  // Show only first 3 projects unless "showAll" is true
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hiddenProjectsCount = projects.length - 3;

  const handleContactForDetails = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount
    }));
  };

  const prevImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount
    }));
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
            {visibleProjects.map((project, index) => (
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
                          {project.period && (
                              <div className="text-xs font-light text-gray-500 dark:text-gray-700 mt-1">
                                {project.period}
                              </div>
                          )}
                          {project.company && (
                              <div className="text-xs font-light text-gray-500 dark:text-gray-700 mt-2">
                                {project.company}
                              </div>
                          )}
                        </div>
                      </div>

                      {/* Center: Content */}
                      <div className="lg:col-span-6 space-y-6">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-3xl sm:text-4xl font-light text-black dark:text-white tracking-tight mb-2">
                                {project.title}
                              </h3>
                              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-light">
                                {project.subtitle}
                              </p>
                            </div>
                            {project.clientBased && (
                                <span className="text-xs bg-transparent border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-full font-light whitespace-nowrap ml-4">
                            Client Project
                          </span>
                            )}
                          </div>

                          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-4">
                            {project.description}
                          </p>

                          {project.longDescription && (
                              <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed font-light">
                                {project.longDescription}
                              </p>
                          )}
                        </div>

                        {/* Features List */}
                        {project.features && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-light text-gray-500 dark:text-gray-500">Key Features:</h4>
                              <ul className="space-y-1.5">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 font-light flex items-start">
                                      <span className="text-gray-400 dark:text-gray-600 mr-2">•</span>
                                      {feature}
                                    </li>
                                ))}
                              </ul>
                            </div>
                        )}

                        {/* Images */}
                        {project.images && project.images.length > 0 && (
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 group/images">
                              <img
                                  src={project.images[currentImageIndex[project.id] || 0]}
                                  alt={`${project.title} screenshot ${(currentImageIndex[project.id] || 0) + 1}`}
                                  className="w-full h-auto object-cover"
                              />

                              {project.images.length > 1 && (
                                  <>
                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={() => prevImage(project.id, project.images!.length)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 text-black dark:text-white p-2 rounded-full border border-gray-200 dark:border-gray-800 opacity-0 group-hover/images:opacity-100 transition-all duration-300 hover:scale-110"
                                        aria-label="Previous image"
                                    >
                                      <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => nextImage(project.id, project.images!.length)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 text-black dark:text-white p-2 rounded-full border border-gray-200 dark:border-gray-800 opacity-0 group-hover/images:opacity-100 transition-all duration-300 hover:scale-110"
                                        aria-label="Next image"
                                    >
                                      <ChevronRight className="h-5 w-5" />
                                    </button>

                                    {/* Indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                      {project.images.map((_, idx) => (
                                          <button
                                              key={idx}
                                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                                  (currentImageIndex[project.id] || 0) === idx
                                                      ? 'w-8 bg-black dark:bg-white'
                                                      : 'w-1.5 bg-gray-400 dark:bg-gray-600'
                                              }`}
                                              aria-label={`Go to image ${idx + 1}`}
                                          />
                                      ))}
                                    </div>
                                  </>
                              )}
                            </div>
                        )}

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
                                <a href={project.liveUrl || project.publicUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                  <Eye className="h-4 w-4 mr-2" />
                                  {project.publicUrl ? 'Visit Website' : 'View Live'}
                                  <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                              </Button>
                              {project.liveUrl && project.publicUrl && (
                                  <Button
                                      asChild
                                      className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm py-6 rounded-full font-light tracking-wide transition-all duration-300 group/btn"
                                  >
                                    <a href={project.publicUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      Public Site
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
          {projects.length > 3 && (
              <div className="text-center mt-12 pb-20">
                <Button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900  text-base py-6 px-12 rounded-full font-light tracking-wide transition-all duration-300 group"
                >
                  {showAll ? (
                      <>
                        Show Less
                        <ChevronUp className="h-5 w-5 ml-2 group-hover:-translate-y-1 transition-transform" />
                      </>
                  ) : (
                      <>
                        View More Projects ({hiddenProjectsCount})
                        <ChevronDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
                      </>
                  )}
                </Button>
              </div>
          )}
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