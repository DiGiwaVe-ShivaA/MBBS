"use client";

import React from "react";
import { Target, School, Globe, DollarSign } from "lucide-react"; // Install using: npm install lucide-react

const features = [
  {
    icon: <Target size={40} className="text-white" />,
    title: "Your Success is Our Mission",
    description:
      "We go above and beyond to make sure you get where you want to be.",
  },
  {
    icon: <School size={40} className="text-white" />,
    title: "Expertise That Counts",
    description:
      "From local colleges to international universities — we know the ins and outs.",
  },
  {
    icon: <Globe size={40} className="text-white" />,
    title: "Global Connections",
    description:
      "We work with top institutions across Asia and Europe to open more doors for you.",
  },
  {
    icon: <DollarSign size={40} className="text-white" />,
    title: "Value-Driven",
    description:
      "Education is a lifetime investment — and we help you make it wisely.",
  },
];

export default function WhyChooseNSET() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Why Choose NSET?
        </h2>
        <p className="text-lg mt-2 text-teal-600 dark:text-teal-300">
          Because your dream deserves the best path forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div key={index} className="perspective group">
            <div className="relative h-72 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white rounded-xl flex flex-col items-center justify-center px-6 py-8 shadow-xl backface-hidden">
                {item.icon}
                <h3 className="text-lg font-semibold mt-4 text-center">
                  {item.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white dark:bg-slate-700 text-gray-800 dark:text-white rounded-xl flex items-center justify-center px-6 py-8 shadow-xl border border-gray-300 dark:border-slate-600 rotate-y-180 backface-hidden">
                <p className="text-md font-medium text-center">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra CSS for 3D flip */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
