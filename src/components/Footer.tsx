import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Leistungen",
    links: [
      { label: "Sanierung & Bau", href: "/leistungen" },
      { label: "Heizung & Sanitär", href: "/leistungen" },
      { label: "Objektbetreuung", href: "/leistungen" },
    ],
  },
  {
    title: "Kunden",
    links: [
      { label: "Großkunden", href: "/grosskunden" },
      { label: "Privatkunden", href: "/privatkunden" },
      { label: "Produkte & Preise", href: "/produkte" },
      { label: "Projekte", href: "/projekte" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/10">
        <div className="container py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Bereit für Ihr nächstes Projekt?</h3>
            <p className="text-background/60 mt-2">Kontaktieren Sie uns für eine kostenlose Erstberatung.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Kostenloses Angebot <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">E</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight">ERCA</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">Dienstleistungen</span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-sm">
              Ihr zuverlässiger Partner für professionelle Immobilienbetreuung in Essen und der gesamten Region. Über 30 Jahre Erfahrung.
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0" /><span>Juliusstraße 21, 45128 Essen</span></div>
              <a href="tel:+4915216399326" className="flex items-center gap-3 hover:text-background transition-colors"><Phone className="h-4 w-4 shrink-0" /><span>+49 152 16 39 93 26</span></a>
              <a href="mailto:info@erca-service.de" className="flex items-center gap-3 hover:text-background transition-colors"><Mail className="h-4 w-4 shrink-0" /><span>info@erca-service.de</span></a>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0" /><span>Mo–Fr: 08:00–17:00 Uhr</span></div>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-background/40">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} ERCA Dienstleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-background transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-background transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
