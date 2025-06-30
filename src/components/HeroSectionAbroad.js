"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import uzb from "../../public/images/uzb.png";
import amc from "../../public/images/amc.png";
import nepall from "../../public/images/nepall.png";
import geo from "../../public/images/geo.png";
import bangladesh from "../../public/images/bangladesh.png";
import philip from "../../public/images/philip.png";
import kaza from "../../public/images/kaza.png";
import russia from "../../public/images/russia.png";
import kyr from "../../public/images/kyr.png";
import italy from "../../public/images/italy.png";
import { useRouter } from "next/navigation"; // ✅ Correct for App Rou

const countries = [
  {
    name: "Russia 🇷🇺",
    fee: "₹2.5 – ₹5 Lakhs/year",
    benefits: [
      "Safe, student-friendly",
      "Recognized universities",
      "English-taught programs",
    ],
  },
  {
    name: "Kyrgyzstan 🇰🇬",
    fee: "₹2 – ₹3.5 Lakhs/year",
    benefits: [
      "Budget-friendly",
      "NMC-approved colleges",
      "Shorter travel from India",
    ],
  },
  {
    name: "Nepal 🇳🇵",
    fee: "₹5 – ₹10 Lakhs total",
    benefits: ["Culturally similar", "NEET accepted", "No visa required"],
  },
  {
    name: "USA 🇺🇸",
    fee: "Pathway via Pre-Med or MD",
    benefits: [
      "High-quality education",
      "Globally respected",
      "Scholarships available",
    ],
  },
  {
    name: "Canada 🇨🇦",
    fee: "Graduate entry route",
    benefits: ["Research focused", "Career prospects", "Practical learning"],
  },
  {
    name: "Germany 🇩🇪",
    fee: "Free or low-cost tuition",
    benefits: [
      "Excellent public universities",
      "Highly reputed",
      "German language required",
    ],
  },
  {
    name: "Afghanistan 🇦🇫",
    fee: "Affordable education",
    benefits: ["Close to India", "English-medium MBBS"],
  },
];

export default function StudyAbroad() {
  const router = useRouter();

  const handleCardClick = (country) => {
    router.push(`/countries/${country}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
          🌍 Study Abroad After NEET
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Get Your Dream Medical College Within Budget!
        </p>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg inline-block">
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            🎉 Congratulations on Clearing NEET!
          </h2>
          <p className="text-gray-700">
            Now explore top destinations abroad for your MBBS journey.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            ✈️ Why Study MBBS Abroad After NEET?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              "Affordable Fees (way lower than Indian private colleges)",
              "Global Exposure",
              "High-Quality Education",
              "World-Class Infrastructure",
              "English-Medium Courses",
              "International Recognition (WHO, MCI/NMC, ECFMG)",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                ✅ {benefit}
              </div>
            ))}
          </div>
        </div>

        {/*Study Abroad Support */}
        <section className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">
            🌍 Study Abroad Support – Top Countries
          </h2>

          <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-col-5 gap-6">
            <div
              onClick={() => handleCardClick("america")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={amc} alt="America" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">AMERICA</h3>
              <p className="text-gray-600 text-sm mt-2">
                Top universities, STEM focus, global career opportunities.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("nepal")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={nepall} alt="Nepal" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">NEPAL</h3>
              <p className="text-gray-600 text-sm mt-2">
                Student-friendly immigration, PR pathway, quality education.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("bangladesh")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={bangladesh} alt="Bangladesh" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">BANGLADESH</h3>
              <p className="text-gray-600 text-sm mt-2">
                No tuition fees in public universities, innovation & research.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("russia")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={russia} alt="Russia" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">RUSSIA</h3>
              <p className="text-gray-600 text-sm mt-2">
                Affordable tuition, medical universities, globally recognized degrees.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("kazakhstan")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={kaza} alt="Kazakhstan" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">KAZAKHSTAN</h3>
              <p className="text-gray-600 text-sm mt-2">
                Emerging education hub, cost-effective, English-medium medical courses.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("kyrgyzstan")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={kyr} alt="Kyrgyzstan" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">KYRGYZSTAN</h3>
              <p className="text-gray-600 text-sm mt-2">
                Low tuition fees, WHO-recognized medical degrees, Indian student-friendly.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("uzbekistan")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={uzb} alt="Uzbekistan" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">UZBEKISTAN</h3>
              <p className="text-gray-600 text-sm mt-2">
                Modern curriculum, English-taught MBBS, growing international reputation.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("georgia")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={geo} alt="Georgia" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">GEORGIA</h3>
              <p className="text-gray-600 text-sm mt-2">
                European education system, English-medium programs, clinical exposure.
              </p>
            </div>

            <div
              onClick={() => handleCardClick("philippines")}
              className="border border-gray-300 rounded-xl p-4 text-center shadow hover:shadow-md transition"
            >
              <Image src={philip} alt="Philippines" width={48} height={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-blue-700">PHILIPPINES</h3>
              <p className="text-gray-600 text-sm mt-2">
                US-based curriculum, English-speaking country, good FMGE passing rate.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">
            🌎 Top Countries to Study MBBS Abroad
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <h4 className="text-xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
                    {country.name}
                  </h4>
                  <p className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 inline-block rounded-full font-semibold mb-3">
                    🎓 Fees: {country.fee}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {country.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="text-sm bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full border border-indigo-100"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-xs text-gray-500 italic">#FutureDoctors</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
