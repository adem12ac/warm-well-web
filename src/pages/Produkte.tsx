import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const products = [
  { name: "Heizungswartung", description: "Jährliche Wartung für Gas-, Öl- oder Wärmepumpen-Heizungen. Inkl. Protokoll.", price: "ab 149 €", category: "Heizung" },
  { name: "Badsanierung Standard", description: "Komplettsanierung eines Bades bis 6 m². Fliesen, Sanitärobjekte, Installation.", price: "auf Anfrage", category: "Sanitär" },
  { name: "Badsanierung Premium", description: "Premium-Badsanierung mit hochwertigen Materialien und Design-Ausstattung.", price: "auf Anfrage", category: "Sanitär" },
  { name: "Wohnungssanierung", description: "Renovierung einer Wohnung nach Mieterwechsel. Maler, Boden, Kleinreparaturen.", price: "ab 2.500 €", category: "Sanierung" },
  { name: "Komplettsanierung", description: "Vollständige Modernisierung inkl. Elektro, Sanitär und Innenausbau.", price: "auf Anfrage", category: "Sanierung" },
  { name: "Hausmeisterservice", description: "Monatliche Objektbetreuung inkl. Kontrollgänge, Kleinreparaturen und Winterdienst.", price: "ab 350 €/Monat", category: "Betreuung" },
  { name: "Objektbetreuung Premium", description: "Full-Service-Betreuung mit Dokumentation, Koordination und Notdienst-Bereitschaft.", price: "auf Anfrage", category: "Betreuung" },
  { name: "Notdienst 24h", description: "Sofortige Hilfe bei Rohrbruch, Heizungsausfall oder anderen Notfällen. 24/7 erreichbar.", price: "nach Aufwand", category: "Heizung" },
  { name: "Energieberatung", description: "Analyse Ihres Gebäudes und Empfehlung effizienter Heiz- und Dämmlösungen.", price: "ab 299 €", category: "Heizung" },
];

const Produkte = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Produkte & Preise
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparente Leistungspakete
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Klare Preise, keine versteckten Kosten. Alle Pakete sind individuell anpassbar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.05}>
                <div className="border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">{product.category}</span>
                  <h3 className="font-heading text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{product.description}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full gap-1"
                      onClick={() => setSelectedProduct(product.name)}
                    >
                      Anfragen <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Anfrage: {selectedProduct}</DialogTitle>
          </DialogHeader>
          <ContactForm prefillProduct={selectedProduct || ""} compact />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Produkte;
