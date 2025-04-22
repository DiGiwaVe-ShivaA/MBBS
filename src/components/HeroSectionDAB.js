"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    rotate: 3,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function SlantedImages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative w-full bg-white py-8 px-4 overflow-hidden">
      <motion.div
        ref={ref}
        className="flex gap-4 overflow-x-auto md:overflow-hidden no-scrollbar md:flex-row flex-nowrap md:h-[400px] items-start md:items-center justify-start md:justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[...images].reverse().map((imgSrc, i) => (
          <motion.div
            key={i}
            className="relative min-w-[180px] md:w-1/5 h-[200px] md:h-full overflow-hidden rounded-xl  shrink-0"
            variants={childVariants}
          >
            <Image
              src={imgSrc}
              alt={`medical-${i}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
              sizes="(max-width: 768px) 40vw, 20vw"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
