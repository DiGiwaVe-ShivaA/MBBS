"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBrain,
  FaChalkboardTeacher,
  FaMapMarkedAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
    title: "Proven Academic Model",
    desc: "Backed by years of strong student outcomes and results.",
  },
  {
    icon: <FaBrain className="text-purple-500 text-4xl" />,
    title: "Innovative Curriculum",
    desc: "Tech-enabled, student-focused, and future-ready content.",
  },
  {
    icon: <FaChalkboardTeacher className="text-green-500 text-4xl" />,
    title: "Full Training & Support",
    desc: "From onboarding to daily operations, we’ve got your back.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-400 text-4xl" />,
    title: "Exclusive Territories",
    desc: "Get your own dedicated location to maximize your reach.",
  },
  {
    icon: <FaMoneyBillWave className="text-emerald-400 text-4xl" />,
    title: "Low Investment, High Impact",
    desc: "Affordable entry point with meaningful educational influence.",
  },
];

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          📚 Empower Education, Build a Legacy
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Are you passionate about shaping young minds and making a real
          difference? Join us as a{" "}
          <span className="font-semibold text-indigo-600">
            Franchise Partner
          </span>{" "}
          and be a part of the education revolution!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {benefit.icon}
            <h3 className="mt-4 text-xl font-bold text-indigo-700">
              {benefit.title}
            </h3>
            <p className="text-gray-600 mt-2">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <p className="text-xl text-gray-800 mb-6">
          Whether you're running a coaching center, school, or just starting
          fresh — this is your moment.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          🎓 Let’s revolutionize education together.
        </h2>
        <a
          href="https://wa.me/9557911144"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-full hover:bg-indigo-700 transition"
        >
          📞 Contact Us on WhatsApp
        </a>
      </motion.div>
    </main>
  );
}
