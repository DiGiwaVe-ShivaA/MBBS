"use client";

export default function CareerPathsAfterNeetUg() {
  const courses = [
    {
      title: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
      duration: "5.5 years (including 1-year internship)",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "General Physician",
        "Surgeon",
        "Postgraduate (MD/MS) Studies",
        "Medical Research",
        "Government Medical Officer",
      ],
      futureScope:
        "MBBS graduates are in high demand across India and abroad, with endless specialization opportunities.",
    },
    {
      title: "BDS (Bachelor of Dental Surgery)",
      duration: "5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Dentist",
        "Orthodontist",
        "Dental Surgeon",
        "Private Clinic Owner",
        "Pursue MDS",
      ],
      futureScope:
        "Excellent scope in clinical practice, private setups, and teaching institutions.",
    },
    {
      title: "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
      duration: "5.5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Ayurvedic Doctor",
        "Panchakarma Specialist",
        "Hospital Administrator",
        "PG in Ayurveda",
      ],
      futureScope:
        "Rising global popularity of Ayurveda ensures bright prospects nationally and internationally.",
    },
    {
      title: "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
      duration: "5.5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Homeopathic Doctor",
        "Medical Researcher",
        "Health Consultant",
        "Lecturer in Homeopathy Colleges",
      ],
      futureScope:
        "Increasing demand in holistic and alternative medicine sectors boosts opportunities.",
    },
    {
      title: "BUMS (Bachelor of Unani Medicine and Surgery)",
      duration: "5.5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Unani Practitioner",
        "Hospital-based Healer",
        "Medical Officer",
      ],
      futureScope:
        "Unani Medicine is gaining new momentum, creating jobs in wellness centers and hospitals.",
    },
    {
      title: "BSMS (Bachelor of Siddha Medicine and Surgery)",
      duration: "5.5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Siddha Medical Practitioner",
        "Health and Wellness Consultant",
        "Medical Researcher",
      ],
      futureScope:
        "Growing acceptance of Siddha therapies, especially in South India, is boosting demand.",
    },
    {
      title: "BSc Nursing",
      duration: "4 years",
      eligibility: "NEET UG qualified (in select institutes) + PCB in 12th",
      careerPaths: [
        "Registered Nurse",
        "Critical Care Specialist",
        "Nurse Educator",
        "Hospital Administrator",
      ],
      futureScope:
        "Massive global demand in hospitals, healthcare centers, and even immigration opportunities.",
    },
    {
      title: "BVSc & AH (Bachelor of Veterinary Sciences and Animal Husbandry)",
      duration: "5.5 years",
      eligibility: "Must qualify NEET UG",
      careerPaths: [
        "Veterinary Doctor",
        "Animal Surgeon",
        "Livestock Development Officer",
      ],
      futureScope:
        "Booming opportunities in animal healthcare, government departments, and private clinics.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 leading-tight tracking-tight">
          Top Career Paths After NEET UG 2025
        </h2>

        {/* List of Courses */}
        <div className="space-y-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-indigo-700">
                {course.title}
              </h3>

              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Duration:</span>{" "}
                {course.duration}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">
                  Eligibility:
                </span>{" "}
                {course.eligibility}
              </p>

              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Career Paths:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {course.careerPaths.map((path, idx) => (
                    <li key={idx}>{path}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Future Scope:
                </p>
                <p className="text-gray-600">{course.futureScope}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
