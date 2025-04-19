"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaQuestionCircle,
} from "react-icons/fa";

const companyTabs = [
  {
    label: "Director",
    icon: FaUserTie,
    title: "Namastubhyam Saraswati Edu Tech Private Limited",
    subtitle: "Our Director's Message",
    tagline: "Your Career, Our Mission",
    content: `At Namastubhyam Saraswati Edu Tech Private Limited, we firmly believe that making the right decision at the right time and in the right place is the key to unlocking your potential. Our dedicated team of experienced counsellors is here to help steer your career journey and turn challenges into stepping stones for success.`,
    content2: `With the unwavering support of the NSET team, we are committed to guiding you toward a bright future in the field of medicine.`,
    image: "/images/med1.jpg",
    imageClass: "w-[320px] h-[240px]",
  },
  {
    label: "Mission",
    icon: FaBullseye,
    title: "Our Mission",
    content: `To empower medical aspirants by providing them with the right guidance at the right time to achieve academic and professional excellence.`,
    image: "/images/med1.jpg",
    imageClass: "w-[250px] h-[200px]",
  },
  {
    label: "Vision",
    icon: FaEye,
    title: "Our Vision",
    content: `To be a trusted name in the field of medical education consultancy and career counseling.`,
    image: "/images/med1.jpg",
    imageClass: "w-[300px] h-[220px]",
  },
  {
    label: "History",
    icon: FaHistory,
    title: "Our History",
    content: `Founded with a purpose to guide students, NSET has helped thousands realize their dreams in the medical profession.`,
    image: "/images/med1.jpg",
    imageClass: "w-[200px] h-[180px]",
  },
  {
    label: "Company Growth",
    icon: FaChartLine,
    title: "Company Growth",
    content: `Our success is reflected in the growing number of students placed in top medical institutions in India and abroad.`,
    image: "/images/med1.jpg",
    imageClass: "w-[280px] h-[210px]",
  },
  {
    label: "Team Members",
    icon: FaUsers,
    title: "Meet Our Team",
    content: `Our team consists of professionals who are passionate about helping students and have vast experience in academic counseling.`,
    image: "/images/med1.jpg",
    imageClass: "w-[270px] h-[200px]",
  },
  {
    label: "FAQs",
    icon: FaQuestionCircle,
    title: "Frequently Asked Questions",
    content: `We provide answers to common queries related to counseling, admissions, scholarships, and more.`,
    image: "/images/med1.jpg",
    imageClass: "w-[260px] h-[200px]",
  },
];

export default function CompanyTabs() {
  const [activeTab, setActiveTab] = useState(companyTabs[0].label);

  const activeData = useMemo(
    () => companyTabs.find((tab) => tab.label === activeTab),
    [activeTab]
  );

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-[#8A05FF]/5 rounded-xl -z-10 blur-sm"></div>

      {/* Tabs Container */}
      {/* Tabs for Mobile (4 in row 1, 3 in row 2) */}
      <div className="mb-8 sm:hidden flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
          {companyTabs.slice(0, 4).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`group w-[80px] h-[90px] 
            cursor-pointer transition-transform duration-200 ease-in-out border border-white/20 rounded-2xl shadow-xl 
            flex flex-col justify-center items-center text-center backdrop-blur-md bg-gradient-to-br
            ${
              isActive
                ? "from-[#00E5FF] to-[#8A05FF] scale-105 shadow-2xl"
                : "from-white/10 to-white/5 hover:from-[#00E5FF]/20 hover:to-[#8A05FF]/20 hover:scale-105"
            }`}
              >
                <Icon
                  size={22}
                  className={`mb-1 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#8A05FF] group-hover:text-[#00E5FF]"
                  }`}
                />
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-white" : "text-[#8A05FF]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex justify-center gap-4">
          {companyTabs.slice(4, 7).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`group w-[80px] h-[90px] 
            cursor-pointer transition-transform duration-200 ease-in-out border border-white/20 rounded-2xl shadow-xl 
            flex flex-col justify-center items-center text-center backdrop-blur-md bg-gradient-to-br
            ${
              isActive
                ? "from-[#00E5FF] to-[#8A05FF] scale-105 shadow-2xl"
                : "from-white/10 to-white/5 hover:from-[#00E5FF]/20 hover:to-[#8A05FF]/20 hover:scale-105"
            }`}
              >
                <Icon
                  size={22}
                  className={`mb-1 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#8A05FF] group-hover:text-[#00E5FF]"
                  }`}
                />
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-white" : "text-[#8A05FF]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tabs for sm and up (existing layout) */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
        {companyTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.label;

          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`group w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] md:w-[150px] md:h-[160px] 
          cursor-pointer transition-transform duration-200 ease-in-out border border-white/20 rounded-2xl shadow-xl 
          flex flex-col justify-center items-center text-center backdrop-blur-md bg-gradient-to-br
          ${
            isActive
              ? "from-[#00E5FF] to-[#8A05FF] scale-105 shadow-2xl"
              : "from-white/10 to-white/5 hover:from-[#00E5FF]/20 hover:to-[#8A05FF]/20 hover:scale-105"
          }`}
            >
              <Icon
                size={28}
                className={`mb-2 transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#8A05FF] group-hover:text-[#00E5FF]"
                }`}
              />
              <span
                className={`text-sm font-semibold ${
                  isActive ? "text-white" : "text-[#8A05FF]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Content */}
      <div
        key={activeTab}
        className="mt-4 bg-white/90 backdrop-blur-md border border-white/10 text-black p-6 sm:p-8 rounded-2xl shadow-inner animate-fade-in"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#00E5FF]">
          {activeTab}
        </h3>
        <div className="flex flex-col md:flex-row items-start gap-6">
          {activeData.image && (
            <Image
              src={activeData.image}
              alt={activeData.label}
              width={500}
              height={400}
              priority={activeTab === "Director"}
              className={`${activeData.imageClass} rounded-xl shadow-md object-cover`}
            />
          )}
          <div className="space-y-2 text-black">
            <h1 className="text-xl font-bold text-[#8A05FF]">
              {activeData.title}
            </h1>
            {activeData.subtitle && (
              <h2 className="text-lg font-semibold text-[#ea9d22]">
                {activeData.subtitle}
              </h2>
            )}
            {activeData.tagline && (
              <h3 className="text-base font-medium text-[#00E5FF]">
                {activeData.tagline}
              </h3>
            )}
            <p>{activeData.content}</p>
            {activeData.content2 && <p>{activeData.content2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
