import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slideBathroom from "@/assets/slide-bathroom.jpg";
import slideHeating from "@/assets/slide-heating.jpg";
import slideService from "@/assets/slide-service.jpg";

const slides = [
  {
    image: slideBathroom,
    title: "Moderne Bäder",
    highlight: "nach Maß",
    desc: "Wir verwandeln Ihr Badezimmer in eine Wohlfühloase – mit modernster Technik und zeitlosem Design.",
  },
  {
    image: slideHeating,
    title: "Effiziente Heizung",
    highlight: "für Ihr Zuhause",
    desc: "Professionelle Heizungsinstallation mit höchster Energieeffizienz. Wärmepumpen, Gas- und Solarthermie.",
  },
  {
    image: slideService,
    title: "Zuverlässiger",
    highlight: "Service 24/7",
    desc: "Wartung, Reparatur und Notdienst – wir sind immer für Sie da, wenn Sie uns brauchen.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Ihr Partner für Heizung & Sanitär
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                {slides[current].title}{" "}
                <span className="text-primary">{slides[current].highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base gap-2" onClick={() => scrollTo("kontakt")}>
              Kostenlose Beratung <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              0123 456 789
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { value: "20+", label: "Jahre Erfahrung" },
              { value: "2.500+", label: "Zufriedene Kunden" },
              { value: "24h", label: "Notdienst" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary/30 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary/30 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
