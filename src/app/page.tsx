import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ChaptersGrid from "@/components/ChaptersGrid";
import WhyChoose from "@/components/WhyChoose";
import AboutMaha from "@/components/AboutMaha";
import HowItWorks from "@/components/HowItWorks";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <ChaptersGrid />
        <WhyChoose />
        <AboutMaha />
        <HowItWorks />
        <BookingSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
