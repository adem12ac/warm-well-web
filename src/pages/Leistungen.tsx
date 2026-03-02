import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Hammer, Thermometer, Building2, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceHeating from "@/assets/service-heating.jpg";
import serviceProperty from "@/assets/service-property.jpg";

const services = [
  {
    id: "sanierung",
    icon: Hammer,
    title: "Sanierung & Bau",
    subtitle: "Neue Qualität für Ihre Immobilie",
    description: "Von der Schönheitsrenovierung bis zur Komplettsanierung bieten wir das vollständige Handwerks-Paket. Wir koordinieren alle Gewerke und sind Ihr einziger Ansprechpartner – termingerecht und budgettreu.",
    image: serviceRenovation,
    features: [
      "Wohnungssanierung nach Mieterwechsel",
      "Schimmel- & Feuchtigkeitsbeseitigung",
      "Malerarbeiten & Bodenbeläge",
      "Komplette Badsanierung",
      "Küchen- & Innenausbau",
      "Fassadensanierung & Außenarbeiten",
      "Trockenbau & Raumaufteilung",
      "Schlüsselfertige Übergabe",
    ],
  },
  {
    id: "heizung",
    icon: Thermometer,
    title: "Heizung & Sanitär",
    subtitle: "Wärme & Komfort auf höchstem Niveau",
    description: "Von der Heizungsinstallation über Badsanierungen bis zum 24h-Notdienst – wir sorgen für funktionsfähige und effiziente Haustechnik. Qualifiziert und normgerecht ausgeführt.",
    image: serviceHeating,
    features: [
      "Heizungsinstallation & -modernisierung",
      "Wartung & Reparatur aller Anlagen",
      "Komplette Badsanierungen",
      "Sanitärinstallationen aller Art",
      "Rohrleitungsbau & -sanierung",
      "Thermografie & Energieberatung",
      "Wärmepumpen & Solarthermie",
      "24h-Notdienst bei Rohrbruch & Heizungsausfall",
    ],
  },
  {
    id: "objektbetreuung",
    icon: Building2,
    title: "Objektbetreuung & Hausmeisterservice",
    subtitle: "Full-Service für Ihren Immobilienbestand",
    description: "Als erfahrener Objektbetreuer übernehmen wir die Verantwortung für den technischen und infrastrukturellen Betrieb Ihrer Immobilien – transparent, dokumentiert und zuverlässig.",
    image: serviceProperty,
    features: [
      "Technisches Gebäudemanagement",
      "Regelmäßige Begehungen & Dokumentation",
      "Koordination von Handwerkern & Firmen",
      "Grünanlagenpflege & Außenanlagen",
      "Winterdienst & Streupflicht",
      "Brandschutz & Sicherheitstechnik",
      "Kleinreparaturen & Instandhaltung",
      "Aufzugüberwachung & -wartung",
    ],
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Leistungen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unser Leistungs&shy;spektrum
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Drei Fachbereiche, ein kompetenter Partner. Wir bieten ein vollständiges Dienstleistungsportfolio rund um Ihre Immobilie.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
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
                    Jetzt anfragen
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
