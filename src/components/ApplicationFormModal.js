"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Landmark,
  GraduationCap,
  FileQuestion,
  Calendar,
  School,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const icons = {
  name: <User className="w-4 h-4" />,
  mobile: <Phone className="w-4 h-4" />,
  city: <MapPin className="w-4 h-4" />,
  state: <Landmark className="w-4 h-4" />,
  course: <GraduationCap className="w-4 h-4" />,
  neetAttempt: <Calendar className="w-4 h-4" />,
  dropper: <FileQuestion className="w-4 h-4" />,
  coaching: <School className="w-4 h-4" />,
};

const ApplicationFormModal = React.memo(function ApplicationFormModal({
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  error,
}) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleCourseCheckbox = (value) => {
    const selected = formData.courses || [];
    const isChecked = selected.includes(value);
    const updated = isChecked
      ? selected.filter((c) => c !== value)
      : [...selected, value];

    handleChange({
      target: { name: "courses", value: updated },
    });
  };

  const goNext = () => setStep((s) => Math.min(2, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const renderInput = ({ name, placeholder }) => (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        {icons[name]}
      </span>
      <input
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none p-2 rounded-lg"
      />
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 md:p-8 rounded-xl max-w-2xl w-full shadow-2xl relative animate-scaleIn transition-all duration-300">
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

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              step === 1 ? "w-1/2 bg-green-500" : "w-full bg-green-600"
            }`}
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["name", "mobile", "city", "state"].map((f) => (
                  <div key={f}>
                    {renderInput({
                      name: f,
                      placeholder: f.replace(/^\w/, (c) => c.toUpperCase()),
                    })}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="bg-green-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              {/* Course Checkboxes */}
              <div>
                <label className="font-semibold block mb-2 text-gray-700">
                  Courses Interested In:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["NEET-UG", "NEET-PG", "Diploma", "JEE"].map((course) => (
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["course", "neetAttempt"].map((f) => (
                  <div key={f}>
                    {renderInput({
                      name: f,
                      placeholder: f
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (c) => c.toUpperCase()),
                    })}
                  </div>
                ))}

                {/* Dropper Yes/No */}
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">
                    Are you a Dropper?
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="dropper"
                        checked={formData.dropper === "Yes"}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "dropper",
                              value: e.target.checked ? "Yes" : "No",
                            },
                          })
                        }
                        className="accent-green-600"
                      />
                      Yes
                    </label>
                  </div>
                </div>

                {/* Coaching Yes/No + name if yes */}
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">
                    Have you taken Coaching?
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="coaching"
                        checked={formData.coaching === "Yes"}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "coaching",
                              value: e.target.checked ? "Yes" : "No",
                            },
                          })
                        }
                        className="accent-green-600"
                      />
                      Yes
                    </label>
                  </div>
                  {formData.coaching === "Yes" && (
                    <input
                      type="text"
                      name="coachingName"
                      value={formData.coachingName || ""}
                      onChange={handleChange}
                      placeholder="Enter Coaching Name"
                      className="w-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none p-2 rounded-lg"
                    />
                  )}
                </div>
              </div>

              {/* Study Mode */}
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">
                  Study Mode:
                </label>
                <div className="flex gap-6">
                  {["Self Study", "Online Studies"].map((mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <input
                        type="radio"
                        name="studyMode"
                        value={mode}
                        checked={formData.studyMode === mode}
                        onChange={handleChange}
                        className="accent-green-600"
                      />
                      {mode}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="bg-gray-300 hover:bg-gray-400 transition text-black py-2 px-4 rounded-lg flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 px-4 rounded-lg flex-1"
                >
                  Submit Application
                </button>
              </div>
            </>
          )}
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
