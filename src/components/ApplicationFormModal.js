"use client";

import React, { useEffect } from "react";

const ApplicationFormModal = React.memo(function ApplicationFormModal({
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  error,
}) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleCourseCheckbox = (value) => {
    const selected = formData.courses || [];
    const isChecked = selected.includes(value);
    const updatedCourses = isChecked
      ? selected.filter((c) => c !== value)
      : [...selected, value];

    handleChange({
      target: {
        name: "courses",
        value: updatedCourses,
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 md:p-8 rounded-xl max-w-2xl w-full shadow-2xl relative animate-scaleIn">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          🎓 Application Form
        </h2>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "name", placeholder: "Full Name" },
              { name: "mobile", placeholder: "Mobile Number" },
              { name: "city", placeholder: "City" },
              { name: "state", placeholder: "State" },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                onChange={handleChange}
                value={formData[field.name] || ""}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none p-2 rounded-lg transition"
                required
              />
            ))}
          </div>

          {/* Course Checkboxes */}
          <div>
            <label className="font-semibold block mb-2 text-gray-700">
              Courses Interested In:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["NEET", "PG", "UG", "JEE"].map((course) => (
                <label
                  key={course}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="checkbox"
                    value={course}
                    checked={formData.courses?.includes(course) || false}
                    onChange={() => handleCourseCheckbox(course)}
                    className="accent-green-600 w-4 h-4"
                  />
                  {course}
                </label>
              ))}
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  value="Other"
                  checked={formData.courses?.includes("Other") || false}
                  onChange={() => handleCourseCheckbox("Other")}
                  className="accent-green-600 w-4 h-4"
                />
                Other
              </label>
            </div>

            {formData.courses?.includes("Other") && (
              <input
                type="text"
                name="otherCourse"
                value={formData.otherCourse || ""}
                onChange={handleChange}
                placeholder="Specify other course"
                className="mt-3 w-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none p-2 rounded-lg"
              />
            )}
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "course", placeholder: "Preferred Course" },
              { name: "neetAttempt", placeholder: "NEET Attempt (If any)" },
              { name: "dropper", placeholder: "Dropper (If any)" },
              {
                name: "coaching",
                placeholder: "Coaching Attended (If any)",
              },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                onChange={handleChange}
                value={formData[field.name] || ""}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none p-2 rounded-lg"
                required={field.name === "course"}
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded-lg w-full mt-4"
          >
            Submit Application
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
});

export default ApplicationFormModal;
