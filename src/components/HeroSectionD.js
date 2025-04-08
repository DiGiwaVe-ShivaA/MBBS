"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

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
    name: "Italy",
    flag: "/images/italy.png",
    description: "Cultural heritage, English-taught programs, scholarships.",
  },
];

export default function AbroadSupport() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 flex items-center justify-center gap-3 tracking-tight">
        <Globe className="text-blue-600 w-8 h-8" />
        <span>🌍 Study Abroad Support – Top Countries</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {countries.map((country) => (
          <div
            key={country.name}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200 hover:border-blue-400 hover:scale-105"
          >
            <div className="relative w-16 h-10 mb-4">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                layout="fill"
                objectFit="cover"
                className="rounded-sm border border-gray-300 shadow"
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
