import { Card, CardContent } from "@/components/ui/card";
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
      <section className="py-20 sm:py-32 px-6 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 sm:mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-black dark:text-white tracking-tight">
              What I Do
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Comprehensive solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            {services.map((service, index) => (
                <Card
                    key={service.title}
                    className="bg-white dark:bg-black border-0 rounded-none group transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-950"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeIn 0.6s ease-out forwards',
                      opacity: 0
                    }}
                >
                  <CardContent className="p-8 sm:p-12 flex flex-col items-center text-center h-full">
                    <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                      <service.icon className="h-12 w-12 text-black dark:text-white stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light mb-4 text-black dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
            ))}
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

export default Services;