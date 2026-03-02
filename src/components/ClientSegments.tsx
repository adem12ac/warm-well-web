import { Link } from "react-router-dom";
import { Building2, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ClientSegments = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Maßgeschneidert
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Für jeden Kunden die{" "}
            <span className="text-primary">richtige Lösung</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Großkunden */}
          <AnimatedSection direction="left">
            <div className="relative overflow-hidden rounded-2xl bg-foreground text-background p-10 md:p-14 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">Großkunden</h3>
                <p className="text-background/60 mb-8">
                  Für Hausverwaltungen, Wohnungsbaugesellschaften und Immobilieninvestoren – professionelles Facility Management mit planbaren Kosten.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Individuelle Rahmenverträge & SLAs",
                    "Dokumentierte Berichterstattung",
                    "Priorisierte Notfall-Reaktionszeiten",
                    "Betreuung mehrerer Objekte gleichzeitig",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-background/70">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/grosskunden"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Privatkunden */}
          <AnimatedSection direction="right">
            <div className="relative overflow-hidden rounded-2xl bg-secondary border border-border p-10 md:p-14 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">Privatkunden</h3>
                <p className="text-muted-foreground mb-8">
                  Als Eigentümer oder privater Vermieter verdienen Sie dieselbe professionelle Qualität wie Großkunden.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Faire Preise ohne versteckte Kosten",
                    "Persönliche Beratung & Vor-Ort-Termine",
                    "Transparente Kostenvoranschläge",
                    "Ausführung nach Ihren Wünschen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/privatkunden"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ClientSegments;
