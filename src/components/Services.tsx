import { Home, Wrench, PaintBucket, Package, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import serviceHausmeister from "@/assets/service-hausmeister.jpg";
import serviceTechnik from "@/assets/service-technik.jpg";
import serviceSanierung from "@/assets/service-sanierung.jpg";
import serviceMontage from "@/assets/service-montage.jpg";

const services = [
  {
    icon: Home,
    title: "Hausmeisterservice",
    desc: "Fachgerechte Betreuung komplexer Immobilien – von Seniorenwohnanlagen bis Studentenwohnheimen. Mit über 20 Jahren Erfahrung in der Immobilienbewirtschaftung.",
    details: [
      "Technischer Hausmeisterservice & Objektbetreuung",
      "Wartung und Kleinreparaturen im Innen- und Außenbereich",
      "Gefährdungsbeurteilungen & Brandschutzkontrollen",
      "Vertretungsservice bei Krankheit oder Urlaub",
      "Seniorengerechte Umbauten & Wohnungsanpassungen",
    ],
    image: serviceHausmeister,
  },
  {
    icon: Wrench,
    title: "Technische Dienste",
    desc: "Kompetenz trifft Praxis – sicher und lösungsorientiert. Mit Erfahrung aus über 30 Jahren unterstützen wir Sie bei der technischen Betreuung Ihrer Immobilie.",
    details: [
      "Elektro-Kleinarbeiten (Leuchtmittel, Steckdosen)",
      "Sanitär-Kleinarbeiten (Armaturen, Siphons)",
      "Pflege von Hebeanlagen, Wasserfiltern & Abflüssen",
      "Regelmäßige Sichtprüfungen & Brandschutzkontrollen",
      "Aufzugs-Notbefreiung & Brandmeldeanlagen",
    ],
    image: serviceTechnik,
  },
  {
    icon: PaintBucket,
    title: "Wohnungssanierung",
    desc: "Von der Planung bis zur Schlüsselübergabe – wir übernehmen die komplette Organisation und Umsetzung Ihrer Wohnungssanierung mit geprüften Fachfirmen.",
    details: [
      "Erstbesichtigung & individuelle Sanierungsplanung",
      "Koordination aller Fachfirmen (Elektro, Sanitär, Maler)",
      "Begleitung & lückenlose Dokumentation",
      "Qualitätskontrolle & Abnahme aller Gewerke",
      "Endreinigung & bezugsfertige Übergabe",
    ],
    image: serviceSanierung,
  },
  {
    icon: Package,
    title: "Montage Service",
    desc: "Flexibel, handfest – und genau dann da, wenn's zählt. Ob Möbelaufbau, Reparaturen oder Umzugshilfe – zuverlässig und ordentlich.",
    details: [
      "Möbelmontage inkl. Dübelarbeiten & Wandbefestigungen",
      "Küchenaufbau, Silikonfugen, Rollos & Gardinenleisten",
      "TV-Halterungen, Spiegel & Badzubehör",
      "Montage altersgerechter Wohnhilfen (Haltegriffe)",
      "Kleine Umzugshilfe & Entrümpelung",
    ],
    image: serviceMontage,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 } as const,
  }),
} as const;

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Unser Leistungsspektrum
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Erfahren, vielseitig <span className="text-gradient">und zuverlässig</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von klassischen Hausmeisterdiensten über Renovierungsarbeiten bis hin zu handwerklichen 
            Einzelaufträgen – wir sind Ihr verlässlicher Partner, wenn es darauf ankommt.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary p-3 rounded-xl">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
