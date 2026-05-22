import HeroSection from "@/components/sections/hero";
import PainPointsSection from "@/components/sections/pain-points";
import ServicesSection from "@/components/sections/services";
import HowItWorksSection from "@/components/sections/how-it-works";
import IndustriesSection from "@/components/sections/industries";
import ResultsSection from "@/components/sections/results";
import LiveDemoSection from "@/components/sections/live-demo";
import AboutSection from "@/components/sections/about";
import CTASection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <ResultsSection />
      <LiveDemoSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}

