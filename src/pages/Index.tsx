import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesOverview from "@/components/ServicesOverview";
import TrustSection from "@/components/TrustSection";
import ClientSegments from "@/components/ClientSegments";
import ProjectsPreview from "@/components/ProjectsPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <TrustSection />
      <ClientSegments />
      <ProjectsPreview />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
