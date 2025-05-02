"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MdsLayout = () => {
  return (
    <>
      {/* Main Intro Section */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#00E5FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Become a Dental Specialist with MDS in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Specialize in the field of your choice and gain advanced skills in
            dental surgery with MDS in India.
          </p>
          {/* <button className="bg-[#8A05FF] hover:bg-[#6601D5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Start Your MDS Journey
          </button> */}
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
          {/* Left Side: Text Content (narrower) */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
              Study{" "}
              <span className="text-black font-extrabold">MD/MS in India</span>
            </h2>
            <p className="text-lg mb-4">
              MDS (Master of Dental Surgery) in India is a highly preferred
              postgraduate program among dental aspirants worldwide. With
              world-class institutions, experienced faculty, and international
              recognition, India provides an ideal environment for dental
              specialization.
            </p>
            <p className="text-lg mb-4">
              To pursue MDS, candidates must hold a BDS degree and qualify NEET
              MDS. The course duration is 3 years, offering in-depth clinical
              and theoretical expertise across multiple dental fields.
              Applications typically begin early in the year, with academic
              sessions starting by mid-year.
            </p>
            <p className="text-lg mb-4">
              Eligibility includes scoring at least 50% in 10+2 with science
              subjects. The MBBS course spans 5.5 years — including 4.5 years of
              academic training and 1 year of mandatory internship.
            </p>
            <p className="text-lg mb-4">
              Institutions offering MDS in India are approved by the Dental
              Council of India (DCI), and many are recognized by international
              bodies such as WHO. Students gain access to a wide range of
              patient cases, advanced labs, and research opportunities.
            </p>
          </div>

          {/* Right Side: Image (wider) */}
          <div className="md:w-7/12 flex">
            <img
              src="/images/mds.png"
              alt="Top Medical Colleges"
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* 1. Advantages of Pursuing MBBS in India */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-600 inline-block mb-6">
              Advantages of Pursuing{" "}
              <span className="text-red-600">MBBS in India</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>
                India has over 300 medical universities and colleges, with
                approximately 180 private institutions.
              </li>
              <li>Over 72,000 MBBS seats are available nationwide.</li>
              <li>
                Highly regarded for advanced research and practical training
                programs.
              </li>
              <li>
                World-class clinical knowledge and international exposure.
              </li>
              <li>Opportunities to attend global seminars and workshops.</li>
              <li>
                Globally recognized curriculum aligned with international
                standards.
              </li>
              <li>
                Graduates can practice globally after completing MBBS in India.
              </li>
              <li>
                Hands-on experience with real human bodies during training.
              </li>
            </ul>
          </div>

          {/* 2. Eligibility Criteria for MBBS Admission */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-600 inline-block mb-6">
              Eligibility Criteria for{" "}
              <span className="text-red-600">MBBS Admission</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>
                Appear for NEET, AIIMS, JIPMER or other recognized entrance
                exams.
              </li>
              <li>Minimum 60% in 12th board exams (general); 40% for SC/ST.</li>
              <li>Subjects must include Physics, Chemistry, and Biology.</li>
              <li>50% aggregate required for unreserved, 45% for reserved.</li>
              <li>Fluency in English is essential for top institutions.</li>
              <li>
                Age must be between 17 to 25 years at the time of admission.
              </li>
              <li>Qualifying NEET/AIIMS/JIPMER is mandatory for counseling.</li>
            </ul>
          </div>

          {/* 3. Documents Required */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-600 inline-block mb-6">
              Documents Required for{" "}
              <span className="text-red-600">MBBS Admission</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>10th & 12th mark sheets and certificates</li>
                <li>NEET scorecard</li>
                <li>Birth certificate</li>
                <li>Passport size photographs</li>
                <li>Caste Certificate (if applicable)</li>
                <li>Approval from the Medical Council of India</li>
                <li>Provisional Allotment Letter</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Domicile & Income Certificates (if applicable)</li>
                <li>Transfer & Migration Certificates</li>
                <li>Freedom Fighter/PWD Certificates (if applicable)</li>
                <li>Application fee payment receipt</li>
              </ul>
            </div>
          </div>

          {/* 4. Teaching Methodology */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-600 inline-block mb-6">
              Teaching Methodology for{" "}
              <span className="text-red-600">MBBS in India</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The academic year typically begins in September. Most medical
              universities in India follow a bilingual approach — English is the
              primary language, with support in Hindi and local languages.
            </p>
            <p className="text-lg leading-relaxed">
              The National Medical Commission (NMC) ensures consistency by
              listing all English-medium colleges, which standardizes education
              quality nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Comprehensive Specializations",
              desc: "Choose from a wide range of specialties such as Orthodontics, Periodontics, Prosthodontics, and more.",
              icon: "🦷",
            },
            {
              title: "Top Dental Institutions",
              desc: "Study at India’s best dental schools with state-of-the-art facilities and renowned faculty.",
              icon: "🏫",
            },
            {
              title: "Worldwide Recognition",
              desc: "Earn an MDS degree recognized globally, providing opportunities to practice worldwide.",
              icon: "🌎",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#00E5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these steps to apply and secure admission to top MDS programs
            in India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Career Counseling",
              desc: "Consult with experts to choose the right specialization and institution.",
            },
            {
              step: "02",
              title: "NEET MDS Exam",
              desc: "Prepare and appear for the NEET MDS exam for postgraduate admissions.",
            },
            {
              step: "03",
              title: "College Allotment",
              desc: "Get admitted to top dental colleges in India based on your rank and preferences.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#8A05FF] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Clinical Training",
              desc: "Learn through real-life clinical exposure in top dental hospitals.",
              icon: "🦷",
            },
            {
              title: "Research Opportunities",
              desc: "Get involved in cutting-edge dental research and innovations.",
              icon: "🔬",
            },
            {
              title: "Postgraduate Fellowships",
              desc: "Further specialize through fellowships in specific areas of dentistry.",
              icon: "🎓",
            },
            {
              title: "International Career Opportunities",
              desc: "Practice as a dental surgeon in various countries.",
              icon: "🌍",
            },
            {
              title: "Teaching Opportunities",
              desc: "Teaching roles at top dental schools after your MDS degree.",
              icon: "🧑‍🏫",
            },
            {
              title: "Work in Top Hospitals",
              desc: "Join leading dental hospitals and become an expert in your field.",
              icon: "🏥",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="border p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] py-16 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your MDS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with experts and take the first step toward a successful
            career in dentistry.
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default MdsLayout;
