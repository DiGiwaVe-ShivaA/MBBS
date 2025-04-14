import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import HeroSectionC from "../../components/HeroSectionC";
import HeroSectionCB from "../../components/HeroSectionCB";
// import HeroSectionCC from "../../components/HeroSectionCC";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionC />
        <HeroSectionCB />
        {/* <HeroSectionCC /> */}
      </main>
      <Footer />
    </div>
  );
}
