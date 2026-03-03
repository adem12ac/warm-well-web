import { Link } from "react-router-dom";
import { ArrowRight, Building2, Hammer, Trash2, Accessibility, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import serviceObjektbetreuung from "@/assets/service-objektbetreuung.jpg";
import serviceSanierung from "@/assets/service-sanierung-new.jpg";
import serviceEntsorgung from "@/assets/service-entsorgung.jpg";
import serviceBarrierefrei from "@/assets/service-barrierefrei.jpg";
import serviceUmzug from "@/assets/service-umzug.jpg";

const services = [
  {
    icon: Building2,
    title: "Objektbetreuung & Hausmeisterservice",
    description: "Professionelle Betreuung Ihrer Immobilien in Berlin – von der regelmäßigen Inspektion bis zur Grünanlagenpflege und dem Winterdienst.",
    image: serviceObjektbetreuung,
    features: ["Hausmeisterservice", "Gebäudebegehungen", "Winterdienst", "Grünanlagenpflege", "Kleinreparaturen"],
  },
  {
    icon: Hammer,
    title: "Sanierung & Renovierung",
    description: "Wohnungssanierungen, Malerarbeiten, Bodenverlegung und Innenausbau – sauber, termingerecht und in höchster Qualität.",
    image: serviceSanierung,
    features: ["Wohnungssanierung", "Malerarbeiten", "Bodenbeläge", "Trockenbau", "Innenausbau"],
  },
  {
    icon: Trash2,
    title: "Entsorgung & Entrümpelung",
    description: "Professionelle Entrümpelungen, Wohnungsauflösungen und fachgerechte Entsorgung – schnell und zuverlässig in ganz Berlin.",
    image: serviceEntsorgung,
    features: ["Entrümpelung", "Wohnungsauflösung", "Sperrmüllentsorgung", "Kellerräumung", "Fachgerechte Entsorgung"],
  },
  {
    icon: Accessibility,
    title: "Barrierefreie Sanierung",
    description: "Altersgerechte Umbauten und barrierefreie Badsanierungen für mehr Sicherheit und Komfort im eigenen Zuhause.",
    image: serviceBarrierefrei,
    features: ["Barrierefreie Bäder", "Ebenerdige Duschen", "Haltegriffe & Stützklappgriffe", "Schwellenlose Übergänge", "Altersgerechter Umbau"],
  },
  {
    icon: Truck,
    title: "Kleiner Umzugsservice",
    description: "Für Privatkunden in Berlin – wir helfen beim Ein- und Auspacken, Tragen und Transportieren. Unkompliziert und günstig.",
    image: serviceUmzug,
    features: ["Möbeltransport", "Ein- & Auspacken", "Möbelaufbau", "Innerstädtische Umzüge", "Flexible Termine"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding" id="leistungen">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Unsere Leistungen
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Alles aus einer Hand.{" "}
            <span className="text-primary">Ihr Partner in Berlin.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Objektbetreuung über Sanierungen bis hin zur Entrümpelung – wir bieten Ihnen ein umfassendes Leistungspaket.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
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
                  Kostenloses Angebot anfordern
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
