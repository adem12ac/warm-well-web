import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="container pt-28 pb-20 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-sm text-muted-foreground space-y-6">
        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">2. Verantwortliche Stelle</h2>
          <p>ERCA-Dienstleistungen<br />Inhaber: Erkan Catak<br />Juliusstraße 21, 45128 Essen<br />E-Mail: info@erca-service.de<br />Telefon: +49 152 16 39 93 26</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-base font-semibold text-foreground mt-3">Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">5. Hosting</h2>
          <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">6. SSL-Verschlüsselung</h2>
          <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
