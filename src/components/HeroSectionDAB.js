"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/med1.jpg",
  "/images/med2.jpg",
  "/images/med3.jpg",
  "/images/med4.jpg",
  "/images/med5.webp",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: {
    x: 100,
    opacity: 0,
    rotate: 3,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export default function SlantedImages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative w-screen h-[400px] overflow-hidden bg-white">
      {/* <h2 className="text-2xl font-bold text-center py-4">
        Our Medical Specialties
      </h2> */}

      <motion.div
        ref={ref}
        className="w-full h-[calc(100%-4rem)] flex"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[...images].reverse().map((imgSrc, i) => (
          <motion.div
            key={i}
            className="w-1/5 h-full relative overflow-hidden shadow-xl"
            variants={childVariants}
          >
            <img
              src={imgSrc}
              alt={`medical-${i}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
