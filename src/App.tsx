import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { WaitlistSection } from "./components/WaitlistSection";
import { Footer } from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-white max-w-[1920px] mx-auto overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <Stats />
          <WaitlistSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
