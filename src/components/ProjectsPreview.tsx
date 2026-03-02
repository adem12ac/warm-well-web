import AnimatedSection from "@/components/AnimatedSection";
import projectSeniorenheim from "@/assets/project-seniorenheim.jpg";
import projectWohnanlage from "@/assets/project-wohnanlage.jpg";
import projectBad from "@/assets/project-bad.jpg";
import projectGewerbe from "@/assets/project-gewerbe.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  { image: projectSeniorenheim, title: "Seniorenwohnanlage Essen-Rüttenscheid", category: "Objektbetreuung", description: "Ganzheitliche Betreuung einer Seniorenwohnanlage mit 120 Wohneinheiten." },
  { image: projectWohnanlage, title: "Wohnkomplex Essen-Stadtmitte", category: "Sanierung", description: "Komplettsanierung von 48 Wohnungen inkl. Heizungsmodernisierung." },
  { image: projectBad, title: "Badsanierung Mehrfamilienhaus", category: "Heizung & Sanitär", description: "12 barrierefreie Bäder für betreutes Wohnen." },
  { image: projectGewerbe, title: "Gewerbeimmobilie Essen-West", category: "Facility Management", description: "Technisches Gebäudemanagement für 5.000 m² Bürofläche." },
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Referenzen
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ergebnisse, die{" "}
            <span className="text-primary">überzeugen</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/2] cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.category}</span>
                  <h4 className="font-heading text-xl font-bold text-background mt-2">{project.title}</h4>
                  <p className="text-background/60 text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Alle Projekte ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsPreview;
