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
          <p>ERCA Dienstleistungen<br />Inhaber: Erkan Catak<br />Berlin</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Kontakt</h2>
          <p>Telefon: +49 152 12 97 13 88<br />E-Mail: info@erca-service.de</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">Haftungsausschluss</h2>
          <h3 className="text-base font-semibold text-foreground mt-3">Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
          
          <h3 className="text-base font-semibold text-foreground mt-3">Haftung für Links</h3>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>

          <h3 className="text-base font-semibold text-foreground mt-3">Urheberrecht</h3>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
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
