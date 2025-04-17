"use client";

import Image from "next/image";

export default function StudyAbroadSection() {
  return (
    <section className="bg-gray-50 px-6 py-12 w-full">
      {/* Top Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {/* Left: Image */}
        <div className="border-2 border-blue-500 rounded-lg overflow-hidden w-64 h-80 relative">
          <Image
            src="/images/flags.jpg" // Replace with your image path
            alt="Doctor with cows"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Gradient Text and Button */}
        <div className="flex flex-col items-center gap-4 max-w-md text-center">
          <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 px-8 py-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
              Study MBBS Abroad: Best Countries Offering Quality Education at
              Low Cost
            </h3>
          </div>

          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 shadow-md transition">
            Read More
            <span className="text-xl">➜</span>
          </button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Discover Your Dream Career with Expert Guidance
        </h2>
        <p className="text-base sm:text-lg text-gray-700 font-medium">
          Explore your passion. Shape your future. Step into success with
          confidence.
        </p>
      </div>
    </section>
  );
}
