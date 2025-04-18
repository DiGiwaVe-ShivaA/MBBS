"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

// Flag data
const flags = [
  { name: "America", img: "/images/america.webp" },
  { name: "Canada", img: "/images/cana.webp" },
  { name: "Georgia", img: "/images/Georgia.webp" },
  { name: "Germany", img: "/images/germn.jpg" },
  { name: "Italy", img: "/images/italy.png" },
  { name: "Kazakhastan", img: "/images/kazakhastan.jpeg" },
  { name: "Kyrgyzstan", img: "/images/Kyrgyzstan.jpg" },
  { name: "Nepal", img: "/images/nepal.png" },
  { name: "Philippines", img: "/images/Philippines.png" },
  { name: "Russia", img: "/images/russia.webp" },
  { name: "Uzbekistan", img: "/images/Uzbekistan.webp" },
];

export default function FlagCarouselSection() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Flag Carousels */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Carousel 1 - Left to Right */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            speed={3000}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {flags.map((flag, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-xl p-4 flex justify-center items-center shadow-md bg-white hover:scale-105 transition-transform">
                  <Image
                    src={flag.img}
                    alt={flag.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Carousel 2 - Right to Left (using RTL trick) */}
          <div dir="rtl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              loop={true}
              speed={3000}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {flags.map((flag, index) => (
                <SwiperSlide key={index}>
                  <div className="border rounded-xl p-4 flex justify-center items-center shadow-md bg-white hover:scale-105 transition-transform">
                    <Image
                      src={flag.img}
                      alt={flag.name}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-4 py-2 inline-block rounded-md shadow">
            Study MBBS Abroad: Best Countries Offering Quality Education at Low
            Cost
          </h2>
          <ul className="mt-6 text-gray-700 list-decimal list-inside space-y-2 text-base md:text-lg">
            <li>
              NEET 2025–26 is expected to be of moderate to tough difficulty.
            </li>
            <li>
              Biology remains the highest scoring subject with mostly
              NCERT-based questions.
            </li>
            <li>
              Physical Chemistry requires strong command over formulas and
              numericals.
            </li>
            <li>The number of candidates is increasing every year.</li>
            <li>
              This increase leads to higher cut-offs and more competition.
            </li>
            <li>
              Regular mock test practice is essential for accuracy and speed.
            </li>
          </ul>
          <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition-all flex items-center gap-2">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
