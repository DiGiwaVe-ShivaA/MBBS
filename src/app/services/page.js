import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import HeroSectionServices from "../../components/HeroSectionServices";
// import HeroSectionCB from "../../components/HeroSectionCB";
// import HeroSectionCC from "../../components/HeroSectionCC";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionServices />
        {/* <HeroSectionCB /> */}
        {/* <HeroSectionCC /> */}
      </main>
      <Footer />
    </div>
  );
}
