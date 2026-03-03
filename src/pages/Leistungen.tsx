import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Hammer, Trash2, Accessibility, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceObjektbetreuung from "@/assets/service-objektbetreuung.jpg";
import serviceSanierung from "@/assets/service-sanierung-new.jpg";
import serviceEntsorgung from "@/assets/service-entsorgung.jpg";
import serviceBarrierefrei from "@/assets/service-barrierefrei.jpg";
import serviceUmzug from "@/assets/service-umzug.jpg";

const services = [
  {
    id: "objektbetreuung",
    icon: Building2,
    title: "Objektbetreuung & Hausmeisterservice",
    subtitle: "Professionelle Immobilienbetreuung in Berlin",
    description: "Als erfahrener Objektbetreuer übernehmen wir die Verantwortung für den technischen und infrastrukturellen Betrieb Ihrer Immobilien – transparent, dokumentiert und zuverlässig.",
    image: serviceObjektbetreuung,
    features: [
      "Regelmäßige Gebäudebegehungen",
      "Grünanlagenpflege & Außenanlagen",
      "Winterdienst & Streupflicht",
      "Kleinreparaturen & Instandhaltung",
      "Treppenhausreinigung",
      "Koordination von Handwerkern",
    ],
  },
  {
    id: "sanierung",
    icon: Hammer,
    title: "Sanierung & Renovierung",
    subtitle: "Neue Qualität für Ihre Räume",
    description: "Von der Schönheitsrenovierung bis zur Komplettsanierung – wir bieten alle Gewerke aus einer Hand. Sauber, termingerecht und in höchster Qualität.",
    image: serviceSanierung,
    features: [
      "Wohnungssanierung nach Mieterwechsel",
      "Malerarbeiten & Tapezierarbeiten",
      "Bodenbeläge (Laminat, Vinyl, Fliesen)",
      "Trockenbau & Raumaufteilung",
      "Küchen- & Innenausbau",
      "Fassadenarbeiten",
    ],
  },
  {
    id: "entsorgung",
    icon: Trash2,
    title: "Entsorgung & Entrümpelung",
    subtitle: "Professionell und fachgerecht entsorgen",
    description: "Wohnungsauflösungen, Entrümpelungen und fachgerechte Entsorgung – schnell, diskret und umweltbewusst. Wir kümmern uns um alles.",
    image: serviceEntsorgung,
    features: [
      "Komplette Wohnungsauflösungen",
      "Kellerräumung & Dachbodenräumung",
      "Sperrmüllentsorgung",
      "Besenreine Übergabe",
      "Fachgerechte Entsorgung nach Vorschrift",
      "Nachmieter-freundliche Übergabe",
    ],
  },
  {
    id: "barrierefrei",
    icon: Accessibility,
    title: "Barrierefreie Sanierung",
    subtitle: "Wohnen ohne Hindernisse",
    description: "Wir schaffen barrierefreie Lebensräume – ebenerdige Duschen, rutschfeste Böden, Haltegriffe und schwellenlose Übergänge für mehr Sicherheit im Alltag.",
    image: serviceBarrierefrei,
    features: [
      "Ebenerdige Duschen",
      "Rutschfeste Bodenbeläge",
      "Haltegriffe & Stützklappgriffe",
      "Schwellenlose Übergänge",
      "Unterfahrbare Waschtische",
      "Altersgerechte Badgestaltung",
    ],
  },
  {
    id: "umzug",
    icon: Truck,
    title: "Kleiner Umzugsservice",
    subtitle: "Unkompliziert und günstig umziehen",
    description: "Unser privater Umzugsservice in Berlin – wir helfen beim Tragen, Transportieren und Aufbauen. Ideal für kleinere Umzüge und Einzelstücke.",
    image: serviceUmzug,
    features: [
      "Möbeltransport innerhalb Berlins",
      "Ein- und Auspackhilfe",
      "Möbelauf- und -abbau",
      "Flexible Terminplanung",
      "Günstige Pauschalpreise",
      "Einzelstück-Transport",
    ],
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Leistungen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unsere Dienstleistungen in Berlin
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Objektbetreuung, Sanierung, Entrümpelung, barrierefreie Umbauten und Umzugsservice – alles aus einer Hand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-32">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} id={service.id}>
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}>
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">{service.title}</h2>
                  <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    Kostenloses Angebot anfordern
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leistungen;
