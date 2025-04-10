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
import HeroSectionH from "../components/HeroSectionH";
import HeroSectionI from "../components/HeroSectionI";
import HeroSectionJ from "../components/HeroSectionJ";

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
        <HeroSectionI />
        <HeroSectionH />
        <HeroSectionC />
        <HeroSectionD />
        <HeroSectionF />
        <HeroSectionG />
        <HeroSectionE />
        <HeroSectionJ />
      </main>
      <Footer />
    </div>
  );
}
