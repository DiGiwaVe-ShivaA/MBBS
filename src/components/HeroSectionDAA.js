"use client";
import Image from "next/image";

import { useState } from "react";
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaQuestionCircle,
} from "react-icons/fa";

// 🖼️ Updated companyTabs with image URLs
const companyTabs = [
  {
    label: "Mission",
    icon: FaBullseye,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",
    image: "/images/med1.jpg",
    imageClass: "w-[250px] h-[200px]",
  },
  {
    label: "Vision",
    icon: FaEye,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[300px] h-[220px]",
  },
  {
    label: "History",
    icon: FaHistory,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[200px] h-[180px]",
  },
  {
    label: "Company Growth",
    icon: FaChartLine,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[280px] h-[210px]",
  },
  {
    label: "Team Members",
    icon: FaUsers,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[270px] h-[200px]",
  },
  {
    label: "Director",
    icon: FaUserTie,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[320px] h-[240px]",
  },
  {
    label: "FAQs",
    icon: FaQuestionCircle,
    content:
      " At Namastubhyam Saraswati Edu Tech Private Limited, we firmly             believe that making the right decision at the right time and in the            right place is the key to unlocking your potential. Our dedicated            team of experienced counsellors is here to help steer your career            journey and turn challenges into stepping stones for success. With            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)            team, we are committed to guiding you toward a bright future in the            field of medicine.",

    image: "/images/med1.jpg",
    imageClass: "w-[260px] h-[200px]",
  },
];

export default function CompanyTabs() {
  const [activeTab, setActiveTab] = useState(companyTabs[0].label);
  const activeData = companyTabs.find((tab) => tab.label === activeTab);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 relative">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-[#8A05FF]/5 rounded-xl -z-10 blur-sm"></div>

      {/* Tabs Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
        {companyTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.label;

          return (
            <div
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`group w-[150px] h-[160px] cursor-pointer transition-all duration-300 border border-white/20 rounded-2xl shadow-xl 
              flex flex-col justify-center items-center text-center backdrop-blur-md bg-gradient-to-br
              ${
                isActive
                  ? "from-[#00E5FF] to-[#8A05FF] scale-105 shadow-2xl"
                  : "from-white/10 to-white/5 hover:from-[#00E5FF]/20 hover:to-[#8A05FF]/20 hover:scale-105"
              }`}
            >
              <Icon
                size={42}
                className={`mb-3 transition-all drop-shadow-md ${
                  isActive
                    ? "text-white"
                    : "text-[#8A05FF] group-hover:text-[#00E5FF]"
                }`}
              />
              <span
                className={`text-base font-semibold ${
                  isActive ? "text-white" : "text-[#8A05FF]"
                }`}
              >
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content Display */}
      <div
        key={activeTab}
        className="mt-10 bg-black/10 backdrop-blur-md border border-white/10 text-white p-8 rounded-2xl shadow-inner animate-fade-in"
      >
        <h3 className="text-3xl font-bold mb-3 text-[#00E5FF]">{activeTab}</h3>
        <div className="flex flex-col md:flex-row items-start gap-6">
          {activeData.image && (
            <img
              src={activeData.image}
              alt={activeData.label}
              className={`${activeData.imageClass} rounded-xl shadow-lg object-cover`}
            />
          )}
          <p className="text-lg text-black/90">{activeData.content}</p>
        </div>
      </div>
    </section>
  );
}
