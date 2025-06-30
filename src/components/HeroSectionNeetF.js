// "use client";

// export default function CoursesTableAfterNeetUg() {
//   const courses = [
//     {
//       name: "MBBS",
//       duration: "5.5 years",
//       coreField: "Allopathic Medicine",
//       careerProspects: "Doctor, Surgeon, Specialist",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BDS",
//       duration: "5 years",
//       coreField: "Dentistry",
//       careerProspects: "Dentist, Orthodontist",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BAMS",
//       duration: "5.5 years",
//       coreField: "Ayurvedic Medicine",
//       careerProspects: "Ayurvedic Doctor, Consultant",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BHMS",
//       duration: "5.5 years",
//       coreField: "Homeopathy",
//       careerProspects: "Homeopathic Practitioner, Teacher",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BUMS",
//       duration: "5.5 years",
//       coreField: "Unani Medicine",
//       careerProspects: "Unani Doctor, Researcher",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BSMS",
//       duration: "5.5 years",
//       coreField: "Siddha Medicine",
//       careerProspects: "Siddha Doctor, Wellness Expert",
//       eligibility: "NEET Qualified",
//     },
//     {
//       name: "BSc Nursing",
//       duration: "4 years",
//       coreField: "Nursing & Care",
//       careerProspects: "Nurse, Hospital Admin, Nurse Educator",
//       eligibility: "NEET (some institutes)",
//     },
//     {
//       name: "BVSc & AH",
//       duration: "5.5 years",
//       coreField: "Veterinary Science",
//       careerProspects: "Veterinary Surgeon, Govt Jobs",
//       eligibility: "NEET Qualified",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-4 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Table of Courses After NEET UG 2025
//         </h2>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
//                 <th className="py-3 px-6 border-b">Course Name</th>
//                 <th className="py-3 px-6 border-b">Duration</th>
//                 <th className="py-3 px-6 border-b">Core Field</th>
//                 <th className="py-3 px-6 border-b">Career Prospects</th>
//                 <th className="py-3 px-6 border-b">Eligibility</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {courses.map((course, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="py-4 px-6 border-b">{course.name}</td>
//                   <td className="py-4 px-6 border-b">{course.duration}</td>
//                   <td className="py-4 px-6 border-b">{course.coreField}</td>
//                   <td className="py-4 px-6 border-b">
//                     {course.careerProspects}
//                   </td>
//                   <td className="py-4 px-6 border-b">{course.eligibility}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }
