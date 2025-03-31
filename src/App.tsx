import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { WaitlistSection } from "./components/WaitlistSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
