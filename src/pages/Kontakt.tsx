import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Kontakt
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sprechen Sie mit uns
          </h1>
          <p className="text-background/60 text-lg max-w-2xl">
            Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage.
          </p>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Kontakt;
