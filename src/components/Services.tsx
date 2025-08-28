import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Search, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices."
    },
    {
      icon: Database,
      title: "Enterprise Systems",
      description: "Scalable enterprise solutions that streamline business processes and improve operational efficiency."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that deliver exceptional user experiences on all devices."
    },
    {
      icon: Search,
      title: "Web Scraping",
      description: "Automated data extraction solutions to gather valuable insights from web sources efficiently."
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Beautiful, user-centered designs that combine aesthetics with functionality for optimal user engagement."
    },
    {
      icon: Settings,
      title: "System Management",
      description: "Comprehensive system administration and management solutions for optimal performance and security."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Services & Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-200 dark:border-gray-700 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;