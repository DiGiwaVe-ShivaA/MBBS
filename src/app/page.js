import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSectionA from "../components/HeroSectionA";
import HeroSectionB from "../components/HeroSectionB";
import HeroSectionC from "../components/HeroSectionC";
import HeroSectionD from "../components/HeroSectionD";
import HeroSectionE from "../components/HeroSectionE";
import HeroSectionF from "../components/HeroSectionF";
import HeroSectionG from "../components/HeroSectionG";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />

      <main>
        {/* Your main content */}
        <HeroSectionA />
        <HeroSectionB />
        <HeroSectionC />
        <HeroSectionD />
        <HeroSectionE />
        <HeroSectionF />
        <HeroSectionG />
      </main>
      <Footer />
    </div>
  );
}
