import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

export default function InstantDoubtSolving() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mt-16 mb-3 text-gray-900">
        Instant <span className="text-purple-700">Doubt Solving </span>
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          {/* Gradient Circle */}
          <div className="absolute -left-16 -top-16 w-72 h-72 bg-gradient-to-br from-purple-400/10 via-purple-300/10 to-purple-500/10 rounded-full blur-3xl z-0" />

          <div className="relative z-10 space-y-8">
            {/* Doubt Solving Block */}
            <div className="flex items-start gap-4">
              <div className="text-4xl text-purple-600">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Doubts Solved ASAP
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Ask your doubts when you want, and get it solved within 5–10
                  minutes during LIVE COUNCELLING
                </p>
              </div>
            </div>

            {/* 1-to-1 Learning Block */}
            <div className="flex items-start gap-4">
              <div className="text-4xl text-purple-600">
                <PiStudentBold />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Experience 1 to 1 Counselling
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  With robust Mentor Support, experience seamless learning with
                  personal counselling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/doubtsolvingherosectionD.jpg"
            alt="Instant Doubt Solving Illustration"
            width={600}
            height={400}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
