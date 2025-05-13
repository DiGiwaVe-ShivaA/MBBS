"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
import { MdOutlineVerified, MdSchool } from "react-icons/md";
import { FaTooth, FaLeaf } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaUserGraduate, FaFileAlt, FaUniversity } from "react-icons/fa";
import { HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

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
      <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8fcff] py-4 px-6">
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

            <div className="max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center leading-tight tracking-tight">
                Explore Your Future: Career Opportunities After NEET UG 2025
              </h1>

              {/* Intro Paragraph */}
              <p className="text-gray-700 mb-8 text-lg leading-relaxed antialiased">
                The NEET UG 2025 Exam is fast approaching, scheduled for{" "}
                <span className="font-semibold">May 4, 2025</span>, and students
                nationwide are giving it their all to secure a spot in the
                medical field. But have you ever thought about what happens
                after NEET? While many aspire to earn an MBBS, the opportunities
                that arise post-NEET are much broader than just becoming a
                doctor.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed antialiased">
                Whether you’re in Class 12 or gearing up as a NEET aspirant,
                it’s vital to recognize the variety of career paths that await
                you once the exam is behind you. The decisions you make today
                can influence your entire future! In this blog, we’ll take you
                through the most promising career options after NEET UG,
                including eligibility requirements, course information, and job
                prospects — all presented in a clear, student-friendly way.
                Let’s dive in and see what your future could look like!
              </p>

              {/* Sub-heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
                What’s NEET UG all about?
              </h2>

              {/* Explanation Paragraph */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed antialiased">
                So, if you’re aspiring to dive into the medical field, NEET UG
                is your gateway! The{" "}
                <span className="font-semibold">
                  National Eligibility cum Entrance Test (Undergraduate)
                </span>
                , commonly referred to as NEET UG, is a national-level entrance
                exam run by the
                <span className="font-semibold">
                  {" "}
                  National Testing Agency (NTA)
                </span>
                . It’s the sole exam you need to conquer if you’re looking to
                pursue undergraduate medical courses in India.
              </p>

              {/* Course List */}
              <p className="text-gray-700 mb-4 text-lg leading-relaxed antialiased">
                With a strong NEET UG score, you can gain admission to esteemed
                programs like:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-8 text-lg leading-relaxed antialiased space-y-2">
                <li>MBBS (Bachelor of Medicine and Bachelor of Surgery)</li>
                <li>BDS (Bachelor of Dental Surgery)</li>
                <li>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</li>
                <li>BHMS (Bachelor of Homeopathic Medicine and Surgery)</li>
                <li>BUMS (Bachelor of Unani Medicine and Surgery)</li>
                <li>BSMS (Bachelor of Siddha Medicine and Surgery)</li>
                <li>
                  BVSc & AH (Bachelor of Veterinary Sciences and Animal
                  Husbandry)
                </li>
                <li>BSc Nursing (at select top institutes)</li>
              </ul>

              {/* Conclusion */}
              <p className="text-gray-700 text-lg leading-relaxed antialiased">
                In short, if you’re aiming for a seat in any government or
                private medical college across India, NEET UG is essential. So,
                if a healthcare career is your dream, taking the NEET UG is the
                first big step toward it!
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
      {/* neets course 2 starts */}
      <div className="min-h-screen bg-gradient-to-br from-[#f7faff] to-[#ebf4ff]  px-6">
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

          {/* Course Duration Table */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">
              🎓 Course Duration Overview
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
                      Course
                    </th>
                    <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
                      Duration
                    </th>
                    <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">MBBS</td>
                    <td className="border border-gray-300 p-4">5.5 Years</td>
                    <td className="border border-gray-300 p-4">
                      4.5 years academic + 1 year internship in hospitals. Gain
                      real-world clinical experience during your final year.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">BDS</td>
                    <td className="border border-gray-300 p-4">5 Years</td>
                    <td className="border border-gray-300 p-4">
                      Includes theory + hands-on dental practice. Final year
                      involves real patient interactions and procedures.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      AYUSH (BAMS/BHMS)
                    </td>
                    <td className="border border-gray-300 p-4">5.5 Years</td>
                    <td className="border border-gray-300 p-4">
                      Study traditional medicine, with practical training.
                      Includes Ayurveda, Homeopathy, and clinical practice.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Exam Pattern Table */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">
              📝 NEET 2025 Exam Pattern
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
                      Section
                    </th>
                    <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
                      Number of Questions
                    </th>
                    <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">Physics</td>
                    <td className="border border-gray-300 p-4">45</td>
                    <td className="border border-gray-300 p-4">180</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">Chemistry</td>
                    <td className="border border-gray-300 p-4">45</td>
                    <td className="border border-gray-300 p-4">180</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      Biology <br />
                      <span className="text-sm text-gray-500">
                        (Botany + Zoology)
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4">90</td>
                    <td className="border border-gray-300 p-4">360</td>
                  </tr>
                </tbody>
                <tfoot className="bg-indigo-50">
                  <tr>
                    <td className="border border-gray-300 p-4 font-bold">
                      Total
                    </td>
                    <td className="border border-gray-300 p-4 font-bold">
                      180
                    </td>
                    <td className="border border-gray-300 p-4 font-bold">
                      720
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Marking Scheme Table */}
          <div className="overflow-x-auto">
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                📌 Marking Scheme
              </h2>
              <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
                <thead className="bg-green-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left text-green-700 font-semibold">
                      Answer Type
                    </th>
                    <th className="border border-gray-300 p-4 text-left text-green-700 font-semibold">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 text-green-700 font-semibold">
                      Correct Answer
                    </td>
                    <td className="border border-gray-300 p-4">+4</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 text-red-600 font-semibold">
                      Incorrect Answer
                    </td>
                    <td className="border border-gray-300 p-4">-1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">
                      Unanswered
                    </td>
                    <td className="border border-gray-300 p-4">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* neet course ends */}

      {/* important section */}

      {/* neet 4th ends */}
    </div>

    // important section
  );
}
