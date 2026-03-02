import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Thermometer, Building2, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceHeating from "@/assets/service-heating.jpg";
import serviceProperty from "@/assets/service-property.jpg";

const services = [
  {
    icon: Hammer,
    title: "Sanierung & Bau",
    description: "Komplettsanierungen, Wohnungsmodernisierungen und schlüsselfertige Übergaben. Von der Badsanierung bis zur Fassadenrenovierung.",
    image: serviceRenovation,
    features: ["Wohnungssanierung", "Badsanierung", "Malerarbeiten", "Bodenbeläge", "Küchen- & Innenausbau"],
  },
  {
    icon: Thermometer,
    title: "Heizung & Sanitär",
    description: "Installation, Modernisierung und Wartung aller Heizungs- und Sanitäranlagen. 24h-Notdienst bei Rohrbruch und Heizungsausfall.",
    image: serviceHeating,
    features: ["Heizungsinstallation", "Sanitärinstallation", "Wartung & Reparatur", "Badsanierung", "24h-Notdienst"],
  },
  {
    icon: Building2,
    title: "Objektbetreuung",
    description: "Technisches Gebäudemanagement, Hausmeisterservice und professionelle Betreuung für Wohnanlagen, Pflegeheime und Gewerbe.",
    image: serviceProperty,
    features: ["Hausmeisterservice", "Gebäudemanagement", "Winterdienst", "Grünanlagenpflege", "Sicherheitskontrollgänge"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Leistungsspektrum
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Drei Fachbereiche.{" "}
            <span className="text-primary">Ein Partner.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Wir bieten ein vollständiges Dienstleistungsportfolio rund um Ihre Immobilie – von der täglichen Betreuung bis zur umfassenden Sanierung.
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              direction={i % 2 === 0 ? "left" : "right"}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
              </div>

              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
