"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NeetDifficultySection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="space-y-6 px-4 sm:px-8 md:px-16">
          <h2 className="inline-flex items-center px-6 py-3 rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold text-base md:text-3xl shadow-lg">
            NEET 2025–26 Difficulty Level
          </h2>

          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-base sm:text-lg">
            <li>
              NEET 2025–26 is expected to be of moderate to tough difficulty.
            </li>
            <li>
              Biology remains the highest scoring subject with mostly
              NCERT-based questions.
            </li>
            <li>
              Physical Chemistry requires strong command over formulas and
              numericals.
            </li>
            <li>The number of candidates is increasing every year.</li>
            <li>
              This increase leads to higher cut-offs and more competition.
            </li>
            <li>
              Regular mock test practice is essential for accuracy and speed.
            </li>
          </ol>
          <Link href="/NEET2025">
            <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              Read More <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Right: Video Section */}
        <div className="flex justify-center px-4 sm:px-8 md:px-4">
          <div className="relative w-full max-w-xl h-[400px] rounded-xl overflow-hidden shadow-lg bg-black">
            {/* Lazy load iframe only when user scrolls */}
            {iframeLoaded ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/I0S1Vv2DrjE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <button
                className="w-full h-full flex items-center justify-center text-white font-bold"
                onClick={() => setIframeLoaded(true)}
              >
                ▶️ Play Video
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
