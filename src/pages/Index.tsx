import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutStats from "@/components/AboutStats";
import Products from "@/components/Products";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutStats />
      <Services />
      <Products />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
