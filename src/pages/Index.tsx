import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Results from "@/components/Results";
import VideoSection from "@/components/VideoSection";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MobileMenu from "@/components/MobileMenu";

const Index = () => {
  return (
    <main className="min-h-screen">
      <MobileMenu />
      <Hero />
      <Philosophy />
      <Results />
      <VideoSection />
      <Schedule />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Index;
