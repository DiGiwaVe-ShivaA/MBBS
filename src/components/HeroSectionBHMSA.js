"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BhmsLayout = () => {
  return (
    <>
      {/* Main Intro Section */}
      <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            style={{ color: "#8A05FF" }}
          >
            Study BHMS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            BHMS (Bachelor of Homeopathic Medicine and Surgery) offers a unique
            approach to healthcare, emphasizing holistic treatment and natural
            remedies. India has some of the best institutions to launch your
            career in homeopathy.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3
                className="flex items-center text-xl font-semibold mb-2"
                style={{ color: "#00E5FF" }}
              >
                <GraduationCap className="w-6 h-6 mr-2" color="#00E5FF" />
                BHMS Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5.5 years duration (including internship)</li>
                <li>Focus on natural healing and homeopathic principles</li>
                <li>Recognized by NCH and WHO</li>
                <li>Global demand for homeopathic practitioners</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3
                className="flex items-center text-xl font-semibold mb-2"
                style={{ color: "#00E5FF" }}
              >
                <CheckCircle className="w-6 h-6 mr-2" color="#00E5FF" />
                Admission Criteria
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET exam</li>
                <li>Minimum 50% marks in 10+2 (PCB)</li>
                <li>Apply through AYUSH counseling</li>
                <li>Fulfill category reservation norms if applicable</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center p-6 rounded-xl shadow"
            style={{ backgroundColor: "#00E5FF20" }}
          >
            <h4
              className="text-xl font-semibold mb-2"
              style={{ color: "#8A05FF" }}
            >
              Important Timelines
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>July – August</strong> <br />
              Classes commence: <strong>October – November</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, #00E5FF20, #ffffff)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            style={{ color: "#8A05FF" }}
          >
            Heal Naturally with Homeopathy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Join the world of holistic healing through BHMS and make a
            difference globally.
          </p>
          <button
            className="font-semibold px-6 py-3 rounded-full shadow-lg transition"
            style={{ backgroundColor: "#8A05FF", color: "#fff" }}
          >
            Start Your BHMS Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Holistic Education",
              desc: "Learn about mind-body healing with a focus on natural medicine.",
              icon: "🧠",
            },
            {
              title: "Leading Colleges",
              desc: "Get trained at premier homeopathic medical institutions.",
              icon: "🏥",
            },
            {
              title: "Career Versatility",
              desc: "Work in hospitals, clinics, research centers, and wellness industries.",
              icon: "🌍",
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
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#8A05FF" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#00E5FF20" }}>
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "#8A05FF" }}
          >
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to enroll into a leading BHMS program.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Career Counseling",
              desc: "Expert advice to choose the right college and path.",
            },
            {
              step: "02",
              title: "Registration",
              desc: "Apply through centralized AYUSH counseling for BHMS.",
            },
            {
              step: "03",
              title: "College Allotment",
              desc: "Secure your seat and begin your medical journey.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#00E5FF" }}
              >
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
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
              title: "Clinical Training",
              desc: "Gain practical exposure at homeopathic hospitals.",
              icon: "🩺",
            },
            {
              title: "Global Certification",
              desc: "Expand career options worldwide with recognized degrees.",
              icon: "🌎",
            },
            {
              title: "Postgraduate Studies",
              desc: "Pursue MD (Homeopathy) or specialize further.",
              icon: "🎓",
            },
            {
              title: "Scholarship Support",
              desc: "Access scholarships based on performance and need.",
              icon: "💰",
            },
            {
              title: "Research Opportunities",
              desc: "Contribute to scientific studies in natural medicine.",
              icon: "🔬",
            },
            {
              title: "Practice Autonomy",
              desc: "Set up your own homeopathy practice globally.",
              icon: "🏡",
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
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: "#8A05FF" }}
              >
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section
        className="py-16 text-white text-center px-6"
        style={{ background: "linear-gradient(to right, #00E5FF, #8A05FF)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Begin Your BHMS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with our counselors today and take the first step towards a
            career in Homeopathy.
          </p>
          <button
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition"
            style={{ color: "#8A05FF" }}
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default BhmsLayout;
