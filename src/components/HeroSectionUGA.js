"use client";

import React from "react";

const courses = [
  {
    title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
    description:
      "MBBS, which stands for Bachelor of Medicine, Bachelor of Surgery, is the top choice for students who dream of becoming doctors. This program dives into essential subjects like anatomy, physiology, biochemistry, pharmacology, pathology, and various clinical topics. Once they graduate, students can either specialize further or jump right into working at hospitals, clinics, or even start their own private practices. It’s a career path that not only commands respect but also offers some of the best salaries in the healthcare field.",
  },
  {
    title: "BDS (Bachelor of Dental Surgery)",
    description:
      "After MBBS, BDS ranks as the second most sought-after medical course. It emphasizes dental health, surgery, and treatment. Those who complete the BDS program can pursue careers as dentists in hospitals or launch their own dental clinics. This path offers a satisfying career, especially given the rising need for dental experts.",
  },
  {
    title: "BAMS (Ayurvedic Medicine and Surgery)",
    description:
      "BAMS focuses on the foundational principles and practices of Ayurveda, a time-honored system of medicine from India. With a rising global fascination with alternative medicine, professionals trained in BAMS are increasingly sought after in wellness centers, research fields, and government healthcare systems.",
  },
  {
    title: "BHMS (Homeopathic Medicine and Surgery)",
    description:
      "The BHMS program trains students in the art and science of homeopathic medicine and treatment techniques. Graduates are well-equipped to either set up their own practice or work in clinics, responding to the increasing demand for alternative healing solutions.",
  },
  {
    title: "BUMS (Unani Medicine and Surgery)",
    description:
      "BUMS is founded on the Unani system of medicine, which focuses on natural healing practices. Graduates can pursue careers as Unani practitioners, researchers, or find positions in government hospitals. This path holds great promise, especially in regions where Unani medicine is well-regarded.",
  },
  {
    title: "BSMS (Siddha Medicine and Surgery)",
    description:
      "At BSMS, you'll learn all about the Siddha medical system, a traditional practice that's quite popular in Tamil Nadu and other parts of South India. There are plenty of career paths you can take, whether it's practicing Siddha medicine directly or working in wellness and government centers that advocate for traditional health approaches.`",
  },
  {
    title: "B.Sc Nursing",
    description:
      "The B.Sc Nursing program is designed to equip students with the skills they need to become professional nurses. With a strong focus on practical training, graduates can look forward to great job opportunities in hospitals, clinics, and even abroad, as there's a growing global need for qualified nursing professionals.",
  },
  {
    title: "BPT (Physiotherapy)",
    description:
      "BPT focuses on equipping students with the skills they need for physical rehabilitation and therapy. There’s a growing need for physiotherapists in various settings like hospitals, sports centers, and rehabilitation clinics.",
  },
  {
    title: "BOT (Occupational Therapy)",
    description:
      "BOT trains students to help individuals regain the daily life skills they may have lost because of physical or mental challenges. This opens up career opportunities in places like hospitals, rehabilitation centers, and schools catering to special needs.",
  },
  {
    title: "BMLT",
    description:
      "BMLT emphasizes the importance of laboratory diagnostic techniques and the operation of medical lab equipment. After graduation, students can pursue careers in diagnostic labs, hospitals, and research facilities, where they are essential in the fight against disease through detection and treatment.",
  },
  {
    title: "BASLP",
    description:
      "The BASLP program trains students to identify and address hearing and speech disorders. Career opportunities abound, whether working with ENT specialists, in hospitals, or in schools, allowing graduates to truly impact the world of communication health.",
  },
  {
    title: "B.Pharm (Bachelor of Pharmacy)",
    description:
      "For students who are passionate about medicine but want to steer clear of clinical roles, B.Pharm is a fantastic choice. It emphasizes the study of pharmaceutical sciences, including how drugs are made and distributed. Graduates have a variety of career paths available, such as working in pharmaceutical firms, regulatory bodies, or launching their own pharmacy.",
  },
  {
    title: "B.VSc (Veterinary Science)",
    description:
      "If you're passionate about animal healthcare, then B.VSc is the perfect course for you! As a veterinarian, you can find yourself working in clinics, animal husbandry departments, or even diving into research in the fascinating field of animal sciences.",
  },
  {
    title: "BNYS (Naturopathy and Yogic Sciences)",
    description:
      "BNYS combines the principles of naturopathy and yoga to promote holistic health. Graduates have the opportunity to work in wellness centers, spas, or alternative medicine hospitals, where there's an increasing interest in natural healing practices.",
  },
  {
    title: "B.Sc Biology",
    description:
      "This program lays a strong groundwork in biological sciences, making it perfect for those who are keen on research, teaching, or advancing to postgraduate studies in life sciences or medicine-related areas.",
  },
  {
    title: "B.Sc Chemistry",
    description:
      "This course dives into the fascinating world of chemical processes and reactions. Graduates can explore careers in research, laboratory work, pharmaceuticals, or education.",
  },
  {
    title: "B.Sc Physics",
    description:
      "Here, you'll delve into essential physics concepts and their applications in technology and research. This degree opens up exciting opportunities in scientific research, teaching, and engineering.",
  },
  {
    title: "B.Sc Biotechnology",
    description:
      "This course merges biology with technology, focusing on genetic research, biopharmaceuticals, and innovation. There’s a growing demand for professionals in biotech companies and research labs.",
  },
  {
    title: "B.Sc Microbiology",
    description:
      "This program centers on the study of microorganisms and their effects on health and the environment. Career paths include diagnostics, pathology labs, and pharmaceuticals.",
  },
  {
    title: "B.Sc Biochemistry",
    description:
      "Explore the chemical processes that occur within living organisms. Graduates can find opportunities in research, healthcare, and the biotech industry.",
  },
  {
    title: "B.Sc Zoology",
    description:
      "This course emphasizes animal biology and life processes. Graduates can pursue careers in environmental research, wildlife conservation, or education.",
  },
  {
    title: "B.Sc Botany",
    description:
      "Focusing on plant biology and ecosystem studies, this program is ideal for those looking to work in research, agriculture, or forestry.",
  },
  {
    title: "B.Sc Biomedical Science",
    description:
      "This degree combines biology and medicine, preparing students for careers in medical research. It offers pathways into diagnostics, biotech, and healthcare innovation.",
  },
  {
    title: "B.Sc Forensic Science",
    description:
      "This program applies scientific principles to criminal investigations. Career opportunities are available in law enforcement, forensic labs, and criminology.",
  },
  {
    title: "B.Sc Genetics",
    description:
      "Focusing on genes, heredity, and DNA technologies, this course opens doors to careers in research, genetic counseling, and biotechnology.",
  },
];

export default function CoursesPage() {
  return (
    <main className="px-6 py-12 min-h-screen bg-gradient-to-br from-[#e0f2f1] to-[#ffffff] text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-[#1e3a8a] mb-4">
        🎓 Undergraduate Courses
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Explore a wide range of medical and science-based undergraduate programs
        tailored to kickstart your career in healthcare, life sciences, and
        beyond.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2 flex items-center gap-2">
              📘 <span>{course.title}</span>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
