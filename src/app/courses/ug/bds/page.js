"use client";
import { useState } from "react";
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import HeroSectionBDSA from "../../../../components/HeroSectionBDSA";

import Footer from "../../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionBDSA />
      </main>
      <Footer />
    </div>
  );
}
