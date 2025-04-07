"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
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

export default function HeroSectionA() {
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

      const message = `
*New Application Form:*
Name: ${formData.name}
Mobile: ${formData.mobile}
City: ${formData.city}
State: ${formData.state}
Course: ${formData.course}
NEET Attempt: ${formData.neetAttempt}
Dropper: ${formData.dropper}
Coaching Attended: ${formData.coaching}
      `;

      const url = `https://wa.me/9557911144?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      resetForm();
      setShowForm(false);
    },
    [formData, resetForm]
  );

  return (
    <section className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-16 gap-8">
        {/* Doctor Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/images/docherosectionB.jpg"
            alt="Doctor"
            width={400}
            height={300}
            className="w-auto h-auto rounded"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            BOOKING OPEN FOR NEET-UG PREMIUM COUNSELLING SERVICES 2025-26
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
            To maintain high quality, client satisfaction, and maximum accuracy,
            we accept very limited bookings depending upon our back-end team
            size. So, we may increase our service charge dynamically as per
            demand.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition"
          >
            Apply Now
          </button>
        </div>
      </div>

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
