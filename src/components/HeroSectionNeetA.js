// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
// import { MdOutlineVerified, MdSchool } from "react-icons/md";
// import { FaTooth, FaLeaf } from "react-icons/fa";
// import { GiMedicines } from "react-icons/gi";
// import { FaUserGraduate, FaFileAlt, FaUniversity } from "react-icons/fa";
// import { HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

// const testimonials = [
//   {
//     quote:
//       "I cracked NEET on my 2nd attempt – the right guidance changes everything.",
//     author: "Ritika, AIIMS Delhi",
//   },
//   {
//     quote: "Interactive timelines made my prep seamless!",
//     author: "Arjun, KMC Manipal",
//   },
// ];

// export default function AboutNEETPage() {
//   const [syllabusTab, setSyllabusTab] = useState("class11");
//   const [openStep, setOpenStep] = useState(null);

//   const toggleStep = (index) => {
//     setOpenStep(openStep === index ? null : index);
//   };

//   return (
//     <div className="space-y-24">
//       {/* Hero Section */}
//       {/* Background Image Container */}
      // <div className="relative z-0 w-full h-full flex items-center justify-center">
      //   <img
      //     src="/images/neet-bg.png"
      //     alt="NEET Background"
      //     className="max-w-7xl w-full h-auto object-contain"
      //   />
      // </div>
//       {/* Iconic Breakdown */}
//       <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8fcff] py-4 px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
//               📘 What is NEET 2025?
//             </h1>
//             <p className="mt-4 text-lg text-gray-600">
//               NEET – The Gateway to Your Medical Career
//             </p>
//           </motion.div>

//           {/* Main Content */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
//           >
//             <div className="text-gray-700 text-lg leading-relaxed space-y-4">
//               <p>
//                 <FaStethoscope className="inline-block text-indigo-600 mr-2 text-xl" />
//                 <span className="font-semibold">
//                   NEET (National Eligibility cum Entrance Test)
//                 </span>{" "}
//                 is a highly competitive national-level entrance exam conducted
//                 by the{" "}
//                 <span className="font-semibold text-blue-700">
//                   National Testing Agency (NTA)
//                 </span>
//                 . It is the single gateway for admission into various
//                 undergraduate courses like MBBS, BDS, and AYUSH (BAMS, BHMS,
//                 BUMS, BSMS), as well as veterinary sciences (BVSc & AH).
//               </p>
//               <p>
//                 NEET is accepted by all recognized institutions including those
//                 governed by the{" "}
//                 <span className="text-blue-700 font-semibold">
//                   Medical Council of India (MCI)
//                 </span>{" "}
//                 and{" "}
//                 <span className="text-blue-700 font-semibold">
//                   Dental Council of India (DCI)
//                 </span>
//                 .
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               {/* Main Heading */}
//               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center leading-tight tracking-tight">
//                 Explore Your Future: Career Opportunities After NEET UG 2025
//               </h1>

//               {/* Intro Paragraph */}
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed antialiased">
//                 The NEET UG 2025 Exam is fast approaching, scheduled for{" "}
//                 <span className="font-semibold">May 4, 2025</span>, and students
//                 nationwide are giving it their all to secure a spot in the
//                 medical field. But have you ever thought about what happens
//                 after NEET? While many aspire to earn an MBBS, the opportunities
//                 that arise post-NEET are much broader than just becoming a
//                 doctor.
//               </p>
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed antialiased">
//                 Whether you’re in Class 12 or gearing up as a NEET aspirant,
//                 it’s vital to recognize the variety of career paths that await
//                 you once the exam is behind you. The decisions you make today
//                 can influence your entire future! In this blog, we’ll take you
//                 through the most promising career options after NEET UG,
//                 including eligibility requirements, course information, and job
//                 prospects — all presented in a clear, student-friendly way.
//                 Let’s dive in and see what your future could look like!
//               </p>

//               {/* Sub-heading */}
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
//                 What’s NEET UG all about?
//               </h2>

//               {/* Explanation Paragraph */}
//               <p className="text-gray-700 mb-6 text-lg leading-relaxed antialiased">
//                 So, if you’re aspiring to dive into the medical field, NEET UG
//                 is your gateway! The{" "}
//                 <span className="font-semibold">
//                   National Eligibility cum Entrance Test (Undergraduate)
//                 </span>
//                 , commonly referred to as NEET UG, is a national-level entrance
//                 exam run by the
//                 <span className="font-semibold">
//                   {" "}
//                   National Testing Agency (NTA)
//                 </span>
//                 . It’s the sole exam you need to conquer if you’re looking to
//                 pursue undergraduate medical courses in India.
//               </p>

//               {/* Course List */}
//               <p className="text-gray-700 mb-4 text-lg leading-relaxed antialiased">
//                 With a strong NEET UG score, you can gain admission to esteemed
//                 programs like:
//               </p>

//               <ul className="list-disc list-inside text-gray-700 mb-8 text-lg leading-relaxed antialiased space-y-2">
//                 <li>MBBS (Bachelor of Medicine and Bachelor of Surgery)</li>
//                 <li>BDS (Bachelor of Dental Surgery)</li>
//                 <li>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</li>
//                 <li>BHMS (Bachelor of Homeopathic Medicine and Surgery)</li>
//                 <li>BUMS (Bachelor of Unani Medicine and Surgery)</li>
//                 <li>BSMS (Bachelor of Siddha Medicine and Surgery)</li>
//                 <li>
//                   BVSc & AH (Bachelor of Veterinary Sciences and Animal
//                   Husbandry)
//                 </li>
//                 <li>BSc Nursing (at select top institutes)</li>
//               </ul>

//               {/* Conclusion */}
//               <p className="text-gray-700 text-lg leading-relaxed antialiased">
//                 In short, if you’re aiming for a seat in any government or
//                 private medical college across India, NEET UG is essential. So,
//                 if a healthcare career is your dream, taking the NEET UG is the
//                 first big step toward it!
//               </p>
//             </div>

//             <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-inner">
//               <h2 className="text-xl font-bold text-blue-800 mb-3">
//                 🎯 Purpose of the NEET Exam
//               </h2>
//               <ul className="list-disc pl-6 text-gray-700 space-y-2">
//                 <li>
//                   Standardizes the admission process across India with a unified
//                   exam.
//                 </li>
//                 <li>
//                   Ensures transparency, fairness, and a merit-based selection
//                   system.
//                 </li>
//                 <li>
//                   Reduces stress by eliminating the need for multiple entrance
//                   exams.
//                 </li>
//                 <li>Prevents regional/institutional biases in admissions.</li>
//                 <li>
//                   Includes AYUSH and Veterinary courses, expanding medical
//                   opportunities.
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-xl border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 💡 Why is NEET Important for 10th & 12th Aspirants?
//               </h3>
//               <p className="text-gray-700">
//                 If you're dreaming of becoming a{" "}
//                 <span className="font-medium text-green-700">
//                   doctor, dentist, or healer
//                 </span>
//                 , then NEET is your first milestone. For Class 10th students,
//                 it's the perfect time to plan your roadmap, choose PCB subjects,
//                 and focus on concepts. For 12th graders, it’s time to revise
//                 smartly and master the NEET pattern.
//               </p>
//             </div>
//           </motion.div>

//           {/* CTA Box */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-lg text-center"
//           >
//             <MdOutlineVerified className="text-4xl mx-auto mb-4" />
//             <h3 className="text-2xl md:text-3xl font-bold mb-2">
//               Start Your NEET Journey with Clarity
//             </h3>
//             <p className="mb-6 text-lg">
//               Build your foundation early and follow a strategic plan to crack
//               NEET with confidence.
//             </p>
//             <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
//               📞 Book a FREE NEET Counseling Call
//             </button>
//           </motion.div>
//         </div>
//       </div>
//       {/* neets course 2 starts */}
//       <div className="min-h-screen bg-gradient-to-br from-[#f7faff] to-[#ebf4ff]  px-6">
//         <div className="max-w-6xl mx-auto space-y-12">
//           {/* Title */}
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
//               📚 NEET 2025 Course Duration & Exam Pattern
//             </h1>
//             <p className="mt-4 text-lg text-gray-600">
//               Know your journey and prepare smartly for your medical career
//             </p>
//           </motion.div>

//           {/* Course Duration Table */}
//           <div>
//             <h2 className="text-2xl font-bold text-indigo-700 mb-6">
//               🎓 Course Duration Overview
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
//                 <thead className="bg-blue-100">
//                   <tr>
//                     <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
//                       Course
//                     </th>
//                     <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
//                       Duration
//                     </th>
//                     <th className="border border-gray-300 p-4 text-left text-blue-700 font-semibold">
//                       Details
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 p-4">MBBS</td>
//                     <td className="border border-gray-300 p-4">5.5 Years</td>
//                     <td className="border border-gray-300 p-4">
//                       4.5 years academic + 1 year internship in hospitals. Gain
//                       real-world clinical experience during your final year.
//                     </td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="border border-gray-300 p-4">BDS</td>
//                     <td className="border border-gray-300 p-4">5 Years</td>
//                     <td className="border border-gray-300 p-4">
//                       Includes theory + hands-on dental practice. Final year
//                       involves real patient interactions and procedures.
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-4">
//                       AYUSH (BAMS/BHMS)
//                     </td>
//                     <td className="border border-gray-300 p-4">5.5 Years</td>
//                     <td className="border border-gray-300 p-4">
//                       Study traditional medicine, with practical training.
//                       Includes Ayurveda, Homeopathy, and clinical practice.
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Exam Pattern Table */}
//           <div>
//             <h2 className="text-2xl font-bold text-indigo-700 mb-6">
//               📝 NEET 2025 Exam Pattern
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
//                 <thead className="bg-indigo-100">
//                   <tr>
//                     <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
//                       Section
//                     </th>
//                     <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
//                       Number of Questions
//                     </th>
//                     <th className="border border-gray-300 p-4 text-left text-indigo-800 font-semibold">
//                       Marks
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 p-4">Physics</td>
//                     <td className="border border-gray-300 p-4">45</td>
//                     <td className="border border-gray-300 p-4">180</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="border border-gray-300 p-4">Chemistry</td>
//                     <td className="border border-gray-300 p-4">45</td>
//                     <td className="border border-gray-300 p-4">180</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-4">
//                       Biology <br />
//                       <span className="text-sm text-gray-500">
//                         (Botany + Zoology)
//                       </span>
//                     </td>
//                     <td className="border border-gray-300 p-4">90</td>
//                     <td className="border border-gray-300 p-4">360</td>
//                   </tr>
//                 </tbody>
//                 <tfoot className="bg-indigo-50">
//                   <tr>
//                     <td className="border border-gray-300 p-4 font-bold">
//                       Total
//                     </td>
//                     <td className="border border-gray-300 p-4 font-bold">
//                       180
//                     </td>
//                     <td className="border border-gray-300 p-4 font-bold">
//                       720
//                     </td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>
//           </div>

//           {/* Marking Scheme Table */}
//           <div className="overflow-x-auto">
//             <div className="mt-8">
//               <h2 className="text-2xl font-bold text-indigo-700 mb-6">
//                 📌 Marking Scheme
//               </h2>
//               <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-xl shadow-lg">
//                 <thead className="bg-green-100">
//                   <tr>
//                     <th className="border border-gray-300 p-4 text-left text-green-700 font-semibold">
//                       Answer Type
//                     </th>
//                     <th className="border border-gray-300 p-4 text-left text-green-700 font-semibold">
//                       Marks
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 p-4 text-green-700 font-semibold">
//                       Correct Answer
//                     </td>
//                     <td className="border border-gray-300 p-4">+4</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="border border-gray-300 p-4 text-red-600 font-semibold">
//                       Incorrect Answer
//                     </td>
//                     <td className="border border-gray-300 p-4">-1</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-4 font-semibold">
//                       Unanswered
//                     </td>
//                     <td className="border border-gray-300 p-4">0</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* neet course ends */}

//       {/* important section */}

//       {/* neet 4th ends */}
//     </div>

//     // important section
//   );
// }
import React from "react";

const HeroSectionNeetA = () => {
  return (
    <div>
      {/*Heading */}
   <section className="bg-blue-600 py-16 px-4 text-center rounded-lg shadow-md">
    <div className="relative z-0 w-full h-full flex items-center justify-center">
        <img
          src="/images/neet-bg.png"
          alt="NEET Background"
          className="max-w-7xl w-full h-auto object-contain"
        />
      </div>
  <h1 className="text-3xl lg:text-4xl font-semibold lg:pt-10 text-white">
    NEET : Syllabus, Seats, Cutoff & More
  </h1>
  <p className="mt-3 text-base lg:text-lg text-white font-normal">
    Complete Guide to NEET  – Pattern, Eligibility, Seat Matrix & Study Abroad
  </p>
</section>
{/*About NEET */}
     <section className="lg:px-10 mt-12 bg-white rounded-xl p-8 lg:mx-20 shadow-md border border-gray-200">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
    What is NEET ?
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    NEET (National Eligibility cum Entrance Test) is a national-level medical entrance exam in India conducted for admission into MBBS, BDS, AYUSH, and other medical courses. Conducted by NTA (National Testing Agency), it is the only entrance test accepted by all medical colleges across the country, including AIIMS and JIPMER.
    <br /><br />
    The NEET exam tests students' knowledge in Physics, Chemistry, and Biology based on the NCERT syllabus. It ensures a fair, centralized admission process and is mandatory for students aspiring to become future doctors.
  </p>
</section>

<section className="lg:px-10 mt-8 bg-white rounded-xl p-8 lg:mx-20 shadow-md border border-gray-200">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
    NEET UG vs NEET PG
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    <strong>NEET UG (Undergraduate)</strong> is the entrance exam for students who wish to pursue medical courses like MBBS, BDS, BAMS, BHMS, BUMS, Veterinary Science, Nursing, etc. after completing their 12th grade. It is conducted by NTA.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    <strong>NEET PG (Postgraduate)</strong> is the entrance exam for medical graduates (MBBS holders) who want to pursue postgraduate courses such as MD, MS, and PG Diploma. This exam is conducted by NBEMS (National Board of Examinations in Medical Sciences).
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 text-gray-700">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border">Aspect</th>
          <th className="py-2 px-4 border">NEET UG</th>
          <th className="py-2 px-4 border">NEET PG</th>
        </tr>
      </thead>
      <tbody>
       <tr>
  <td className="py-2 px-4 border">Exam Name</td>
  <td className="py-2 px-4 border">National Eligibility cum Entrance Test (Undergraduate)</td>
  <td className="py-2 px-4 border">National Eligibility cum Entrance Test (Postgraduate)</td>
</tr>

       <tr>
  <td className="py-2 px-4 border">Exam Level</td>
  <td className="py-2 px-4 border">Undergraduate (UG)</td>
  <td className="py-2 px-4 border">Postgraduate (PG)</td>
</tr>

        <tr>
          <td className="py-2 px-4 border">Conducted By</td>
          <td className="py-2 px-4 border">NTA</td>
          <td className="py-2 px-4 border">NBEMS (NBE)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">Eligibility</td>
          <td className="py-2 px-4 border">12th pass with PCB subjects</td>
          <td className="py-2 px-4 border">MBBS Degree or Provisional Certificate</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/*Purpose of NEET  */}
         <section className="lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#f0f8ff] p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Purpose of NEET Exam
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          The NEET exam is conducted to provide a single, standardized entrance test for admissions to MBBS, BDS, and other medical courses across India. 
          It ensures merit-based selection and replaces multiple state-level and institution-level exams, simplifying the admission process for students 
          aspiring to join medical and dental colleges.
        </p>
      </div>

      {/* Duration of Course */}
      <div className="bg-[#f0f8ff] p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Duration of Medical Courses
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          The MBBS course typically spans <strong>5.5 years</strong>, which includes 
          <strong> 4.5 years of academic education</strong> followed by a <strong>1-year mandatory internship</strong>. For BDS (Dental), 
          the duration is <strong>5 years</strong> including the internship. AYUSH and other related courses may vary between 
          <strong> 4 to 5.5 years</strong> based on the program.
        </p>
      </div>
      
    </section>
    {/*Elegibility criteria */}
 <section className="lg:px-20  my-16 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        NEET  Eligibility Criteria
      </h2>
      <ul className="list-disc list-outside space-y-3 text-gray-700 text-lg">
       
       
        {/* <li>Maximum age limit: 25 years for general category, 30 years for reserved categories (SC/ST/OBC).</li> */}
        <li>Candidate must have passed Class 12th or equivalent with Physics, Chemistry, Biology/Biotechnology.</li>
        <li>General category candidates must have obtained at least 50% marks in PCB (Physics, Chemistry, Biology).</li>
        <li>Reserved category candidates (SC/ST/OBC) need minimum 45% marks in PCB.</li>
        <li>Must Qualify NEET.</li>
         <li>Candidate must be an Indian National / NRIs / OCIs / PIOs / Foreign Nationals.</li>
      </ul>
    </section>
     {/*NEET Reservation Policy */}
    <section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        NEET  Reservation Policy
      </h2>

      <p className="text-gray-700 text-lg mb-6 text-center">
        The following percentage of seats are reserved for various categories as per Government norms:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Reservation (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Scheduled Castes (SC)</td>
              <td className="py-3 px-6">15%</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Scheduled Tribes (ST)</td>
              <td className="py-3 px-6">7.5%</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Other Backward Classes (OBC) - Non-Creamy Layer</td>
              <td className="py-3 px-6">27%</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Economically Weaker Section (EWS)</td>
              <td className="py-3 px-6">10%</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Persons with Disabilities (PwD)</td>
              <td className="py-3 px-6">5% (within each category)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    {/*NEET Exam pattern */}
    <section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
    NEET Exam Pattern 
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="py-3 px-6 text-left">Subject</th>
          <th className="py-3 px-6 text-left">Number of Questions</th>
          <th className="py-3 px-6 text-left">Marks per Question</th>
          <th className="py-3 px-6 text-left">Total Marks</th>
          <th className="py-3 px-6 text-left">Duration</th>
          <th className="py-3 px-6 text-left">Negative Marking</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Physics</td>
          <td className="py-3 px-6">45</td>
          <td className="py-3 px-6">4</td>
          <td className="py-3 px-6">180</td>
          <td className="py-3 px-6" rowSpan={4}>3 hours (180 minutes)</td>
          <td className="py-3 px-6" rowSpan={4}>-1 for each wrong answer</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Chemistry</td>
          <td className="py-3 px-6">45</td>
          <td className="py-3 px-6">4</td>
          <td className="py-3 px-6">180</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Biology (Botany + Zoology)</td>
          <td className="py-3 px-6">90</td>
          <td className="py-3 px-6">4</td>
          <td className="py-3 px-6">360</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50 font-semibold bg-gray-100">
          <td className="py-3 px-6">Total</td>
          <td className="py-3 px-6">180</td>
          <td className="py-3 px-6">-</td>
          <td className="py-3 px-6">720</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* All India 15% Reservation Policy */}
<section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
    All India 15% Reservation Policy
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="py-3 px-6 text-left">Category</th>
          <th className="py-3 px-6 text-left">Reservation (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Scheduled Caste (SC)</td>
          <td className="py-3 px-6">15%</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Scheduled Tribe (ST)</td>
          <td className="py-3 px-6">7.5%</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Other Backward Classes (OBC) - Non Creamy Layer</td>
          <td className="py-3 px-6">27%</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-6">Economically Weaker Section (EWS)</td>
          <td className="py-3 px-6">10%</td>
        </tr>
        <tr className="border-t border-gray-200 hover:bg-gray-50 font-semibold bg-gray-100">
          <td className="py-3 px-6">Persons with Disability (PwD)</td>
          <td className="py-3 px-6">5% (within each category)</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


 {/*NEET 2025 Reservation process */}
<section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
    NEET 2025 Reservation Process – Step by Step
  </h2>
  <ol className="list-decimal text-lg text-gray-600 leading-relaxed pl-6 space-y-4">
    <li>
      <strong>Candidate Registration:</strong> Visit the official NEET 2025 counseling portal (MCC for AIQ / State portal for state quota). Fill personal and category details correctly (General/EWS/OBC/SC/ST/PwD).
    </li>
    <li>
      <strong>Category Verification:</strong> Upload valid caste or category certificates (SC/ST/OBC-NCL/EWS/PwD). State quota requires domicile proof.
    </li>
    <li>
      <strong>Seat Matrix Publication:</strong> Counseling authorities publish seat distribution details for GEN, OBC-NCL, SC, ST, EWS, PwD quotas.
      <br />
      <span className="block mt-2">
        Example for 100 MBBS seats:
        <ul className="list-disc pl-6 mt-2">
          <li>SC – 15 seats</li>
          <li>ST – 7 seats</li>
          <li>OBC-NCL – 27 seats</li>
          <li>EWS – 10 seats</li>
          <li>General – Remaining</li>
        </ul>
      </span>
    </li>
    <li>
      <strong>Choice Filling:</strong> Fill preferred colleges/courses. System considers your category automatically based on the submitted valid certificate.
    </li>
    <li>
      <strong>Seat Allotment:</strong> Based on All India Rank, category rank, and seat availability:
      <ul className="list-disc pl-6 mt-2">
        <li>SC – Allotted under SC quota</li>
        <li>OBC-NCL – Allotted under OBC quota</li>
        <li>EWS/PwD – Separate quota considered</li>
        <li>GEN – Unreserved seats only</li>
      </ul>
    </li>
    <li>
      <strong>Seat Allotment Result:</strong> Allotment letter shows seat with category mention (e.g., "Allotted under SC Quota").
    </li>
    <li>
      <strong>Document Verification at College:</strong> Produce original certificates:
      <ul className="list-disc pl-6 mt-2">
        <li>Caste Certificate (SC/ST/OBC-NCL/EWS)</li>
        <li>PwD Certificate (if applicable)</li>
        <li>Domicile (for State Quota)</li>
        <li>Income Certificate (if applicable)</li>
      </ul>
    </li>
    <li>
      <strong>Final Admission Confirmation:</strong> Admission is confirmed only after document verification. Invalid documents may lead to seat cancellation.
    </li>
    <li>
  <strong>Gap Certificate (if applicable):</strong> Candidates with a gap period in their education must provide a valid Gap Certificate at the time of document verification to ensure eligibility and avoid admission cancellation.
</li>

  </ol>

  <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Reservation Percentage (AIQ – NEET 2025)</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 text-gray-700">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border">Category</th>
          <th className="py-2 px-4 border">Reservation %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border">SC</td>
          <td className="py-2 px-4 border">15%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">ST</td>
          <td className="py-2 px-4 border">7.5%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">OBC (NCL)</td>
          <td className="py-2 px-4 border">27%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">EWS</td>
          <td className="py-2 px-4 border">10%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">PwD (within each category)</td>
          <td className="py-2 px-4 border">5%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

    {/*Tp Carrier option section */}
      <section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold  text-start mb-8">
        Top Career Options After NEET UG 
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        While MBBS and BDS are the primary targets of most NEET aspirants, there are <strong>many other courses and careers</strong> you can explore with a NEET UG score. Here’s a breakdown:
      </p>

      <div className="space-y-8">
        {/* MBBS Section */}
        <div className="">
          <h3 className="text-2xl font-semibold ">1. MBBS (Bachelor of Medicine and Bachelor of Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years (including 1-year internship)</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong> General Physician, Surgeon, Postgraduate Studies (MD/MS), Research, Medical Officer, Government jobs</li>
            <li><strong>Future Scope:</strong> High demand across India and abroad, wide range of specializations available</li>
          </ul>
        </div>

        {/* BDS Section */}
        <div className="">
          <h3 className="text-2xl font-semibold ">2. BDS (Bachelor of Dental Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong> Dentist, Orthodontist, Dental Surgeon, Private Practice, MDS</li>
            <li><strong>Future Scope:</strong> Good scope in both clinical practice and academics</li>
          </ul>
        </div>

        {/*BAMS Section */}
         <div className="">
          <h3 className="text-2xl font-semibold ">3. BAMS (Bachelor of Ayurvedic Medicine and Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong>  Ayurvedic Doctor, Panchakarma Practitioner, Hospital Administration, PG in Ayurveda</li>
            <li><strong>Future Scope:</strong>  Growing interest in Ayurvedic medicine both in India and globally</li>
          </ul>
        </div>
        {/* BHMS Section */}
        <div className="">
          <h3 className="text-2xl font-semibold ">4. BHMS (Bachelor of Homeopathic Medicine and Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong>  Homeopathic Practitioner, Researcher, Lecturer, Consultant</li>
            <li><strong>Future Scope:</strong>Good opportunities in alternative medicine and wellness sectors</li>
          </ul>
        </div>
        {/* BUMS Section */}
        <div className="">
          <h3 className="text-2xl font-semibold ">5. BUMS (Bachelor of Unani Medicine and Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong>  Unani Doctor, Hospital Practitioner, Medical Officer</li>
            <li><strong>Future Scope:</strong> Expanding opportunities in alternative healing systems</li>
          </ul>
        </div>
          {/* BSMS Section */}
        <div className="">
          <h3 className="text-2xl font-semibold ">6. BSMS (Bachelor of Siddha Medicine and Surgery)</h3>
          <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
            <li><strong>Duration:</strong> 5.5 years</li>
            <li><strong>Eligibility:</strong> NEET UG qualified</li>
            <li><strong>Career Paths:</strong> Siddha Practitioner, Researcher, Wellness Expert</li>
            <li><strong>Future Scope:</strong> Regional popularity and growing recognition</li>
          </ul>
        </div>
        {/* BVSc (Bachelor of Veterinary Science) */}
<div className="">
  <h3 className="text-2xl font-semibold">7. BVSc (Bachelor of Veterinary Science)</h3>
  <ul className="lg:px-4 list-disc list-inside text-gray-700 mt-2 space-y-3">
    <li><strong>Duration:</strong> 5.5 years (including internship)</li>
    <li><strong>Eligibility:</strong> NEET UG qualified</li>
    <li><strong>Career Paths:</strong> Veterinary Doctor, Animal Surgeon, Veterinary Research Scientist, Livestock Development Officer</li>
    <li><strong>Future Scope:</strong> High demand in government departments, private clinics, animal husbandry, and research sectors in India and abroad</li>
  </ul>
</div>

      </div>
    </section>
    {/*Table of courses */}
     <section className="lg:px-20 my-16 p-6 ">
      <h2 className="text-3xl font-semibold text-start mb-8">
        Table of Courses After NEET UG 
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className=" text-black">
            <tr>
              <th className="py-3 px-4 text-left">Course Name</th>
              <th className="py-3 px-4 text-left">Duration</th>
              <th className="py-3 px-4 text-left">Core Field</th>
              <th className="py-3 px-4 text-left">Career Prospects</th>
              <th className="py-3 px-4 text-left">Eligibility</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              ["MBBS", "5.5 years", "Allopathic Medicine", "Doctor, Surgeon, Specialist", "NEET Qualified"],
              ["BDS", "5 years", "Dentistry", "Dentist, Orthodontist", "NEET Qualified"],
              ["BAMS", "5.5 years", "Ayurvedic Medicine", "Ayurvedic Doctor, Consultant", "NEET Qualified"],
              ["BHMS", "5.5 years", "Homeopathy", "Homeopathic Practitioner, Teacher", "NEET Qualified"],
              ["BUMS", "5.5 years", "Unani Medicine", "Unani Doctor, Researcher", "NEET Qualified"],
              ["BSMS", "5.5 years", "Siddha Medicine", "Siddha Doctor, Wellness Expert", "NEET Qualified"],
              ["BSc Nursing", "4 years", "Nursing & Care", "Nurse, Hospital Admin, Nurse Educator", "NEET (some institutes)"],
              ["BVSc & AH", "5.5 years", "Veterinary Science", "Veterinary Surgeon, Govt Jobs", "NEET Qualified"],
            ].map((row, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? '' : 'bg-white'} `}>
                {row.map((cell, index) => (
                  <td key={index} className="py-3 px-4 border border-gray-300">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
};

export default HeroSectionNeetA;
