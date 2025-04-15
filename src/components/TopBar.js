"use client";

import React, { useState, useCallback } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
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

const TopBar = () => {
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
    <>
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white text-sm shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          <button
            className="font-semibold flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-300 text-sm"
            onClick={() => setShowForm(true)}
            aria-label="Open Application Form"
          >
            Apply Now
            <span
              className="text-lg leading-none"
              role="img"
              aria-hidden="true"
            >
              📝
            </span>
          </button>

          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaInstagram className="text-xl" />,
                link: "https://www.instagram.com/nset.pvt.ltd?igsh=YXRvdWF0c2VkOGx4",
                label: "Instagram",
              },
              {
                icon: <FaFacebookF className="text-xl" />,
                link: "https://www.facebook.com/share/1ZAU1GRZKr/",
                label: "Facebook",
              },
              {
                icon: <FaXTwitter className="text-xl" />,
                link: "https://x.com",
                label: "Twitter",
              },
              {
                icon: <FaYoutube className="text-xl" />,
                link: "https://youtube.com/@nset-b6f?si=FA34n5xgpGXEFa8K",
                label: "YouTube",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="p-2 rounded-full hover:bg-white/20 transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
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
    </>
  );
};

export default TopBar;
