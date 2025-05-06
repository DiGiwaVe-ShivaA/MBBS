"use client";
import React from "react";

export default function ApplicationFormModal2({
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  error,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={closeModal}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center mb-5 text-purple-700">
          Application Form 📝
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="course"
            placeholder="Preferred Course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <div className="flex items-center gap-4">
            <label className="font-medium">NEET Attempt:</label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="neetAttempt"
                value="Yes"
                checked={formData.neetAttempt === "Yes"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="neetAttempt"
                value="No"
                checked={formData.neetAttempt === "No"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              No
            </label>
          </div>

          <input
            type="text"
            name="dropper"
            placeholder="Are you a Dropper? (Yes/No)"
            value={formData.dropper}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="coaching"
            placeholder="Coaching Attended?"
            value={formData.coaching}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Submit & Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
