"use client";

import React from "react";

const pgCourses = [
  {
    title: "MD (Doctor of Medicine)",
    description:
      "MD is a postgraduate degree in non-surgical fields such as General Medicine, Pediatrics, Dermatology, Psychiatry, and more. It focuses on in-depth diagnosis and treatment of diseases. Ideal for MBBS graduates wanting to specialize in internal medicine.",
  },
  {
    title: "MS (Master of Surgery)",
    description:
      "MS is a surgical postgraduate degree focusing on specialties like General Surgery, ENT, Ophthalmology, and Orthopedics. It involves hands-on surgical training and clinical care.",
  },
  {
    title: "MDS (Master of Dental Surgery)",
    description:
      "MDS is designed for BDS graduates aiming to specialize in Oral Surgery, Orthodontics, Prosthodontics, and Periodontology, combining theoretical and practical dental training.",
  },
  {
    title: "M.Sc Nursing",
    description:
      "For B.Sc Nursing grads looking to advance in clinical nursing, education, or hospital admin. Includes specializations like Pediatric, Psychiatric, and Community Health.",
  },
  {
    title: "MPT (Master of Physiotherapy)",
    description:
      "Advanced specialization for BPT graduates in Orthopedics, Neurology, Cardiorespiratory, and Sports Physio, equipping them for rehabilitation roles.",
  },
  {
    title: "M.Sc Anatomy",
    description:
      "Focuses on human anatomy, ideal for students interested in teaching, research, or pursuing PhDs in anatomical sciences.",
  },
  {
    title: "M.Sc Physiology",
    description:
      "Offers in-depth knowledge about human body functions. Opens doors in teaching, lab research, or biomedical careers.",
  },
  {
    title: "M.Sc Biochemistry",
    description:
      "Explores chemical processes in living beings. Suitable for careers in diagnostics, medical research, and pharma.",
  },
  {
    title: "M.Sc Microbiology",
    description:
      "Study of microorganisms and their impact on health and industry. Great scope in labs, food safety, pharma, and biotech.",
  },
  {
    title: "M.Sc Biotechnology",
    description:
      "Combines biology with tech. Career paths in genetic engineering, bioinformatics, pharmaceuticals, and R&D.",
  },
  {
    title: "M.Sc Medical Imaging",
    description:
      "Specializes in MRI, CT, and ultrasound. Trains professionals for radiology departments and diagnostic centers.",
  },
  {
    title: "M.Sc Genetics",
    description:
      "Focuses on gene mapping, disorders, and DNA tech. Great for research careers in molecular biology and genetics.",
  },
  {
    title: "M.Sc Forensic Science",
    description:
      "Covers toxicology, DNA analysis, forensic pathology. Perfect for forensic labs, crime investigation, and legal science.",
  },
  {
    title: "M.Pharm (Master of Pharmacy)",
    description:
      "Advanced course in pharma with specializations like Pharmacology, Pharmaceutics, and Drug Regulation. Great for R&D and quality control.",
  },
  {
    title: "M.Sc Clinical Psychology",
    description:
      "Covers psychological therapy, diagnosis, and rehab. Work in clinics, hospitals, and mental health institutions.",
  },
];

export default function PostgraduatePage() {
  return (
    <main className="px-6 py-12 min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
        🎓 Postgraduate Courses
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-10">
        Dive deeper into the world of advanced medical and life science studies
        with our specialized postgraduate programs tailored to help you excel in
        your chosen field.
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {pgCourses.map((course, index) => (
          <div
            key={index}
            className="break-inside-avoid border border-blue-200 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex gap-2 items-start">
              <span>📘</span> {course.title}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
