"use client";
import React, { useState, useCallback } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ApplicationFormModal from "./ApplicationFormModal";

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

export default function NavBar() {
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
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:block">
          <Image src="/lago.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Mobile Header */}
        <div className="flex w-full justify-between items-center lg:hidden flex-row-reverse">
          <button
            className="text-black"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link href="/">
            <Image src="/lago.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-black font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>

          {/* Colleges Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("colleges")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center">
              Explore Colleges <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <AnimatePresence>
              {openDropdown === "colleges" && (
                <motion.div
                  {...dropdownAnimation}
                  className="absolute top-full mt-2 w-48 bg-white border rounded shadow-md py-2"
                >
                  <Link
                    href="/colleges/india"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    India
                  </Link>
                  <Link
                    href="/colleges/abroad"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Abroad
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("courses")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center">
              Courses <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <AnimatePresence>
              {openDropdown === "courses" && (
                <motion.div
                  {...dropdownAnimation}
                  className="absolute top-full mt-2 w-48 bg-white border rounded shadow-md py-2"
                >
                  <Link
                    href="/courses/ug"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    UG
                  </Link>
                  <Link
                    href="/courses/pg"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    PG
                  </Link>
                  <Link
                    href="/courses/paramedical"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Paramedical
                  </Link>
                  <Link
                    href="/courses/diploma"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Diploma
                  </Link>
                  <Link
                    href="/courses/pg"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Others
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <Link href="/neetpredicter">NEET Predictor</Link> */}
          <Link href="/NEET2025">NEET 2025</Link>
          <Link href="/wecater">Services</Link>
          <button
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300 text-sm"
            onClick={() => setShowForm(true)}
            aria-label="Open Application Form"
          >
            Apply Now
            <span
              className="text-lg leading-none ml-2"
              role="img"
              aria-hidden="true"
            >
              📝
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}

      <AnimatePresence initial={false} mode="wait">
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full z-50 bg-white overflow-y-auto px-4 pb-6 pt-6 text-black font-semibold lg:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <Link href="/" className="block py-2 border-b">
              Home
            </Link>
            <Link href="/about" className="block py-2 border-b">
              About us
            </Link>

            {/* Explore Colleges */}
            <div className="border-b overflow-hidden">
              <button
                className="flex items-center justify-between py-2 w-full"
                onClick={() =>
                  setMobileDropdown((prev) => ({
                    ...prev,
                    colleges: !prev.colleges,
                  }))
                }
              >
                <span>Explore Colleges</span>
                {mobileDropdown.colleges ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {mobileDropdown.colleges && (
                  <motion.ul
                    key="colleges-dropdown"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="pl-4 space-y-1 pb-2"
                  >
                    <li>
                      <Link href="/colleges/india" className="block">
                        India
                      </Link>
                    </li>
                    <li>
                      <Link href="/colleges/abroad" className="block">
                        Abroad
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Courses Dropdown */}
            <div className="border-b overflow-hidden">
              <button
                className="flex items-center justify-between py-2 w-full"
                onClick={() =>
                  setMobileDropdown((prev) => ({
                    ...prev,
                    courses: !prev.courses,
                  }))
                }
              >
                <span>Courses</span>
                {mobileDropdown.courses ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {mobileDropdown.courses && (
                  <motion.ul
                    key="courses-dropdown"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="pl-4 space-y-1 pb-2"
                  >
                    <li>
                      <Link href="/courses/ug" className="block">
                        UG
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses/pg" className="block">
                        PG
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses/paramedical" className="block">
                        Paramedical
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses/diploma" className="block">
                        Diploma
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="block">
                        Others
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link href="/NEET2025" className="block py-2 border-b">
              NEET 2025
            </Link>
            <Link href="/wecater" className="block py-2 border-b">
              Service
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowForm(true);
              }}
              className=" bg-gradient-to-r from-cyan-400 to-purple-500  mt-4 w-full text-left py-2 font-semibold text-blue-600"
            >
              📝 Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {showForm && (
        <ApplicationFormModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setShowForm(false)}
          error={error}
        />
      )}
    </header>
  );
}
