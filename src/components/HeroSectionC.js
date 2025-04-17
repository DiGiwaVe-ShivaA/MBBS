import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NeetDifficultySection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="inline-flex items-center px-6 py-3  bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold text-sm sm:text-base md:text-4xl shadow-lg">
            All about NEET Difficulty Level 2025–26
          </h2>

          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-base sm:text-lg">
            <li>
              NEET 2025–26 is expected to be of moderate to tough difficulty
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

          <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300">
            Read More <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Right: Image or Video */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-2xl h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/I0S1Vv2DrjE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
