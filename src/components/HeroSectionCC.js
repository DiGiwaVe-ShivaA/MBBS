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
    name: "Satisfied Student",
    role: "AIIMS DELHI",
    image: "/images/med5.jpg",
    quote:
      "Counseling was tough, but NSET made it simple and smooth. Their guidance helped me navigate the entire process with confidence. I’m truly grateful for their support!",
  },
  {
    name: "Krishna Thapa",
    role: "KINGSTON COLLEGE",
    image: "/images/med5.webp",
    quote:
      "While many gave empty promises, NSET stood out by providing clear, honest guidance. They helped me stay focused and choose the right direction.",
  },
  {
    name: "Rohan Sharma",
    role: "Institute of Medical Sciences",
    image: "/images/med5.webp",
    quote:
      "Placing our trust in NSET was the best decision—we secured the seat we had always dreamed of. Truly thankful for their dedication and support.— Happy Parent & Student",
  },
  {
    name: "Sophia Ray",
    role: "R.D.J.M. Medical College & Hospital",
    image: "/images/med5.webp",
    quote:
      "NSET guided us through every stage—from NEET results to final admission. Their step-by-step support made all the difference.",
  },
  {
    name: "Joseph",
    role: "Lord Buddha Medical College",
    image: "/images/med5.webp",
    quote:
      "Choosing NSET was a game-changer. They kept every promise and cleared every doubt—we couldn’t have asked for a better partner in our medical admission journey",
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
