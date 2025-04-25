"use client";
import { useState } from "react";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
// import HeroSectionPGB from "../../../components/HeroSectionPGB";
// import HeroSectionDiplomaA from "../../../components/HeroSectionDiplomaA";
import Footer from "../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        {/* <HeroSectionDiplomaA /> */}
        {/* <HeroSectionPGB /> */}
      </main>
      <Footer />
    </div>
  );
}
