"use client";

import { useState } from "react";
import Image from "next/image";
import ApplicationFormModal from "./ApplicationFormModal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const imageSources = [
  "/images/med1.jpeg",
  "/images/med2.webp",
  "/images/med3.webp",
  "/images/med4.webp",
  "/images/med5.webp",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="w-full bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Top Label */}
      <div className="text-center py-4 text-white text-5xl tracking-wider font-semibold bg-black/10 backdrop-blur">
        (NSET) Namastubhyam Saraswati Edu Tech Private Limited.
      </div>

      {/* Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col items-center text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            <span className="inline-flex items-center justify-center gap-2 text-yellow-300">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Booking Open for
            </span>
            <br />
            <span className="text-yellow-200">
              NEET-UG & PG Premium Counselling Services 2025–26
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            To ensure the highest quality and accuracy, we limit bookings based
            on our expert team's capacity. Our service charges may vary
            dynamically with demand.
          </p>
        </motion.div>
      </div>

      {/* Full-Width Image Grid */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-2 md:px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {imageSources.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full h-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`Medical Image ${index + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-52 sm:h-60 md:h-64 lg:h-72"
            />
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && <ApplicationFormModal onClose={closeModal} />}
    </section>
  );
}
