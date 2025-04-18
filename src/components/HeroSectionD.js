// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Image from "next/image";

// const states = [
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

// export default function StatesSlider() {
//   return (
//     <section className="bg-[#f9f9ff] py-12 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//           Expert Study Abroad Consultancy Services Across All States In India
//         </h2>
//         <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
//           Get expert study abroad consultancy services across all states in
//           India, guiding students to top global universities with personalized
//           support and hassle-free processes.
//         </p>
//       </div>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 2500, // 2.5 seconds delay between slides
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//           },
//           640: {
//             slidesPerView: 3,
//           },
//           768: {
//             slidesPerView: 4,
//           },
//           1024: {
//             slidesPerView: 6,
//           },
//         }}
//       >
//         {states.map((state, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white rounded-xl border shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105">
//               <div className="w-24 h-24 relative mb-2">
//                 <Image
//                   src={state.img}
//                   alt={state.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <p className="text-center text-sm font-medium text-gray-700">
//                 {state.name}
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
