"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import ApplicationFormModal2 from "./ApplicationFormModal2";

const initialFormState = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  course: "",
  neetAttempt: false,
  dropper: "",
  coaching: "",
};

export default function HeroSection() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    colleges: false,
    courses: false,
    ug: false,
    pg: false,
    paramedical: false,
    diploma: false,
  });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setError("");
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const mobileRegex = /^[0-9]{10}$/;

      if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
        setError("Please enter a valid 10-digit mobile number");
        return;
      }
      if (
        !formData.name ||
        !formData.city ||
        !formData.state ||
        !formData.course
      ) {
        setError("Please fill in all required fields");
        return;
      }

      const message = `*New Application Form:*\nName: ${
        formData.name
      }\nMobile: ${formData.mobile}\nCity: ${formData.city}\nState: ${
        formData.state
      }\nCourse: ${formData.course}\nNEET Attempt: ${
        formData.neetAttempt ? "Yes" : "No"
      }\nDropper: ${formData.dropper}\nCoaching Attended: ${formData.coaching}`;
      const url = `https://wa.me/918109380429?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
      resetForm();
      setShowForm(false);
    },
    [formData, resetForm]
  );

  const images = [
    "/images/heroimga.jpg",
    "/images/heroimgaa.jpg",
    "/images/heroimgcnewb.jpg",
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
                quality={85}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-10 lg:px-20 text-left z-10">
        <div className="bg-black/40 p-6 sm:p-8 md:p-10 rounded-2xl max-w-lg backdrop-blur-sm">
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-4 drop-shadow-md">
            From Ambition to Admission — Empowering Students To Reach Their
            Dream Colleges
          </p>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-xl">
            Experts <br /> Colleges <br /> Guidance <br /> Counseling <br />{" "}
            Services
          </h1>
          <button
            className="bg-white text-black rounded-full px-6 py-2 shadow-md hover:shadow-lg transition duration-300 w-fit mx-auto"
            onClick={() => setShowForm(true)}
            aria-label="Open Application Form"
          >
            Get Call
          </button>
        </div>
        {showForm && (
          <ApplicationFormModal2
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            closeModal={() => setShowForm(false)}
            error={error}
          />
        )}
      </div>
    </section>
  );
}
