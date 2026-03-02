import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Home, CheckCircle2, Heart, Euro, Calendar, MessageCircle } from "lucide-react";

const benefits = [
  { icon: Euro, title: "Faire Preise", description: "Transparente Kostenvoranschläge ohne versteckte Kosten – Sie wissen vorab, was es kostet." },
  { icon: MessageCircle, title: "Persönliche Beratung", description: "Individuelle Vor-Ort-Termine und persönliche Betreuung durch Ihren festen Ansprechpartner." },
  { icon: Calendar, title: "Flexible Termine", description: "Ausführung nach Ihren Wünschen und Ihrem Zeitplan – auch kurzfristig möglich." },
  { icon: Heart, title: "Sorgfältige Ausführung", description: "Dieselbe professionelle Qualität wie bei Großprojekten – für jede Objektgröße." },
];

const Privatkunden = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Privatkunden
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professionelle Qualität für Ihr Zuhause
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Ob einzelne Wohnung oder kleine Liegenschaft – wir betreuen Ihre Immobilie mit der gleichen Sorgfalt wie Großprojekte.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

          <AnimatedSection>
            <div className="bg-secondary rounded-3xl p-10 md:p-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
                Kostenlose Erstberatung anfragen
              </h2>
              <ContactForm compact />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privatkunden;
