import { Shield, Award, FileCheck, Lock, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const certifications = [
  { icon: Shield, title: "TÜV-zertifiziert", description: "Geprüfte Fachkraft für Gebäudetechnik und Sicherheit" },
  { icon: Award, title: "Würth Akademie", description: "Fortlaufende Weiterbildung in modernsten Techniken" },
  { icon: FileCheck, title: "BGW-geschult", description: "Arbeitssicherheit & Gesundheitsschutz nach höchsten Standards" },
  { icon: Lock, title: "DSGVO-konform", description: "Datenschutzkonforme Dokumentation und Kommunikation" },
  { icon: Zap, title: "Haftpflichtversichert", description: "Umfassender Versicherungsschutz für alle Aufträge" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Qualitätssicherung
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Zertifiziert & qualifiziert
          </h2>
          <p className="text-muted-foreground">
            Über 30 Jahre kontinuierliche Weiterbildung bei TÜV, Würth Akademie, BGW und weiteren renommierten Institutionen.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-6 text-center h-full border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{cert.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
