import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BenefitsParents from "@/components/BenefitsParents";
import BenefitsStudents from "@/components/BenefitsStudents";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BenefitsParents />
      <BenefitsStudents />
      <HowItWorks />
      <Testimonials />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
