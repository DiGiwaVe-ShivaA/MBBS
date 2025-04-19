"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import ApplicationFormModal from "./ApplicationFormModal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const initialFormState = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  course: "",
  neetAttempt: "",
  dropper: "",
  coaching: "",
};

const imageSources = [
  "/images/med1.jpg",
  "/images/med2.jpg",
  "/images/med3.jpg",
  "/images/med4.jpg",
  "/images/med5.webp",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    colleges: false,
    courses: false,
  });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

      const message = `*New Application Form:*\nName: ${formData.name}\nMobile: ${formData.mobile}\nCity: ${formData.city}\nState: ${formData.state}\nCourse: ${formData.course}\nNEET Attempt: ${formData.neetAttempt}\nDropper: ${formData.dropper}\nCoaching Attended: ${formData.coaching}`;
      const url = `https://wa.me/9557911144?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");

      resetForm();
      setShowForm(false);
    },
    [formData, resetForm]
  );

  const dropdownAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  const mobileDropdownAnimation = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <section className="w-full bg-white text-black relative overflow-hidden">
      {/* Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col items-center text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md text-black">
            <span className="inline-flex items-center justify-center gap-2 text-blue-500">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Gear Up Future Doctors!
            </span>
            <br />
            <span className="text-black">
              NEET-UG & PG 2025-26 Premium Counselling is LIVE!
            </span>
          </h1>
        </motion.div>
        <button
          className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300 text-sm"
          onClick={() => setShowForm(true)}
          aria-label="Open Application Form"
        >
          Get Councelling NOW !
          <span
            className="text-lg leading-none ml-2"
            role="img"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      {/* Full-Width Image Grid with Overlay */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3 md:px-6 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {imageSources.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] group cursor-pointer overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={src}
              alt={`Medical Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* SLIDE-UP OVERLAY */}
            <div className="absolute inset-0 bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Click to know more
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && <ApplicationFormModal onClose={closeModal} />}
      {showForm && (
        <ApplicationFormModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setShowForm(false)}
          error={error}
        />
      )}
    </section>
  );
}
