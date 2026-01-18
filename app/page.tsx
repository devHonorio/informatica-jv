import About from "./components/ladinpage/About";
import { Footer } from "./components/ladinpage/Footer";
import { Header } from "./components/ladinpage/Header";
import { HeroSection } from "./components/ladinpage/HeroSection";
import { ServicesSection } from "./components/ladinpage/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <ServicesSection />

      <About />

      <Footer />
    </>
  );
}
