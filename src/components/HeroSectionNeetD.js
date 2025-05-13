"use client"; // if in app directory
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  UploadCloud,
  ClipboardCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function HowToRegisterNeet() {
  return (
    <main className="max-w-5xl mx-auto px-2 py-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700 drop-shadow-md">
          📝 How to Register for NEET 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your complete guide to NEET 2025 registration – from official links to
          required documents, all in one place.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 mb-14 shadow-md border border-blue-100"
      >
        <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
          <ClipboardCheck className="text-blue-500" /> Step-by-Step Registration
        </h2>
        <div className="space-y-5 text-gray-700 text-lg">
          <p>
            1️⃣ Visit the official NEET website:
            <Link
              href="https://neet.nta.nic.in"
              className="text-blue-600 underline ml-1"
            >
              https://neet.nta.nic.in
            </Link>
          </p>
          <p>
            2️⃣ Click on "New Registration" and carefully read all the
            instructions.
          </p>
          <p>3️⃣ Fill in personal, academic, and contact details in the form.</p>
          <p>4️⃣ Upload the required documents in the prescribed format.</p>
          <p>
            5️⃣ Pay the application fee online using preferred payment options.
          </p>
          <p>
            6️⃣ Download and print the confirmation page for future reference.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-8 mb-14 shadow-md border border-blue-100"
      >
        <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
          <UploadCloud className="text-blue-500" /> Required Documents
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-lg list-disc list-inside">
          <li>📸 Recent passport-sized photograph</li>
          <li>✍️ Scanned signature</li>
          <li>📄 Class 10th & 12th mark sheets</li>
          <li>🆔 Valid government-issued photo ID (Aadhar, PAN, etc.)</li>
          <li>📑 Category certificate (if applicable)</li>
          <li>🩺 PwD certificate (if applicable)</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-md border border-blue-200 text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-700 flex justify-center items-center gap-2 mb-4">
          <FileText className="text-blue-600" /> Quick Access
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Click the button below to jump straight to the official NEET 2025
          registration page.
        </p>
        <Link
          href="https://neet.nta.nic.in"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Go to Registration <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl p-8 mt-16 shadow-md border border-blue-100"
      >
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
          📅 Registration Timeline
        </h2>
        <div className="relative pl-6 border-l-4 border-blue-500 space-y-8">
          {[
            { label: "Registration Opens", date: "Expected: March 2025" },
            { label: "Last Date to Apply", date: "Expected: April 2025" },
            { label: "Correction Window", date: "Expected: Late April 2025" },
            { label: "Admit Card Release", date: "Expected: May 2025" },
            {
              label: "NEET Exam Date",
              date: "Expected: First Sunday of May 2025",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-600 rounded-full shadow"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-blue-700">
                  {item.label}
                </h3>
                <p className="text-gray-600">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
