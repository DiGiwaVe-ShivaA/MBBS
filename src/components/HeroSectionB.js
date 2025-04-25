"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const imageData = [
  { src: "/images/med1.jpg", text: "Explore NEET Tips" },
  { src: "/images/med2.jpg", text: "Get Counselling Guide" },
  { src: "/images/med3.jpg", text: "Learn Top Strategies" },
  { src: "/images/med4.jpg", text: "Success Stories Here" },
  { src: "/images/med5.webp", text: "Check Eligibility Now" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionA() {
  return (
    <section className="w-full bg-white text-black relative overflow-hidden">
      {/* Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col items-center text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md text-black">
            <span className="inline-flex items-center justify-center gap-2 text-blue-500">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Gear Up Future Doctors!
            </span>
            <br />
            <span className="text-black">
              NEET-UG & PG 2025-26 Premium Counselling is LIVE!
            </span>
          </h1>
        </motion.div>
        <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300 text-sm">
          Get Counselling NOW!
        </button>
      </div>

      {/* Image Grid Section */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3 md:px-6 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {imageData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] group cursor-pointer overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={item.src}
              alt={`Medical Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay with Text + Button */}
            <div className="absolute inset-0 bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center space-y-3 px-3">
              <span className="text-white text-lg font-semibold">
                {item.text}
              </span>
              <button className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full shadow hover:bg-gray-200 transition duration-300">
                Click to Know More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
