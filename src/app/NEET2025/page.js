import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import HeroSectionNeetA from "../../components/HeroSectionNeetA";
import HeroSectionNeetB from "../../components/HeroSectionNeetB";
import HeroSectionNeetC from "../../components/HeroSectionNeetC";
import HeroSectionNeetD from "../../components/HeroSectionNeetD";
// import HeroSectionCB from "../../components/HeroSectionCB";
// import HeroSectionCC from "../../components/HeroSectionCC";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        {/* <HeroSectionC />
        <HeroSectionCB /> */}
        <HeroSectionNeetA />
        <HeroSectionNeetB />
        <HeroSectionNeetC />
        <HeroSectionNeetD />
      </main>
      <Footer />
    </div>
  );
}
