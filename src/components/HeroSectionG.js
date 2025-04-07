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

export default function NeetCourses() {
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
    <div className="py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
        Pre-Medical NEET-UG Just
        <span className="text-green-500 font-semibold"> Contact US!!</span>
      </h2>

      {/* Session 2025–26 */}
      <div className="mb-12">
        <h3 className="text-green-600 text-xl font-semibold mb-1">
          Classroom Courses
        </h3>
        <p className="text-gray-700 font-semibold mb-4">
          Session: <span className="text-gray-900">2025-26</span>
          <span className="ml-2 text-[11px] px-2 py-[2px] bg-orange-200 text-orange-700 rounded-full uppercase font-bold">
            new
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              title: "NURTURE",
              subtitle: "Class X to XI Moving Students",
              duration: "Two Years",
              target: 2027,
            },
            {
              title: "ENTHUSIAST",
              subtitle: "Class XI to XII Moving Students",
              duration: "One Year",
              target: 2026,
            },
            {
              title: "LEADER",
              subtitle: "Class XII Passed Students",
              duration: "One Year",
              target: 2026,
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-md w-full max-w-sm mx-auto"
            >
              <h4 className="text-lg font-bold mb-2">{course.title}</h4>
              <p>{course.subtitle}</p>
              <p className="text-sm mt-1 text-gray-600">
                (Duration : {course.duration})
              </p>
              <p className="mt-2 font-medium">Target - {course.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Session 2024–25 */}
      <div>
        <h3 className="text-green-600 text-xl font-semibold mb-1">
          Classroom Courses
        </h3>
        <p className="text-gray-700 font-semibold mb-4">
          Session: <span className="text-gray-900">2024-25</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              title: "ALPHA ACHIEVER",
              subtitle: "Class XII Passed ",
              duration: "One Year",
              target: 2025,
            },
            {
              title: "Crash Course",
              subtitle: "Class XII Undergoing/Passed",
              duration: "60 Days",
              target: 2025,
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-md w-full max-w-sm mx-auto"
            >
              <h4 className="text-lg font-bold mb-2">{course.title}</h4>
              <p>{course.subtitle}</p>
              <p className="text-sm mt-1 text-gray-600">
                (Duration : {course.duration})
              </p>
              <p className="mt-2 font-medium">Target - {course.target}</p>
            </div>
          ))}
        </div>
        {/* Apply Now Button */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-600 transition"
          >
            Apply NOW
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
    </div>
  );
}
