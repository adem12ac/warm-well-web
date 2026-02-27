import { Flame, Droplets, Wrench, ShieldCheck, ThermometerSun, Pipette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Flame,
    title: "Heizungsinstallation",
    desc: "Einbau moderner Heizungsanlagen – von Gas über Öl bis hin zu Wärmepumpen und Solarthermie.",
  },
  {
    icon: Droplets,
    title: "Sanitärinstallation",
    desc: "Komplette Badezimmer-Installationen, Wasseranschlüsse und Abwassersysteme aus einer Hand.",
  },
  {
    icon: Wrench,
    title: "Wartung & Reparatur",
    desc: "Regelmäßige Wartung und schnelle Reparaturen für Ihre Heizungs- und Sanitäranlagen.",
  },
  {
    icon: ThermometerSun,
    title: "Energieberatung",
    desc: "Beratung zu energieeffizienten Lösungen und Fördermöglichkeiten für Ihre Modernisierung.",
  },
  {
    icon: Pipette,
    title: "Rohrsanierung",
    desc: "Professionelle Rohrsanierung und Leckortung mit modernster Technik.",
  },
  {
    icon: ShieldCheck,
    title: "Notdienst 24/7",
    desc: "Rohrbruch oder Heizungsausfall? Unser Notdienst ist rund um die Uhr für Sie da.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-warm-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Kompetenz in <span className="text-gradient">Heizung & Sanitär</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Planung bis zur Umsetzung – wir bieten Ihnen das volle Leistungsspektrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={service.title}
              className="group border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
