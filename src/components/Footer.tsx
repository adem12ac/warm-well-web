import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg text-primary-foreground mb-3">
              <Wrench className="h-5 w-5 text-primary" />
              ERCA-Dienstleistungen
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Ihr zuverlässiger Partner für Hausmeister- und Handwerkerservices in Essen und Umgebung. 
              Über 30 Jahre Erfahrung – Qualität, Zuverlässigkeit und faire Preise.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+4915216399326" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +49 152 16 39 93 26
              </a>
              <a href="mailto:info@erca-service.de" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> info@erca-service.de
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Juliusstraße 21, 45128 Essen
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3">Leistungen</h4>
            <div className="space-y-2 text-sm">
              <Link to="/hausmeisterservice" className="block hover:text-primary transition-colors">Hausmeisterservice</Link>
              <Link to="/technische-dienste" className="block hover:text-primary transition-colors">Technische Dienste</Link>
              <Link to="/wohnungssanierung" className="block hover:text-primary transition-colors">Wohnungssanierung</Link>
              <Link to="/montage-service" className="block hover:text-primary transition-colors">Montage Service</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3">Rechtliches</h4>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block hover:text-primary transition-colors">Datenschutzerklärung</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs">
          © {new Date().getFullYear()} ERCA-Dienstleistungen · Inhaber: Erkan Catak · Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
