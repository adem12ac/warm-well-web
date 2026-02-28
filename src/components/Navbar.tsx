import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Kontakt", href: "/#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl">
          <div className="flex items-center gap-1">
            <Wrench className="h-6 w-6 text-primary" />
            <span className={`transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              ERCA<span className="text-primary">-Dienstleistungen</span>
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-muted-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => handleNavClick("/#kontakt")} className="gap-2">
            <Phone className="h-4 w-4" />
            Jetzt anfragen
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full mt-2 gap-2" onClick={() => handleNavClick("/#kontakt")}>
            <Phone className="h-4 w-4" />
            Jetzt anfragen
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
