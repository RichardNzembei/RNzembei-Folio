import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      link: "https://wa.me/+254716899396",
      display: "+254 716899396"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nzembei-reuben/",
      display: "linkedin.com/in/nzembei-reuben"
    },
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/RichardNzembei",
      display: "github.com/RichardNzembei"
    },
    {
      icon: Mail,
      title: "Email",
      link: "mailto:richardsonreuben78@gmail.com",
      display: "richardsonreuben78@gmail.com"
    }
  ];

  return (
      <section id="contact" className="py-6 sm:py-10 px-6 bg-white dark:bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 sm:mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-black dark:text-white tracking-tight">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Ready to start a conversation?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden mb-12">
              {contactMethods.map((method, index) => (
                  <button
                      key={method.title}
                      onClick={() => window.open(method.link, '_blank')}
                      className="bg-white dark:bg-black p-8 sm:p-10 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all duration-300 text-left group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'fadeIn 0.6s ease-out forwards',
                        opacity: 0
                      }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-black dark:group-hover:border-white transition-all duration-300">
                        <method.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-light text-black dark:text-white mb-2">{method.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-light break-all">{method.display}</p>
                      </div>
                    </div>
                  </button>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden">
              <CardContent className="p-10 sm:p-16 text-center">
                <h3 className="text-2xl sm:text-3xl font-light mb-4 text-black dark:text-white tracking-tight">
                  Start Your Project
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                  Whether you need a complete application or want to discuss your ideas,
                  I'm here to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-base py-6 px-10 rounded-full font-light tracking-wide border-0"
                      onClick={() => window.open('https://wa.me/+254716899396', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                      className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 border border-gray-300 dark:border-gray-700 text-base py-6 px-10 rounded-full font-light tracking-wide"
                      onClick={() => window.open('mailto:richardsonreuben78@gmail.com', '_blank')}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
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

export default Contact;