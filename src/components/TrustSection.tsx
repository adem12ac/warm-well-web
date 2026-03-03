import { Shield, Clock, Sparkles, ThumbsUp, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const advantages = [
  { icon: Shield, title: "Zuverlässig", description: "Pünktlich, verbindlich und immer erreichbar – darauf können Sie sich verlassen." },
  { icon: Clock, title: "Schnell", description: "Kurze Reaktionszeiten und flexible Terminplanung für Ihre Projekte." },
  { icon: Sparkles, title: "Sauber", description: "Wir hinterlassen jeden Arbeitsplatz sauberer als wir ihn vorgefunden haben." },
  { icon: ThumbsUp, title: "Fair", description: "Transparente Preise ohne versteckte Kosten. Sie wissen immer, was Sie erwartet." },
  { icon: CheckCircle, title: "Professionell", description: "Über 30 Jahre Erfahrung und qualifizierte Fachkräfte für jedes Gewerk." },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Warum ERCA?
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ihre Vorteile mit uns
          </h2>
          <p className="text-muted-foreground">
            Wir stehen für Qualität, Sauberkeit und Zuverlässigkeit – bei jedem Projekt, egal wie groß oder klein.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-6 text-center h-full border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
