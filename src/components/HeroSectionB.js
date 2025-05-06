"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const imageData = [
  { src: "/images/mbbs.JPG", text: "MBBS-NEET PG", link: "/courses/pg/mdms" },
  { src: "/images/mbbsaa.JPG", text: "MBBS", link: "/courses/ug/mbbs" },
  { src: "/images/med2.jpg", text: "BDS", link: "/courses/ug/bds" },
  { src: "/images/med4.jpg", text: "BAMS", link: "/courses/ug/bams" },
  { src: "/images/homeo.jpg", text: "BHMS", link: "/courses/ug/bhms" },
  { src: "/images/med5.webp", text: "BVSc", link: "/courses/ug/bvsc" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14 flex flex-col items-center text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md text-black flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-2 text-blue-500">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Gear Up Future Doctors!
            </span>
            <span className="text-black">
              NEET-UG & PG 2025-26 Premium Counselling is LIVE!
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Card Section */}
      <motion.div
        className="w-full overflow-x-auto px-4 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full sm:w-max">
          {imageData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full sm:w-[200px] md:w-[240px] h-[260px] sm:h-[280px] md:h-[300px] group cursor-pointer overflow-hidden rounded-xl shadow-md relative flex-shrink-0"
            >
              <Link href={item.link}>
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center space-y-3 px-3">
                  <span className="text-white text-lg font-semibold">
                    {item.text}
                  </span>
                  <button className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full shadow hover:bg-gray-200 transition duration-300">
                    Click to Know More
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
