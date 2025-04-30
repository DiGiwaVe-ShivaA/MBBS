"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

// Flag data (not used in this specific section but kept for possible future use)
const flags = [
  { name: "America", img: "/images/america.webp" },
  { name: "Canada", img: "/images/cana.webp" },
  { name: "Georgia", img: "/images/Georgia.webp" },
  { name: "Germany", img: "/images/germn.jpg" },
  { name: "Italy", img: "/images/italy.png" },
  { name: "Kazakhastan", img: "/images/kazakhastan.jpeg" },
  { name: "Kyrgyzstan", img: "/images/Kyrgyzstan.jpg" },
  { name: "Nepal", img: "/images/nepal.png" },
  { name: "Philippines", img: "/images/Philippines.png" },
  { name: "Russia", img: "/images/russia.webp" },
  { name: "Uzbekistan", img: "/images/Uzbekistan.webp" },
];

export default function FlagCarouselSection() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video Section (Left Side) */}
        <div className="w-full h-64 md:h-full relative overflow-hidden rounded-xl shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/images/flags.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section (Right Side) */}
        <div className="w-full space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-4 py-2 inline-block rounded-3xl shadow">
            Study MBBS Abroad: Best Countries Offering Quality Education at Low
            Cost
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Turn your dreams of studying abroad into reality with our expert
            guidance!
          </h3>

          {/* <p className="text-base md:text-lg text-gray-700 font-medium">
            Enjoy personalized support, a smooth process, and a wide-reaching
            network across India to help you every step of the way.
          </p> */}

          <p className="text-base md:text-lg text-gray-700 font-medium">
            Are you dreaming of becoming a doctor but feeling anxious about the
            steep costs of private medical colleges? Studying MBBS abroad could
            be a savvy and budget-friendly alternative for Indian students.
            Numerous countries provide top-notch medical education, degrees that
            are recognized worldwide, and more affordable tuition fees—making it
            an attractive option for future doctors.
          </p>
          <Link href="/colleges/abroad">
            <button className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
