"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function AdmissionProcessPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen px-6 md:px-20 py-16 text-gray-800">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8"
      >
        Admission Process
      </motion.h1>

      {/* Image Section */}
      {/* <div className="flex justify-center mb-10">
        <Image
          src="/admission-info.jpeg"
          alt="Admission Information"
          width={700}
          height={900}
          className="rounded-xl shadow-lg"
        />
      </div> */}

      {/* Step-by-Step Info */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <Step
          number={1}
          title="State-wise Counseling Updates"
          description="Each state has its own counseling process. It's important to stay updated by visiting your respective state's official counseling website regularly."
        />
        <Step
          number={2}
          title="All India Quota (AIQ) Counseling"
          description="If you're applying for seats under the All India Quota, register on the official MCC website and follow the step-by-step process provided there."
        />
        <Step
          number={3}
          title="Mop-up Round Counseling"
          description="If you didn’t secure a seat in the previous rounds, you can participate in the mop-up round to apply for the remaining vacant seats."
        />
        <Step
          number={4}
          title="Private College Admissions"
          description="Seats are also available in private medical colleges. However, the fees are generally higher compared to government colleges."
        />
        <Step
          number={5}
          title="Management Quota Seats"
          description="Some private colleges offer admissions through the management quota. Depending on your budget, this can be a viable alternative."
        />
      </div>

      {/* Contact Section */}
      <div className="bg-blue-100 mt-16 p-6 md:p-10 rounded-2xl shadow-xl text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          For Personalized Help & Updates
        </h2>
        <p className="mb-4">Feel free to contact our N.S.E.T Team, Bhopal:</p>
        <div className="text-lg font-medium flex flex-col items-center gap-2">
          <span className="flex items-center gap-2">
            <Phone className="text-blue-600" />
            8109380429 / 8889060385
          </span>
          <p className="text-sm mt-2 text-gray-600">
            Address: Ayodhya Bypass, Nehru Nagar, Bhopal, MP
          </p>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: number * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md border-l-8 border-blue-500"
    >
      <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
        {number}. {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
