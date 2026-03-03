import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Über uns
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Qualität aus Überzeugung.<br />Vertrauen durch Erfahrung.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl font-bold mb-6">Inhabergeführt seit über 30 Jahren</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ERCA Dienstleistungen ist ein inhabergeführtes Unternehmen mit über 30 Jahren Erfahrung. Gegründet von Erkan Catak, steht das Unternehmen für Zuverlässigkeit, Sauberkeit und professionelle Ausführung.
                </p>
                <p>
                  Wir betreuen Privatkunden und Hausverwaltungen in ganz Berlin – von der Objektbetreuung über Sanierungen bis hin zu Entrümpelungen und barrierefreien Umbauten. Unser Anspruch: Jeder Auftrag wird mit der gleichen Sorgfalt ausgeführt.
                </p>
                <p>
                  Als Berliner Unternehmen kennen wir die Bedürfnisse unserer Kunden genau. Persönliche Beratung, faire Preise und eine saubere Ausführung sind für uns selbstverständlich.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-secondary rounded-3xl p-10">
                <h3 className="font-heading text-xl font-bold mb-8">Unsere Werte</h3>
                <div className="space-y-6">
                  {[
                    { title: "Zuverlässigkeit", text: "Termingerecht und verbindlich – auf uns können Sie sich verlassen." },
                    { title: "Sauberkeit", text: "Wir hinterlassen jeden Arbeitsplatz sauberer als wir ihn vorgefunden haben." },
                    { title: "Qualität", text: "Hochwertige Materialien und professionelle Ausführung in jedem Detail." },
                    { title: "Fairness", text: "Transparente Preise ohne versteckte Kosten – immer ehrlich und direkt." },
                    { title: "Kundennähe", text: "Persönliche Beratung und individuelle Lösungen für jeden Auftrag." },
                  ].map((item) => (
                    <div key={item.title} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="section-padding">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Überzeugen Sie sich selbst
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;
