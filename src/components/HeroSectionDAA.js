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
  FaChevronDown,
} from "react-icons/fa";

// FAQ data
const faqData = [
  {
    question: "What is NEET and why is it important for MBBS admission?",
    answer:
      "NEET stands for National Eligibility cum Entrance Test. It is mandatory for admission to MBBS, BDS, and other medical courses in India, applicable to all colleges including government, private, and deemed.",
  },
  {
    question: "What is the eligibility criteria for appearing in NEET?",
    answer:
      "Candidates must pass 10+2 with Physics, Chemistry, Biology/Biotechnology, and English. Age: 17+. General: 50% in PCB; Reserved: 40%.",
  },
  {
    question: "How many times can a student appear for NEET?",
    answer:
      "There is no limit to NEET attempts as long as eligibility conditions are met.",
  },
  {
    question: "Can I apply for MBBS abroad without NEET?",
    answer:
      "No. NEET qualification is mandatory even for students pursuing MBBS abroad as per NMC rules.",
  },
  {
    question: "What is the counseling process for MBBS admission in India?",
    answer:
      "Includes registration, choice filling, seat allotment, and document verification. MCC conducts AIQ counseling, states manage their own quotas.",
  },
  {
    question:
      "What is the difference between government, private, and deemed universities for MBBS?",
    answer:
      "Government colleges have low fees and high competition. Private are costlier. Deemed are autonomous but follow NEET rules.",
  },
  {
    question: "What are NRI and Management Quota seats?",
    answer:
      "NRI Quota is for Non-Resident Indians, Management Quota for private/deemed colleges—both require NEET.",
  },
  {
    question: "Are there scholarships available for MBBS students?",
    answer:
      "Yes, provided by central/state governments, private foundations, and universities based on merit and category.",
  },
  {
    question: "What are the career options after completing MBBS?",
    answer:
      "Options include postgrad (MD/MS), government/private practice, and international exams like USMLE/PLAB.",
  },
  {
    question: "Can NSET help with admission to MBBS colleges abroad?",
    answer:
      "Yes, NSET assists in university selection, application, visa, documentation, and post-admission support for Asia and Europe.",
  },
];

const companyTabs = [
  {
    label: "Director",
    icon: FaUserTie,
    title: "Namastubhyam Saraswati Edu Tech Private Limited",
    subtitle: "Our Director's Message",
    tagline: "Your Career, Our Mission",
    content: `At Namastubhyam Saraswati Edu Tech Private Limited, we firmly believe that making the right decision at the right time and in the right place is the key to unlocking your potential. Our dedicated team of experienced counsellors is here to help steer your career journey and turn challenges into stepping stones for success.`,
    content2: `We offer a comprehensive suite of services tailored for undergraduate and postgraduate admissions to top universities and medical colleges across Asia and Europe. From personalized career counseling to handling complex admission procedures, our team ensures a seamless and transparent process. We assist with application submissions, documentation, and specialized guidance for various quotas—including NRI and management quotas—under both state and central systems.
Our work goes beyond consulting; we are dedicated mentors who walk with our students at every step of their academic journey. At NSET, we believe that every student has the potential to shine—and it is our responsibility and honor to help transform their dreams into reality.
`,
    content3: `Together, let’s build a future where borders don’t limit ambition and where every aspiring doctor finds the path to success.`,
    image: "/images/logo.png",
    imageClass: "w-[320px] h-[240px]",
  },
  {
    label: "Mission",
    icon: FaBullseye,
    title: "Our Mission",
    content: `To empower aspiring medical students by providing expert guidance, transparent admission support, and personalized career counseling—helping them secure seats in top medical institutions across India and abroad. We are committed to making quality medical education accessible to every deserving student, regardless of geographical or financial barriers.
`,
    // image: "/images/logo.png",
    imageClass: "w-[250px] h-[200px]",
  },
  {
    label: "Vision",
    icon: FaEye,
    title: "Our Vision",
    content: `To be the most trusted and comprehensive education consultancy for medical admissions, shaping the future of healthcare by nurturing the next generation of doctors through ethical, informed, and student-first practices.
`,
    // image: "/images/logo.png",
    imageClass: "w-[300px] h-[220px]",
  },
  {
    label: "History",
    icon: FaHistory,
    title: "Our History",
    content: `Founded in 2014, NSET has established itself as a reliable and respected educational consultancy focused on helping future medical students achieve their dream of becoming doctors. Grounded in values like transparency, integrity, and tailored mentorship, NSET serves as a guiding light for students as they navigate the often complicated process of medical admissions in India and beyond.
From the very beginning, we recognized the confusion and hurdles that students and their families encounter during the medical admission process. That's why we established NSET, with a clear goal of making that journey easier. We provide thorough, step-by-step support—from counseling and assessing eligibility to handling documentation and securing seats.
`,
    content2: `2014: NSET was born out of a desire to provide ethical and accessible medical admission consulting for all deserving students.
`,
    content3: `2016: We broadened our horizons by adding international MBBS admissions to our offerings, helping students get into top universities in Asia and Europe.
`,
    content4: `2018: We introduced a user-friendly portal that keeps students updated on admission deadlines, college choices, quotas, and fee structures.
`,
    content5: `2020: During the pandemic, we pivoted to a digital-first approach, providing virtual counseling sessions, webinars, and a wealth of online support resources.
`,
    content6: `2023: We forged strong partnerships with esteemed medical colleges and universities around the world, enhancing access to top-notch medical education.
`,
    // image: "/images/logo.png",
    imageClass: "w-[200px] h-[180px]",
  },
  {
    label: "Company Growth",
    icon: FaChartLine,
    title: "Company Growth",
    content: `Our success is reflected in the growing number of students placed in top medical institutions in India and abroad.`,
    // image: "/images/logo.png",
    imageClass: "w-[280px] h-[210px]",
  },
  {
    label: "Team Members",
    icon: FaUsers,
    title: "Meet Our Team",
    content: `Our team consists of professionals who are passionate about helping students and have vast experience in academic counseling.`,
    // image: "/images/logo.png",
    imageClass: "w-[270px] h-[200px]",
  },
  {
    label: "FAQs",
    icon: FaQuestionCircle,
    title: "Frequently Asked Questions",
    content: "",
    // image: "/images/logo.png",
    imageClass: "w-[260px] h-[200px]",
  },
];

export default function CompanyTabs() {
  const [activeTab, setActiveTab] = useState(companyTabs[0].label);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
      {/* <div className="mt-4 bg-white/90 backdrop-blur-md border border-white/10 text-black p-6 sm:p-8 rounded-2xl shadow-inner animate-fade-in">
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
              priority
              className={`${activeData.imageClass} rounded-xl shadow-md object-cover`}
            />
          )}

          <div className="space-y-2 text-black w-full">
            <h1 className="text-xl font-bold text-[#8A05FF]">
              {activeData.title}
            </h1> */}

      {/* Show normal content or FAQ accordion */}
      {/* {activeTab !== "FAQs" ? (
              <p>{activeData.content}</p>
            ) : (
              <div className="mt-4 space-y-3">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl shadow bg-white"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 flex justify-between items-center font-medium text-base"
                    >
                      {faq.question}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="p-4 border-t text-gray-700 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div> */}

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
            {/* Show normal content or FAQ accordion */}
            {activeTab !== "FAQs" ? (
              <p>{}</p> //<p>{activeData.content}</p>
            ) : (
              <div className="mt-4 space-y-3">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl shadow bg-white"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 flex justify-between items-center font-medium text-base"
                    >
                      {faq.question}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="p-4 border-t text-gray-700 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
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
            {activeData.content3 && <p>{activeData.content3}</p>}
            {activeData.content4 && <p>{activeData.content4}</p>}
            {activeData.content5 && <p>{activeData.content5}</p>}
            {activeData.content6 && <p>{activeData.content6}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
