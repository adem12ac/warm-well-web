import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => (
  <>
    <Navbar />
    <main className="container pt-28 pb-20 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Impressum</h1>

      <div className="prose prose-sm text-muted-foreground space-y-6">
        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>Wärme&Wasser GmbH<br />Musterstraße 42<br />12345 Musterstadt</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Vertreten durch</h2>
          <p>Max Mustermann, Geschäftsführer</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Kontakt</h2>
          <p>Telefon: 0123 456 789<br />E-Mail: info@waerme-wasser.de</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Registereintrag</h2>
          <p>Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Musterstadt<br />Registernummer: HRB 12345</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>Berufsbezeichnung: Installateur- und Heizungsbaumeister<br />Zuständige Kammer: Handwerkskammer Musterstadt</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> https://ec.europa.eu/consumers/odr/</a>. 
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
