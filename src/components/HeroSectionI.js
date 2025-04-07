"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const courseCategories = ["NEET", "JEE", "Foundation"];

const allCourses = {
  NEET: [
    {
      title: "NEET Online Crash Course – 60 Days Power Prep",
      mode: "Online",
      duration: "2 Months",
      highlight: "Live + Recorded | Doubt Support | Full Syllabus Coverage",
    },
    {
      title: "NEET 1 Year Classroom Program",
      mode: "Offline (Classroom)",
      duration: "12 Months",
      highlight: "Experienced Faculty | Test Series | Personal Mentorship",
    },
  ],
  JEE: [
    {
      title: "JEE Main + Advanced Online Course",
      mode: "Online",
      duration: "1 Year",
      highlight: "IIT Alumni Faculty | Daily Practice Papers | Mock Tests",
    },
    {
      title: "JEE Crash Course – Last 3 Months Booster",
      mode: "Online",
      duration: "3 Months",
      highlight: "Revision Focused | Fast-Track | Live & Recorded Sessions",
    },
  ],
  Foundation: [
    {
      title: "Class 9 & 10 Foundation Program",
      mode: "Hybrid",
      duration: "1 Year",
      highlight: "NTSE + Olympiad Prep | Science + Math Deep Learning",
    },
    {
      title: "Early Starters Program (Class 8)",
      mode: "Online",
      duration: "6 Months",
      highlight: "Conceptual Clarity | STEM Learning | Doubt Solving",
    },
  ],
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("NEET");

  return (
    <section id="courses" className="py-20 px-6 bg-white  dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Courses & Coaching Programs
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Explore our top-rated coaching options curated for NEET, JEE, and
          Foundation level success.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {courseCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCourses[activeTab].map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl border border-white/10 backdrop-blur-lg bg-white/30 dark:bg-white/10 p-6 text-left shadow-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Mode:</strong> {course.mode}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400 italic">
                {course.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
