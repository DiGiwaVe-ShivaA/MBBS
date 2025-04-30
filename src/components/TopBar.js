"use client";

import React, { useState, useCallback } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa"; // this exists ✅
import { FaCalendarCheck } from "react-icons/fa6";
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
      <style jsx global>{`
        @keyframes movingGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .animate-moving-gradient {
          animation: movingGradient 4s linear infinite;
          background-size: 50% 10%;
        }
      `}</style>

      <div className="text-sm shadow-md border-b-1 border-transparent relative">
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] via-[#4b028b] to-[#00E5FF] bg-[length:200%_100%] animate-moving-gradient"></div>

        <div className="w-full px-4 md:px-8 py-2 flex flex-col md:flex-row justify-end items-end gap-4">
          <div className="w-full flex justify-end">
            <div className="flex gap-4">
              <button
                className="flex items-end gap-2 px-4 py-2 text-white font-semibold rounded-full shadow-md bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] hover:opacity-90 transition-all duration-300"
                onClick={() => alert("Book Appointment clicked")}
              >
                <FaCalendarCheck className="text-white" /> Book Appointment
              </button>
              <button
                className="flex items-end gap-2 px-4 py-2 text-white font-semibold rounded-full shadow-md bg-gradient-to-r from-[#00E5FF] to-[#8A05FF] hover:opacity-90 transition-all duration-300"
                onClick={() => alert("Live Counseling clicked")}
              >
                <FaHeadset className="text-white" /> Live Counseling
              </button>
              {/* <button
                className="flex items-end gap-2 px-4 py-4 text-white font-semibold rounded-full shadow-md bg-green-500 hover:bg-green-600 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029VamSJ0dJuyAKnrn49B2i",
                    "_blank"
                  )
                }
              >
                <FaWhatsapp />
              </button> */}
              {/* <a
                href="https://whatsapp.com/channel/0029VamSJ0dJuyAKnrn49B2i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-end gap-2 px-4 py-4 text-white font-semibold rounded-full shadow-md bg-green-500 hover:bg-green-600 transition-all duration-300"
                title="Join WhatsApp Channel"
                aria-label="WhatsApp Channel"
              >
                <FaWhatsapp />
              </a> */}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaWhatsapp className="text-xl text-[#25D366]" />,
                link: "https://whatsapp.com/channel/0029VamSJ0dJuyAKnrn49B2i",
                label: "WhatsApp",
              },

              {
                icon: <FaFacebookF className="text-xl text-[#1877F2]" />,
                link: "https://www.facebook.com/share/1ZAU1GRZKr/",
                label: "Facebook",
              },
              {
                icon: <FaXTwitter className="text-xl text-black" />,
                link: "https://x.com",
                label: "Twitter",
              },
              {
                icon: <FaYoutube className="text-xl text-[#FF0000]" />,
                link: "https://youtube.com/@nset-b6f?si=FA34n5xgpGXEFa8K",
                label: "YouTube",
              },
              {
                icon: <FaInstagram className="text-xl text-[#E4405F]" />,
                link: "https://www.instagram.com/nset.pvt.ltd?igsh=YXRvdWF0c2VkOGx4",
                label: "Instagram",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
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
