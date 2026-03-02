import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, CheckCircle2, Users, Shield, Clock, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectWohnanlage from "@/assets/project-wohnanlage.jpg";
import projectSeniorenheim from "@/assets/project-seniorenheim.jpg";

const benefits = [
  { icon: FileText, title: "Rahmenverträge & SLAs", description: "Individuelle Service-Level-Agreements mit klar definierten Reaktionszeiten und Leistungskennzahlen." },
  { icon: Users, title: "Persönliche Ansprechpartner", description: "Ein fester Projektleiter für Ihr Portfolio – Kontinuität und kurze Kommunikationswege." },
  { icon: Shield, title: "Dokumentierte Qualität", description: "Lückenlose Berichterstattung nach Ihren Standards – digital, transparent und revisionssicher." },
  { icon: Clock, title: "Priorisierter Notdienst", description: "24/7-Erreichbarkeit mit garantierten Reaktionszeiten für Ihre Objekte." },
];

const targetGroups = [
  "Hausverwaltungen",
  "Wohnungsbaugesellschaften",
  "Immobilieninvestoren & -fonds",
  "Betreiber von Pflegeheimen",
  "Studentenwerke",
  "Gewerbeimmobilien-Eigentümer",
];

const Grosskunden = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Großkunden
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ihr strategischer Partner für Großprojekte
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Wir betreuen Immobilienportfolios mit Hunderten von Wohneinheiten. Skalierbar, zuverlässig und mit einem einzigen Ansprechpartner.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Target groups */}
          <AnimatedSection className="bg-foreground text-background rounded-3xl p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Unsere Zielkunden</h2>
                <p className="text-background/60 mb-8">
                  Wir verstehen die spezifischen Anforderungen jeder Branche und bieten maßgeschneiderte Lösungen für:
                </p>
                <ul className="space-y-4">
                  {targetGroups.map((group) => (
                    <li key={group} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-background/80">{group}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity mt-10"
                >
                  Partnerschaft anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={projectWohnanlage} alt="Wohnanlage" className="rounded-2xl w-full aspect-[3/4] object-cover" />
                <img src={projectSeniorenheim} alt="Seniorenheim" className="rounded-2xl w-full aspect-[3/4] object-cover mt-8" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grosskunden;
