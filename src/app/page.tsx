import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import Coach from "@/components/Coach";
import SessionPreview from "@/components/SessionPreview";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Pillars />
        <Coach />
        <SessionPreview />
        <Testimonials />
        <Offer />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
