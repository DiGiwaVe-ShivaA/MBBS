"use client";
import React from "react";

const diplomaCourses = [
  {
    title: "DMLT (Diploma in Medical Laboratory Technology)",
    description:
      "A two-year program training students to diagnose and analyze body fluids, tissues, and blood. Graduates typically become lab technicians in hospitals, diagnostic centers, and research labs.",
  },
  {
    title: "D.Pharm (Diploma in Pharmacy)",
    description:
      "A two-year diploma laying the groundwork in pharmaceutical science. Prepares students to manage prescription medications and provide patient guidance in hospitals, retail pharmacies, and companies.",
  },
  {
    title: "Diploma in Nursing",
    description:
      "Covers patient care, medical-surgical nursing, pediatric nursing, and community health. Graduates work in hospitals, clinics, and home healthcare services providing essential medical support.",
  },
  {
    title: "Diploma in Radiology",
    description:
      "Trains students in diagnostic imaging techniques like X-rays, CT scans, and MRIs. Includes theoretical and hands-on training in radiographic equipment and image interpretation.",
  },
  {
    title: "Diploma in Ophthalmic Technology",
    description:
      "Focuses on eye care and the use of tools to diagnose and treat visual disorders. Graduates assist ophthalmologists during exams and manage eye care equipment and procedures.",
  },
  {
    title: "Diploma in Dental Hygiene",
    description:
      "Prepares students to promote oral health through dental hygiene practices and education. Opportunities exist in clinics, hospitals, and public health organizations.",
  },
  {
    title: "Diploma in OT (Operation Theatre) Technology",
    description:
      "Covers sterilization, equipment handling, and procedure management to assist surgeons in the operation theatre. Graduates work in surgical units and hospitals.",
  },
];

const DiplomaCoursesPage = () => {
  return (
    <main className="px-6 py-12 min-h-screen bg-gradient-to-br from-[#f7fafc] to-[#e2e8f0] text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">
        🎓 Diploma Courses
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
        Discover practical healthcare-focused diploma programs designed to get
        you job-ready faster with in-demand clinical and diagnostic skills.
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {diplomaCourses.map((course, index) => (
          <div
            key={index}
            className="break-inside-avoid border border-indigo-100 bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2 flex items-start gap-2">
              <span>🎓</span> {course.title}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DiplomaCoursesPage;
