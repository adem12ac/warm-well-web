import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-erca.gif";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
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

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ERCA Dienstleistungen Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isActive(link.href)
                  ? scrolled ? "text-primary bg-primary/5" : "text-primary-foreground bg-primary-foreground/10"
                  : scrolled ? "text-muted-foreground hover:text-foreground hover:bg-secondary" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+4915212971388" className={`text-sm font-medium transition-colors ${
            scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
          }`}>
            +49 152 12 97 13 88
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/kontakt">
              <Phone className="h-3.5 w-3.5 mr-2" />
              Jetzt anfragen
            </Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button asChild className="w-full rounded-full">
                  <Link to="/kontakt">
                    <Phone className="h-4 w-4 mr-2" />
                    Jetzt anfragen
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
