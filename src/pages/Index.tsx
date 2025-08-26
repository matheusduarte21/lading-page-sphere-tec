import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;