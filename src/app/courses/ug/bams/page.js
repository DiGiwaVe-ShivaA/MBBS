"use client";
import { useState } from "react";
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import HeroSectionBAMSA from "../../../../components/HeroSectionBAMSA";

import Footer from "../../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionBAMSA />
      </main>
      <Footer />
    </div>
  );
}
