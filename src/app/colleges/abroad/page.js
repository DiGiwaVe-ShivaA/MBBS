"use client";

import Image from "next/image";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import HeroSectionAbroad from "../../../components/HeroSectionAbroad";
import HeroSectionAbroadB from "../../../components/HeroSectionAbroadB";

// import HeroSectionNeetC from "../../../components/HeroSectionNeetC";
// import HeroSectionNeetD from "../../../components/HeroSectionNeetD";
// import HeroSectionI from "../../components/HeroSectionI";
// import HeroSectionCB from "../../components/HeroSectionCB";
// import HeroSectionCC from "../../components/HeroSectionCC";

import Footer from "../../../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        {/* <HeroSectionC />
        <HeroSectionCB /> */}
        <HeroSectionAbroad />
        <HeroSectionAbroadB />
        {/* <HeroSectionNeetC /> */}
        {/* <HeroSectionNeetD /> */}
        {/* <HeroSectionI /> */}
      </main>
      <Footer />
    </div>
  );
}
