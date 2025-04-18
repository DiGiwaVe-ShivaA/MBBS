// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";

// // Flag data
// const flags = [
//   { name: "America", img: "/images/america.webp" },
//   { name: "Canada", img: "/images/cana.webp" },
//   { name: "Georgia", img: "/images/Georgia.webp" },
//   { name: "Germany", img: "/images/germn.jpg" },
//   { name: "Italy", img: "/images/italy.png" },
//   { name: "Kazakhastan", img: "/images/kazakhastan.jpeg" },
//   { name: "Kyrgyzstan", img: "/images/Kyrgyzstan.jpg" },
//   { name: "Nepal", img: "/images/nepal.png" },
//   { name: "Philippines", img: "/images/Philippines.png" },
//   { name: "Russia", img: "/images/russia.webp" },
//   { name: "Uzbekistan", img: "/images/Uzbekistan.webp" },
// ];

// export default function FlagCarouselSection() {
//   return (
//     <section className="px-4 py-12">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
//         {/* Flag Carousels */}
//         <div className="w-full md:w-1/2 space-y-8">
//           {/* Carousel 1 - Left to Right */}
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 0, disableOnInteraction: false }}
//             loop={true}
//             speed={3000}
//             spaceBetween={20}
//             slidesPerView={3}
//             breakpoints={{
//               0: { slidesPerView: 2 },
//               640: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//           >
//             {flags.map((flag, index) => (
//               <SwiperSlide key={index}>
//                 <div className="border rounded-xl p-4 flex justify-center items-center shadow-md bg-white hover:scale-105 transition-transform">
//                   <Image
//                     src={flag.img}
//                     alt={flag.name}
//                     width={100}
//                     height={60}
//                     className="object-contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Carousel 2 - Right to Left (using RTL trick) */}
//           <div dir="rtl">
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{ delay: 0, disableOnInteraction: false }}
//               loop={true}
//               speed={3000}
//               spaceBetween={20}
//               slidesPerView={3}
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 3 },
//                 1024: { slidesPerView: 4 },
//               }}
//             >
//               {flags.map((flag, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="border rounded-xl p-4 flex justify-center items-center shadow-md bg-white hover:scale-105 transition-transform">
//                     <Image
//                       src={flag.img}
//                       alt={flag.name}
//                       width={100}
//                       height={60}
//                       className="object-contain"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 ">
//           <h2 className="text-2xl md:text-3xl  font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-4 py-2 inline-block rounded-3xl shadow">
//             Study MBBS Abroad: Best Countries Offering Quality Education at Low
//             Cost
//           </h2>
//           {/* Bottom Text */}
//           <div className="text-center space-y-4">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
//               Discover Your Dream Career with Expert Guidance
//             </h2>
//             <p className="text-base sm:text-lg text-gray-700 font-medium">
//               Explore your passion. Shape your future. Step into success with
//               confidence.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
