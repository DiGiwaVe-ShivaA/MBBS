"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const images = [
    "/images/heroimga.jpg",
    "/images/heroimgaa.jpg",
    "/images/heroimgcnew.jpg",
  ];

  return (
    <section className="relative w-full h-[400px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover object-center"
                quality={85} // Slight compression improves LCP
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-10 lg:px-20 text-left z-10">
        <div className="bg-black/40 p-6 sm:p-8 md:p-10 rounded-2xl max-w-lg backdrop-blur-sm">
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-4 drop-shadow-md">
            From Ambition to Admission — Empowering Students To Reach Their
            Dream Colleges
          </p>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-xl">
            Experts <br />
            Colleges <br />
            Guidance <br />
            Counseling <br />
            Services
          </h1>
          <button className="bg-white text-black text-sm sm:text-base font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40">
            Get Call
          </button>
        </div>
      </div>
    </section>
  );
}
