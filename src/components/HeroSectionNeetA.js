"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

// Sample data for infographic
const sectionData = [
  { name: "Physics", marks: 180 },
  { name: "Chemistry", marks: 180 },
  { name: "Biology", marks: 360 },
];

const timelineSteps = [
  {
    title: "Register Online",
    desc: "Fill out the NEET application form on neet.nta.nic.in",
  },
  { title: "Admit Card", desc: "Download admit card when available" },
  { title: "Exam Day", desc: "Appear for NEET at assigned centre" },
  { title: "Result Announcement", desc: "Check results on official portal" },
  { title: "Counseling", desc: "Register for counseling rounds" },
  { title: "Seat Allotment", desc: "Choose college and confirm seat" },
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

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">About NEET</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          India's gateway to medical dreams – know the what, why, and how of
          NEET.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:scale-105 transition">
          Explore Now
        </button>
      </section>

      {/* Iconic Breakdown */}
      <section className="px-6 md:px-20">
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
      </section>

      {/* Interactive Timeline */}
      <section className="px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">NEET Journey</h2>
        <div className="space-y-8">
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Flow After NEET */}
      <section className="px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Career Path</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {["NEET", "MBBS/BDS", "PG/MD", "Super Specialty", "Career"].map(
            (step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {idx + 1}
                </div>
                <p className="mt-2 font-semibold">{step}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-right">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
