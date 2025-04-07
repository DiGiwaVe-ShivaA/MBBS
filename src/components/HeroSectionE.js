"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpenCheck,
  Users,
  Star,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    title: "Top College Admissions",
    description: "Expert guidance to secure admission in top medical colleges.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-blue-500" />,
    title: "NEET Study Content",
    description: "Curated study material for NEET UG aspirants.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "1-on-1 Counseling",
    description: "Personalized mentorship and emotional support.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: "Mock Tests & Analysis",
    description: "Practice tests with detailed performance tracking.",
  },
];

export default function FeaturesSection() {
  const [style, setStyle] = useState("glass"); // "glass" or "neumorphism"
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCTA(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="features"
      className="relative py-20 px-6 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* 💫 Animated background blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl z-0"
      />

      {/* 🧪 Style Toggle */}
      <div className="flex justify-end mb-8 max-w-6xl mx-auto z-10 relative">
        <button
          onClick={() => setStyle(style === "glass" ? "neumorphism" : "glass")}
          className="flex items-center gap-2 px-4 py-2 bg-white shadow rounded-full text-sm font-medium hover:scale-105 transition"
        >
          <Sparkles className="w-4 h-4 text-indigo-500" />
          Switch to {style === "glass" ? "Neumorphism" : "Glassmorphism"}
        </button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-gray-800"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={clsx(
                "p-6 rounded-3xl hover:scale-[1.03] transition-all duration-300",
                {
                  "bg-white/30 backdrop-blur-md border border-white/40 shadow-xl":
                    style === "glass",
                  "bg-[#f0f0f3] shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff]":
                    style === "neumorphism",
                }
              )}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🚀 Floating CTA Button */}
      {showCTA && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition"
        >
          Quick Inquiry
        </motion.button>
      )}
    </section>
  );
}
