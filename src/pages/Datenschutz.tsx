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
          <h3 className="text-base font-semibold text-foreground mt-3">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">2. Verantwortliche Stelle</h2>
          <p>Wärme&Wasser GmbH<br />Musterstraße 42<br />12345 Musterstadt<br />E-Mail: info@waerme-wasser.de<br />Telefon: 0123 456 789</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-base font-semibold text-foreground mt-3">Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
        </div>

        <div>
          <h2 className="text-lg font-heading font-semibold text-foreground">5. Hosting</h2>
          <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
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
