"use client";

import { useState } from "react";
import Image from "next/image";
import ApplicationFormModal from "./ApplicationFormModal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSectionA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="w-full bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 text-white"
      aria-label="NEET UG Premium Counselling Services Hero"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10 py-14 md:py-20">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-7/12 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            <span className="inline-flex items-center justify-center md:justify-start gap-2 text-yellow-300">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Booking Open for
            </span>
            <br />
            <span className="text-yellow-200">
              NEET-UG Premium Counselling Services 2025–26
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            To ensure the highest quality and accuracy, we limit bookings based
            on our expert team's capacity. Our service charges may vary
            dynamically with demand.
          </p>
        </motion.div>

        {/* Doctor Image */}
        <motion.div
          className="w-full md:w-5/12 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src="/images/docherosectionB.jpg"
            alt="Doctor illustration for NEET Counselling"
            width={400}
            height={400}
            className="rounded-3xl shadow-2xl ring-4 ring-white/10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            priority
          />
        </motion.div>
      </div>

      {isModalOpen && <ApplicationFormModal onClose={closeModal} />}
    </section>
  );
}
