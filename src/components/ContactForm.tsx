import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

interface ContactFormProps {
  prefillSubject?: string;
  compact?: boolean;
}

const ContactForm = ({ prefillSubject, compact = false }: ContactFormProps) => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: "Bitte stimmen Sie der Datenschutzerklärung zu.", variant: "destructive" });
      return;
    }
    toast({ title: "Nachricht gesendet!", description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen." });
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  return (
    <section id="kontakt" className={compact ? "" : "section-padding"}>
      <div className="container">
        {!compact && (
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Kontakt
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Wir freuen uns auf{" "}
              <span className="text-primary">Ihre Anfrage</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Schreiben Sie uns oder rufen Sie an – wir antworten innerhalb von 24 Stunden.
            </p>
          </AnimatedSection>
        )}

        <div className={`grid ${compact ? "" : "lg:grid-cols-3"} gap-12`}>
          {!compact && (
            <AnimatedSection direction="left">
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Adresse", value: "Berlin" },
                  { icon: Phone, label: "Telefon", value: "+49 152 12 97 13 88", href: "tel:+4915212971388" },
                  { icon: Mail, label: "E-Mail", value: "info@erca-service.de", href: "mailto:info@erca-service.de" },
                  { icon: Clock, label: "Erreichbarkeit", value: "Mo–Fr: 08:00–18:00 Uhr" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection direction="right" className={compact ? "" : "lg:col-span-2"}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name *</label>
                  <Input placeholder="Max Mustermann" required className="h-12 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">E-Mail *</label>
                  <Input type="email" placeholder="max@beispiel.de" required className="h-12 rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefon *</label>
                  <Input type="tel" placeholder="+49 123 456 789" required className="h-12 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Betreff *</label>
                  <Select defaultValue={prefillSubject || ""}>
                    <SelectTrigger className="h-12 rounded-lg">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="objektbetreuung">Objektbetreuung / Hausmeisterservice</SelectItem>
                      <SelectItem value="sanierung">Sanierung & Renovierung</SelectItem>
                      <SelectItem value="entsorgung">Entsorgung & Entrümpelung</SelectItem>
                      <SelectItem value="barrierefrei">Barrierefreie Sanierung</SelectItem>
                      <SelectItem value="umzug">Umzugsservice</SelectItem>
                      <SelectItem value="angebot">Kostenloses Angebot</SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Nachricht *</label>
                <Textarea
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  required
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="dsgvo"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(!!v)}
                  className="mt-0.5"
                />
                <label htmlFor="dsgvo" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Ich habe die <Link to="/datenschutz" className="text-primary underline">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>
              <Button type="submit" size="lg" className="rounded-full px-8 gap-2">
                <Send className="h-4 w-4" />
                Nachricht senden
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
