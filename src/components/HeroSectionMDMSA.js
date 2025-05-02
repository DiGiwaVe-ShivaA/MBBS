"use client";
import React, { useState, useCallback } from "react";

import { GraduationCap, CalendarDays, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ApplicationFormModal from "./ApplicationFormModal"; // Make sure this path is correct

const initialFormState = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  course: "",
  neetAttempt: "",
  dropper: "",
  coaching: "",
};

const MdMsLayout = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setError("");
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const mobileRegex = /^[0-9]{10}$/;
      if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
        setError("Please enter a valid 10-digit mobile number");
        return;
      }

      if (
        !formData.name ||
        !formData.city ||
        !formData.state ||
        !formData.course
      ) {
        setError("Please fill in all required fields");
        return;
      }

      const message = `
*New Application Form:*
Name: ${formData.name}
Mobile: ${formData.mobile}
City: ${formData.city}
State: ${formData.state}
Course: ${formData.course}
NEET Attempt: ${formData.neetAttempt}
Dropper: ${formData.dropper}
Coaching Attended: ${formData.coaching}
      `;

      const url = `https://wa.me/8109380429?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      resetForm();
      setShowForm(false);
    },
    [formData, resetForm]
  );
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#00E5FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Become a Medical Specialist with MD/MS in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Join India’s premier medical institutions and specialize in the
            field of your choice with MD/MS.
          </p>
          {/* <button className="bg-[#8A05FF] hover:bg-[#6601D5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Start Your MD/MS Journey
          </button> */}
        </motion.div>
      </section>
      {/* Main Intro Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto md:flex md:items-stretch gap-10">
          {/* Left Side: Text Content (narrower) */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
              Study{" "}
              <span className="text-black font-extrabold">MD/MS in India</span>
            </h2>
            <p className="text-lg mb-4">
              MD/MS in India is a top choice among medical aspirants across the
              globe due to its robust education system, experienced faculty, and
              globally recognized institutions.
            </p>
            <p className="text-lg mb-4">
              Admission into MBBS programs in India requires qualifying NEET.
              With a peaceful and student-friendly environment, India supports
              fast and effective learning for future doctors.
            </p>
            <p className="text-lg mb-4">
              Eligibility includes scoring at least 50% in 10+2 with science
              subjects. The MBBS course spans 5.5 years — including 4.5 years of
              academic training and 1 year of mandatory internship.
            </p>
            <p className="text-lg mb-4">
              Indian medical degrees from NMC, WHO, and UNESCO-approved
              universities are recognized worldwide, making India a highly
              respected destination for medical education.
            </p>
            <p className="text-lg mb-4">
              The academic year typically begins in September or October, and
              the application process usually starts in June or July. Candidates
              are encouraged to stay updated with official deadlines.
            </p>
            <p className="text-lg">
              Choosing India for your medical education ensures quality
              training, global recognition, and an excellent return on
              investment for your future career.
            </p>
          </div>

          {/* Right Side: Image (wider) */}
          <div className="md:w-7/12 flex">
            <img
              src="/images/mdms.jpg"
              alt="Top Medical Colleges"
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#8A05FF] mb-6"
          >
            Study MD/MS in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            MD/MS (Doctor of Medicine/Master of Surgery) programs in India
            provide an opportunity to specialize in various medical fields.
            These postgraduate programs are designed to help you become an
            expert in the medical industry.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <GraduationCap className="w-6 h-6 mr-2 text-[#00E5FF]" />
                MD/MS Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>3 years duration (2 years for certain specialties)</li>
                <li>Specializations available in various medical fields</li>
                <li>Recognized by MCI and Indian universities</li>
                <li>Global demand for MD/MS specialists</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <CheckCircle className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Admission Criteria
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Qualify NEET PG exam</li>
                <li>MBBS degree from a recognized institution</li>
                <li>Minimum 50% marks in MBBS final exams</li>
                <li>Fulfill category reservation norms if applicable</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-[#00E5FF] p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-[#8A05FF] mb-2">
              Important Timelines
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>March – April</strong> <br />
              Classes commence: <strong>June – July</strong>
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Features Section */}
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
                With over 300 medical institutions across the country, including
                around 180 private colleges, students have diverse choices.
              </li>
              <li>
                India offers approximately 72,000 MBBS seats annually, ensuring
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
              <span className="text-black font-extrabold">MBBS Admission</span>
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
              <span className="text-black font-extrabold">MBBS Admission</span>
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
              <span className="text-black font-extrabold">MBBS India</span>
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

      {/* How It Works Section */}
      <section className="bg-[#00E5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these steps to apply and secure admission to top MD/MS
            programs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Career Counseling",
              desc: "Consult experts to select the right specialization and institution.",
            },
            {
              step: "02",
              title: "NEET PG Exam",
              desc: "Prepare and appear for the NEET PG exam for postgraduate admissions.",
            },
            {
              step: "03",
              title: "College Allotment",
              desc: "Get admission to a prestigious medical college in India.",
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
              title: "Clinical Training",
              desc: "Gain practical experience in renowned hospitals.",
              icon: "🩺",
            },
            {
              title: "Research Opportunities",
              desc: "Participate in cutting-edge research in the medical field.",
              icon: "🔬",
            },
            {
              title: "Global Recognition",
              desc: "Earn a degree recognized worldwide.",
              icon: "🌎",
            },
            {
              title: "Postgraduate Fellowships",
              desc: "Further specialization through fellowship programs.",
              icon: "🎓",
            },
            {
              title: "Teaching Opportunities",
              desc: "Teaching opportunities at medical institutions worldwide.",
              icon: "🧑‍🏫",
            },
            {
              title: "Practice in Top Hospitals",
              desc: "Work in leading hospitals as a specialist.",
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
            Ready to Begin Your MD/MS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with counselors and take the first step toward becoming a
            specialist in your field.
          </p>
          <button
            className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition"
            onClick={() => setShowForm(true)}
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </section>
      {/* ✅ Popup Modal */}
      {showForm && (
        <ApplicationFormModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setShowForm(false)}
          error={error}
        />
      )}
    </>
  );
};

export default MdMsLayout;
