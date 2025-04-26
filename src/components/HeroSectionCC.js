"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  // (same testimonial array)
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-4 md:py-8 lg:py-12 text-gray-800 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white p-3 rounded-3xl inline-block shadow-md">
          Testimonials
        </h2>
        <span className="text-black relative z-10 block text-lg md:text-xl font-semibold mt-2">
          What They Say About NSET
        </span>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          See what our students are saying about their journey with us.
        </p>
      </div>

      {/* Swiper Grid */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 h-full">
              <div className="flex flex-col items-center text-center gap-4 h-full">
                {/* Avatar */}
                <div className="relative w-24 h-24">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                    priority={index === 0} // Only first image priority
                    sizes="96px" // Locks image sizing early
                  />
                </div>

                {/* Quote */}
                <p className="italic text-gray-700 text-base flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Stars */}
                <div className="flex text-[#00E5FF]">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>

                {/* Author */}
                <div>
                  <h4 className="font-semibold text-lg text-[#8A05FF]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
