import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Jahre Erfahrung", suffix: "" },
  { icon: Users, value: "2.500+", label: "Zufriedene Kunden", suffix: "" },
  { icon: Clock, value: "24/7", label: "Notdienst verfügbar", suffix: "" },
  { icon: MapPin, value: "50km", label: "Einsatzradius", suffix: "" },
];

const AboutStats = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default AboutStats;
