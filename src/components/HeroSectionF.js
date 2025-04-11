"use client";

import { motion } from "framer-motion";
import {
  Star,
  ThumbsUp,
  Users,
  Award,
  CheckCircle,
  Rocket,
  Trophy,
  HeartHandshake,
  ShieldCheck,
  Flame,
} from "lucide-react";

// Shared animation wrapper for icons
const animatedIcon = (IconComponent, color) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-6 h-6"
  >
    <IconComponent className={`w-6 h-6 ${color}`} />
  </motion.div>
);

// Front side icons
const frontIcons = [
  animatedIcon(ThumbsUp, "text-indigo-500"),
  animatedIcon(Users, "text-purple-500"),
  animatedIcon(CheckCircle, "text-green-500"),
  animatedIcon(Award, "text-yellow-500"),
  animatedIcon(Star, "text-pink-500"),
  animatedIcon(Star, "text-blue-500"),
];

// Back side icons
const backIcons = [
  animatedIcon(Rocket, "text-rose-400"),
  animatedIcon(Trophy, "text-yellow-400"),
  animatedIcon(HeartHandshake, "text-pink-500"),
  animatedIcon(ShieldCheck, "text-lime-400"),
  animatedIcon(Flame, "text-orange-400"),
  animatedIcon(Users, "text-teal-400"),
];

export default function ToppersAcademyReviews() {
  const reviews = [
    { detail: "Student Reviews", rating: "9.5" },
    { detail: "Student Placed", rating: "9000+" },
    {
      detail: "Past Year NEET Results (Second Highest Till Date)",
      rating: "9.7",
    },
    { detail: "100% Assistance", rating: "10.0" },
    { detail: "24Hrs+ Working Team", rating: "10.0" },
    { detail: "Parents Reviews", rating: "10.0" },
  ];

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 sm:mb-16 text-gray-900 leading-tight">
          Reviews of <span className="text-indigo-600">MbbsCollege.com</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1500px]">
          {reviews.map((item, index) => {
            const isHighRated =
              parseFloat(item.rating) >= 9 || item.rating.includes("+");

            return (
              <div
                key={index}
                className="relative w-full h-64 sm:h-64 [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]"
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl p-5 sm:p-6 bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg group-hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    {frontIcons[index % frontIcons.length]}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                      {item.detail}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    “{item.detail} received a rating of {item.rating} from NEET
                    aspirants and parents who experienced Toppers Academy.”
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Overall Rating
                    </span>
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full transition-all ${
                        isHighRated
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-sm"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-5 sm:p-6 bg-indigo-700 text-white border border-indigo-300 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    {backIcons[index % backIcons.length]}
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
                      {item.detail}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base mb-4 sm:mb-6 font-medium italic text-white/90">
                    {item.rating} ★ rated by our NEET champions and their proud
                    parents.
                  </p>

                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                    <span className="text-white/80">Trusted by Aspirants</span>
                    <span className="bg-white text-indigo-700 px-3 py-1 rounded-full shadow">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
