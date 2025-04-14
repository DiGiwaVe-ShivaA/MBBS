// "use client";

// import { motion } from "framer-motion";

// export default function NeetVerticalFlow() {
//   return (
//     <div className="flex flex-col gap-12 p-6 max-w-5xl mx-auto">
//       {/* 1. Introduction to NEET */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <h2 className="text-2xl font-bold mb-4">
//           📘 1. Introduction to NEET – Gateway to Medical Dreams
//         </h2>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">🔍 What is NEET?</h3>
//           <p className="text-sm text-gray-700">
//             NEET (National Eligibility cum Entrance Test) is a national-level
//             medical entrance exam conducted by the National Testing Agency
//             (NTA). It is the sole entrance exam for students in India seeking
//             admission to undergraduate medical programs like MBBS, BDS, AYUSH
//             (Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy), and
//             Veterinary Sciences (BVSc & AH).
//           </p>
//         </div>

//         <div className="overflow-auto mb-4">
//           <h3 className="text-xl font-semibold mb-2">
//             🗕 NEET 2025 At A Glance
//           </h3>
//           <table className="table-auto text-sm w-full border border-gray-300">
//             <tbody>
//               {[
//                 ["Exam Name", "NEET UG"],
//                 ["Conducting Body", "National Testing Agency (NTA)"],
//                 ["Frequency", "Once a year"],
//                 ["Mode of Exam", "Offline (Pen and Paper-Based)"],
//                 ["Duration", "3 hours 20 minutes"],
//                 ["Subjects Covered", "Physics, Chemistry, Biology"],
//                 ["Eligibility", "10+2 with PCB (Minimum 50% for Gen)"],
//                 ["Age Limit", "17+ years"],
//                 ["Number of Attempts", "No Limit"],
//                 ["Total Questions", "200 (180 to be attempted)"],
//                 ["Marks", "720"],
//               ].map(([label, value], i) => (
//                 <tr key={i} className="odd:bg-gray-50 border-t">
//                   <td className="p-2 font-medium text-gray-700">{label}</td>
//                   <td className="p-2 text-gray-600">{value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">
//             🧠 Why is NEET Important?
//           </h3>
//           <ul className="list-disc list-inside text-sm text-gray-700">
//             <li>
//               It is the only exam for admissions to all government and private
//               medical colleges in India.
//             </li>
//             <li>
//               Determines eligibility for AIIMS, JIPMER, AFMC, and other top
//               institutes.
//             </li>
//             <li>Essential for central quotas and scholarships.</li>
//             <li>Required for studying medicine abroad (FMGE eligibility).</li>
//           </ul>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">🛍 NEET Exam Structure</h3>
//           <ul className="list-disc list-inside text-sm text-gray-700">
//             <li>Physics: 50 Questions</li>
//             <li>Chemistry: 50 Questions</li>
//             <li>Biology: 100 Questions (Botany and Zoology)</li>
//           </ul>
//         </div>

//         <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
//           <h3 className="text-sm font-bold mb-2">
//             📈 NEET Question Distribution (Infographic)
//           </h3>
//           <pre className="text-xs overflow-auto">
//             {`graph TD
//   A[NEET Question Paper]
//   A --> B[Physics - 50 Qs]
//   A --> C[Chemistry - 50 Qs]
//   A --> D[Biology - 100 Qs]
//   D --> E[Botany - 50 Qs]
//   D --> F[Zoology - 50 Qs]`}
//           </pre>
//         </div>

//         <blockquote className="italic text-sm text-center border-l-4 border-blue-400 pl-4 py-2 mb-4">
//           "Success is no accident. It is hard work, perseverance, learning,
//           studying, sacrifice, and most of all, love of what you are doing." —{" "}
//           <strong>Pelé</strong>
//         </blockquote>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">
//             🎯 Career Paths After NEET
//           </h3>
//           <table className="table-auto text-sm w-full border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 text-left">Career Option</th>
//                 <th className="p-2 text-left">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["MBBS", "5.5-year undergraduate degree in medicine"],
//                 ["BDS", "5-year dental surgery program"],
//                 [
//                   "AYUSH",
//                   "Alternate medical streams like Ayurveda, Unani, Siddha, etc.",
//                 ],
//                 [
//                   "Veterinary (BVSc)",
//                   "Study of animal science and veterinary medicine",
//                 ],
//                 ["Biotechnology/Pharma", "Research & pharma sectors"],
//               ].map(([option, desc], i) => (
//                 <tr key={i} className="odd:bg-gray-50 border-t">
//                   <td className="p-2 font-medium text-gray-700">{option}</td>
//                   <td className="p-2 text-gray-600">{desc}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg shadow-sm mb-4">
//           <h3 className="text-sm font-bold mb-2">
//             📊 NEET Journey Map (Infographic)
//           </h3>
//           <pre className="text-xs overflow-auto">
//             {`flowchart LR
//   Start[10th Grade: Set Your Goal]
//   Start --> A[11th Grade: Start Foundation Prep]
//   A --> B[12th Grade: Full Syllabus Practice]
//   B --> C[Enroll in Coaching/Online Prep]
//   C --> D[Practice Previous Year Papers]
//   D --> E[Attempt Mock Tests & Analyze]
//   E --> F[NEET Exam Day]
//   F --> G[Results & Counseling]
//   G --> H[College Admission]`}
//           </pre>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">
//             🎓 Top Medical Colleges Accepting NEET Scores
//           </h3>
//           <table className="table-auto text-sm w-full border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 text-left">Institute Name</th>
//                 <th className="p-2 text-left">Location</th>
//                 <th className="p-2 text-left">Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["AIIMS Delhi", "New Delhi", "Government"],
//                 ["Maulana Azad Medical College", "Delhi", "Government"],
//                 ["CMC Vellore", "Tamil Nadu", "Private"],
//                 ["AFMC", "Pune", "Armed Forces"],
//                 ["JIPMER", "Puducherry", "Government"],
//               ].map(([name, location, type], i) => (
//                 <tr key={i} className="odd:bg-gray-50 border-t">
//                   <td className="p-2 font-medium text-gray-700">{name}</td>
//                   <td className="p-2 text-gray-600">{location}</td>
//                   <td className="p-2 text-gray-600">{type}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="text-sm text-gray-700">
//           <h3 className="text-lg font-bold mb-2">📃 Chapter Summary</h3>
//           <ul className="list-disc list-inside">
//             <li>
//               NEET is the central gateway to all medical UG courses in India.
//             </li>
//             <li>Requires 10+2 in PCB subjects with qualifying marks.</li>
//             <li>Covers Physics, Chemistry, and Biology.</li>
//             <li>Opens paths to MBBS, BDS, AYUSH, and more.</li>
//             <li>Understanding NEET early helps plan better.</li>
//           </ul>
//         </div>
//       </motion.section>
//     </div>
//   );
// }
