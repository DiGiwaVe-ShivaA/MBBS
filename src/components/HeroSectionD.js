"use client";

import { motion } from "framer-motion";

const colleges = [
  {
    name: "Harvard University",
    image: "/images/harward.png", // Replace with actual path
    badge: "Top Choice",
    description:
      "Ranked #1 by our students for global excellence and Ivy League credibility.",
  },
  {
    name: "Stanford University",
    image: "/images/stanford.jpg",
    badge: "100% Success Rate",
    description:
      "All applicants placed in 2024—innovation and future leaders start here.",
  },
  {
    name: "University of Oxford",
    image: "/images/oxford.jpg",
    badge: "Top Global Ranking",
    description: "A timeless institution that opens doors worldwide.",
  },
  {
    name: "Imperial College London",
    image: "/images/imperial.png",
    badge: "Best for Medical",
    description:
      "Chosen by medical prodigies—backed by full guidance and admission success.",
  },
  {
    name: "University of Cambridge",
    image: "/images/cambridge.webp",
    badge: "Most Popular",
    description: "Preferred by 300+ students annually for PR pathways.",
  },
  {
    name: "First Moscow State Medical University",
    image: "/images/first.jpg",
    badge: "Top in World",
    description: "Best ROI for international students.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function TopCollegesGrid() {
  return (
    <section
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      id="top-colleges"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Top Colleges Our Students Choose
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Explore premier institutions where our students have secured
          admissions with expert guidance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <motion.div
              key={college.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative p-6 rounded-2xl shadow-xl bg-white/30 dark:bg-white/10 border border-white/10 backdrop-blur-xl transition hover:scale-[1.03]"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {college.badge}
              </span>

              {/* College Logo */}
              <img
                src={college.image}
                alt={`${college.name} Logo`}
                className="w-20 h-20 object-contain mx-auto mb-4"
                loading="lazy"
              />

              {/* Name & Description */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {college.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {college.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
