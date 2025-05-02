"use client";

import React from "react";
import { Heart, FileText, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const DiplomaInMedicalLayout = () => {
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
            Build Your Medical Career with Diplomas in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Fast-track your career in the medical field by gaining expertise
            through specialized diploma programs in nursing, radiology, lab
            technology, and more.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
          {/* Left Side: Text Content (narrower) */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
              Study{" "}
              <span className="text-black font-extrabold">
                Medical Diplomas in India
              </span>
            </h2>
            <p className="text-lg mb-4">
              Diploma courses in the medical field in India are an excellent
              option for students who wish to begin their careers in healthcare
              in a shorter time frame. These programs are designed to equip
              students with hands-on clinical skills and theoretical knowledge
              in specific medical domains.
            </p>
            <p className="text-lg mb-4">
              Popular diploma programs include Diploma in Medical Laboratory
              Technology (DMLT), Radiology, Nursing, Ophthalmic Technology, and
              Physiotherapy. Course durations typically range from 1 to 2 years,
              depending on the specialization and institution.
            </p>
            <p className="text-lg mb-4">
              Eligibility for most diploma courses requires passing 10+2 with
              science subjects, particularly Biology, Physics, and Chemistry.
              Some programs may also require a minimum percentage and entrance
              test performance.
            </p>
            <p className="text-lg mb-4">
              Approved by state medical faculties, paramedical boards, or
              respective health councils, these diplomas offer direct entry into
              the healthcare workforce. Graduates can work in hospitals,
              diagnostic labs, clinics, and even pursue higher studies later.
            </p>
          </div>

          {/* Right Side: Image (wider) */}
          <div className="md:w-7/12 flex">
            <img
              src="/images/diploma.webp" // You can replace this with a relevant image like /images/medical-diploma.png
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
              Advantages of Pursuing Diplomas in India
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
                India offers approximately 72,000 Diplomas seats annually,
                ensuring ample opportunities for aspiring doctors.
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
                Indian Diplomas graduates are eligible to appear for global
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
              <span className="text-black font-extrabold">
                Diplomas Admission
              </span>
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
              <span className="text-black font-extrabold">
                Diplomas Admission
              </span>
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
              <span className="text-black font-extrabold">Diplomas India</span>
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
                English-medium Diplomas colleges annually.
              </li>
              <li>
                Modern teaching methods include clinical rotations, simulation
                labs, group discussions, and case-based learning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#00E5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s how you can secure a spot in medical diploma programs in
            India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Choose Your Specialization",
              desc: "Explore different medical diplomas and decide which one suits your interests and career goals.",
            },
            {
              step: "02",
              title: "Meet Eligibility Criteria",
              desc: "Ensure you meet the educational and age requirements for your selected diploma program.",
            },
            {
              step: "03",
              title: "Submit Application",
              desc: "Fill out the application form, provide documents, and appear for any required entrance exams.",
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
              title: "Experienced Faculty",
              desc: "Learn from industry experts and experienced professionals in the healthcare field.",
              icon: "👩‍🏫",
            },
            {
              title: "Practical Experience",
              desc: "Gain hands-on experience through clinical training and internships in top medical institutions.",
              icon: "🩺",
            },
            {
              title: "Industry Connections",
              desc: "Develop a network in the healthcare industry and improve your employment opportunities.",
              icon: "🌐",
            },
            {
              title: "High Employability",
              desc: "Medical diploma holders are in high demand across various healthcare sectors.",
              icon: "💼",
            },
            {
              title: "Continuous Learning",
              desc: "Stay updated with new medical advancements through regular workshops and training.",
              icon: "📚",
            },
            {
              title: "Global Recognition",
              desc: "Diploma programs are recognized worldwide, offering you global career opportunities.",
              icon: "🌍",
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
            Ready to Start Your Medical Diploma Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Take the first step towards a fulfilling career in the medical
            field. Enroll in a diploma program today!
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Apply Now
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default DiplomaInMedicalLayout;
