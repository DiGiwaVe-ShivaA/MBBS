import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import HeroSectionC from "../../components/HeroSectionC";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionC />
      </main>
      <Footer />
    </div>
  );
}
