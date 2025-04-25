"use client";
import { useState } from "react";
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import HeroSectionMBBSA from "../../../../components/HeroSectionMBBSA";
// import HeroSectionPGA from "../../../../components/HeroSectionPGA";
import Footer from "../../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionMBBSA />
        {/* <HeroSectionPGB /> */}
      </main>
      <Footer />
    </div>
  );
}
