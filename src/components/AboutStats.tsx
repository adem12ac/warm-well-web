import { motion } from "framer-motion";
import { Clock, Users, Shield, Award } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Jahre Erfahrung" },
  { icon: Users, value: "500+", label: "Betreute Objekte" },
  { icon: Shield, value: "24/7", label: "Notdienst verfügbar" },
  { icon: Award, value: "100%", label: "Zertifiziert" },
];

const AboutStats = () => {
  return (
    <section id="ueber-uns" className="section-padding bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ihr Partner für professionelle Immobilienbetreuung
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Mit über 30 Jahren Branchenerfahrung betreuen wir Seniorenwohnanlagen, betreutes Wohnen, 
            Studentenwohnheime und altersgerechte Wohnkonzepte in Essen und der gesamten Region.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center text-primary-foreground"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl md:text-4xl font-heading font-bold">{stat.value}</div>
              <div className="text-sm opacity-80 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-primary-foreground/90"
        >
          <div className="bg-primary-foreground/10 rounded-xl p-6">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Vom Handwerk zur eigenen Vision</h3>
            <p className="text-sm leading-relaxed">
              Die berufliche Reise begann 1991 in der Metallwerkstatt des Vaters. 1993 folgte eine fundierte 
              Ausbildung im Bereich Metallbau und Sanitärtechnik – der Grundstein für über 30 Jahre Know-how. 
              Praxiserfahrung als Bauleiter im Schlüsselfertigbau und in der Altbausanierung.
            </p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-6">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Qualität durch Kompetenz</h3>
            <p className="text-sm leading-relaxed">
              Durch kontinuierliche Weiterbildung, zahlreiche Fachzertifikate und den Einsatz modernster 
              Technik gewährleisten wir höchste Servicequalität. Technik ist nicht nur unser Beruf – 
              sie ist unsere Berufung.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
