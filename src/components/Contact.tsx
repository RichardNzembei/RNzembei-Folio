import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses and real-time communication",
      link: "https://wa.me/+254700000000",
      display: "+254 700 000 000"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and career updates",
      link: "https://linkedin.com/in/reuben-nzembei",
      display: "linkedin.com/in/reuben-nzembei"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Code repositories and open source contributions",
      link: "https://github.com/reuben-nzembei",
      display: "github.com/reuben-nzembei"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed project discussions",
      link: "mailto:reuben.nzembei@email.com",
      display: "reuben.nzembei@email.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="glass-card hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.link, '_blank')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">{method.display}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="glass-card text-center">
            <CardContent className="pt-8 pb-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you need a complete web application, mobile app, enterprise system, 
                  or just want to discuss your ideas, I'm here to help turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={() => window.open('https://wa.me/+254700000000', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Start a Conversation
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg"
                    onClick={() => window.open('mailto:reuben.nzembei@email.com', '_blank')}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send an Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center mt-8 space-y-2">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Based in Kenya, Available Worldwide</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>Flexible hours for global collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;