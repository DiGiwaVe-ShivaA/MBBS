"use client";

import {
  GraduationCap,
  ClipboardList,
  BookOpenCheck,
  Users,
  LayoutList,
  CalendarDays,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  ArrowRightCircle,
} from "lucide-react";

export const metadata = {
  title: "NEET UG 2025 – Eligibility, Exam Pattern & Tips",
  description:
    "All you need to know about NEET UG 2025 – eligibility, pattern, preparation tips, and important dates.",
};

const Card = ({ icon, title, content }) => (
  <div className="bg-[#e6ecf5] shadow-[8px_8px_16px_#c8d0e7,_-8px_-8px_16px_#ffffff] rounded-3xl p-6 transition hover:scale-[1.02]">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function NEETPage() {
  return (
    <main className="min-h-screen bg-[#edf1f5] text-gray-800 font-sans">
      {/* Header */}
      <section className="text-center py-12 bg-blue-700 text-white shadow-md">
        <h1 className="text-4xl font-bold">
          NEET UG 2025 – All You Need to Know
        </h1>
        <p className="mt-2 text-lg">Eligibility, Pattern, Dates, Tips & More</p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          NEET Quick Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            icon={<Sparkles className="w-8 h-8 text-indigo-500" />}
            title="🎯 Purpose of NEET"
            content={[
              "MBBS, BDS, BAMS, BHMS, BUMS",
              "BVSc & AH",
              "AIIMS, JIPMER & all Govt/Private colleges",
            ]}
          />
          <Card
            icon={<ClipboardList className="w-8 h-8 text-emerald-500" />}
            title="📋 Eligibility Criteria"
            content={[
              "Minimum age: 17 years",
              "10+2 with PCB & English",
              "50% General, 40% SC/ST/OBC, 45% PwD",
            ]}
          />
          <Card
            icon={<LayoutList className="w-8 h-8 text-yellow-500" />}
            title="📝 Exam Pattern"
            content={[
              "Mode: Pen & Paper",
              "Subjects: Physics, Chemistry, Biology",
              "Total Questions: 200 (180 to attempt)",
              "Marks: 720 | Time: 3 hrs 20 mins",
            ]}
          />
          <Card
            icon={<Users className="w-8 h-8 text-pink-500" />}
            title="🧭 Admission Process"
            content={[
              "MCC Counselling: 15% All India Quota",
              "State Counselling: 85% State Quota",
              "Includes Deemed & Central Universities",
            ]}
          />
        </div>
      </section>

      {/* Timeline for Admission */}
      {/* <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-800">
          <ArrowRightCircle className="w-7 h-7 text-blue-600" />
          📊 Admission Flow (Simplified)
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-sm">
          {[
            "NEET Exam",
            "Result",
            "Counselling (MCC/State)",
            "Seat Allotment",
            "College Admission",
          ].map((label, index, arr) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-full px-6 py-3 text-center shadow-sm text-blue-900 font-medium text-sm w-fit">
                {label}
              </div>
              {index < arr.length - 1 && (
                <ArrowRight className="w-5 h-5 text-blue-400 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section> */}

      {/* Important Dates */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-gray-800">
          <CalendarDays className="w-6 h-6 text-blue-600" />
          🗓️ Important Dates (Expected)
        </h2>

        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Event
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Tentative Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800 divide-y divide-gray-100">
              {[
                { event: "Application Start", date: "Feb 2025" },
                { event: "Exam Date", date: "May 2025" },
                { event: "Result Declaration", date: "June 2025" },
                { event: "Counselling Begins", date: "July 2025" },
              ].map(({ event, date }) => (
                <tr
                  key={event}
                  className="odd:bg-white even:bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <td className="px-6 py-3">{event}</td>
                  <td className="px-6 py-3">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Preparation Tips */}
      <section
        className="max-w-5xl mx-auto px-4 md:px-8 py-14 sm:py-20"
        aria-labelledby="neet-preparation-tips"
      >
        <h2
          id="neet-preparation-tips"
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800 flex items-center justify-center gap-3"
        >
          <BookOpenCheck
            className="w-8 h-8 text-purple-600 animate-pulse"
            aria-hidden="true"
          />
          <span>📘 Preparation Tips</span>
        </h2>

        <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-[2rem] shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-20 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <ul className="relative z-10 p-8 md:p-12 space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
              <span className="text-purple-600 text-xl">✅</span>
              <span>
                Start early and create a well-structured weekly timetable
              </span>
            </li>
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
              <span className="text-purple-600 text-xl">📘</span>
              <span>Focus primarily on NCERT-based questions and concepts</span>
            </li>
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
              <span className="text-purple-600 text-xl">📝</span>
              <span>
                Practice with mock tests and previous year papers regularly
              </span>
            </li>
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
              <span className="text-purple-600 text-xl">🔁</span>
              <span>Revise consistently and track weak areas weekly</span>
            </li>
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
              <span className="text-purple-600 text-xl">💪</span>
              <span>
                Maintain physical health and emotional well-being throughout
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Need More Guidance?</h3>
          <p className="mb-6">
            Join our mentorship & get expert help for your NEET journey!
          </p>
          <button className="bg-white text-blue-700 font-medium px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Get Mentorship
          </button>
        </div>
      </section>
    </main>
  );
}

const Step = ({ label }) => (
  <div className="flex items-center gap-3 text-gray-700">
    <div className="bg-white rounded-full p-3 shadow-[4px_4px_10px_#cbd5e0,_-4px_-4px_10px_#ffffff]">
      <ArrowRightCircle className="w-5 h-5 text-blue-600" />
    </div>
    <span className="text-md font-medium">{label}</span>
  </div>
);
