"use client";
import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CombinedLayout = () => {
  return (
    <>
      <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-6"
          >
            Study MBBS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            MBBS in India is one of the most preferred choices by medical
            aspirants across the globe. A strong education structure, esteemed
            professors, and globally approved institutions make India a hub for
            medical education.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-purple-600">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-500" />
                MBBS Structure
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5.5 years total duration</li>
                <li>4.5 years of classroom training</li>
                <li>1 year of internship</li>
                <li>Recognized by WHO, NMC, UNESCO</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-purple-600">
                <CheckCircle className="w-6 h-6 mr-2 text-purple-500" />
                Admission Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Appear for NEET examination</li>
                <li>Minimum 50% in 10+2 (PCB)</li>
                <li>Apply through official portals</li>
                <li>Maintain critical admission timelines</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-purple-50 p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-purple-700 mb-2">
              Academic Timeline
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>June – July</strong> <br />
              Academic session starts: <strong>September – October</strong>
            </p>
          </motion.div>
        </div>
      </section>
      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-800">
              Shape Your Medical Career with Confidence
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
              Discover opportunities, unlock pathways, and turn your dreams into
              reality with expert guidance.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Career Counseling",
                desc: "Personalized advice from experts to navigate your career options.",
                icon: "🎯",
              },
              {
                title: "Top Colleges",
                desc: "Find the best medical institutions across India and abroad.",
                icon: "🏥",
              },
              {
                title: "Scholarships",
                desc: "Discover financial aid and scholarships suited for you.",
                icon: "🎓",
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
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About / Steps Section */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to start your journey toward success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consult",
                desc: "Talk to our expert counselors.",
              },
              {
                step: "02",
                title: "Choose",
                desc: "Select the best-fit colleges/courses.",
              },
              {
                step: "03",
                title: "Confirm",
                desc: "Secure your admission hassle-free.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Cards Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NEET Preparation",
                desc: "Get best-in-class coaching and study material.",
                icon: "📚",
              },
              {
                title: "Global Medical Education",
                desc: "Options in Russia, Ukraine, Philippines, and more.",
                icon: "🌍",
              },
              {
                title: "Admission Support",
                desc: "From counseling to document verification and beyond.",
                icon: "📝",
              },
              {
                title: "Career Path Guidance",
                desc: "Choose your specialization wisely with our experts.",
                icon: "💡",
              },
              {
                title: "Hostel & Facilities",
                desc: "Comfortable accommodation options made easy.",
                icon: "🏡",
              },
              {
                title: "Visa Assistance",
                desc: "Seamless visa guidance for overseas education.",
                icon: "✈️",
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
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Connect with us today and make the first step toward your dream
              medical career!
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
              Book a Free Consultation
            </button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default CombinedLayout;
