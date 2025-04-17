"use client";
import { useState } from "react";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import HeroSectionMA from "../../../components/HeroSectionMA";
import HeroSectionMB from "../../../components/HeroSectionMB";
import Footer from "../../../components/Footer";

export default function CollegeStatePage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <HeroSectionMB />
        <HeroSectionMA />
      </main>
      <Footer />
    </div>
  );
}
