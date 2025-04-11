"use client";

import {
  GraduationCap,
  Stethoscope,
  Code2,
  Scale,
  Hammer,
  Briefcase,
} from "lucide-react";

const careerPaths = [
  {
    icon: <Stethoscope className="w-6 h-6 text-red-600" />,
    title: "Medical",
    options: ["MBBS", "BDS", "BAMS", "BHMS", "Nursing", "Pharmacy"],
    color: "from-red-200 to-red-50",
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: "Engineering",
    options: ["B.Tech", "B.E", "B.Arch", "Diploma", "BCA"],
    color: "from-blue-200 to-blue-50",
  },
  {
    icon: <Scale className="w-6 h-6 text-yellow-600" />,
    title: "Commerce",
    options: ["B.Com", "CA", "CS", "BBA", "Economics"],
    color: "from-yellow-200 to-yellow-50",
  },
  {
    icon: <Hammer className="w-6 h-6 text-purple-600" />,
    title: "Arts",
    options: ["BA", "Mass Comm", "Fashion Design", "Hotel Mgmt"],
    color: "from-purple-200 to-purple-50",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-green-600" />,
    title: "Other Fields",
    options: ["Law", "Defense", "Animation", "Pilot", "Foreign Language"],
    color: "from-green-200 to-green-50",
  },
];

export default function CareerDiagram() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        🎓 Career Options After 12th
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {careerPaths.map((path, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 bg-gradient-to-br ${path.color} shadow-lg flex flex-col items-center text-center relative group transition-transform hover:scale-105`}
          >
            <div className="mb-3">{path.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {path.title}
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {path.options.map((opt, i) => (
                <li
                  key={i}
                  className="before:content-['→'] before:mr-2 before:text-gray-400"
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
