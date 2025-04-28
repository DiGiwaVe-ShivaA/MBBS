"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaStethoscope,
  FaTooth,
  FaLeaf,
  FaUserGraduate,
  FaFileAlt,
  FaUniversity,
} from "react-icons/fa";
import { MdOutlineVerified, MdSchool } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

export default function AboutNEETPage() {
  const [syllabusTab, setSyllabusTab] = useState("class11");
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
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
          <h2 className="text-2xl font-bold text-indigo-800 mb-8 text-center">
            🧭 NEET 2025 Counselling Process
          </h2>

          <div className="flex flex-col space-y-8 relative max-w-6xl mx-auto">
            {/* Vertical line in center */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-indigo-200"></div>

            {[
              {
                title: "Counselling Registration",
                desc: "Register on MCC or state counselling portal. Upload documents and provide details.",
              },
              {
                title: "Choice Filling & Locking",
                desc: "Choose your preferred colleges and lock choices before the deadline.",
              },
              {
                title: "Seat Allotment Result",
                desc: "Check your allotment based on rank, preferences, and seat availability.",
              },
              {
                title: "Reporting to College",
                desc: "Report to the allotted college, verify documents, and pay admission fees.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-6">
                {/* Step circle */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold z-10">
                  {idx + 1}
                </div>

                {/* Step content */}
                <div className="bg-white p-5 rounded-xl shadow-md w-full border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4th Section Starts */}
      <div className="bg-gray-100 min-h-screen px-4 py-10 text-gray-800 mt-10">
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
          </div>
        </div>
      </div>
    </div>
  );
}
