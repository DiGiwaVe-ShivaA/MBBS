import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSectionA from "../components/HeroSectionA";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSectionA />
      <main>{/* Your main content */}</main>
    </div>
  );
}
