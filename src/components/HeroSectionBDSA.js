"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BdsLayout = () => {
  return (
    <>
      {/* Main Intro Section */}
      {/* <section className="bg-white py-12 px-4 lg:px-20">
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
      </section> */}

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
          {/* <button
            className="font-semibold px-6 py-3 rounded-full shadow-lg transition"
            style={{ backgroundColor: "#00E5FF", color: "white" }}
          >
            Start Your Journey
          </button> */}
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
          {/* Left Side: Text Content (narrower) */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
              Study{" "}
              <span className="text-black font-extrabold">BDS in India</span>
            </h2>
            <p className="text-lg mb-4">
              BDS (Bachelor of Dental Surgery) in India is a highly preferred
              course for aspiring dental professionals. With excellent
              infrastructure, expert faculty, and a robust academic structure,
              India offers global-standard dental education.
            </p>
            <p className="text-lg mb-4">
              Admission is based on the NEET entrance exam. Applicants must
              score at least 50% in 10+2 with science subjects. The BDS program
              is 5 years long—4 years of academic learning followed by a 1-year
              internship.
            </p>
            <p className="text-lg mb-4">
              Indian dental colleges offer early clinical exposure and extensive
              hands-on practice. Top institutions are approved by the Dental
              Council of India (DCI), WHO, and NMC.
            </p>
            <p className="text-lg mb-4">
              The application process typically begins in June/July, and the
              academic session starts by August/September. For students seeking
              quality education at affordable costs, India is a great
              destination for BDS.
            </p>
          </div>

          {/* Right Side: Image (wider) */}
          <div className="md:w-7/12 flex">
            <img
              src="/images/bdsneet.jpg"
              alt="Top Medical Colleges"
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Advantages Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Advantages of Pursuing BDS in India
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                India is home to some of the most prestigious and globally
                recognized medical universities.
              </li>
              <li>
                With over 300 medical institutions across the country, including
                around 180 private colleges, students have diverse choices.
              </li>
              <li>
                India offers approximately 72,000 BDS seats annually, ensuring
                ample opportunities for aspiring doctors.
              </li>
              <li>
                Indian medical education is renowned for its strong emphasis on
                research, innovation, and academic excellence.
              </li>
              <li>
                Clinical training in India provides hands-on experience and
                real-time patient interaction, building practical skills.
              </li>
              <li>
                Students participate in international medical conferences,
                workshops, and academic exchange programs.
              </li>
              <li>
                The curriculum aligns with global medical standards, making
                Indian graduates competitive worldwide.
              </li>
              <li>
                Indian BDS graduates are eligible to appear for global licensing
                exams and practice medicine internationally.
              </li>
              <li>
                Students gain practical experience by working with real human
                cadavers during their training.
              </li>
            </ul>
          </div>

          {/* Eligibility Criteria Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Eligibility Criteria for{" "}
              <span className="text-black font-extrabold">BDS Admission</span>
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                Applicants must qualify for NEET, AIIMS, or JIPMER entrance
                exams with competitive scores due to high demand.
              </li>
              <li>
                General category candidates must secure at least 60% in 12th
                grade, while SC/ST students require a minimum of 40%.
              </li>
              <li>
                Mandatory subjects include Physics, Chemistry, and Biology in
                10+2 or equivalent examinations.
              </li>
              <li>
                Unreserved candidates require a minimum of 50% marks; reserved
                category candidates need at least 45% in PCB subjects.
              </li>
              <li>
                For AIIMS admission, a minimum of 60% marks in 10+2 is
                essential.
              </li>
              <li>
                Proficiency in English is compulsory, as it is the medium of
                instruction in top medical colleges.
              </li>
              <li>
                Applicants must be between 17 and 25 years of age at the time of
                admission.
              </li>
              <li>
                Clearing NEET is mandatory for participation in centralized
                counselling for admission to medical colleges.
              </li>
            </ul>
          </div>

          {/* Documents Required Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Documents Required for{" "}
              <span className="text-black font-extrabold">BDS Admission</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <ul className="space-y-2">
                <li>
                  10th and 12th-grade mark sheets and passing certificates
                </li>
                <li>NEET scorecard and admit card</li>
                <li>Birth certificate</li>
                <li>Caste certificate (if applicable)</li>
                <li>Recent passport-size photographs</li>
                <li>Medical Council of India (MCI) approval (if required)</li>
                <li>Provisional allotment letter</li>
              </ul>
              <ul className="space-y-2">
                <li>Domicile certificate (if applicable)</li>
                <li>Transfer certificate from last attended institution</li>
                <li>Income certificate (for scholarships/reservations)</li>
                <li>Migration certificate (for students from other boards)</li>
                <li>Disability certificate (if applicable)</li>
                <li>Freedom fighter certificate (if applicable)</li>
                <li>Proof of application fee payment</li>
              </ul>
            </div>
          </div>

          {/* Teaching Methodology Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Teaching Methodology in{" "}
              <span className="text-black font-extrabold">BDS India</span>
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                Most Indian medical colleges commence their academic session in
                September.
              </li>
              <li>
                While regional languages are spoken on campuses, the medium of
                instruction is primarily English.
              </li>
              <li>
                Students are comfortable with both English and Hindi, which
                enhances learning and communication.
              </li>
              <li>
                The National Medical Commission (NMC) publishes a list of
                English-medium BDS colleges annually.
              </li>
              <li>
                Modern teaching methods include clinical rotations, simulation
                labs, group discussions, and case-based learning.
              </li>
            </ul>
          </div>
        </div>
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
