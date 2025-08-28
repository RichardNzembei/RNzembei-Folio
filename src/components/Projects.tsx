import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Eye, MessageCircle } from "lucide-react";
import sematicaPreview from "@/assets/sematica.png";
import budgetHairPreview from "@/assets/budget1.jpeg";
import budget2HairPreview from "@/assets/budget2.jpeg";
import farmManagerPreview from "@/assets/farm1.jpeg";
import farmManager2Preview from "@/assets/farm2.jpeg";
import farmManager3Preview from "@/assets/farm3.jpeg";
import expensiflyPreview from "@/assets/expe1.jpeg";
import expensifly2Preview from "@/assets/expe2.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Sematica",
      description: "AI-first Voice + Chat + Commerce automation platform designed for modern businesses. Automates customer engagement, sales, and AI-enhanced support across WhatsApp, Instagram, Web, and voice calls.",
      images: [sematicaPreview],
      tags: ["AI", "Automation", "Multi-platform", "Voice AI"],
      liveUrl: "https://sematicake.vercel.app/",
      mainAppUrl: "https://sematica-main.vercel.app/",
      isPublic: true
    },
    {
      title: "Budget Hair – Stock Management",
      description: "Custom-built stock management system for Budget Hair, a braids retail shop in Kenya. Features real-time inventory tracking, sales management, and automated restocking alerts.",
      images: [budgetHairPreview, budget2HairPreview],
      tags: ["React", "Inventory", "Real-time", "Retail"],
      isPublic: false,
      clientBased: true
    },
    {
      title: "Reuben_FarmS",
      description: "Comprehensive Farm End-To-End Activity Manager designed to streamline agricultural operations. Manages crop cycles, inventory, worker scheduling, and financial tracking.",
      images: [farmManagerPreview, farmManager2Preview, farmManager3Preview],
      tags: ["Agriculture", "Management", "Analytics", "Scheduling"],
      isPublic: false,
      clientBased: true
    },
    {
      title: "Expensifly.iO",
      description: "Modern expense tracking and management application with intelligent categorization, budget planning, and financial insights for businesses and individuals.",
      images: [expensiflyPreview, expensifly2Preview],
      tags: ["Finance", "Tracking", "Analytics", "Business"],
      liveUrl: "https://sematicake.vercel.app/",
      isPublic: true
    }
  ];

  const handleContactForDetails = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions delivering real business value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card hover-glow group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                {project.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold gradient-text">
                    {project.title}
                  </CardTitle>
                  {project.clientBased && (
                    <Badge variant="secondary" className="ml-2">Client Project</Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.isPublic ? (
                    <>
                      <Button variant="hero" size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      {project.mainAppUrl && (
                        <Button variant="glass" size="sm" asChild className="flex-1">
                          <a href={project.mainAppUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
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
                      className="flex-1"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact for Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a custom solution?
          </p>
          <Button onClick={handleContactForDetails} variant="glass" size="lg">
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;