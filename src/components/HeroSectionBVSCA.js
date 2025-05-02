"use client";

import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BvscLayout = () => {
  return (
    <>
      {/* Main Intro Section */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E0F7FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Become a Veterinary Expert
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Start your journey towards improving animal lives and public health
            with a BVSc degree.
          </p>
        </motion.div>
      </section>
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
          {/* Left Side: Text Content (narrower) */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
              Study{" "}
              <span className="text-black font-extrabold">BVSC in India</span>
            </h2>
            <p className="text-lg mb-4">
              BVSC (Bachelor of Veterinary Science) in India is a highly
              preferred postgraduate program among dental aspirants worldwide.
              With world-class institutions, experienced faculty, and
              international recognition, India provides an ideal environment for
              dental specialization.
            </p>
            <p className="text-lg mb-4">
              To pursue BVSC, candidates must hold a BDS degree and qualify NEET
              BVSC. The course duration is 3 years, offering in-depth clinical
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
              Institutions offering BVSC in India are approved by the Dental
              Council of India (DCI), and many are recognized by international
              bodies such as WHO. Students gain access to a wide range of
              patient cases, advanced labs, and research opportunities.
            </p>
          </div>

          {/* Right Side: Image (wider) */}
          <div className="md:w-7/12 flex">
            <img
              src="/images/bvsc.jpg"
              alt="Top Medical Colleges"
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Advantages Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Advantages of Pursuing BVSC in India
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                India is home to some of the most prestigious and globally
                recognized medical universities.
              </li>
              <li>
                With over 300 medical institutions across the country, including
                around 180 private colleges, students have diverse choices.
              </li>
              <li>
                India offers approximately 72,000 BVSC seats annually, ensuring
                ample opportunities for aspiring doctors.
              </li>
              <li>
                Indian medical education is renowned for its strong emphasis on
                research, innovation, and academic excellence.
              </li>
              <li>
                Clinical training in India provides hands-on experience and
                real-time patient interaction, building practical skills.
              </li>
              <li>
                Students participate in international medical conferences,
                workshops, and academic exchange programs.
              </li>
              <li>
                The curriculum aligns with global medical standards, making
                Indian graduates competitive worldwide.
              </li>
              <li>
                Indian BVSC graduates are eligible to appear for global
                licensing exams and practice medicine internationally.
              </li>
              <li>
                Students gain practical experience by working with real human
                cadavers during their training.
              </li>
            </ul>
          </div>

          {/* Eligibility Criteria Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Eligibility Criteria for{" "}
              <span className="text-black font-extrabold">BVSC Admission</span>
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                Applicants must qualify for NEET, AIIMS, or JIPMER entrance
                exams with competitive scores due to high demand.
              </li>
              <li>
                General category candidates must secure at least 60% in 12th
                grade, while SC/ST students require a minimum of 40%.
              </li>
              <li>
                Mandatory subjects include Physics, Chemistry, and Biology in
                10+2 or equivalent examinations.
              </li>
              <li>
                Unreserved candidates require a minimum of 50% marks; reserved
                category candidates need at least 45% in PCB subjects.
              </li>
              <li>
                For AIIMS admission, a minimum of 60% marks in 10+2 is
                essential.
              </li>
              <li>
                Proficiency in English is compulsory, as it is the medium of
                instruction in top medical colleges.
              </li>
              <li>
                Applicants must be between 17 and 25 years of age at the time of
                admission.
              </li>
              <li>
                Clearing NEET is mandatory for participation in centralized
                counselling for admission to medical colleges.
              </li>
            </ul>
          </div>

          {/* Documents Required Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Documents Required for{" "}
              <span className="text-black font-extrabold">BVSC Admission</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <ul className="space-y-2">
                <li>
                  10th and 12th-grade mark sheets and passing certificates
                </li>
                <li>NEET scorecard and admit card</li>
                <li>Birth certificate</li>
                <li>Caste certificate (if applicable)</li>
                <li>Recent passport-size photographs</li>
                <li>Medical Council of India (MCI) approval (if required)</li>
                <li>Provisional allotment letter</li>
              </ul>
              <ul className="space-y-2">
                <li>Domicile certificate (if applicable)</li>
                <li>Transfer certificate from last attended institution</li>
                <li>Income certificate (for scholarships/reservations)</li>
                <li>Migration certificate (for students from other boards)</li>
                <li>Disability certificate (if applicable)</li>
                <li>Freedom fighter certificate (if applicable)</li>
                <li>Proof of application fee payment</li>
              </ul>
            </div>
          </div>

          {/* Teaching Methodology Section */}
          <div>
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-4">
              Teaching Methodology in{" "}
              <span className="text-black font-extrabold">BVSC India</span>
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                Most Indian medical colleges commence their academic session in
                September.
              </li>
              <li>
                While regional languages are spoken on campuses, the medium of
                instruction is primarily English.
              </li>
              <li>
                Students are comfortable with both English and Hindi, which
                enhances learning and communication.
              </li>
              <li>
                The National Medical Commission (NMC) publishes a list of
                English-medium BVSC colleges annually.
              </li>
              <li>
                Modern teaching methods include clinical rotations, simulation
                labs, group discussions, and case-based learning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Animal Healthcare",
              desc: "Learn diagnostics, treatment, and surgery for various animals.",
              icon: "🐕",
            },
            {
              title: "Livestock Management",
              desc: "Contribute to agriculture and food security sectors.",
              icon: "🐄",
            },
            {
              title: "Global Opportunities",
              desc: "Work internationally in zoos, research labs, and veterinary clinics.",
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
              <h3 className="text-2xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="bg-[#E0F7FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s how you can secure admission into a top veterinary college.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Counseling Guidance",
              desc: "Connect with experts for college and course selection.",
            },
            {
              step: "02",
              title: "Apply for NEET & State Counseling",
              desc: "Complete the application and documentation process.",
            },
            {
              step: "03",
              title: "Admission & Enrollment",
              desc: "Get allotted a top veterinary college and start your journey.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#00E5FF] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clinical Rotations",
              desc: "Hands-on training at veterinary hospitals and farms.",
              icon: "🩺",
            },
            {
              title: "Research Opportunities",
              desc: "Engage in veterinary science and zoonotic disease research.",
              icon: "🔬",
            },
            {
              title: "Scholarships Available",
              desc: "Merit-based and need-based financial assistance.",
              icon: "🎓",
            },
            {
              title: "Internship Experience",
              desc: "Mandatory internship to prepare for real-world scenarios.",
              icon: "🏥",
            },
            {
              title: "Entrepreneurship",
              desc: "Start your own clinic, pet care center, or farm consultancy.",
              icon: "🏡",
            },
            {
              title: "Higher Studies",
              desc: "Specialize with MVSc (Master of Veterinary Science) programs.",
              icon: "📚",
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
              <h4 className="text-xl font-bold mb-2 text-[#8A05FF]">
                {item.title}
              </h4>
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
            Ready to Begin Your BVSc Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Get expert counseling and secure your future in Veterinary Science
            today!
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Book Free Consultation
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default BvscLayout;
