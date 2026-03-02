import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import projectSeniorenheim from "@/assets/project-seniorenheim.jpg";
import projectWohnanlage from "@/assets/project-wohnanlage.jpg";
import projectBad from "@/assets/project-bad.jpg";
import projectGewerbe from "@/assets/project-gewerbe.jpg";

const projects = [
  {
    image: projectSeniorenheim,
    title: "Seniorenwohnanlage Essen-Rüttenscheid",
    category: "Objektbetreuung",
    description: "Ganzheitliche technische Betreuung einer Seniorenwohnanlage mit 120 Wohneinheiten. Inkl. Hausmeisterservice, Winterdienst und 24h-Notfallbereitschaft.",
    stats: ["120 Wohneinheiten", "Seit 2018", "24h-Bereitschaft"],
  },
  {
    image: projectWohnanlage,
    title: "Wohnkomplex Essen-Stadtmitte",
    category: "Komplettsanierung",
    description: "Sanierung von 48 Wohnungen inkl. Heizungsmodernisierung, neuer Bäder und Fassadenrenovierung. Termingerechte Fertigstellung in 8 Monaten.",
    stats: ["48 Wohnungen", "8 Monate", "Schlüsselfertig"],
  },
  {
    image: projectBad,
    title: "Barrierefreie Bäder – Betreutes Wohnen",
    category: "Heizung & Sanitär",
    description: "Installation von 12 barrierefreien Bädern für eine Einrichtung des betreuten Wohnens. Bodengleiche Duschen, Haltegriffe und altersgerechte Armaturen.",
    stats: ["12 Bäder", "Barrierefrei", "DIN-konform"],
  },
  {
    image: projectGewerbe,
    title: "Gewerbeimmobilie Essen-West",
    category: "Facility Management",
    description: "Technisches Gebäudemanagement für 5.000 m² Bürofläche. Regelmäßige Wartung, Dokumentation und Koordination externer Dienstleister.",
    stats: ["5.000 m²", "Monatlich", "Vollbetreuung"],
  },
];

const Projekte = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Referenzen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unsere Projekte
            </h1>
            <p className="text-background/60 text-lg max-w-2xl">
              Ausgewählte Referenzprojekte aus unserem Portfolio – von der Sanierung bis zur Objektbetreuung.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-20">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title}>
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.stats.map((stat) => (
                      <span key={stat} className="bg-secondary text-sm font-medium px-4 py-2 rounded-full">
                        {stat}
                      </span>
                    ))}
                  </div>
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

export default Projekte;
