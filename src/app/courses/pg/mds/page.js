"use client";
import { useState } from "react";
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import HeroSectionMDSA from "../../../../components/HeroSectionMDSA";

import Footer from "../../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionMDSA />
      </main>
      <Footer />
    </div>
  );
}
