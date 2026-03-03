import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Über ERCA
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ihr zuverlässiger Partner seit über 30 Jahren
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ERCA Dienstleistungen ist ein inhabergeführtes Unternehmen mit über 30 Jahren Erfahrung in der Immobilienbetreuung, Sanierung und Entrümpelung. Wir betreuen Privatkunden und Hausverwaltungen in ganz Berlin.
              </p>
              <p>
                Unser Anspruch: Jeder Auftrag wird mit höchster Sorgfalt und Professionalität ausgeführt – egal ob kleine Reparatur oder komplette Wohnungssanierung. Ihre Zufriedenheit ist unser Maßstab.
              </p>
            </div>
            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6"
            >
              Mehr über uns
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30+", label: "Jahre Erfahrung" },
                { value: "Berlin", label: "Unser Einsatzgebiet" },
                { value: "24h", label: "Erreichbarkeit" },
                { value: "100%", label: "Kundenzufriedenheit" },
              ].map((item) => (
                <div key={item.label} className="bg-secondary rounded-2xl p-6 text-center border border-border">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-primary block">{item.value}</span>
                  <span className="text-muted-foreground text-xs uppercase tracking-wider mt-1 block">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
