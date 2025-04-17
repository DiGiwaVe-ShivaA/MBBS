"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const images = [
    "/images/heroimga.jpg",
    "/images/heroimg.jpg", // <- Your uploaded image (renamed)
    "/images/heroimgc.jpg",
  ];

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
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
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20 text-left z-10">
        <div className="bg-black/30 p-6 sm:p-8 md:p-10 rounded-xl max-w-xl">
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3 drop-shadow-md">
            From Ambition to Admission- Empowering Students To Reach Their Dream
            Colleges
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-lg">
            <span className="text-white">
              Experts <br /> Colleges
            </span>
            <br />
            <span className="text-white">Counseling</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <button className="bg-white text-black text-sm sm:text-base font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
