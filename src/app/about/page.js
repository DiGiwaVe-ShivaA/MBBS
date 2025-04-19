import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
// import HeroSectionK from "../../components/HeroSectionK";
import HeroSectionDAB from "../../components/HeroSectionDAB";
import HeroSectionDAA from "../../components/HeroSectionDAA";
import HeroSectionD from "../../components/HeroSectionD";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        {/* <HeroSectionK /> */}
        <HeroSectionDAB />
        <HeroSectionDAA />
        <HeroSectionD />
      </main>
      <Footer />
    </div>
  );
}
