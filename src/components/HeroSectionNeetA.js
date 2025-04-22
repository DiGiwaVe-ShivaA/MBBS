"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
import { MdOutlineVerified, MdSchool } from "react-icons/md";
import { FaTooth, FaLeaf } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaUserGraduate, FaFileAlt, FaUniversity } from "react-icons/fa";
import { HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

// Sample data for infographic

const timelineSteps = [
  {
    title: "Register Online",
    desc: "Fill out the NEET application form on neet.nta.nic.in",
    icon: "📝",
  },
  {
    title: "Admit Card",
    desc: "Download the admit card when available",
    icon: "🎫",
  },
  {
    title: "Exam Day",
    desc: "Appear for NEET at your assigned centre",
    icon: "🧪",
  },
  {
    title: "Result Announcement",
    desc: "Check your results on the official portal",
    icon: "📢",
  },
  {
    title: "Counseling",
    desc: "Register for counseling rounds",
    icon: "📋",
  },
  {
    title: "Seat Allotment",
    desc: "Choose your college and confirm your seat",
    icon: "🏫",
  },
];

const testimonials = [
  {
    quote:
      "I cracked NEET on my 2nd attempt – the right guidance changes everything.",
    author: "Ritika, AIIMS Delhi",
  },
  {
    quote: "Interactive timelines made my prep seamless!",
    author: "Arjun, KMC Manipal",
  },
];

export default function AboutNEETPage() {
  const [syllabusTab, setSyllabusTab] = useState("class11");
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      {/* Background Image Container */}
      <div className="relative z-0 w-full h-full flex items-center justify-center">
        <img
          src="/images/neet-bg.png"
          alt="NEET Background"
          className="max-w-7xl w-full h-auto object-contain"
        />
      </div>
      {/* Iconic Breakdown */}
      <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8fcff] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
              📘 What is NEET 2025?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              NEET – The Gateway to Your Medical Career
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
          >
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                <FaStethoscope className="inline-block text-indigo-600 mr-2 text-xl" />
                <span className="font-semibold">
                  NEET (National Eligibility cum Entrance Test)
                </span>{" "}
                is a highly competitive national-level entrance exam conducted
                by the{" "}
                <span className="font-semibold text-blue-700">
                  National Testing Agency (NTA)
                </span>
                . It is the single gateway for admission into various
                undergraduate courses like MBBS, BDS, and AYUSH (BAMS, BHMS,
                BUMS, BSMS), as well as veterinary sciences (BVSc & AH).
              </p>
              <p>
                NEET is accepted by all recognized institutions including those
                governed by the{" "}
                <span className="text-blue-700 font-semibold">
                  Medical Council of India (MCI)
                </span>{" "}
                and{" "}
                <span className="text-blue-700 font-semibold">
                  Dental Council of India (DCI)
                </span>
                .
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-inner">
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                🎯 Purpose of the NEET Exam
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Standardizes the admission process across India with a unified
                  exam.
                </li>
                <li>
                  Ensures transparency, fairness, and a merit-based selection
                  system.
                </li>
                <li>
                  Reduces stress by eliminating the need for multiple entrance
                  exams.
                </li>
                <li>Prevents regional/institutional biases in admissions.</li>
                <li>
                  Includes AYUSH and Veterinary courses, expanding medical
                  opportunities.
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                💡 Why is NEET Important for 10th & 12th Aspirants?
              </h3>
              <p className="text-gray-700">
                If you're dreaming of becoming a{" "}
                <span className="font-medium text-green-700">
                  doctor, dentist, or healer
                </span>
                , then NEET is your first milestone. For Class 10th students,
                it's the perfect time to plan your roadmap, choose PCB subjects,
                and focus on concepts. For 12th graders, it’s time to revise
                smartly and master the NEET pattern.
              </p>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-lg text-center"
          >
            <MdOutlineVerified className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Start Your NEET Journey with Clarity
            </h3>
            <p className="mb-6 text-lg">
              Build your foundation early and follow a strategic plan to crack
              NEET with confidence.
            </p>
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              📞 Book a FREE NEET Counseling Call
            </button>
          </motion.div>
        </div>
      </div>
      {/* <section className="px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl">🎯</div>
            <h3 className="mt-4 font-semibold">Purpose</h3>
            <p className="mt-2 text-gray-600">
              Single entrance exam for MBBS, BDS, AYUSH, and more.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl">👩‍⚕️</div>
            <h3 className="mt-4 font-semibold">Eligibility</h3>
            <p className="mt-2 text-gray-600">
              10+2 with Physics, Chemistry, Biology & min 50% (UR).
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl">📅</div>
            <h3 className="mt-4 font-semibold">Exam Date</h3>
            <p className="mt-2 text-gray-600">Once a year, usually in May.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl">📝</div>
            <h3 className="mt-4 font-semibold">Pattern</h3>
            <p className="mt-2 text-gray-600">
              720 marks | 180 MCQs | 3 sections (PCB).
            </p>
          </div>
        </div>
      </section> */}
      {/* neets course 2 starts */}
      <div className="min-h-screen bg-gradient-to-br from-[#f7faff] to-[#ebf4ff] py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
              📚 NEET 2025 Course Duration & Exam Pattern
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Know your journey and prepare smartly for your medical career
            </p>
          </motion.div>

          {/* Course Duration */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">
              🎓 Course Duration Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* MBBS */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <FaStethoscope className="text-3xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold">MBBS – 5.5 Years</h3>
                <p className="text-gray-700 mt-2 text-sm">
                  4.5 years academic + 1 year internship in hospitals. Gain
                  real-world clinical experience during your final year.
                </p>
              </div>
              {/* BDS */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <FaTooth className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold">BDS – 5 Years</h3>
                <p className="text-gray-700 mt-2 text-sm">
                  Includes theory + hands-on dental practice. Final year
                  involves real patient interactions and procedures.
                </p>
              </div>
              {/* AYUSH */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                <GiMedicines className="text-3xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold">
                  AYUSH (BAMS/BHMS) – 5.5 Years
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  Study traditional medicine, with practical training. Includes
                  Ayurveda, Homeopathy, and clinical practice.
                </p>
              </div>
            </div>
          </div>

          {/* Exam Pattern */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              📝 NEET 2025 Exam Pattern
            </h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Section</th>
                    <th className="py-3 px-4">No. of Questions</th>
                    <th className="py-3 px-4">Marks</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-t">
                    <td className="py-3 px-4">Physics</td>
                    <td className="py-3 px-4">A + B</td>
                    <td className="py-3 px-4">35 + 15 = 50</td>
                    <td className="py-3 px-4">180</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Chemistry</td>
                    <td className="py-3 px-4">A + B</td>
                    <td className="py-3 px-4">35 + 15 = 50</td>
                    <td className="py-3 px-4">180</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Botany</td>
                    <td className="py-3 px-4">A + B</td>
                    <td className="py-3 px-4">35 + 15 = 50</td>
                    <td className="py-3 px-4">180</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Zoology</td>
                    <td className="py-3 px-4">A + B</td>
                    <td className="py-3 px-4">35 + 15 = 50</td>
                    <td className="py-3 px-4">180</td>
                  </tr>
                  <tr className="border-t font-bold text-blue-800">
                    <td className="py-3 px-4">Total</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">200 (180 to attempt)</td>
                    <td className="py-3 px-4">720</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Marking Scheme */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">
              📌 Marking Scheme
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong className="text-green-700">Correct Answer:</strong> +4
                marks
              </li>
              <li>
                <strong className="text-red-600">Incorrect Answer:</strong> -1
                mark
              </li>
              <li>
                <strong>Unanswered:</strong> 0 marks
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* neet course ends */}
      {/* 3rs neet starts  */}
      <div className="bg-gradient-to-br from-[#f7faff] to-[#e4efff] min-h-screen p-6 md:p-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              NEET 2025: Eligibility, Registration & Counselling
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Plan your journey with confidence using this step-by-step guide
            </p>
          </motion.div>

          {/* Eligibility Criteria */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">
              ✅ Eligibility Criteria
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Age Limit */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <FaUserGraduate className="text-3xl text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold">Age Limit</h3>
                <p className="text-sm mt-2 text-gray-700">
                  Minimum 17 years as of 31st Dec 2025.
                  <br />
                  <strong>No upper age limit</strong> (subject to updates).
                </p>
              </div>
              {/* Educational Qualification */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <FaFileAlt className="text-3xl text-green-600 mb-3" />
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-sm mt-2 text-gray-700">
                  Class 12 pass with Physics, Chemistry, Biology/Biotech, and
                  English from a recognized board.
                </p>
              </div>
              {/* Minimum Marks */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <FaUniversity className="text-3xl text-yellow-500 mb-3" />
                <h3 className="text-xl font-semibold">Minimum Marks</h3>
                <p className="text-sm mt-2 text-gray-700">
                  General: 50% | OBC/SC/ST: 40%
                  <br />
                  PwD: 45% in PCB combined.
                </p>
              </div>
            </div>
          </div>

          {/* Registration Process */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">
              📝 NEET 2025 Registration Steps
            </h2>
            <div className="space-y-4">
              {[
                "Visit the Official NTA NEET Website",
                "Click on “New Registration”",
                "Complete the Application Form",
                "Upload Required Documents",
                "Pay the Application Fee",
                "Download & Save Confirmation Page",
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
                >
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full text-left flex items-center justify-between text-lg font-medium text-blue-800"
                  >
                    {index + 1}. {step}
                    <span>{openStep === index ? "▲" : "▼"}</span>
                  </button>
                  {openStep === index && (
                    <p className="text-sm text-gray-700 mt-2 pl-2">
                      {
                        [
                          "Go to the official portal (nta.ac.in/neet).",
                          "Generate login ID & password by entering your basic info.",
                          "Fill your academic, personal, and contact details.",
                          "Upload photo, signature & documents in correct format.",
                          "Pay via UPI, net banking, or card.",
                          "Download the confirmation page for records.",
                        ][index]
                      }
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Counselling Process */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">
              🧭 NEET 2025 Counselling Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "1. Counselling Registration",
                  detail:
                    "Register on MCC or state counselling portal. Upload documents and provide details.",
                },
                {
                  title: "2. Choice Filling & Locking",
                  detail:
                    "Choose your preferred colleges and lock choices before the deadline.",
                },
                {
                  title: "3. Seat Allotment Result",
                  detail:
                    "Check your allotment based on rank, preferences, and seat availability.",
                },
                {
                  title: "4. Reporting to College",
                  detail:
                    "Report to the allotted college, verify documents, and pay admission fees.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600"
                >
                  <HiCheckCircle className="text-3xl text-indigo-600 mb-2" />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* neet 3rd ends  */}
      {/* neet 4th starts  */}
      <div className="bg-gray-100 min-h-screen px-4 py-10 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-center">
            NEET 2025 Reservation & Medical Stats
          </h1>

          {/* Reservation Policy */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600">
              Reservation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>OBC-NCL:</strong> 27%
              </li>
              <li>
                <strong>SC:</strong> 15%
              </li>
              <li>
                <strong>ST:</strong> 7.5%
              </li>
              <li>
                <strong>EWS:</strong> 10%
              </li>
              <li>
                <strong>PwD:</strong> 5% (Horizontal reservation across
                categories)
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              *Applicable for 15% AIQ. State-level policies may differ.
            </p>
          </div>

          {/* Total Medical Seats */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-green-600">
              Total Medical Seats in India (April 2025)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm sm:text-base">
              <div className="bg-blue-100 rounded-xl p-4 font-medium">
                MBBS
                <br />
                <span className="text-xl font-bold">1,08,915+</span>
              </div>
              <div className="bg-yellow-100 rounded-xl p-4 font-medium">
                BDS
                <br />
                <span className="text-xl font-bold">27,868+</span>
              </div>
              <div className="bg-pink-100 rounded-xl p-4 font-medium">
                AYUSH
                <br />
                <span className="text-xl font-bold">52,720+</span>
              </div>
              <div className="bg-green-100 rounded-xl p-4 font-medium">
                BVSc & AH
                <br />
                <span className="text-xl font-bold">2,000+</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              *Data is approximate and may increase with new approvals.
            </p>
          </div>

          {/* NEET 2024 Recap */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-purple-600">
              NEET 2024 Recap
            </h2>

            <div>
              <h3 className="font-semibold text-lg">Cutoff Marks:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>General:</strong> 720 – 137
                </li>
                <li>
                  <strong>SC/ST/OBC:</strong> 136 – 107
                </li>
                <li>
                  <strong>PwD:</strong> 136 – 121
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Exam Stats:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>Registered:</strong> 20+ lakh
                </li>
                <li>
                  <strong>Appeared:</strong> 18.7+ lakh
                </li>
                <li>
                  <strong>Qualified:</strong> 10+ lakh
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">MBBS Seats in 2024:</h3>
              <p className="pl-6 text-gray-700">
                Approx. <strong>107,000</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* neet 4th ends */}
      {/* Interactive Timeline */}(
      <section className="relative px-6 md:px-20 py-16 bg-gray-50 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16">NEET Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 z-0" />

          <div className="flex flex-col gap-16 relative z-10">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`relative flex items-start gap-6 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } md:items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 bg-white border-t-4 border-blue-500 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>

                {/* Center Dot with Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 md:top-0 z-20">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl shadow-xl border-4 border-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
