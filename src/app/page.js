import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSectionA from "../components/HeroSectionA";
import HeroSectionAB from "../components/HeroSectionAB";
import HeroSectionB from "../components/HeroSectionB";
import HeroSectionC from "../components/HeroSectionC";
import HeroSectionCB from "../components/HeroSectionCB";
import HeroSectionCC from "../components/HeroSectionCC";
import HeroSectionD from "../components/HeroSectionD";
import HeroSectionDA from "../components/HeroSectionDA";
// import HeroSectionE from "../components/HeroSectionE";
// import HeroSectionF from "../components/HeroSectionF";
// import HeroSectionG from "../components/HeroSectionG";
// import HeroSectionH from "../components/HeroSectionH";
// import HeroSectionI from "../components/HeroSectionI";
// import HeroSectionJ from "../components/HeroSectionJ";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />

      <main>
        {/* Your main content */}
        <HeroSectionA />
        <HeroSectionAB />
        <HeroSectionB />
        <HeroSectionC />
        <HeroSectionCB />
        <HeroSectionCC />
        <HeroSectionD />
        <HeroSectionDA />
        {/* <HeroSectionI />
        <HeroSectionH />
        <HeroSectionD />
        <HeroSectionF />
        <HeroSectionG />
        <HeroSectionE />
        <HeroSectionJ /> */}
        {/* <HeroSectionK /> */}
      </main>
      <Footer />
    </div>
  );
}
