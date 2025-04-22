// "use client";
// import { motion } from "framer-motion";
// import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
// import { MdOutlineVerified, MdSchool } from "react-icons/md";

// export default function NeetInfoPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8fcff] py-14 px-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
//             📘 What is NEET 2025?
//           </h1>
//           <p className="mt-4 text-lg text-gray-600">
//             NEET – The Gateway to Your Medical Career
//           </p>
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
//         >
//           <div className="text-gray-700 text-lg leading-relaxed space-y-4">
//             <p>
//               <FaStethoscope className="inline-block text-indigo-600 mr-2 text-xl" />
//               <span className="font-semibold">
//                 NEET (National Eligibility cum Entrance Test)
//               </span>{" "}
//               is a highly competitive national-level entrance exam conducted by
//               the{" "}
//               <span className="font-semibold text-blue-700">
//                 National Testing Agency (NTA)
//               </span>
//               . It is the single gateway for admission into various
//               undergraduate courses like MBBS, BDS, and AYUSH (BAMS, BHMS, BUMS,
//               BSMS), as well as veterinary sciences (BVSc & AH).
//             </p>
//             <p>
//               NEET is accepted by all recognized institutions including those
//               governed by the{" "}
//               <span className="text-blue-700 font-semibold">
//                 Medical Council of India (MCI)
//               </span>{" "}
//               and{" "}
//               <span className="text-blue-700 font-semibold">
//                 Dental Council of India (DCI)
//               </span>
//               .
//             </p>
//           </div>

//           <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-inner">
//             <h2 className="text-xl font-bold text-blue-800 mb-3">
//               🎯 Purpose of the NEET Exam
//             </h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2">
//               <li>
//                 Standardizes the admission process across India with a unified
//                 exam.
//               </li>
//               <li>
//                 Ensures transparency, fairness, and a merit-based selection
//                 system.
//               </li>
//               <li>
//                 Reduces stress by eliminating the need for multiple entrance
//                 exams.
//               </li>
//               <li>Prevents regional/institutional biases in admissions.</li>
//               <li>
//                 Includes AYUSH and Veterinary courses, expanding medical
//                 opportunities.
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               💡 Why is NEET Important for 10th & 12th Aspirants?
//             </h3>
//             <p className="text-gray-700">
//               If you're dreaming of becoming a{" "}
//               <span className="font-medium text-green-700">
//                 doctor, dentist, or healer
//               </span>
//               , then NEET is your first milestone. For Class 10th students, it's
//               the perfect time to plan your roadmap, choose PCB subjects, and
//               focus on concepts. For 12th graders, it’s time to revise smartly
//               and master the NEET pattern.
//             </p>
//           </div>
//         </motion.div>

//         {/* CTA Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-lg text-center"
//         >
//           <MdOutlineVerified className="text-4xl mx-auto mb-4" />
//           <h3 className="text-2xl md:text-3xl font-bold mb-2">
//             Start Your NEET Journey with Clarity
//           </h3>
//           <p className="mb-6 text-lg">
//             Build your foundation early and follow a strategic plan to crack
//             NEET with confidence.
//           </p>
//           <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
//             📞 Book a FREE NEET Counseling Call
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
