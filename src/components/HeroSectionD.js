"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import clsx from "clsx"; // optional: for cleaner conditional classnames

const countries = [
  {
    name: "America",
    flag: "/images/america.webp",
    description: "Top universities, STEM focus, global career opportunities.",
  },
  {
    name: "Canada",
    flag: "/images/cana.webp",
    description: "Student-friendly immigration, PR pathway, quality education.",
  },
  {
    name: "Germany",
    flag: "/images/germn.jpg",
    description:
      "No tuition fees in public universities, innovation & research.",
  },
  {
    name: "Nepal",
    flag: "/images/nepal.png",
    description:
      "Affordable MBBS, Indian curriculum, cultural similarity, no visa hassle.",
  },
  {
    name: "Italy",
    flag: "/images/italy.png",
    description: "Cultural heritage, English-taught programs, scholarships.",
  },
  {
    name: "Russia",
    flag: "/images/russia.webp",
    description:
      "Affordable tuition, medical universities, globally recognized degrees.",
  },
  {
    name: "Kazakhstan",
    flag: "/images/kazakhastan.jpeg",
    description:
      "Emerging education hub, cost-effective, English-medium medical courses.",
  },
  {
    name: "Kyrgyzstan",
    flag: "/images/Kyrgyzstan.jpg",
    description:
      "Low tuition fees, WHO-recognized medical degrees, Indian student-friendly.",
  },
  {
    name: "Uzbekistan",
    flag: "/images/Uzbekistan.webp",
    description:
      "Modern curriculum, English-taught MBBS, growing international reputation.",
  },
  {
    name: "Georgia",
    flag: "/images/Georgia.webp",
    description:
      "European education system, English-medium programs, clinical exposure.",
  },
  {
    name: "Philippines",
    flag: "/images/Philippines.png",
    description:
      "US-based curriculum, English-speaking country, good FMGE passing rate.",
  },
];

export default function AbroadSupport() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 flex items-center justify-center gap-3 tracking-tight">
        <Globe className="text-blue-600 w-8 h-8" />
        <span>
          🌍 Study Abroad Support - Top countries for MBBS at low cost 💫
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {countries.map((country, index) => (
          <div
            key={country.name}
            className={clsx(
              "bg-white rounded-3xl shadow-lg transition-transform duration-300 p-6 flex flex-col items-center text-center border hover:border-blue-400 hover:scale-105 hover:rotate-[0.5deg]",
              index % 2 === 0 ? "bg-white" : "bg-blue-50"
            )}
          >
            <div className="relative w-20 h-12 mb-4">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                layout="fill"
                objectFit="cover"
                className="rounded shadow-md border border-gray-300"
              />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2 uppercase tracking-wide">
              {country.name}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {country.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
