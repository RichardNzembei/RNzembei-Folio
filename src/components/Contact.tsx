import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses and real-time communication",
      link: "https://wa.me/+254716899396",
      display: "+254 716899396"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and career updates",
      link: "https://www.linkedin.com/in/richard-reuben9/",
      display: "linkedin.com/in/reuben-nzembei"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Code repositories and open source contributions",
      link: "https://github.com/RichardNzembei",
      display: "github.com/reuben-nzembei"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed project discussions",
      link: "mailto:richardsonreuben78@gmail.com",
      display: "reuben.nzembei@email.com"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.link, '_blank')}
              >
                <CardHeader className="pb-2 sm:pb-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-105 transition-transform duration-200">
                      <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{method.title}</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{method.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 sm:pt-3">
                  <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 break-all">{method.display}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Ready to Start Your Project?</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Whether you need a complete web application, mobile app, enterprise system, 
                  or just want to discuss your ideas, I'm here to help turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
                    onClick={() => window.open('https://wa.me/+254716899396', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Start a Conversation
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 border border-gray-300 dark:border-gray-600 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
                    onClick={() => window.open('mailto:richardsonreuben78@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Send an Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center mt-6 sm:mt-8 space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Based in Kenya, Available Worldwide</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Flexible hours for global collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;