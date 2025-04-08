"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  BookOpen,
  HeartHandshake,
  PhoneCall,
  GraduationCap,
  BookOpenCheck,
  Star,
} from "lucide-react";

const combinedFeatures = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Verified College Admissions",
    description:
      "Gain access to trusted institutions with proven admission success.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Expert Faculty Panel",
    description:
      "Learn from seasoned professionals with years of industry experience.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    title: "Quality Study Material",
    description:
      "Access curated materials designed for efficient learning and success.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-pink-600" />,
    title: "Personal Counseling",
    description:
      "Get tailored guidance to map your academic journey with confidence.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-yellow-500" />,
    title: "WhatsApp & Call Support",
    description: "Reach out anytime—real support from real people who care.",
  },
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

export default function WhyChooseUsSection() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <section
      id="why-choose-us"
      className="relative py-20 px-6 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* Animated Neumorphism Background Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl z-0"
      />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {combinedFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl transition-all duration-300 bg-[#f0f0f3] shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff]"
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
    </section>
  );
}
