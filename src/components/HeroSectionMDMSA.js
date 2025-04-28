"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MdMsLayout = () => {
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
            Study MD/MS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            MD/MS (Doctor of Medicine/Master of Surgery) programs in India
            provide an opportunity to specialize in various medical fields.
            These postgraduate programs are designed to help you become an
            expert in the medical industry.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <GraduationCap className="w-6 h-6 mr-2 text-[#00E5FF]" />
                MD/MS Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>3 years duration (2 years for certain specialties)</li>
                <li>Specializations available in various medical fields</li>
                <li>Recognized by MCI and Indian universities</li>
                <li>Global demand for MD/MS specialists</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <CheckCircle className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Admission Criteria
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET PG exam</li>
                <li>MBBS degree from a recognized institution</li>
                <li>Minimum 50% marks in MBBS final exams</li>
                <li>Fulfill category reservation norms if applicable</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-[#00E5FF] p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-[#8A05FF] mb-2">
              Important Timelines
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>March – April</strong> <br />
              Classes commence: <strong>June – July</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#00E5FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Become a Medical Specialist with MD/MS in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Join India’s premier medical institutions and specialize in the
            field of your choice with MD/MS.
          </p>
          <button className="bg-[#8A05FF] hover:bg-[#6601D5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Start Your MD/MS Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "World-Class Education",
              desc: "Learn from top-notch faculty with hands-on clinical training.",
              icon: "🎓",
            },
            {
              title: "Leading Medical Institutions",
              desc: "Study at India’s most reputed universities and hospitals.",
              icon: "🏥",
            },
            {
              title: "Versatile Career Paths",
              desc: "Opportunities to practice, teach, or enter research.",
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
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#00E5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these steps to apply and secure admission to top MD/MS
            programs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Career Counseling",
              desc: "Consult experts to select the right specialization and institution.",
            },
            {
              step: "02",
              title: "NEET PG Exam",
              desc: "Prepare and appear for the NEET PG exam for postgraduate admissions.",
            },
            {
              step: "03",
              title: "College Allotment",
              desc: "Get admission to a prestigious medical college in India.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#8A05FF] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clinical Training",
              desc: "Gain practical experience in renowned hospitals.",
              icon: "🩺",
            },
            {
              title: "Research Opportunities",
              desc: "Participate in cutting-edge research in the medical field.",
              icon: "🔬",
            },
            {
              title: "Global Recognition",
              desc: "Earn a degree recognized worldwide.",
              icon: "🌎",
            },
            {
              title: "Postgraduate Fellowships",
              desc: "Further specialization through fellowship programs.",
              icon: "🎓",
            },
            {
              title: "Teaching Opportunities",
              desc: "Teaching opportunities at medical institutions worldwide.",
              icon: "🧑‍🏫",
            },
            {
              title: "Practice in Top Hospitals",
              desc: "Work in leading hospitals as a specialist.",
              icon: "🏥",
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

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] py-16 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Begin Your MD/MS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with counselors and take the first step toward becoming a
            specialist in your field.
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default MdMsLayout;
