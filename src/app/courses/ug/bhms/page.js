"use client";
import { useState } from "react";
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import HeroSectionBHMSA from "../../../../components/HeroSectionBHMSA";

import Footer from "../../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionBHMSA />
      </main>
      <Footer />
    </div>
  );
}
