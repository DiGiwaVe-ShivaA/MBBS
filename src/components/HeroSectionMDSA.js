"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MdsLayout = () => {
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
            Study MDS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            MDS (Master of Dental Surgery) is a postgraduate degree for aspiring
            dental professionals who want to specialize in various branches of
            dentistry. Pursue an MDS in India for advanced training and
            expertise in dentistry.
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
                MDS Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>3 years duration</li>
                <li>
                  Specializations in Orthodontics, Periodontics, Prosthodontics,
                  etc.
                </li>
                <li>Recognized by DCI (Dental Council of India)</li>
                <li>Global recognition and practice opportunities</li>
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
                <li>Qualify NEET MDS exam</li>
                <li>BDS degree from a recognized institution</li>
                <li>Minimum 50% marks in BDS final exams</li>
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
              Applications open: <strong>January – February</strong> <br />
              Classes commence: <strong>May – June</strong>
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
            Become a Dental Specialist with MDS in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Specialize in the field of your choice and gain advanced skills in
            dental surgery with MDS in India.
          </p>
          <button className="bg-[#8A05FF] hover:bg-[#6601D5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Start Your MDS Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Comprehensive Specializations",
              desc: "Choose from a wide range of specialties such as Orthodontics, Periodontics, Prosthodontics, and more.",
              icon: "🦷",
            },
            {
              title: "Top Dental Institutions",
              desc: "Study at India’s best dental schools with state-of-the-art facilities and renowned faculty.",
              icon: "🏫",
            },
            {
              title: "Worldwide Recognition",
              desc: "Earn an MDS degree recognized globally, providing opportunities to practice worldwide.",
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
            Follow these steps to apply and secure admission to top MDS programs
            in India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Career Counseling",
              desc: "Consult with experts to choose the right specialization and institution.",
            },
            {
              step: "02",
              title: "NEET MDS Exam",
              desc: "Prepare and appear for the NEET MDS exam for postgraduate admissions.",
            },
            {
              step: "03",
              title: "College Allotment",
              desc: "Get admitted to top dental colleges in India based on your rank and preferences.",
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
              title: "Advanced Clinical Training",
              desc: "Learn through real-life clinical exposure in top dental hospitals.",
              icon: "🦷",
            },
            {
              title: "Research Opportunities",
              desc: "Get involved in cutting-edge dental research and innovations.",
              icon: "🔬",
            },
            {
              title: "Postgraduate Fellowships",
              desc: "Further specialize through fellowships in specific areas of dentistry.",
              icon: "🎓",
            },
            {
              title: "International Career Opportunities",
              desc: "Practice as a dental surgeon in various countries.",
              icon: "🌍",
            },
            {
              title: "Teaching Opportunities",
              desc: "Teaching roles at top dental schools after your MDS degree.",
              icon: "🧑‍🏫",
            },
            {
              title: "Work in Top Hospitals",
              desc: "Join leading dental hospitals and become an expert in your field.",
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
            Ready to Start Your MDS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with experts and take the first step toward a successful
            career in dentistry.
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default MdsLayout;
