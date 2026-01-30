import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="bg-gradient-navy min-h-screen flex items-center pt-20">
      <div className="container-narrow section-padding">
        <div className="max-w-3xl">
          <p className="text-gold font-medium mb-4 animate-fade-up">
            Professional Bookkeeping Services
          </p>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animate-delay-100">
            Keep Your Books{" "}
            <span className="text-gradient-gold">Organized</span>,
            <br />
            Focus on Growing Your Business
          </h1>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-up animate-delay-200">
            I help small businesses and entrepreneurs maintain accurate financial records, 
            so you can make informed decisions and focus on what you do best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animate-delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => scrollToSection("#services")}
            >
              View Services
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90 animate-fade-up animate-delay-300">
            {["10+ Years Experience", "Personalized Service", "Affordable Rates"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
