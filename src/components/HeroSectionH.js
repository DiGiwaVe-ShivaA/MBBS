// /*
// ✅ Tech Stack:
// - React 19
// - Next.js App Router (Latest)
// - Tailwind CSS v3.4+
// - Framer Motion
// - Lucide Icons
// */

// "use client";

// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Users,
//   BookOpen,
//   HeartHandshake,
//   PhoneCall,
// } from "lucide-react";
// import { useEffect } from "react";

// const usps = [
//   {
//     title: "Verified College Admissions",
//     icon: <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
//     description:
//       "Gain access to trusted institutions with proven admission success.",
//   },
//   {
//     title: "Expert Faculty Panel",
//     icon: <Users className="w-8 h-8 text-green-600 dark:text-green-400" />,
//     description:
//       "Learn from seasoned professionals with years of industry experience.",
//   },
//   {
//     title: "Quality Study Material",
//     icon: <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
//     description:
//       "Access curated materials designed for efficient learning and success.",
//   },
//   {
//     title: "Personal Counseling",
//     icon: (
//       <HeartHandshake className="w-8 h-8 text-pink-600 dark:text-pink-400" />
//     ),
//     description:
//       "Get tailored guidance to map your academic journey with confidence.",
//   },
//   {
//     title: "WhatsApp & Call Support",
//     icon: (
//       <PhoneCall className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
//     ),
//     description: "Reach out anytime—real support from real people who care.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function WhyChooseUsSection() {
//   useEffect(() => {
//     document.documentElement.classList.add("dark");
//   }, []);

//   return (
//     <section
//       aria-labelledby="why-choose-us"
//       className="relative px-6 py-20 bg-white dark:bg-gray-950 overflow-hidden"
//     >
//       {/* Optional Background Blob */}
//       <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-purple-300 dark:from-blue-800 dark:to-purple-900 rounded-full filter blur-3xl opacity-30 z-0 animate-pulse" />

//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <h2
//           id="why-choose-us"
//           className="text-4xl font-bold text-gray-800 dark:text-white mb-10"
//         >
//           Why Choose Us?
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
//           {usps.map((usp, index) => (
//             <motion.div
//               key={usp.title}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               className="p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 bg-white/30 dark:bg-white/10 text-left transition-all hover:scale-[1.03] flex flex-col gap-4 items-start"
//             >
//               {usp.icon}
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 {usp.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm">
//                 {usp.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
