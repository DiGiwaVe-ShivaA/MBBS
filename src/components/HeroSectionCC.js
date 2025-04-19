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
    image: "/images/med5.webp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Emma Collins",
    role: "Backpacker",
    image: "/images/med5.webp",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Marcus Lee",
    role: "Trail Explorer",
    image: "/images/med5.webp",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    name: "Sophia Ray",
    role: "Adventurer",
    image: "/images/med5.webp",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    name: "Tommy Clark",
    role: "Mountaineer",
    image: "/images/med5.webp",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-4 md:py-8 lg:py-12 text-gray-800 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white p-3 rounded-3xl inline-block shadow-md">
          Testimonials
        </h2>
        <span className="text-black relative z-10 block text-xl font-semibold mt-2">
          What They Say About NSET
        </span>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          See what our students are saying about their journey with us.
        </p>
      </div>

      {/* Swiper Grid */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000 }}
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
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 h-full">
              <div className="flex flex-col items-center text-center gap-4 h-full">
                {/* Avatar */}
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  {/* <div className="absolute -top-2 -right-2 bg-[#8A05FF] text-white p-2 rounded-full shadow-md">
                    <FaQuoteLeft />
                  </div> */}
                </div>

                {/* Quote */}
                <p className="italic text-base text-gray-700 flex-1">
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
