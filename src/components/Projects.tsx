import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Eye, MessageCircle } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useRef } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import sematicaPreview from "@/assets/sematica.png";
import budgetHairPreview from "@/assets/budget1.jpeg";
import budget2HairPreview from "@/assets/budget2.jpeg";
import farmManagerPreview from "@/assets/farm1.jpeg";
import farmManager2Preview from "@/assets/farm2.jpeg";
import farmManager3Preview from "@/assets/farm3.jpeg";
import expensiflyPreview from "@/assets/expe1.jpeg";
import expensifly2Preview from "@/assets/expe2.jpeg";

const Projects = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<{ src: string }[]>([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const autoplayRef = useRef<AutoplayType | null>(null);

  const projects = [
    {
      title: "Sematica",
      description:
        "AI-first Voice + Chat + Commerce automation platform designed for modern businesses. Automates customer engagement, sales, and AI-enhanced support across WhatsApp, Instagram, Web, and voice calls.",
      images: [sematicaPreview],
      tags: ["AI", "Automation", "Multi-platform", "Voice AI"],
      liveUrl: "https://sematicake.vercel.app/",
      mainAppUrl: "https://sematica-main.vercel.app/",
      isPublic: true,
    },
    {
      title: "Budget Hair – Stock Management",
      description:
        "Custom-built stock management system for Budget Hair, a braids retail shop in Kenya. Features real-time inventory tracking, sales management, and automated restocking alerts.",
      images: [budgetHairPreview, budget2HairPreview],
      tags: ["React", "Inventory", "Real-time", "Retail"],
      isPublic: false,
      clientBased: true,
    },
    {
      title: "Reuben_FarmS",
      description:
        "Comprehensive Farm End-To-End Activity Manager designed to streamline agricultural operations. Manages crop cycles, inventory, worker scheduling, and financial tracking.",
      images: [farmManagerPreview, farmManager2Preview, farmManager3Preview],
      tags: ["Agriculture", "Management", "Analytics", "Scheduling"],
      isPublic: false,
      clientBased: true,
    },
    {
      title: "Expensifly.iO",
      description:
        "Modern expense tracking and management application with intelligent categorization, budget planning, and financial insights for businesses and individuals.",
      images: [expensiflyPreview, expensifly2Preview],
      tags: ["Finance", "Tracking", "Analytics", "Business"],
      liveUrl: "https://e-xpensefly-i-o.vercel.app/",
      isPublic: true,
    },
  ];

  const handleContactForDetails = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (images: string[], index: number) => {
    setCurrentImages(images.map((src) => ({ src })));
    setPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of innovative solutions delivering real business value
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-visible border border-gray-200 dark:border-gray-700 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 aspect-w-4 aspect-h-5">
                {project.images.length > 1 ? (
                  <Carousel
                    className="w-full h-full"
                    opts={{ loop: true, align: "center", dragFree: true }}
                    plugins={[Autoplay({ delay: 3000, stopOnInteraction: true})]}
                  >
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover rounded-t-lg cursor-pointer bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onClick={() => openLightbox(project.images, imgIndex)}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-blue-600/90 dark:bg-blue-700/90 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200" />
                    <CarouselNext className="right-2 bg-blue-600/90 dark:bg-blue-700/90 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200" />
                  </Carousel>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover rounded-t-lg cursor-pointer bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onClick={() => openLightbox(project.images, 0)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <CardHeader className="p-4 sm:p-5">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  {project.clientBased && (
                    <Badge 
                      variant="secondary" 
                      className="ml-2 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md border border-blue-300 dark:border-blue-700"
                    >
                      Client Project
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs sm:text-sm bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 min-h-[40px] sm:min-h-[48px]">
                  {project.isPublic ? (
                    <>
                      <Button 
                        variant="hero" 
                        size="sm" 
                        asChild 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 min-w-[100px]"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                          View Live
                        </a>
                      </Button>
                      {project.mainAppUrl && (
                        <Button 
                          variant="glass" 
                          size="sm" 
                          asChild 
                          className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 min-w-[100px]"
                        >
                          <a href={project.mainAppUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                            Main App
                          </a>
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button
                      onClick={handleContactForDetails}
                      variant="hero"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 min-w-[100px]"
                    >
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                      Contact for Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            Interested in seeing more projects or discussing a custom solution?
          </p>
          <Button
            onClick={handleContactForDetails}
            variant="glass"
            size="lg"
            className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          slides={currentImages}
          open={isLightboxOpen}
          index={photoIndex}
          close={() => setIsLightboxOpen(false)}
          on={{ view: ({ index }: { index: number }) => setPhotoIndex(index) }}
          carousel={{ finite: currentImages.length === 1 }}
          render={{
            buttonPrev: currentImages.length > 1 ? undefined : () => null,
            buttonNext: currentImages.length > 1 ? undefined : () => null,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            slide: { padding: "8px sm:16px" },
          }}
        />
      )}
    </section>
  );
};

export default Projects;