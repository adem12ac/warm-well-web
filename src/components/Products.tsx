import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Viessmann Vitodens 200-W", category: "Heizkessel", price: "ab 3.890 €", desc: "Gas-Brennwertkessel mit bis zu 98% Wirkungsgrad für maximale Energieeffizienz." },
  { id: 2, name: "Grohe Euphoria Duschsystem", category: "Sanitär", price: "ab 489 €", desc: "Luxuriöses Aufputz-Duschsystem mit Thermostat und Regendusche." },
  { id: 3, name: "Buderus Logatherm WPS", category: "Wärmepumpe", price: "ab 8.990 €", desc: "Sole-Wasser-Wärmepumpe für nachhaltige und effiziente Beheizung." },
  { id: 4, name: "Hansgrohe Waschtischarmatur", category: "Sanitär", price: "ab 189 €", desc: "Elegante Einhebel-Waschtischarmatur mit ComfortZone Technologie." },
  { id: 5, name: "Vaillant aroTHERM plus", category: "Wärmepumpe", price: "ab 12.500 €", desc: "Luft-Wasser-Wärmepumpe mit natürlichem Kältemittel R290." },
  { id: 6, name: "Geberit Duofix Element", category: "Installation", price: "ab 159 €", desc: "Vorwandelement für Wand-WC mit Spülkasten UP320." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const Products = () => {
  const [selected, setSelected] = useState<typeof products[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Anfrage gesendet! Wir melden uns bei Ihnen.");
    setTimeout(() => {
      setSelected(null);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="produkte" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Unser Sortiment</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Produkte <span className="text-gradient">bestellen</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hochwertige Markenprodukte – direkt bei uns anfragen und professionell installieren lassen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    <span className="text-sm font-semibold text-primary">{product.price}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                  <Button
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    onClick={() => setSelected(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Jetzt anfragen
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Order Dialog */}
        <Dialog open={!!selected} onOpenChange={() => { setSelected(null); setSubmitted(false); }}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading">Produkt anfragen</DialogTitle>
              <DialogDescription>
                {selected?.name} – {selected?.price}
              </DialogDescription>
            </DialogHeader>

            {submitted ? (
              <div className="flex flex-col items-center py-8 gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Anfrage gesendet!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="order-name">Name *</Label>
                  <Input id="order-name" required placeholder="Max Mustermann" />
                </div>
                <div>
                  <Label htmlFor="order-email">E-Mail *</Label>
                  <Input id="order-email" type="email" required placeholder="max@beispiel.de" />
                </div>
                <div>
                  <Label htmlFor="order-phone">Telefon</Label>
                  <Input id="order-phone" type="tel" placeholder="0123 456 789" />
                </div>
                <div>
                  <Label htmlFor="order-message">Nachricht</Label>
                  <Textarea id="order-message" placeholder="Besondere Wünsche oder Fragen..." rows={3} />
                </div>
                <Button type="submit" className="w-full">Unverbindlich anfragen</Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;
