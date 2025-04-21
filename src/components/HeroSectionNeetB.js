"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Stethoscope } from "lucide-react";

const tabs = [
  { key: "ug", label: "UG Courses", icon: <BookOpen className="w-5 h-5" /> },
  {
    key: "pg",
    label: "PG Courses",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    key: "allied",
    label: "Allied Health",
    icon: <Stethoscope className="w-5 h-5" />,
  },
];

const courseData = {
  ug: ["MBBS", "BDS", "BAMS", "BHMS", "BPT", "BSc Nursing", "BUMS"],
  pg: ["MD", "MS", "MDS", "MCh", "DM", "MPH", "MBA (Hospital Mgmt)"],
  allied: [
    "BSc Radiology",
    "BSc OT Technology",
    "BSc Lab Tech",
    "BPharm",
    "DMLT",
    "BSc Dialysis",
  ],
};

export default function WhatCourses() {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-10">
        What Courses Are Offered?
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {courseData[activeTab].map((course, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-all"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h4 className="text-lg font-semibold text-blue-700">{course}</h4>
            <p className="text-gray-600 mt-2">
              Explore opportunities in {course} and beyond.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
