"use client";

import { FaArrowRight } from "react-icons/fa6";

const courseGroups = [
  {
    title: "Undergraduate (UG) Courses",
    courses: [
      "MBBS",
      "BDS",
      "BAMS (Ayurveda)",
      "BHMS (Homeopathy)",
      "BUMS (Unani)",
      "BSMS (Siddha)",
      "B.Sc Nursing",
      "BPT (Physiotherapy)",
      "BOT (Occupational Therapy)",
      "BMLT (Medical Lab Tech)",
      "BASLP (Audiology & Speech)",
      "B.Pharm (Pharmacy)",
      "B.VSc (Veterinary Science)",
      "BNYS (Naturopathy)",
      "B.Sc Biology",
      "B.Sc Chemistry",
      "B.Sc Physics",
      "B.Sc Biotechnology",
      "B.Sc Microbiology",
      "B.Sc Biochemistry",
      "B.Sc Zoology",
      "B.Sc Botany",
      "B.Sc Biomedical Science",
      "B.Sc Forensic Science",
      "B.Sc Genetics",
    ],
  },
  {
    title: "Diplomas & Certifications",
    courses: [
      "DMLT (Diploma Lab Tech)",
      "D.Pharm",
      "Diploma in Nursing",
      "Diploma in Radiology",
      "Diploma in Ophthalmic Tech",
      "Diploma in Dental Hygiene",
      "Diploma in OT Technology",
      "Diploma in Physiotherapy",
      "Diploma in Dialysis Technology",
      "Diploma in Anesthesia Tech",
    ],
  },
  {
    title: "Postgraduate (PG) Courses",
    courses: [
      "MD (Doctor of Medicine)",
      "MS (Master of Surgery)",
      "MDS (Dental Surgery)",
      "M.Sc Nursing",
      "MPT (Physiotherapy)",
      "M.Sc Anatomy",
      "M.Sc Physiology",
      "M.Sc Biochemistry",
      "M.Sc Microbiology",
      "M.Sc Biotechnology",
      "M.Sc Medical Imaging",
      "M.Sc Genetics",
      "M.Sc Forensic Science",
      "M.Pharm",
      "M.Sc Clinical Psychology",
    ],
  },
  {
    title: "Doctorates & Research",
    courses: [
      "Ph.D in Medicine",
      "Ph.D in Nursing",
      "Ph.D in Pharmacy",
      "Ph.D in Biomedical Sciences",
      "Ph.D in Genetics",
      "Ph.D in Microbiology",
      "Ph.D in Public Health",
      "Ph.D in Biotechnology",
      "Ph.D in Clinical Research",
    ],
  },
  {
    title: "Global & Allied Medical Courses",
    courses: [
      "MBBS (USMLE/PLAB Pathway)",
      "Doctor of Osteopathic Medicine (DO)",
      "Chiropractic Medicine (DC)",
      "Doctor of Podiatric Medicine (DPM)",
      "MD Integrative Medicine",
      "Bachelor of Health Sciences (BHSc)",
      "Bachelor of Public Health (BPH)",
      "Master of Public Health (MPH)",
    ],
  },
];

export default function TopMedicalCourses() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
          Top Medical & Science Courses
        </h2>
        <div className="grid gap-10">
          {courseGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.courses.map((course, idx) => (
                  <button
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full shadow-sm hover:bg-blue-100 transition text-sm"
                  >
                    {course}
                    {/* <FaArrowRight className="text-xs" /> */}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
