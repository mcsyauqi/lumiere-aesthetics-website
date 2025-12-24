import Hero from "@/components/home/Hero";
import TreatmentCategories from "@/components/home/TreatmentCategories";
import QuizCTA from "@/components/home/QuizCTA";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import DoctorsSection from "@/components/home/DoctorsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentCategories />
      <QuizCTA />
      <BeforeAfterShowcase />
      <DoctorsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
