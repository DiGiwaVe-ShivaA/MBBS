"use client";
import React from "react";
import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CombinedLayout = () => {
  return (
    <>
      {/* <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-6"
          >
            Study MBBS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            MBBS in India is one of the most preferred choices by medical
            aspirants across the globe. A strong education structure, esteemed
            professors, and globally approved institutions make India a hub for
            medical education.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-purple-600">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-500" />
                MBBS Structure
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5.5 years total duration</li>
                <li>4.5 years of classroom training</li>
                <li>1 year of internship</li>
                <li>Recognized by WHO, NMC, UNESCO</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-purple-600">
                <CheckCircle className="w-6 h-6 mr-2 text-purple-500" />
                Admission Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Appear for NEET examination</li>
                <li>Minimum 50% in 10+2 (PCB)</li>
                <li>Apply through official portals</li>
                <li>Maintain critical admission timelines</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-purple-50 p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-purple-700 mb-2">
              Academic Timeline
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>June – July</strong> <br />
              Academic session starts: <strong>September – October</strong>
            </p>
          </motion.div>
        </div>
      </section> */}
      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-blue-800 py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-800">
              Shape Your Medical Career with Confidence
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
              Discover opportunities, unlock pathways, and turn your dreams into
              reality with expert guidance.
            </p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
              Get Started
            </button> */}
          </motion.div>
        </section>
        <section className="py-16 px-6 bg-white text-black">
          <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
            {/* Left Side: Text Content (narrower) */}
            <div className="md:w-5/12">
              <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
                Study{" "}
                <span className="text-black font-extrabold">MBBS in India</span>
              </h2>
              <p className="text-lg mb-4">
                Pursuing an MBBS degree in India is a top choice for medical
                aspirants across the globe. With a robust academic framework,
                experienced faculty, and globally recognized institutions, India
                offers exceptional opportunities in the field of medicine.
              </p>
              <p className="text-lg mb-4">
                Admission to MBBS programs in India requires candidates to
                qualify the NEET exam. Applicants must also have secured a
                minimum of 50% marks in their 10+2 examinations with Physics,
                Chemistry, and Biology as core subjects.
              </p>
              <p className="text-lg mb-4">
                The MBBS course duration is 5.5 years — including 4.5 years of
                academic training and 1 year of mandatory internship. Medical
                colleges in India are approved by WHO, NMC, and often recognized
                by UNESCO. The academic session typically begins in September or
                October, and applications usually open in June and July.
              </p>
              <p className="text-lg mb-4">
                With a wide range of clinical exposure, modern infrastructure,
                and affordable tuition, India is a leading destination for those
                aspiring to become globally competent doctors.
              </p>
            </div>

            {/* Right Side: Image (wider) */}
            <div className="md:w-7/12 flex">
              <img
                src="/images/mbbs.JPG"
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
                Advantages of Pursuing MBBS & MD/MS in India
              </h2>
              <ul className="space-y-2 text-lg">
                <li>
                  India is home to some of the most prestigious and globally
                  recognized medical universities.
                </li>
                <li>
                  With over 300 medical institutions across the country,
                  including around 180 private colleges, students have diverse
                  choices.
                </li>
                <li>
                  India offers approximately 72,000 MBBS seats annually,
                  ensuring ample opportunities for aspiring doctors.
                </li>
                <li>
                  Indian medical education is renowned for its strong emphasis
                  on research, innovation, and academic excellence.
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
                  Indian MBBS graduates are eligible to appear for global
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
                  MBBS Admission
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
                  Applicants must be between 17 and 25 years of age at the time
                  of admission.
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
                  MBBS Admission
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
                  <li>
                    Migration certificate (for students from other boards)
                  </li>
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
                <span className="text-black font-extrabold">MBBS India</span>
              </h2>
              <ul className="space-y-2 text-lg">
                <li>
                  Most Indian medical colleges commence their academic session
                  in September.
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
                  English-medium MBBS colleges annually.
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
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Career Counseling",
                desc: "Personalized advice from experts to navigate your career options.",
                icon: "🎯",
              },
              {
                title: "Top Colleges",
                desc: "Find the best medical institutions across India and abroad.",
                icon: "🏥",
              },
              {
                title: "Scholarships",
                desc: "Discover financial aid and scholarships suited for you.",
                icon: "🎓",
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

        {/* About / Steps Section */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to start your journey toward success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consult",
                desc: "Talk to our expert counselors.",
              },
              {
                step: "02",
                title: "Choose",
                desc: "Select the best-fit colleges/courses.",
              },
              {
                step: "03",
                title: "Confirm",
                desc: "Secure your admission hassle-free.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Cards Section */}
        {/* <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NEET Preparation",
                desc: "Get best-in-class coaching and study material.",
                icon: "📚",
              },
              {
                title: "Global Medical Education",
                desc: "Options in Russia, Ukraine, Philippines, and more.",
                icon: "🌍",
              },
              {
                title: "Admission Support",
                desc: "From counseling to document verification and beyond.",
                icon: "📝",
              },
              {
                title: "Career Path Guidance",
                desc: "Choose your specialization wisely with our experts.",
                icon: "💡",
              },
              {
                title: "Hostel & Facilities",
                desc: "Comfortable accommodation options made easy.",
                icon: "🏡",
              },
              {
                title: "Visa Assistance",
                desc: "Seamless visa guidance for overseas education.",
                icon: "✈️",
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
        </section> */}

        {/* CTA Banner Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Connect with us today and make the first step toward your dream
              medical career!
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
              Book a Free Consultation
            </button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default CombinedLayout;
