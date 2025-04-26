// components/CareerPathsAfterNEET.jsx
import Image from "next/image";

const courses = [
  {
    title: "MBBS",
    duration: "5.5 years",
    field: "Allopathic Medicine",
    prospects: "Doctor, Surgeon, Medical Specialist, Officer",
    eligibility: "NEET UG Qualified",
    image: "/images/mbbsneet.jpeg", // Placeholder path
  },
  {
    title: "BDS",
    duration: "5 years",
    field: "Dentistry",
    prospects: "Dentist, Orthodontist, Dental Surgeon",
    eligibility: "NEET UG Qualified",
    image: "/images/bdsneet.jpg",
  },
  {
    title: "BAMS",
    duration: "5.5 years",
    field: "Ayurvedic Medicine",
    prospects: "Ayurvedic Doctor, Consultant, Researcher",
    eligibility: "NEET UG Qualified",
    image: "/images/bamsneet.jpg",
  },
  {
    title: "BHMS",
    duration: "5.5 years",
    field: "Homeopathic Medicine",
    prospects: "Homeopathic Practitioner, Lecturer",
    eligibility: "NEET UG Qualified",
    image: "/images/bhms.png",
  },
  {
    title: "BUMS",
    duration: "5.5 years",
    field: "Unani Medicine",
    prospects: "Unani Doctor, Hospital Practitioner",
    eligibility: "NEET UG Qualified",
    image: "/images/bumsneet.jpg",
  },
  {
    title: "BSMS",
    duration: "5.5 years",
    field: "Siddha Medicine",
    prospects: "Siddha Doctor, Wellness Expert",
    eligibility: "NEET UG Qualified",
    image: "/images/BSMS.webp",
  },
  {
    title: "BSc Nursing",
    duration: "4 years",
    field: "Nursing & Healthcare",
    prospects: "Registered Nurse, Critical Care Nurse, Administrator",
    eligibility: "NEET UG (Select Institutes)",
    image: "/images/bscnursing.webp",
  },
  {
    title: "BVSc & AH",
    duration: "5.5 years",
    field: "Veterinary Sciences",
    prospects: "Veterinary Doctor, Animal Surgeon, Livestock Officer",
    eligibility: "NEET UG Qualified",
    image: "/images/bvsneet.jpeg",
  },
];

const alliedCourses = [
  "BPT (Physiotherapy)",
  "BOT (Occupational Therapy)",
  "BMLT (Medical Lab Technology)",
  "BSc Radiology, Anaesthesia, Optometry, Dialysis Technology",
  "BPharm (Bachelor of Pharmacy)*",
];

const backupOptions = [
  {
    title: "Life Sciences & Biotechnology",
    description:
      "If you're passionate about research and discovery, explore fields like Microbiology, Biochemistry, Biotechnology, Genetics, Zoology, or Botany. A great gateway to research labs, pharma companies, and biotech industries!",
    image: "/images/life.webp",
  },
  {
    title: "Psychology & Counselling",
    description:
      "Help people heal emotionally! Begin with a B.A or B.Sc in Psychology, and specialize in Clinical Psychology, Counseling, or Mental Health Support. Huge demand in schools, hospitals, and private practice.",
    image: "/images/counneet.png",
  },
  {
    title: "Hospital & Healthcare Management",
    description:
      "Love planning and managing? A degree like BBA/B.Sc in Hospital Administration or MBA in Healthcare Management prepares you to lead healthcare institutions professionally.",
    image: "/images/mgmtneet.jpg",
  },
];

export default function CareerPathsAfterNEET() {
  return (
    <section className="px-4 md:px-16 py-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Career Courses After NEET UG 2025
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p>
              <span className="font-semibold">Duration:</span> {course.duration}
            </p>
            <p>
              <span className="font-semibold">Core Field:</span> {course.field}
            </p>
            <p>
              <span className="font-semibold">Career Prospects:</span>{" "}
              {course.prospects}
            </p>
            <p>
              <span className="font-semibold">Eligibility:</span>{" "}
              {course.eligibility}
            </p>
          </div>
        ))}
      </div>

      {/* Allied Medical Courses */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Allied Medical Courses After NEET UG
        </h2>
        <ul className="space-y-4 text-lg text-center">
          {alliedCourses.map((item, idx) => (
            <li
              key={idx}
              className="bg-white py-4 px-6 rounded-xl shadow-md inline-block"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-600 text-sm mt-4">
          *Note: BPharm admissions usually require other exams like GPAT.
        </p>
      </div>

      {/* Backup Career Options */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Career Paths Beyond NEET: Backup Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {backupOptions.map((option, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <Image
                src={option.image}
                alt={option.title}
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-700 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
