"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NeetDifficultySection() {
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const embedRef = useRef(null);

  useEffect(() => {
    if (embedLoaded && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [embedLoaded]);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch w-full max-w-7xl mx-auto min-h-[560px]">
        {/* Left: Text Content */}
        <div className="space-y-6 px-4 sm:px-8 md:px-16 flex flex-col justify-center">
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

        {/* Right: Instagram Reel Embed */}
        <div className="flex justify-center items-center px-4 sm:px-8 md:px-4 min-h-[560px]">
          <div className="relative w-full max-w-xl h-full min-h-[560px] rounded-xl overflow-hidden shadow-lg bg-white">
            {!embedLoaded ? (
              <button
                onClick={() => {
                  setEmbedLoaded(true);
                  const script = document.createElement("script");
                  script.src = "https://www.instagram.com/embed.js";
                  script.async = true;
                  document.body.appendChild(script);
                }}
                className="w-full h-full flex items-center justify-center bg-black text-white font-bold"
              >
                ▶️ Load Instagram Video
              </button>
            ) : (
              <blockquote
                ref={embedRef}
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/C9MnwPXpUC1/"
                data-instgrm-version="14"
                style={{
                  width: "100%",
                  minHeight: "560px",
                  margin: "auto",
                }}
              ></blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
