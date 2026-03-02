import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "1993", text: "Erkan Catak beginnt seine Ausbildung in Metallbau und Sanitärtechnik" },
  { year: "2000", text: "Erste eigenständige Projekte in der Objektbetreuung" },
  { year: "2010", text: "Erweiterung des Leistungsspektrums um Komplettsanierungen" },
  { year: "2015", text: "Betreuung erster Seniorenwohnanlagen und Pflegeheime" },
  { year: "2020", text: "Über 500 erfolgreich abgeschlossene Projekte" },
  { year: "Heute", text: "Einer der führenden Dienstleister in Essen und Region" },
];

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
              Qualität durch Kompetenz.<br />Vertrauen durch Erfahrung.
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
                  ERCA Dienstleistungen ist ein inhabergeführtes Fachunternehmen aus Essen mit über 30 Jahren Branchenerfahrung. Gegründet und geführt von Erkan Catak, der 1993 mit einer fundierten technischen Ausbildung in den Bereichen Metallbau und Sanitärtechnik begann.
                </p>
                <p>
                  Heute betreuen wir Seniorenwohnanlagen, betreutes Wohnen, Studentenwohnheime und privatgenutzte Immobilien in Essen und der gesamten Region. Unser Anspruch: Jeder Auftrag wird mit der gleichen Sorgfalt ausgeführt – ob Routine-Begehung oder komplexe Sanierung.
                </p>
                <p>
                  Über 25 Fachzertifikate von TÜV, Würth Akademie, BGW und weiteren renommierten Institutionen belegen unsere kontinuierliche Weiterbildung und unser Streben nach höchster Qualität.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-secondary rounded-3xl p-10">
                <h3 className="font-heading text-xl font-bold mb-8">Unsere Geschichte</h3>
                <div className="space-y-6">
                  {milestones.map((m) => (
                    <div key={m.year} className="flex gap-4">
                      <span className="text-primary font-bold text-sm w-14 shrink-0 pt-0.5">{m.year}</span>
                      <div className="flex-1 pb-6 border-b border-border last:border-0 last:pb-0">
                        <p className="text-sm">{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Unsere Werte</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Zuverlässigkeit", description: "Termingerecht, budgettreu und mit höchster Sorgfalt – auf uns können Sie sich verlassen." },
              { title: "Qualität", description: "Nur die besten Materialien und normgerechte Ausführung. Zertifiziert und dokumentiert." },
              { title: "Partnerschaft", description: "Wir denken langfristig. Unser Erfolg ist Ihre Zufriedenheit." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="section-padding">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Bereit für eine Zusammenarbeit?
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Kontakt aufnehmen
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
