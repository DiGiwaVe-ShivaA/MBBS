"use client";

import React, { useState } from "react";
import { CalendarDays, Clock, User } from "lucide-react";

import {
  GraduationCap,
  BookOpenCheck,
  CalendarClock,
  ClipboardList,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const keyDates = [
  { event: "Notification Release", date: "December 14, 2024" },
  { event: "Application Window", date: "February 7 – March 7, 2025" },
  { event: "Application Correction Window", date: "March 9 – March 11, 2025" },
  { event: "City Intimation Slip Release", date: "April 26, 2025" },
  { event: "Admit Card Release", date: "May 1, 2025" },
  { event: "Exam Date", date: "May 4, 2025 (Sunday, 2–5 PM IST)" },
  { event: "Result Declaration", date: "June 14, 2025 (Tentative)" },
  { event: "Counselling Start", date: "July 3rd week, 2025 (Tentative)" },
];

const cards = [
  { icon: "🧑‍⚕️", title: "One National Exam" },
  { icon: "🏥", title: "MBBS, BDS, AYUSH Admissions" },
  { icon: "📍", title: "Nationwide Centers" },
  { icon: "🗃️", title: "21+ Lakh Applicants (2024)" },
  { icon: "🏛️", title: "500+ Medical Colleges" },
];

const stats = [
  { label: "Subjects", value: "Physics, Chemistry, Biology" },
  { label: "Duration", value: "3 hrs 20 mins" },
  { label: "Questions", value: "180 out of 200" },
  { label: "Max Marks", value: "720" },
  { label: "Marking", value: "+4 for correct, -1 for wrong" },
];

export default function Page() {
  const data = [
    { subject: "Biology", marks: 360 },
    { subject: "Physics", marks: 180 },
    { subject: "Chemistry", marks: 180 },
  ];
  const events = [
    { year: 2013, event: "NEET introduced (replacing AIPMT)" },
    { year: 2016, event: "SC declares NEET as sole exam" },
    { year: 2019, event: "NTA takes over from CBSE" },
    { year: "2020–24", event: "15–20 lakh candidates/year" },
  ];
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl text-gray-800">
      <div className=" text-black rounded-md overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src="/images/neet2025paper.jpeg" // Replace with your actual image path
          alt="NEET 2025"
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Metadata row */}
          <div className="flex items-center text-sm text-teal-400 space-x-6">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>7 min read</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            🩺 NEET 2025: Your Ultimate Guide to India's Premier Medical
            Entrance Exam
          </h1>

          {/* Subtitle */}
          <p className="text-lg ">
            Prepare confidently with our comprehensive breakdown of key dates,
            exam pattern, eligibility, syllabus, and preparation strategies.
          </p>
        </div>
      </div>

      {/* eye catchng header starts */}

      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">NEET Full Guide</h1>
        <p className="text-xl">
          The Ultimate Roadmap to the National Eligibility cum Entrance Test
        </p>
        <div className="mt-6 italic text-lg">
          “The journey of a thousand miles begins with a single step.”
        </div>
      </section>
      {/* eye catching header ends   */}
      {/* Over View Cards starts */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why NEET?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow text-center"
            >
              <div className="text-3xl">{card.icon}</div>
              <div className="mt-2 font-medium">{card.title}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Overview cards ends */}
      {/* Exam Stats Stars */}
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-2xl font-bold mb-6">
          NEET Exam Overview
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex justify-between px-4 py-2 bg-gray-100 rounded-md"
            >
              <span className="font-medium">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Exam Stats ends */}
      {/* Subject Weightage starts */}
      <section className="py-12 px-4 bg-gradient-to-br from-teal-50 to-green-100">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Subject-Wise Weightage
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 w-64 shadow text-center"
            >
              <div className="text-xl font-bold">{item.subject}</div>
              <div className="text-2xl mt-2 text-blue-600">
                {item.marks} Marks
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* subject weightage ends  */}
      {/* Eligibility starts */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl text-center font-bold mb-6">
          Eligibility Criteria
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          <p>✅ Age: Minimum 17 years by 31st Dec of the admission year</p>
          <p>✅ Education: 10+2 with PCB and English</p>
          <p>📌 Minimum Marks: Gen: 50%, OBC/SC/ST: 40%, PwD: 45%</p>
        </div>
      </section>

      {/* Eligibility ends  */}
      {/* History of NEET (Mini Timeline) starts */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-2xl text-center font-semibold mb-6">
          NEET Timeline
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {events.map((e, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-blue-600 font-bold w-20">{e.year}</div>
              <div>{e.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* History of NEET (Mini Timeline) ends  */}
      {/* Inspirational End starts */}

      <section className="py-16 px-4 text-center bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">
          Conclusion: A National Vision
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          NEET is more than an entrance exam – it’s the first step to becoming a
          healer, a dreamer, and a contributor to the nation’s health.
        </p>
        <div className="italic mt-6 text-blue-700">
          “Doctors are not made overnight; NEET is your beginning to a lifelong
          commitment to healing and service.”
        </div>
      </section>

      {/* Inspirational End ends */}
      {/* Neet Eligibility starts */}
      <section className="px-6 py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            📝 NEET Eligibility Criteria
          </h2>
          <p className="text-gray-600 mb-10">
            Know if you're eligible to begin your medical journey
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <IconCard
              icon={<CalendarClock className="w-8 h-8 text-blue-600" />}
              title="Minimum Age"
              desc="17 years (by Dec 31 of admission year)"
            />
            <IconCard
              icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
              title="Qualification"
              desc="10+2 with PCB & English"
            />
            <IconCard
              icon={<ClipboardList className="w-8 h-8 text-blue-600" />}
              title="Minimum Marks"
              desc="Gen: 50%, OBC/SC/ST: 40%, PwD: 45%"
            />
            <IconCard
              icon={<CheckCircle className="w-8 h-8 text-blue-600" />}
              title="Attempts"
              desc="No limit on number of attempts"
            />
          </div>

          <hr className="my-12 border-blue-200" />

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            📊 NEET Exam Pattern
          </h2>
          <p className="text-gray-600 mb-10">
            Get familiar with subject-wise distribution and marking scheme
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <SubjectCard
              subject="Biology"
              chapters="Botany & Zoology"
              marks="360"
            />
            <SubjectCard
              subject="Physics"
              chapters="Mechanics, Thermo, Modern"
              marks="180"
            />
            <SubjectCard
              subject="Chemistry"
              chapters="Organic, Inorganic, Physical"
              marks="180"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-white shadow-md rounded-xl p-6 text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              🧪 Pattern Summary
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                📚 <b>Subjects:</b> Physics, Chemistry, Biology
              </li>
              <li>
                ⏱️ <b>Duration:</b> 3 hrs 20 mins
              </li>
              <li>
                📝 <b>Questions:</b> 180 out of 200 (MCQs)
              </li>
              <li>
                📈 <b>Total Marks:</b> 720
              </li>
              <li>
                ✅ <b>Correct:</b> +4 | ❌ <b>Incorrect:</b> -1
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      {/* Neet eligibility ends */}

      <Section title="🌐 Medium of Examination">
        <p>
          Available in 13 languages: English, Hindi, Assamese, Bengali,
          Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu,
          Urdu.
        </p>
      </Section>

      {/* neet overview starts */}
      <div className="flex flex-col gap-12 p-6 max-w-5xl mx-auto">
        {/* 6. Syllabus Overview */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">📘 6. Syllabus Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Physics:</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Units & Measurement</li>
                <li>Motion, Force, Gravitation</li>
                <li>Thermodynamics</li>
                <li>Electromagnetism</li>
                <li>Optics & Modern Physics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Chemistry:
              </h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Structure of Atom</li>
                <li>Thermodynamics</li>
                <li>Organic Chemistry</li>
                <li>Chemical Bonding</li>
                <li>Surface Chemistry</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-700">Biology:</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Cell Biology</li>
                <li>Genetics & Evolution</li>
                <li>Plant & Human Physiology</li>
                <li>Ecology & Environment</li>
                <li>Biotech & Microbes</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-4 italic text-gray-600">
            Tip: Stick to NCERT Books as 90–95% of questions are NCERT-based.
          </p>
        </motion.section>

        {/* 7. Preparation Strategy */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-50 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            🧠 7. NEET Preparation Strategy
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-semibold">🕒 Time Management:</h3>
              <ul className="list-disc list-inside">
                <li>Create a study timetable.</li>
                <li>Divide time for all subjects.</li>
                <li>Include revision and mock tests.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">📚 Resources:</h3>
              <p>
                <strong>Books:</strong> NCERT, HC Verma, MTG & Trueman’s Biology
              </p>
              <p>
                <strong>Mock Tests:</strong> 25–30 full-length papers, join AI
                Test Series
              </p>
              <p>
                <strong>Coaching:</strong> Online (PW, BYJU'S), Offline (Aakash,
                Allen)
              </p>
            </div>
          </div>
        </motion.section>

        {/* 8. Tips for Success */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            💡 8. Tips for Success in NEET
          </h2>
          <ul className="list-disc list-inside text-sm">
            <li>Focus on Biology – high weightage.</li>
            <li>Revise NCERT multiple times.</li>
            <li>Practice mock tests in time-bound manner.</li>
            <li>Analyze mistakes regularly.</li>
            <li>Stay healthy & motivated.</li>
          </ul>
        </motion.section>

        {/* 9. Cutoff Trends */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-red-50 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">📊 9. Cutoff Trends</h2>
          <table className="table-auto w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">NEET 2024 Cutoff (Expected)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">General</td>
                <td className="p-2">720–137</td>
              </tr>
              <tr>
                <td className="p-2">OBC/SC/ST</td>
                <td className="p-2">136–107</td>
              </tr>
              <tr>
                <td className="p-2">PwD</td>
                <td className="p-2">136–121</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mt-2 italic text-gray-600">
            *Subject to variation based on paper difficulty & applicants.
          </p>
        </motion.section>

        {/* 10. Counseling Process */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-purple-50 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            🎯 10. NEET Counseling Process
          </h2>
          <p className="text-sm mb-2">
            Conducted by: <strong>MCC</strong> (AIQ) &{" "}
            <strong>State Authorities</strong> (State Quota)
          </p>
          <p className="text-sm mb-2">
            Rounds: Round 1, Round 2, Mop-up, Stray Round
          </p>
          <h3 className="font-semibold mt-3">📄 Documents Required:</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Admit Card & Scorecard</li>
            <li>Class 10 & 12 Marksheet</li>
            <li>Caste & Domicile Certificate</li>
            <li>Government ID Proof</li>
          </ul>
        </motion.section>
      </div>
      {/* Neet overview ends  */}
      {/* secelet starts */}
      <div className="p-6 space-y-12 max-w-5xl mx-auto">
        {/* Colleges Section */}
        <section className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-blue-700"
          >
            🏥 Top Medical Colleges Under NEET
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Top Government Colleges
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>AIIMS Delhi</li>
                <li>JIPMER Puducherry</li>
                <li>Maulana Azad Medical College</li>
                <li>KGMU Lucknow</li>
                <li>CMC Vellore</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">
                Top Private Colleges
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Kasturba Medical College, Manipal</li>
                <li>SRMC Chennai</li>
                <li>DY Patil Pune</li>
                <li>Amrita Kochi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seats Section */}
        <section className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-center text-blue-700"
          >
            🏛️ Medical Seats Through NEET
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold">AIQ (All India Quota)</p>
              <p>15% of seats in all government medical colleges.</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold">State Quota</p>
              <p>
                85% seats reserved for domiciled students of the respective
                state.
              </p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold">Deemed Universities</p>
              <p>Fully private and central control institutions.</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold">Central Institutions</p>
              <p>AIIMS, JIPMER (via NEET now).</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold">AYUSH Courses</p>
              <p>Includes BAMS, BHMS, BUMS, etc.</p>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-center text-blue-700"
          >
            💰 Fee Structure Overview
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300 rounded-xl">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">College Type</th>
                  <th className="px-4 py-2 text-left">Fee Range (Per Year)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">Government</td>
                  <td className="px-4 py-2">₹10,000 – ₹1,00,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Private Medical</td>
                  <td className="px-4 py-2">₹5,00,000 – ₹25,00,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">NRI Quota</td>
                  <td className="px-4 py-2">₹25L – ₹50L+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* ends  */}

      <FAQ />
    </main>
  );
}

function IconCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg p-6 rounded-xl"
    >
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-bold text-blue-800">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function SubjectCard({ subject, chapters, marks }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-5 rounded-xl border-t-4 border-blue-600"
    >
      <h4 className="text-xl font-semibold text-blue-800 mb-2">{subject}</h4>
      <p className="text-sm text-gray-500 mb-1">
        <b>Chapters:</b> {chapters}
      </p>
      <p className="text-sm text-gray-500">
        <b>Marks:</b> {marks}
      </p>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, items }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Can I apply for NEET if I’m appearing for 12th in 2025?",
      answer:
        "Yes, candidates appearing in 12th board exams in 2025 are eligible to apply, provided they meet the age and subject criteria.",
    },
    {
      question: "Is there a limit to the number of NEET attempts?",
      answer:
        "No, there is currently no restriction on the number of attempts.",
    },
    {
      question: "Are droppers eligible for NEET?",
      answer:
        "Yes, drop-year students can apply for NEET as long as they fulfill the eligibility criteria.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section title="❓ Frequently Asked Questions (FAQ)">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`px-4 pb-4 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
