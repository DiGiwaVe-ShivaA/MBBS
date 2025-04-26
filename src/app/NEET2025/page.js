import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
// import HeroSectionNeetAA from "../../components/HeroSectionNeetAA";
import HeroSectionNeetE from "../../components/HeroSectionNeetE";
import HeroSectionNeetF from "../../components/HeroSectionNeetF";
import HeroSectionNeetG from "../../components/HeroSectionNeetG";
// import HeroSectionNeetA from "../../components/HeroSectionNeetA";
// import HeroSectionNeetB from "../../components/HeroSectionNeetB";
// import HeroSectionNeetC from "../../components/HeroSectionNeetC";
// import HeroSectionNeetD from "../../components/HeroSectionNeetD";
// import HeroSectionI from "../../components/HeroSectionI";
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
        {/* <HeroSectionNeetAA /> */}
        {/* <HeroSectionNeetA />
        <HeroSectionNeetB />
        <HeroSectionNeetC />
        <HeroSectionNeetD /> */}
        {/* <HeroSectionI /> */}
        <HeroSectionNeetE />
        <HeroSectionNeetF />
        <HeroSectionNeetG />
      </main>
      <Footer />
    </div>
  );
}
