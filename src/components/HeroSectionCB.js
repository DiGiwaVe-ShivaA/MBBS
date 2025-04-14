"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  FileSearch,
  BookOpen,
  Users,
  School,
  Globe2,
  Wallet,
  MapPinned,
  Stethoscope,
} from "lucide-react";

const journeySteps = [
  { icon: "🎯", title: "10th Grade", desc: "Set Your Goal" },
  { icon: "📚", title: "11th Grade", desc: "Start Foundation Prep" },
  { icon: "📘", title: "12th Grade", desc: "Syllabus + Practice" },
  { icon: "📲", title: "Join Coaching", desc: "Offline / Online Prep" },
  { icon: "📝", title: "Mock Tests", desc: "Attempt PYQs & Mocks" },
  { icon: "🧪", title: "Exam Day", desc: "NEET Exam Day" },
  { icon: "📊", title: "Result & Counseling", desc: "Get Your Score" },
  { icon: "🎓", title: "Medical Admission", desc: "Begin Your Career" },
];

const InfoCard = ({ icon: Icon, title, children }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 w-full md:w-1/2 border hover:border-blue-400 duration-300"
  >
    <div className="flex items-center gap-3 text-blue-600 font-semibold text-lg">
      <div className="bg-blue-100 p-2 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      {title}
    </div>
    <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
  </motion.div>
);

export default function Home() {
  const [currentStep, setCurrentStep] = useState(3); // You can dynamically set this
  return (
    <main className="px-4 py-10 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-white space-y-20">
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4"
        >
          🩺 NEET 2025: Your Complete Guide
        </motion.h1>
        <p className="text-gray-600 italic text-base">
          “Success is no accident. It is hard work, perseverance, learning,
          sacrifice, and love for what you do.”
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-500" />
          NEET Essentials
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard icon={School} title="Eligibility Criteria">
            <ul className="list-disc list-inside">
              <li>
                <b>Age:</b> Min 17 years (by Dec 31)
              </li>
              <li>
                <b>Qualification:</b> 10+2 with PCB + English
              </li>
              <li>
                <b>Marks:</b> Gen: 50%, OBC/SC/ST: 40%, PwD: 45%
              </li>
              <li>
                <b>Attempts:</b> Unlimited
              </li>
            </ul>
          </InfoCard>

          <InfoCard icon={CalendarCheck} title="Important Dates (Tentative)">
            <ul className="space-y-1">
              <li>
                <b>Notification:</b> Jan 2025
              </li>
              <li>
                <b>Application:</b> Jan–Feb 2025
              </li>
              <li>
                <b>Exam:</b> May 2025
              </li>
              <li>
                <b>Result:</b> June 2025
              </li>
              <li>
                <b>Counseling:</b> July 2025
              </li>
            </ul>
          </InfoCard>

          <InfoCard icon={FileSearch} title="Exam Pattern & Marking">
            <ul>
              <li>
                <b>Duration:</b> 3 hrs 20 mins
              </li>
              <li>
                <b>Total Marks:</b> 720 (180 questions)
              </li>
              <li>
                <b>Marking:</b> +4 correct, -1 incorrect
              </li>
              <li>
                <b>Subjects:</b> PCB (Bio: 360, Phy: 180, Chem: 180)
              </li>
            </ul>
          </InfoCard>

          <InfoCard icon={BookOpen} title="Syllabus Overview">
            <p>NCERT-based, Class 11 & 12 topics.</p>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>Biology: Reproduction, Genetics, Ecology</li>
              <li>Physics: Mechanics, Thermodynamics</li>
              <li>Chemistry: Organic, Inorganic, Physical</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Users} title="NEET vs Other Exams">
            <ul>
              <li>
                <b>Then:</b> Multiple state/national tests
              </li>
              <li>
                <b>Now:</b> Single nationwide exam
              </li>
              <li>
                <b>Admission:</b> Centralized via NEET
              </li>
              <li>
                <b>Syllabus:</b> Uniform (NCERT)
              </li>
            </ul>
          </InfoCard>

          <InfoCard icon={MapPinned} title="Medical Seat Distribution">
            <ul>
              <li>
                <b>AIQ:</b> 15% Govt seats
              </li>
              <li>
                <b>State Quota:</b> 85%
              </li>
              <li>
                <b>Others:</b> Private, Deemed, AIIMS, JIPMER, AYUSH
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">
          🗺️ NEET Journey Map
        </h2>

        {/* Step Progress Bar (Desktop Only) */}
        <div className="hidden md:flex items-center justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-100 z-0" />
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center w-full"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs 
                ${
                  index <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-400 border border-blue-300"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-xs mt-2 text-center ${
                  index <= currentStep
                    ? "text-blue-700 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Journey Cards (with timeline structure) */}
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-blue-200 z-0" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex md:flex-col items-start md:items-center md:w-1/8 group"
              >
                {/* Connector Line (Mobile) */}
                {index < journeySteps.length - 1 && (
                  <div className="md:hidden absolute left-4 top-12 h-full w-0.5 bg-blue-200" />
                )}

                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10
                  ${
                    index <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl shadow-md p-4 ml-4 mt-2 md:ml-0 md:mt-4 md:min-w-[160px] md:max-w-[180px] md:text-center border border-blue-100 hover:shadow-lg transition">
                  <h3 className="text-blue-700 font-semibold text-sm md:text-base">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">
          🎓 Career Paths After NEET
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm bg-white shadow rounded-xl p-6 border">
          <div>
            <b>MBBS:</b> 5.5-year degree in Medicine
          </div>
          <div>
            <b>BDS:</b> 5-year Dental Surgery
          </div>
          <div>
            <b>AYUSH:</b> BAMS, BHMS, BUMS programs
          </div>
          <div>
            <b>Veterinary:</b> BVSc for animal medicine
          </div>
          <div>
            <b>Pharma/Biotech:</b> Research & Development
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">
          🏥 Top Colleges Under NEET
        </h2>
        <div className="grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow p-6 text-sm">
          <div>
            <b>Top Government:</b>
            <ul className="list-disc list-inside mt-1">
              <li>AIIMS Delhi</li>
              <li>JIPMER Puducherry</li>
              <li>Maulana Azad Medical College</li>
              <li>KGMU Lucknow</li>
              <li>CMC Vellore</li>
            </ul>
          </div>
          <div>
            <b>Top Private:</b>
            <ul className="list-disc list-inside mt-1">
              <li>Kasturba Manipal</li>
              <li>SRMC Chennai</li>
              <li>DY Patil Pune</li>
              <li>Amrita Kochi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">
          💰 Fee Structure Overview
        </h2>
        <div className="bg-white shadow rounded-xl p-6 text-sm border">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-blue-600 font-semibold">
                <th>College Type</th>
                <th>Fee Range (Per Year)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Government</td>
                <td>₹10,000 – ₹1,00,000</td>
              </tr>
              <tr>
                <td>Private Medical</td>
                <td>₹5,00,000 – ₹25,00,000</td>
              </tr>
              <tr>
                <td>NRI Quota</td>
                <td>₹25L – ₹50L+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-500 italic">
        “Doctors are not made overnight; NEET is your beginning to a lifelong
        commitment to healing and service.”
      </footer>
    </main>
  );
}
