"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#8A05FF] mb-8"
        >
          Our Services
        </motion.h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide expert services to guide students and parents through every
          step of the education journey. Whether it's counseling, admissions,
          coaching, or financing, we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {/* Career Counseling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Career Counseling
            </h3>
            <p className="text-white">
              Our expert counselors help you explore career options, set goals,
              and guide you to make informed decisions based on your interests
              and strengths.
            </p>
            <button className="mt-4 text-[#8A05FF] font-semibold">
              Learn More
            </button>
          </motion.div>

          {/* Get Franchise Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Get Franchise Partner
            </h3>
            <p className="text-white">
              Join our network and become a franchise partner. Empower students
              with world-class education and support with our well-established
              franchise system.
            </p>
            <button className="mt-4 text-[#00E5FF] font-semibold">
              Apply Now
            </button>
          </motion.div>

          {/* Educational Loan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Educational Loan
            </h3>
            <p className="text-white">
              Get assistance with educational loans to pursue your dream career.
              We offer guidance on loan application and financial planning to
              ease your burden.
            </p>
            <button className="mt-4 text-[#8A05FF] font-semibold">
              Apply for Loan
            </button>
          </motion.div>

          {/* NEET Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              NEET Coaching
            </h3>
            <p className="text-white">
              Get expert coaching for NEET preparation with a structured
              curriculum and personalized study plans. Boost your chances of
              success with our proven coaching programs.
            </p>
            <button className="mt-4 text-[#00E5FF] font-semibold">
              Join NEET Coaching
            </button>
          </motion.div>

          {/* Admission Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Admission Guidance
            </h3>
            <p className="text-white">
              Let us guide you through the admission process. From choosing the
              right course to submitting the application, we provide expert
              advice to help you navigate the complexities of the admission
              process.
            </p>
            <button className="mt-4 text-[#8A05FF] font-semibold">
              Get Admission Help
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
