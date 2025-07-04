"use client";
import React, { useState, useCallback } from "react";
import { ChevronDown, ChevronUp, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ApplicationFormModal2 from "./ApplicationFormModal2";
// import logoo from "../../public/images/logoo.png"
const initialFormState = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  course: "",
  neetAttempt: false, // changed to boolean
  dropper: "",
  coaching: "",
};

export default function NavBar() {
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
      <div className="max-w-7xl mx-auto px-1 py-3 flex items-center justify-between">
        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:block ml-2  ">
  <Image src="/images/mbbslogo.png" alt="Logo" width={140} height={50} className="object-fill" />
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
            <Image src="/logoo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-black font-semibold">
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
                  {/* UG with nested submenu */}
                  <div className="relative group">
                    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                      UG <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                    <div className="absolute left-full top-0 mt-0 hidden group-hover:block w-48 bg-white border rounded shadow-md">
                      <Link
                        href="/courses/ug/mbbs"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        MBBS
                      </Link>

                      <Link
                        href="/courses/ug/bds"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BDS
                      </Link>
                      <Link
                        href="/courses/ug/bams"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BAMS
                      </Link>
                      <Link
                        href="/courses/ug/bhms"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BHMS
                      </Link>
                      <Link
                        href="/courses/ug/bvsc"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BVSC
                      </Link>
                    </div>
                  </div>

                  {/* PG dropdown */}
                  <div className="relative group">
                    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                      PG <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                    <div className="absolute left-full top-0 mt-0 hidden group-hover:block w-48 bg-white border rounded shadow-md">
                      <Link
                        href="/courses/pg/mdms"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        MD/MS in INDIA
                      </Link>
                      <Link
                        href="/courses/pg/mds"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        MDS in INDIA
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/courses/diploma"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Diploma
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <Link href="/neetpredicter">NEET Predictor</Link> */}
          <Link href="/NEET2025">NEET 2025</Link>
          <Link href="/services">Services</Link>
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
                    {/* UG with nested MBBS, BDS, BAMS, BHMS, BVSC */}
                    <li>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={() =>
                          setMobileDropdown((prev) => ({
                            ...prev,
                            ug: !prev.ug,
                          }))
                        }
                      >
                        <span>UG</span>
                        {mobileDropdown.ug ? <ChevronUp /> : <ChevronDown />}
                      </button>

                      <AnimatePresence>
                        {mobileDropdown.ug && (
                          <motion.ul
                            key="ug-submenu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="pl-4 space-y-1"
                          >
                            <li>
                              <Link href="/courses/ug/mbbs" className="block">
                                MBBS
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/ug/bds" className="block">
                                BDS
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/ug/bams" className="block">
                                BAMS
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/ug/bhms" className="block">
                                BHMS
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/ug/bvsc" className="block">
                                BVSC
                              </Link>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* pg dropdown */}
                    <li>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={() =>
                          setMobileDropdown((prev) => ({
                            ...prev,
                            ug: !prev.ug,
                          }))
                        }
                      >
                        <span>PG</span>
                        {mobileDropdown.ug ? <ChevronUp /> : <ChevronDown />}
                      </button>

                      <AnimatePresence>
                        {mobileDropdown.ug && (
                          <motion.ul
                            key="pg-submenu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="pl-4 space-y-1"
                          >
                            <li>
                              <Link href="/courses/pg/mdms" className="block">
                                MD/MS in INDIA
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/pg/mds" className="block">
                                MDS
                              </Link>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                    <li>
                      <Link href="/courses/diploma" className="block">
                        Diploma
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <Link href="/NEET2025" className="block py-2 border-b">
              NEET 2025
            </Link>
            <Link href="/services" className="block py-2 border-b">
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
        <ApplicationFormModal2
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
