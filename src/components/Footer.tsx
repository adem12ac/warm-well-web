import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-erca.gif";

const footerLinks = [
  {
    title: "Leistungen",
    links: [
      { label: "Objektbetreuung", href: "/leistungen" },
      { label: "Sanierung & Renovierung", href: "/leistungen" },
      { label: "Entsorgung & Entrümpelung", href: "/leistungen" },
      { label: "Barrierefreie Sanierung", href: "/leistungen" },
      { label: "Umzugsservice", href: "/leistungen" },
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
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Kostenloses Angebot anfordern</h3>
            <p className="text-background/60 mt-2">Kontaktieren Sie uns – wir beraten Sie gerne unverbindlich.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Jetzt anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <img src={logo} alt="ERCA Dienstleistungen" className="h-14 w-auto mb-6 brightness-0 invert" />
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-sm">
              Ihr zuverlässiger Partner für Objektbetreuung, Sanierung, Entrümpelung und barrierefreie Umbauten in Berlin. Über 30 Jahre Erfahrung.
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0" /><span>Berlin</span></div>
              <a href="tel:+4915212971388" className="flex items-center gap-3 hover:text-background transition-colors"><Phone className="h-4 w-4 shrink-0" /><span>+49 152 12 97 13 88</span></a>
              <a href="mailto:info@erca-service.de" className="flex items-center gap-3 hover:text-background transition-colors"><Mail className="h-4 w-4 shrink-0" /><span>info@erca-service.de</span></a>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0" /><span>Mo–Fr: 08:00–18:00 Uhr</span></div>
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
