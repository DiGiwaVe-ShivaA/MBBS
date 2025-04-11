// "use client";

// import {
//   FaUser,
//   FaStar,
//   FaUsers,
//   FaInfinity,
//   FaCreditCard,
//   FaClock,
//   FaLanguage,
//   FaVirusSlash,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: FaUser,
//     title: "Anyone",
//     subtitle: "Can Join Us (Appearing/Non Appearing)",
//   },
//   { icon: FaStar, title: "4.9+", subtitle: "Our Rating" },
//   { icon: FaUsers, title: "5000+", subtitle: "Students" },
//   { icon: FaInfinity, title: "100%", subtitle: "Assistance" },
//   { icon: FaCreditCard, title: "Once a Contact", subtitle: "Always Prime" },
//   { icon: FaClock, title: "24Hrs+", subtitle: "Working Team" },
//   { icon: FaLanguage, title: "Tough Process", subtitle: "Made Simple" },
//   {
//     icon: FaVirusSlash,
//     title: "Trust US",
//     subtitle: "Will Resolve all Errors",
//   },
// ];

// export default function CourseFeatures() {
//   return (
//     <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700">
//           Our Commitment to You
//         </h2>
//         <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">
//           Here's how we go the extra mile to make your journey smoother and more
//           supported.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {features.map((feature, idx) => {
//           const Icon = feature.icon;

//           return (
//             <motion.div
//               key={idx}
//               className="relative bg-white/60 backdrop-blur-xl border border-blue-100 p-6 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               {/* Number Badge */}
//               <div className="absolute top-3 right-3 text-xs bg-blue-500 text-white px-2 py-1 rounded-full shadow">
//                 #{idx + 1}
//               </div>

//               {/* Flex container for icon + text */}
//               <div className="flex items-center gap-4">
//                 {/* Animated Icon */}
//                 <motion.div
//                   className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full shadow-md"
//                   whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Icon className="text-blue-600 text-xl" />
//                 </motion.div>

//                 {/* Text Block */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {feature.subtitle}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
