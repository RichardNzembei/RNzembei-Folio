
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
    <section id="projects" className="py-16 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions delivering real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover-glow group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-32 sm:h-40 aspect-w-4 aspect-h-5">
                {project.images.length > 1 ? (
                  <Carousel
                    className="w-full"
                    opts={{ loop: true, align: "center", dragFree: true }}
                    plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                  >
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-contain rounded-lg shadow-sm cursor-pointer bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onClick={() => openLightbox(project.images, imgIndex)}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 bg-primary/80 text-white w-6 h-6" />
                    <CarouselNext className="right-1 bg-primary/80 text-white w-6 h-6" />
                  </Carousel>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain rounded-lg shadow-sm cursor-pointer bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onClick={() => openLightbox(project.images, 0)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold gradient-text">
                    {project.title}
                  </CardTitle>
                  {project.clientBased && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Client Project
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-3">
                  {project.isPublic ? (
                    <>
                      <Button variant="hero" size="sm" asChild className="flex-1 text-xs">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View Live
                        </a>
                      </Button>
                      {project.mainAppUrl && (
                        <Button
                          variant="glass"
                          size="sm"
                          asChild
                          className="flex-1 text-xs"
                        >
                          <a
                            href={project.mainAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
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
                      className="flex-1 text-xs"
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Contact for Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            Interested in seeing more projects or discussing a custom solution?
          </p>
          <Button
            onClick={handleContactForDetails}
            variant="glass"
            size="lg"
            className="text-sm"
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
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            slide: { padding: "16px" },
          }}
        />
      )}
    </section>
  );
};

export default Projects;