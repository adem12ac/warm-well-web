import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Moderne Badezimmer Installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Ihr Partner für Heizung & Sanitär</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Wärme & Komfort{" "}
            <span className="text-primary">für Ihr Zuhause</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professionelle Heizungs- und Sanitärinstallationen, Wartung und Reparaturen. 
            Qualität und Zuverlässigkeit seit über 20 Jahren.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-base gap-2" onClick={() => scrollTo("kontakt")}>
              Kostenlose Beratung <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Phone className="h-4 w-4" />
              0123 456 789
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "20+", label: "Jahre Erfahrung" },
              { value: "2.500+", label: "Zufriedene Kunden" },
              { value: "24h", label: "Notdienst" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
