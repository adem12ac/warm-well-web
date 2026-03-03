import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBuilding from "@/assets/hero-building.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";
import serviceObjektbetreuung from "@/assets/service-objektbetreuung.jpg";
import serviceEntsorgung from "@/assets/service-entsorgung.jpg";
import serviceBarrierefrei from "@/assets/service-barrierefrei.jpg";

const slides = [
  {
    image: heroBuilding,
    subtitle: "Ihr Partner in Berlin",
    title: "Objektbetreuung &\nHausmeisterservice",
    description: "Professionelle Betreuung Ihrer Immobilien in Berlin – zuverlässig, sauber und termingerecht. Alles aus einer Hand.",
  },
  {
    image: heroRenovation,
    subtitle: "Sanierung & Renovierung",
    title: "Modernisierung\nmit Qualität",
    description: "Von der Wohnungssanierung bis zur Komplettrenovierung – wir verwandeln Ihre Räume. Professionell und sauber.",
  },
  {
    image: serviceEntsorgung,
    subtitle: "Entsorgung & Entrümpelung",
    title: "Platz schaffen.\nOrdnung bringen.",
    description: "Wohnungsauflösungen, Entrümpelungen und fachgerechte Entsorgung in Berlin – schnell und unkompliziert.",
  },
  {
    image: serviceBarrierefrei,
    subtitle: "Barrierefreie Sanierung",
    title: "Wohnen ohne\nBarrieren",
    description: "Barrierefreie Badsanierungen und altersgerechte Umbauten – für mehr Sicherheit und Komfort im eigenen Zuhause.",
  },
  {
    image: serviceObjektbetreuung,
    subtitle: "Umzugsservice",
    title: "Ihr kleiner\nUmzugshelfer",
    description: "Privater Umzugsservice in Berlin – wir helfen beim Tragen, Transportieren und Aufbauen. Unkompliziert und günstig.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.subtitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary" />
                {slide.subtitle}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] whitespace-pre-line mb-6">
                {slide.title}
              </h1>
              <p className="text-background/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-8 py-4 rounded-full font-medium hover:bg-background/10 transition-colors"
                >
                  Leistungen entdecken
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4">
        <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background/60 hover:bg-background/10 transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-background/50 text-sm font-mono">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background/60 hover:bg-background/10 transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/10 z-20">
        <motion.div key={current} className="h-full bg-primary" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 6, ease: "linear" }} />
      </div>
    </section>
  );
};

export default Hero;
