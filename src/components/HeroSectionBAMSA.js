"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BamsLayout = () => {
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
            Study BAMS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            BAMS (Bachelor of Ayurvedic Medicine and Surgery) integrates the
            ancient wisdom of Ayurveda with modern medical science. India, being
            the birthplace of Ayurveda, offers top institutions to nurture your
            dream of becoming an Ayurvedic doctor.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f0f9ff] p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#00E5FF]">
                <GraduationCap className="w-6 h-6 mr-2 text-[#00E5FF]" />
                BAMS Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5.5 years duration (including internship)</li>
                <li>Blend of Ayurveda & modern science</li>
                <li>Recognized by NCISM and WHO</li>
                <li>Global career opportunities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f0f9ff] p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#00E5FF]">
                <CheckCircle className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Admission Criteria
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET exam</li>
                <li>Minimum 50% marks in 10+2 (PCB)</li>
                <li>Apply through AYUSH counseling</li>
                <li>Fulfill category reservation criteria (if applicable)</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-[#e0f7ff] p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-[#8A05FF] mb-2">
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
      <section className="bg-gradient-to-b from-[#e0f7ff] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Heal the World Naturally
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Become a certified Ayurvedic doctor and lead the change towards
            holistic healing.
          </p>
          <button className="bg-[#00E5FF] hover:bg-[#00c8e0] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Begin Your Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Holistic Learning",
              desc: "Study ancient Ayurveda combined with modern practices.",
              icon: "🌿",
            },
            {
              title: "Top Institutions",
              desc: "Get admitted into prestigious Ayurvedic colleges.",
              icon: "🏥",
            },
            {
              title: "Career Opportunities",
              desc: "Explore clinical practice, research, and wellness sectors.",
              icon: "💼",
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
      <section className="bg-[#e0f7ff] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple and guided steps to secure your admission to a top BAMS
            college.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Counseling",
              desc: "Receive expert career guidance and college shortlist.",
            },
            {
              step: "02",
              title: "Registration",
              desc: "Apply via AYUSH counseling for BAMS seats.",
            },
            {
              step: "03",
              title: "Seat Allotment",
              desc: "Get your college allotment and complete admission formalities.",
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
              title: "Internship Support",
              desc: "Guidance for successful clinical internships.",
              icon: "🩺",
            },
            {
              title: "Postgraduate Opportunities",
              desc: "Plan for MD Ayurveda or MBA Healthcare.",
              icon: "🎓",
            },
            {
              title: "Hospital Attachments",
              desc: "Training in leading Ayurvedic hospitals.",
              icon: "🏥",
            },
            {
              title: "Scholarships",
              desc: "Avail scholarships based on merit and reservations.",
              icon: "🎯",
            },
            {
              title: "Global Scope",
              desc: "Practice Ayurveda internationally with proper certification.",
              icon: "🌎",
            },
            {
              title: "Personality Development",
              desc: "Training sessions for communication and clinic management.",
              icon: "🗣️",
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
      <section className="bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] py-16 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Take the First Step Towards a Natural Healing Career!
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with us and shape your future as a leading Ayurvedic doctor.
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Book a Free Counseling
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default BamsLayout;
