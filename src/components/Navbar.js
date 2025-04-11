"use client";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    colleges: false,
    courses: false,
  });

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
    <header className="bg-gray-100 shadow-sm relative z-50">
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

          <Link href="/neet-predictor">NEET Predictor</Link>
          <Link href="/neet-2025">NEET 2025</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/counselling"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Live Counselling
          </Link>
          <Link
            href="/appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Book Appointment
          </Link>
        </div>
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

            <Link href="/neet-predictor" className="block py-2 border-b">
              NEET Predictor
            </Link>

            <Link href="/neet-2025" className="block py-2 border-b">
              NEET 2025
            </Link>

            <div className="pt-4 flex flex-col space-y-3">
              <Link
                href="/counselling"
                className="bg-blue-600 text-white text-center py-2 rounded-full"
              >
                Live Counselling
              </Link>
              <Link
                href="/appointment"
                className="bg-blue-600 text-white text-center py-2 rounded-full"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
