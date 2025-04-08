"use client";

import { ArrowRightCircle, ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    label: "NEET Exam",
    info: "Appear for the NEET-UG medical entrance examination.",
  },
  {
    label: "Result",
    info: "Check your score and percentile after the exam.",
  },
  {
    label: "Counselling (MCC/State)",
    info: "Participate in centralized/state counselling.",
  },
  {
    label: "Seat Allotment",
    info: "Get your seat in a college based on merit.",
  },
  {
    label: "College Admission",
    info: "Report to the allotted college and complete joining.",
  },
];

export default function AdmissionFlow() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold text-center mb-14 flex items-center justify-center gap-2 text-gray-800">
        <ArrowRightCircle className="w-7 h-7 text-blue-600" />
        📊 Admission Flow (Simplified)
      </h2>

      <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-14 md:gap-6 px-2">
        {/* Animated Connecting Line */}
        <motion.div
          className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 top-0 bottom-0 left-1/2 w-1 md:w-auto bg-gradient-to-b md:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 z-0 rounded-full"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            transformOrigin: "left center",
          }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            className="relative z-10 flex flex-col items-center text-center gap-3"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Step Number Badge with Tooltip */}
            <div
              className="group relative"
              onMouseEnter={() => setActiveTooltip(index)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-200 shadow-xl rounded-full w-16 h-16 flex items-center justify-center font-semibold text-blue-800 text-base cursor-pointer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {index + 1}
              </motion.div>

              {/* Tooltip */}
              {activeTooltip === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-24 w-56 bg-white text-sm text-gray-700 shadow-xl border border-gray-200 rounded-lg px-4 py-3 z-20"
                >
                  <div className="flex gap-2 items-center">
                    <Info className="w-4 h-4 text-blue-500" />
                    <p className="font-medium">{step.label}</p>
                  </div>
                  <p className="mt-1 text-gray-500">{step.info}</p>
                </motion.div>
              )}
            </div>

            {/* Step Label */}
            <motion.div
              className="bg-white text-blue-700 px-6 py-2 rounded-lg border border-blue-200 shadow-md font-medium max-w-[180px] text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {step.label}
            </motion.div>

            {/* Animated Arrows (Desktop Only) */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute right-[-35px] top-1/2 -translate-y-1/2 text-blue-400"
                initial={{ x: -5 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
