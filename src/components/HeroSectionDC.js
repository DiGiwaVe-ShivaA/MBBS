/* File: app/about/page.jsx */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    score: "",
    state: "",
    degree: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, score, state, degree } = formData;
    const message = `Hello, I am ${name}. My email is ${email}, NEET score is ${score}, Phone: ${phone}, State: ${state}, Degree: ${degree}.`;
    const whatsappURL = `https://wa.me/919999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      {/* About Us Section */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white p-3 rounded-3xl inline-block shadow-md">
          About NSET
        </h2>
        {/* <div className="w-16 h-1 bg-blue-500 mb-5"></div> */}
        <p className="text-lg leading-relaxed text-blue-900">
          At Namastubhyam Saraswati Edu Tech Pvt. Ltd. (NSET), we’re on a
          mission to make top-notch medical education available to every
          deserving student out there. We truly believe that a successful career
          starts with making the right choices at the right moments, and that’s
          where our seasoned career counselors come in.
          <br />
          <br />
          They’re here to guide you in making those important decisions with
          confidence. Whether you’re aiming to study medicine in India or
          overseas, NSET provides tailored guidance, comprehensive support, and
          steadfast mentorship every step of the way. We’re all about
          transforming uncertainties into opportunities and turning dreams into
          reality—empowering you to create a bright and fulfilling future in the
          medical field.{" "}
          <span className="font-bold text-blue-600">Learn More</span>
        </p>
        <button className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300">
          Read More
        </button>
      </div>

      {/* Contact Form */}
      <div className="lg:w-1/2 bg-cyan-50 p-8 rounded-2xl shadow-lg border border-blue-800 relative">
        <div className="absolute -top-6 left-5 w-60 h-6 bg-blue-800 rounded-t-3xl"></div>
        <h2 className="text-3xl font-bold mb-2 text-center text-black">
          Keep <span className="text-black">Connected</span>
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-center mb-6 text-black">
          Feel free to reach out for caring assistance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-black"
          />

          <div className="flex gap-4">
            <input
              type="email"
              id="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-3 rounded border border-gray-300 text-black"
            />
            <input
              type="text"
              id="score"
              placeholder="NEET Score*"
              required
              value={formData.score}
              onChange={handleChange}
              className="w-1/2 p-3 rounded border border-gray-300 text-black"
            />
          </div>

          {/* <div className="flex gap-4">
            <input
              type="text"
              id="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-3 rounded border border-gray-300 text-black"
            />
            <select
              id="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-1/2 p-3 rounded border border-gray-300 text-black"
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div> */}

          {/* <select
            id="degree"
            required
            value={formData.degree}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-black"
          >
            <option value="">Select Degree</option>
            <option value="MBBS">MBBS</option>
            <option value="BDS">BDS</option>
            <option value="BAMS">BAMS</option>
          </select> */}

          <input
            type="text"
            id="Enter Course"
            placeholder="Enter Course*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-black"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded shadow-md transition duration-300"
          >
            REGISTER NOW WITH US
          </button>
        </form>

        {/* Social and Stats */}
        <div className="flex justify-between items-center mt-6 text-center text-sm text-black">
          <div>
            <p className="font-bold text-lg">43 Live</p>
            <p>Consultant</p>
          </div>
          <div>
            <p className="font-bold text-lg">22 free</p>
            <p>Consultant</p>
          </div>
          <div>
            <p className="font-bold text-lg">84 Booked</p>
            <p>Consultant</p>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
          <FaYoutube className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
}
