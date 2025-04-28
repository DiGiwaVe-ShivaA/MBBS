"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BdsLayout = () => {
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
            Study BDS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            BDS (Bachelor of Dental Surgery) in India is a sought-after course
            for students aiming to build a professional career in dentistry.
            With globally recognized institutions and practical learning, India
            offers an excellent platform for future dental surgeons.
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
                style={{ color: "#8A05FF" }}
              >
                <GraduationCap
                  className="w-6 h-6 mr-2"
                  style={{ color: "#00E5FF" }}
                />
                BDS Course Structure
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5 years total duration</li>
                <li>4 years academic education</li>
                <li>1 year mandatory internship</li>
                <li>Recognized by DCI and WHO</li>
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
                style={{ color: "#8A05FF" }}
              >
                <CheckCircle
                  className="w-6 h-6 mr-2"
                  style={{ color: "#00E5FF" }}
                />
                Admission Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET examination</li>
                <li>Minimum 50% marks in 10+2 (PCB)</li>
                <li>Apply through official counseling portals</li>
                <li>Follow admission deadlines strictly</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-blue-50 p-6 rounded-xl shadow"
            style={{ backgroundColor: "#E0F7FF" }}
          >
            <h4
              className="text-xl font-semibold mb-2"
              style={{ color: "#8A05FF" }}
            >
              Academic Timeline
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>June – July</strong> <br />
              Academic session starts: <strong>September – October</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, #E0F7FF, white)" }}
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
            Build Your Dental Career with Excellence
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Explore endless opportunities in dentistry with the right guidance
            and academic excellence.
          </p>
          <button
            className="font-semibold px-6 py-3 rounded-full shadow-lg transition"
            style={{ backgroundColor: "#00E5FF", color: "white" }}
          >
            Start Your Journey
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Expert Counseling",
              desc: "Get expert advice to choose the best dental college for you.",
              icon: "🦷",
            },
            {
              title: "Recognized Colleges",
              desc: "Find top DCI-approved colleges across India.",
              icon: "🏫",
            },
            {
              title: "Affordable Fees",
              desc: "Explore budget-friendly options and scholarship opportunities.",
              icon: "💰",
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
      <section className="py-16 px-6" style={{ backgroundColor: "#E0F7FF" }}>
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "#8A05FF" }}
          >
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Just 3 simple steps to kickstart your journey toward a dental
            career.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Consult",
              desc: "Talk to our dental education experts.",
            },
            {
              step: "02",
              title: "Apply",
              desc: "Apply to top BDS colleges through counseling.",
            },
            {
              step: "03",
              title: "Confirm",
              desc: "Secure your admission successfully.",
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

      {/* Detailed Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "NEET Coaching",
              desc: "Comprehensive coaching for NEET preparation.",
              icon: "📚",
            },
            {
              title: "International Options",
              desc: "Explore dental courses abroad as well.",
              icon: "🌍",
            },
            {
              title: "Application Support",
              desc: "Get help with every step of the application process.",
              icon: "📝",
            },
            {
              title: "Specialization Guidance",
              desc: "Plan your future MDS specialization wisely.",
              icon: "🔬",
            },
            {
              title: "Hostel Facilities",
              desc: "Find safe and affordable accommodation easily.",
              icon: "🏡",
            },
            {
              title: "Visa Support",
              desc: "Smooth visa process for overseas education.",
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
            Ready to Start Your Dental Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us now and take the first step toward becoming a successful
            dentist!
          </p>
          <button
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition"
            style={{ color: "#8A05FF" }}
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default BdsLayout;
