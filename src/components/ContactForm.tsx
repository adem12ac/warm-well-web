import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Nachricht gesendet! Wir melden uns zeitnah bei Ihnen.");
  };

  const contactInfo = [
    { icon: MapPin, label: "Musterstraße 42, 12345 Musterstadt" },
    { icon: Phone, label: "0123 456 789" },
    { icon: Mail, label: "info@waerme-wasser.de" },
    { icon: Clock, label: "Mo–Fr 08:00–17:00 Uhr" },
  ];

  return (
    <section id="kontakt" className="section-padding bg-warm-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Sprechen Sie <span className="text-gradient">uns an</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Wir beraten Sie gerne – kostenlos und unverbindlich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground pt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center py-16 gap-4 bg-card rounded-lg border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Vielen Dank!</h3>
                <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
                  Weitere Nachricht senden
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-card p-6 md:p-8 rounded-lg border">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" required placeholder="max@beispiel.de" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="0123 456 789" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Betreff</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="heizung">Heizung</SelectItem>
                        <SelectItem value="sanitaer">Sanitär</SelectItem>
                        <SelectItem value="wartung">Wartung</SelectItem>
                        <SelectItem value="notdienst">Notdienst</SelectItem>
                        <SelectItem value="bestellung">Produktanfrage</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea id="message" required placeholder="Wie können wir Ihnen helfen?" rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full">Nachricht senden</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
