"use client";
import { motion } from "framer-motion";
import { FaPlane, FaUniversity, FaPassport, FaPhoneAlt } from "react-icons/fa";
import { MdAttachMoney, MdCheckCircle } from "react-icons/md";

export default function StudySteps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4"
        >
          💡 How to Get Your Dream MBBS College Abroad
        </motion.h1>

        <p className="text-lg text-gray-600 mb-12">
          Step-by-step roadmap for NEET-qualified students
        </p>

        {/* Step-by-step */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            { icon: <MdCheckCircle />, text: "Clear NEET (Done? Great!)" },
            {
              icon: <FaUniversity />,
              text: "Research Country & University (Based on your budget and language)",
            },
            {
              icon: <FaPassport />,
              text: "Apply with Expert Guidance – Don’t go solo",
            },
            {
              icon: <FaPlane />,
              text: "Documentation & Visa Process – NEET score, passport, transcripts",
            },
            {
              icon: <FaPlane />,
              text: "Fly to Your Future – Globally recognized university awaits",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 border"
            >
              <div className="text-indigo-600 text-xl">{step.icon}</div>
              <p className="text-gray-700">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Budget Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border p-6 rounded-3xl shadow-xl max-w-3xl mx-auto text-left"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            💰 MBBS Abroad Within Budget – Yes, It’s Possible!
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
            <li>
              Choose countries like Russia, Kyrgyzstan, Nepal, or Bangladesh
            </li>
            <li>Look for government universities and scholarships</li>
            <li>
              Plan your finances:{" "}
              <span className="font-semibold">
                tuition + hostel + travel ≈ often less than ₹30 Lakhs total
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">
            📢 Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              "Pick the right country and college",
              "Handle admission and visa from A to Z",
              "Get transparent fee details",
              "Connect with Indian students abroad",
              "Post-admission support – you’re never alone!",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                ✅ {point}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl py-8 px-6 shadow-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">
            👩‍⚕️ Ready to Take Your Next Step?
          </h3>
          <p className="text-lg mb-6">
            Whether it’s the snowy campuses of Russia, the peaceful valleys of
            Nepal, or the dynamic cities of Germany — your international MBBS
            journey can start <span className="font-bold">now</span>.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            📞 Get FREE Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
