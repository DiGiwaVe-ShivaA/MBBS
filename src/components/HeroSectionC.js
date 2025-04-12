"use client";

import React, { useState } from "react";
import { CalendarDays, Clock, User } from "lucide-react";

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

export default function Page() {
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

      <Section title=" 📅 Key Dates & Timeline ">
        <div className=" overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="bg-blue-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-700">Event</th>
                <th className="px-6 py-3 font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {keyDates.map(({ event, date }) => (
                <tr key={event} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 font-medium">{event}</td>
                  <td className="px-6 py-4">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="🧾 What is NEET & Why It Matters">
        <p className=" mb-2">
          The National Eligibility cum Entrance Test (NEET-UG) is India's
          unified medical entrance exam for courses like MBBS, BDS, BAMS, BHMS,
          and BSMS. It ensures a standardized admission process across the
          nation.
        </p>
        <p>
          Conducted by NTA, NEET has replaced multiple state and institutional
          exams, promoting transparency and fairness.
        </p>
      </Section>

      <Section title="📝 Eligibility Criteria">
        <ul className="list-disc list-inside space-y-2">
          <li>Minimum Age: 17 years as of December 31, 2025</li>
          <li>No upper age limit</li>
          <li>10+2 with Physics, Chemistry, Biology/Biotech & English</li>
          <li>Min. marks: 50% (General), 40% (Reserved), 45% (PwD)</li>
          <li>Open to Indian Nationals, NRIs, OCIs, PIOs, Foreign Nationals</li>
        </ul>
      </Section>

      <Section title="🖥️ Application Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Register on{" "}
            <a
              href="https://neet.nta.nic.in"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              neet.nta.nic.in
            </a>
          </li>
          <li>Fill in personal, academic, and communication details</li>
          <li>Upload photo, signature, certificates</li>
          <li>
            Pay fees: ₹1600 (Gen), ₹1500 (OBC/EWS), ₹1000 (SC/ST/PwD), ₹9500
            (Intl.)
          </li>
          <li>Download and save confirmation</li>
        </ol>
      </Section>

      <Section title="🧪 Exam Pattern">
        <ul className="list-disc list-inside space-y-2">
          <li>Mode: Offline (pen & paper)</li>
          <li>Duration: 3 hours</li>
          <li>180 MCQs across 3 subjects</li>
          <li>Subjects: Physics (45), Chemistry (45), Biology (90)</li>
          <li>Marking: +4 for correct, -1 for wrong, 0 for unattempted</li>
        </ul>
      </Section>

      <Section title="📚 Syllabus Overview">
        <p className="mb-4">
          Based on NCERT Classes 11–12. Here's the subject-wise structure:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Physics"
            items={[
              "Mechanics",
              "Thermodynamics",
              "Electrodynamics",
              "Optics",
              "Modern Physics",
            ]}
          />
          <Card
            title="Chemistry"
            items={["Physical", "Organic", "Inorganic"]}
          />
          <Card
            title="Biology"
            items={[
              "Cell Biology",
              "Genetics",
              "Human & Plant Physiology",
              "Ecology",
            ]}
          />
        </div>
      </Section>

      <Section title="🌐 Medium of Examination">
        <p>
          Available in 13 languages: English, Hindi, Assamese, Bengali,
          Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu,
          Urdu.
        </p>
      </Section>

      <Section title="🎯 Preparation Tips">
        <ul className="list-disc list-inside space-y-2">
          <li>NCERT textbooks are the base—master them.</li>
          <li>Make a strategic and realistic timetable.</li>
          <li>Revise weekly and keep handy summary notes.</li>
          <li>Attempt mock tests in timed environments.</li>
          <li>Analyze weak areas and work on them weekly.</li>
        </ul>
      </Section>

      <Section title="🩻 MBBS Course Details">
        <p className="mb-2">
          The MBBS (Bachelor of Medicine and Bachelor of Surgery) is a 5.5-year
          undergraduate program, including 1 year of compulsory internship.
        </p>
        <p className="mb-2">
          The curriculum includes subjects like Anatomy, Physiology,
          Biochemistry, Pharmacology, Pathology, Microbiology, Forensic
          Medicine, and clinical postings in major disciplines like Medicine,
          Surgery, Pediatrics, and Obstetrics & Gynecology.
        </p>
        <p>
          On successful completion, students can practice medicine or pursue
          specialization through postgraduate courses like MD/MS.
        </p>
      </Section>

      <FAQ />
    </main>
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
