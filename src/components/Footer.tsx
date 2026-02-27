import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg text-primary-foreground mb-3">
              <Flame className="h-5 w-5 text-primary" />
              Wärme&Wasser
            </Link>
            <p className="text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Heizung und Sanitär in der Region. Qualität, Zuverlässigkeit und faire Preise.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3">Schnelllinks</h4>
            <div className="space-y-2 text-sm">
              <Link to="/#leistungen" className="block hover:text-primary transition-colors">Leistungen</Link>
              <Link to="/#produkte" className="block hover:text-primary transition-colors">Produkte</Link>
              <Link to="/#kontakt" className="block hover:text-primary transition-colors">Kontakt</Link>
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
          © {new Date().getFullYear()} Wärme&Wasser GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
