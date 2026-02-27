import { Flame, Droplets, Wrench, ShieldCheck, ThermometerSun, Pipette } from "lucide-react";
import { motion } from "framer-motion";
import serviceWaermepumpe from "@/assets/service-waermepumpe.jpg";
import serviceSanitaer from "@/assets/service-sanitaer.jpg";
import serviceWartung from "@/assets/service-wartung.jpg";

const services = [
  {
    icon: Flame,
    title: "Heizungsinstallation",
    desc: "Einbau moderner Heizungsanlagen – von Gas über Öl bis hin zu Wärmepumpen und Solarthermie.",
    details: [
      "Gas- und Öl-Brennwertkessel",
      "Luft- und Sole-Wärmepumpen",
      "Solarthermie-Anlagen",
      "Fußbodenheizung & Heizkörper",
      "Hybridheizungen",
    ],
    image: serviceWaermepumpe,
  },
  {
    icon: Droplets,
    title: "Sanitärinstallation",
    desc: "Komplette Badezimmer-Installationen, Wasseranschlüsse und Abwassersysteme aus einer Hand.",
    details: [
      "Badezimmer-Neugestaltung",
      "Barrierefreie Bäder",
      "Regenwassernutzung",
      "Trinkwasserhygiene",
      "Entwässerungssysteme",
    ],
    image: serviceSanitaer,
  },
  {
    icon: Wrench,
    title: "Wartung & Reparatur",
    desc: "Regelmäßige Wartung und schnelle Reparaturen für Ihre Heizungs- und Sanitäranlagen.",
    details: [
      "Jährliche Heizungswartung",
      "Störungsbeseitigung",
      "Dichtheitsprüfungen",
      "Heizkesselreinigung",
      "Wasserhahn-Reparatur",
    ],
    image: serviceWartung,
  },
];

const additionalServices = [
  {
    icon: ThermometerSun,
    title: "Energieberatung",
    desc: "Beratung zu energieeffizienten Lösungen und Fördermöglichkeiten für Ihre Modernisierung. Wir helfen Ihnen, bis zu 45% Energiekosten zu sparen und erstellen individuelle Sanierungsfahrpläne.",
  },
  {
    icon: Pipette,
    title: "Rohrsanierung",
    desc: "Professionelle Rohrsanierung und Leckortung mit modernster Technik. Kamerabefahrung, grabenlose Sanierung und Druckprüfungen – alles aus einer Hand.",
  },
  {
    icon: ShieldCheck,
    title: "Notdienst 24/7",
    desc: "Rohrbruch oder Heizungsausfall? Unser Notdienst ist rund um die Uhr für Sie da. Schnelle Reaktionszeiten und faire Preise – auch an Wochenenden und Feiertagen.",
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
    <section id="leistungen" className="section-padding bg-warm-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Kompetenz in <span className="text-gradient">Heizung & Sanitär</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Planung bis zur Umsetzung – wir bieten Ihnen das volle Leistungsspektrum.
          </p>
        </motion.div>

        {/* Main services with images */}
        <div className="space-y-20 mb-20">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </motion.div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
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
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
