"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BvscLayout = () => {
  return (
    <>
      {/* Main Intro Section */}
      <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#8A05FF] mb-6"
          >
            Study BVSc in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            BVSc (Bachelor of Veterinary Science) prepares students to provide
            medical care to animals, manage livestock health, and contribute to
            public health and food safety. India offers top institutions for
            aspiring veterinarians.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0F9FF] p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#00E5FF]">
                <GraduationCap className="w-6 h-6 mr-2 text-[#00E5FF]" />
                BVSc Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5.5 years duration (including internship)</li>
                <li>
                  Focus on animal healthcare, livestock management, surgery
                </li>
                <li>Approved by VCI (Veterinary Council of India)</li>
                <li>
                  Career opportunities in government, private, and research
                  sectors
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0F9FF] p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#00E5FF]">
                <CheckCircle className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Admission Criteria
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET-UG exam</li>
                <li>Minimum 50% marks in 10+2 (PCB stream)</li>
                <li>Apply through state counseling for veterinary courses</li>
                <li>Age limit: 17 years minimum</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-[#E8F7FF] p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-[#8A05FF] mb-2">
              Important Timelines
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>June – July</strong> <br />
              Classes commence: <strong>September – October</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E0F7FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Become a Veterinary Expert
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Start your journey towards improving animal lives and public health
            with a BVSc degree.
          </p>
          <button className="bg-[#00E5FF] hover:bg-[#00c6df] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Start Your BVSc Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Animal Healthcare",
              desc: "Learn diagnostics, treatment, and surgery for various animals.",
              icon: "🐕",
            },
            {
              title: "Livestock Management",
              desc: "Contribute to agriculture and food security sectors.",
              icon: "🐄",
            },
            {
              title: "Global Opportunities",
              desc: "Work internationally in zoos, research labs, and veterinary clinics.",
              icon: "🌎",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#E0F7FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s how you can secure admission into a top veterinary college.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Counseling Guidance",
              desc: "Connect with experts for college and course selection.",
            },
            {
              step: "02",
              title: "Apply for NEET & State Counseling",
              desc: "Complete the application and documentation process.",
            },
            {
              step: "03",
              title: "Admission & Enrollment",
              desc: "Get allotted a top veterinary college and start your journey.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#00E5FF] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clinical Rotations",
              desc: "Hands-on training at veterinary hospitals and farms.",
              icon: "🩺",
            },
            {
              title: "Research Opportunities",
              desc: "Engage in veterinary science and zoonotic disease research.",
              icon: "🔬",
            },
            {
              title: "Scholarships Available",
              desc: "Merit-based and need-based financial assistance.",
              icon: "🎓",
            },
            {
              title: "Internship Experience",
              desc: "Mandatory internship to prepare for real-world scenarios.",
              icon: "🏥",
            },
            {
              title: "Entrepreneurship",
              desc: "Start your own clinic, pet care center, or farm consultancy.",
              icon: "🏡",
            },
            {
              title: "Higher Studies",
              desc: "Specialize with MVSc (Master of Veterinary Science) programs.",
              icon: "📚",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="border p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] py-16 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Begin Your BVSc Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Get expert counseling and secure your future in Veterinary Science
            today!
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Book Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default BvscLayout;
