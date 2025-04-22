"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const countries = [
  {
    name: "Russia 🇷🇺",
    fee: "₹2.5 – ₹5 Lakhs/year",
    benefits: [
      "Safe, student-friendly",
      "Recognized universities",
      "English-taught programs",
    ],
  },
  {
    name: "Kyrgyzstan 🇰🇬",
    fee: "₹2 – ₹3.5 Lakhs/year",
    benefits: [
      "Budget-friendly",
      "NMC-approved colleges",
      "Shorter travel from India",
    ],
  },
  {
    name: "Nepal 🇳🇵",
    fee: "₹5 – ₹10 Lakhs total",
    benefits: ["Culturally similar", "NEET accepted", "No visa required"],
  },
  {
    name: "USA 🇺🇸",
    fee: "Pathway via Pre-Med or MD",
    benefits: [
      "High-quality education",
      "Globally respected",
      "Scholarships available",
    ],
  },
  {
    name: "Canada 🇨🇦",
    fee: "Graduate entry route",
    benefits: ["Research focused", "Career prospects", "Practical learning"],
  },
  {
    name: "Germany 🇩🇪",
    fee: "Free or low-cost tuition",
    benefits: [
      "Excellent public universities",
      "Highly reputed",
      "German language required",
    ],
  },
  {
    name: "Afghanistan 🇦🇫",
    fee: "Affordable education",
    benefits: ["Close to India", "English-medium MBBS"],
  },
];

export default function StudyAbroad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
          🌍 Study Abroad After NEET
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Get Your Dream Medical College Within Budget!
        </p>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg inline-block">
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            🎉 Congratulations on Clearing NEET!
          </h2>
          <p className="text-gray-700">
            Now explore top destinations abroad for your MBBS journey.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            ✈️ Why Study MBBS Abroad After NEET?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              "Affordable Fees (way lower than Indian private colleges)",
              "Global Exposure",
              "High-Quality Education",
              "World-Class Infrastructure",
              "English-Medium Courses",
              "International Recognition (WHO, MCI/NMC, ECFMG)",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                ✅ {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">
            🌎 Top Countries to Study MBBS Abroad
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <h4 className="text-xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
                    {country.name}
                  </h4>
                  <p className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 inline-block rounded-full font-semibold mb-3">
                    🎓 Fees: {country.fee}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {country.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="text-sm bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full border border-indigo-100"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-xs text-gray-500 italic">
                    #FutureDoctors
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
