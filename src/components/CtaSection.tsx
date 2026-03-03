import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CtaSection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Kostenloses Angebot anfordern
          </h2>
          <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
            Beschreiben Sie uns Ihr Projekt und wir erstellen Ihnen innerhalb von 24 Stunden ein unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+4915212971388"
              className="inline-flex items-center gap-2 border border-background/30 text-background px-8 py-4 rounded-full font-medium hover:bg-background/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +49 152 12 97 13 88
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
