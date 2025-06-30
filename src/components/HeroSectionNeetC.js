// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Phone } from "lucide-react";

// export default function AdmissionProcessPage() {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen px-6 md:px-20 py-16 text-gray-800">
//       {/* Header */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12"
//       >
//         Admission Process
//       </motion.h1>

//       {/* Step-by-Step Timeline */}
//       <div className="relative flex flex-col space-y-12 max-w-6xl mx-auto">
//         {/* Vertical center line */}
//         <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-200"></div>

//         {[
//           {
//             title: "State-wise Counseling Updates",
//             description:
//               "Each state has its own counseling process. It's important to stay updated by visiting your respective state's official counseling website regularly.",
//           },
//           {
//             title: "All India Quota (AIQ) Counseling",
//             description:
//               "If you're applying for seats under the All India Quota, register on the official MCC website and follow the step-by-step process provided there.",
//           },
//           {
//             title: "Mop-up Round Counseling",
//             description:
//               "If you didn’t secure a seat in the previous rounds, you can participate in the mop-up round to apply for the remaining vacant seats.",
//           },
//           {
//             title: "Private College Admissions",
//             description:
//               "Seats are also available in private medical colleges. However, the fees are generally higher compared to government colleges.",
//           },
//           {
//             title: "Management Quota Seats",
//             description:
//               "Some private colleges offer admissions through the management quota. Depending on your budget, this can be a viable alternative.",
//           },
//         ].map((item, idx) => (
//           <Step
//             key={idx}
//             number={idx + 1}
//             title={item.title}
//             description={item.description}
//           />
//         ))}
//       </div>

//       {/* Contact Section */}
//       <div className="bg-blue-100 mt-20 p-6 md:p-10 rounded-2xl shadow-xl text-center max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//           For Personalized Help & Updates
//         </h2>
//         <p className="mb-4">Feel free to contact our N.S.E.T Team, Bhopal:</p>
//         <div className="text-lg font-medium flex flex-col items-center gap-2">
//           <span className="flex items-center gap-2">
//             <Phone className="text-blue-600" />
//             8109380429 / 8889060385
//           </span>
//           <p className="text-sm mt-2 text-gray-600">
//             Address: Ayodhya Bypass, Nehru Nagar, Bhopal, MP
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step({ number, title, description }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: number * 0.1 }}
//       className="relative flex items-start gap-6"
//     >
//       {/* Number Circle */}
//       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold z-10">
//         {number}
//       </div>

//       {/* Step Content */}
//       <div className="bg-white p-6 rounded-xl shadow-md w-full border border-blue-100">
//         <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
//           {title}
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// }
import React from 'react'

const HeroSectionNeetC = () => {
  return (
    <div>
      
    {/*Total medical seats in india */}
    <section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Total Medical Seats in India (as of April 2025)
      </h2>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Overview of MBBS seats available across India for NEET UG .
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Seats</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Total MBBS seats (Govt + Private)</td>
              <td className="py-3 px-6 font-semibold">118,190</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Government MBBS seats</td>
              <td className="py-3 px-6">55,688</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6">Private & Deemed MBBS seats</td>
              <td className="py-3 px-6">62,502</td>
            </tr>
            <tr className="border-t border-gray-200 hover:bg-gray-50 font-semibold bg-gray-100">
              <td className="py-3 px-6">Colleges offering MBBS</td>
              <td className="py-3 px-6">780</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-gray-600 text-sm italic text-center">
        *Data based on NMC/Ministry updates as of April .
      </p>
    </section>
    </div>
  )
}

export default HeroSectionNeetC