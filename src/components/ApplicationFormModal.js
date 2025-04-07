"use client";

import React, { useEffect } from "react";

const ApplicationFormModal = React.memo(function ApplicationFormModal({
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  error,
}) {
  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative animate-scaleIn">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Application Form
        </h2>

        {error && (
          <div className="text-red-600 text-sm mb-2 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { name: "name", placeholder: "Name" },
            { name: "mobile", placeholder: "Mobile Number" },
            { name: "city", placeholder: "City" },
            { name: "state", placeholder: "State" },
            { name: "course", placeholder: "Course" },
            { name: "neetAttempt", placeholder: "NEET Attempt (If any)" },
            { name: "dropper", placeholder: "Dropper (If)" },
            { name: "coaching", placeholder: "Coaching Attended (If any)" },
          ].map((field) => (
            <input
              key={field.name}
              name={field.name}
              onChange={handleChange}
              value={formData[field.name]}
              placeholder={field.placeholder}
              className="w-full border p-2 rounded"
              required
            />
          ))}

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Scale animation */}
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
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
});

export default ApplicationFormModal;
