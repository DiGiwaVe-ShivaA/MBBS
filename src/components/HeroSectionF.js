"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, Users, Award, CheckCircle } from "lucide-react";

// Animated icon component (no TypeScript types)
const animatedIcon = (IconComponent, color) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-6 h-6"
  >
    <IconComponent className={`w-6 h-6 ${color}`} />
  </motion.div>
);

// List of animated icons
const iconMap = [
  animatedIcon(ThumbsUp, "text-indigo-500"),
  animatedIcon(Users, "text-purple-500"),
  animatedIcon(CheckCircle, "text-green-500"),
  animatedIcon(Award, "text-yellow-500"),
  animatedIcon(Star, "text-pink-500"),
];

export default function ToppersAcademyReviews() {
  const reviews = [
    { detail: "Student Reviews", rating: "9.5" },
    { detail: "Student Placed", rating: "9000+" },
    { detail: "Batch Strength (Coaching*)", rating: "8" },
    { detail: "NEET Faculty Review (Coaching*)", rating: "8.5" },
    {
      detail: "Past Year NEET Results (Second Highest Till Date)",
      rating: "9.7",
    },
    { detail: "Fees of NEET Coaching Review", rating: "9.2" },
    { detail: "NEET Mock Test Series Review", rating: "8.9" },
    { detail: "Parents Reviews", rating: "10.0" },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 leading-tight">
          Reviews of <span className="text-indigo-600">MbbsCollege.com</span> &
          NEET Aspirants After Counselling
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => {
            const isHighRated =
              parseFloat(item.rating) >= 9 || item.rating.includes("+");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl p-6 bg-white/40 backdrop-blur-lg border border-white/30 hover:border-indigo-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.015]"
              >
                <div className="flex items-center gap-3 mb-4">
                  {iconMap[index % iconMap.length]}
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                    {item.detail}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  “{item.detail} received a rating of {item.rating} from NEET
                  aspirants and parents who experienced Toppers Academy.”
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Overall Rating</span>
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
