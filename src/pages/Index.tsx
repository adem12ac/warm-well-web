import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesOverview from "@/components/ServicesOverview";
import TrustSection from "@/components/TrustSection";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ServicesOverview />
      <TrustSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
