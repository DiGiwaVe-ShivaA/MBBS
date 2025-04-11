"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Users,
  UserCheck,
  BookOpen,
  Book,
  HeartHandshake,
  Handshake,
  PhoneCall,
  MessageCircle,
  GraduationCap,
  School,
  BookOpenCheck,
  FileText,
  Info,
} from "lucide-react";

const combinedFeatures = [
  {
    frontIcon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    backIcon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Verified College Admissions",
    description:
      "Gain access to trusted institutions with proven admission success.",
  },
  {
    frontIcon: <Users className="w-8 h-8 text-green-600" />,
    backIcon: <UserCheck className="w-8 h-8 text-white" />,
    title: "Expert Faculty Panel",
    description:
      "Learn from seasoned professionals with years of industry experience.",
  },
  {
    frontIcon: <BookOpen className="w-8 h-8 text-purple-600" />,
    backIcon: <Book className="w-8 h-8 text-white" />,
    title: "Quality Study Material",
    description:
      "Access curated materials designed for efficient learning and success.",
  },
  {
    frontIcon: <HeartHandshake className="w-8 h-8 text-pink-600" />,
    backIcon: <Handshake className="w-8 h-8 text-white" />,
    title: "Personal Counseling",
    description:
      "Get tailored guidance to map your academic journey with confidence.",
  },
  {
    frontIcon: <PhoneCall className="w-8 h-8 text-yellow-500" />,
    backIcon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "WhatsApp & Call Support",
    description: "Reach out anytime—real support from real people who care.",
  },
  {
    frontIcon: <GraduationCap className="w-8 h-8 text-green-500" />,
    backIcon: <School className="w-8 h-8 text-white" />,
    title: "Top College Admissions",
    description: "Expert guidance to secure admission in top medical colleges.",
  },
  {
    frontIcon: <BookOpenCheck className="w-8 h-8 text-blue-500" />,
    backIcon: <FileText className="w-8 h-8 text-white" />,
    title: "NEET Study Content",
    description: "Curated study material for NEET UG aspirants.",
  },
  {
    frontIcon: <Users className="w-8 h-8 text-purple-500" />,
    backIcon: <UserCheck className="w-8 h-8 text-white" />,
    title: "1-on-1 Counseling",
    description: "Personalized mentorship and emotional support.",
  },
];

export default function WhyChooseUsSection() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <section
      id="why-choose-us"
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* Background Blob */}
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
          className="text-4xl font-bold mb-6 text-gray-800"
        >
          Why Choose Us?
        </motion.h2>

        {/* Description Section */}
        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 px-4 sm:px-6 lg:px-8 w-full max-w-5xl"
        >
          {/* Animated Icon Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center items-center gap-2 mb-4 text-blue-600"
          >
            <Info className="w-6 h-6" />
            <span className="font-semibold uppercase text-sm tracking-wide">
              Expert Admission Guidance
            </span>
          </motion.div>

          {/* Gradient Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
          />

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            Our platform bridges your dream of becoming a{" "}
            <strong>medical professional</strong> with strategic career support
            and trusted admissions guidance. Whether you're pursuing{" "}
            <strong>MBBS or MD/MS</strong> in India or abroad, we simplify the
            process with personalized counseling, college shortlisting, and
            step-by-step guidance.
            <br />
            We assist with <strong>NEET UG/PG</strong> admission planning,
            complete documentation, application follow-ups, and category-based
            support for <strong>NRI Quota, Management Seats</strong>, and{" "}
            <strong>State/Central-level quotas</strong>. With us, your path to a
            top medical college is clearer, smarter, and truly achievable.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {combinedFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flip-card"
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front p-6 rounded-3xl bg-[#f0f0f3] shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff]">
                  <div className="mb-3">{feature.frontIcon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back p-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  <div className="mb-3">{feature.backIcon}</div>
                  <h3 className="text-lg font-bold tracking-wide mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm italic">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
