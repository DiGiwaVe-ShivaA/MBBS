"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lenny Dotson",
    role: "Hiker",
    image: "/deal9.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Emma Collins",
    role: "Backpacker",
    image: "/deal9.jpg",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Marcus Lee",
    role: "Trail Explorer",
    image: "/deal9.jpg",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-4 md:py-8 lg:py-12 text-gray-800 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider relative inline-block">
          {/* <p className="text-3xl text-[#00E5FF] font-semibold uppercase tracking-wide">
            Testimonials
          </p> */}
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white p-3 rounded-3xl inline-block shadow-md">
            Testimonials
          </h2>
          <br></br>
          <span className="text-black relative z-10">
            What They Say About NSET
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          See what our students are saying about their journey with us.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="max-w-4xl mx-auto bg-[#F3F4F6] rounded-xl shadow-md p-6 md:p-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-[#8A05FF] text-white p-2 rounded-full shadow-md">
                  <FaQuoteLeft />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="italic text-lg text-gray-700 mb-4">
                  {testimonial.quote}
                </p>

                {/* Stars */}
                <div className="flex justify-center md:justify-start text-[#00E5FF] mb-2">
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
