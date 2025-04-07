import {
  FaUser,
  FaStar,
  FaUsers,
  FaInfinity,
  FaCreditCard,
  FaClock,
  FaLanguage,
  FaVirusSlash,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUser />,
    title: "Anyone",
    subtitle: "Can Join Us (Appearing/Non Appearing)",
  },
  {
    icon: <FaStar />,
    title: "4.9+",
    subtitle: "Our Rating",
  },
  {
    icon: <FaUsers />,
    title: "5000+",
    subtitle: "Students",
  },
  {
    icon: <FaInfinity />,
    title: "100%",
    subtitle: "Assistance",
  },
  {
    icon: <FaCreditCard />,
    title: "Once a Contact",
    subtitle: "Always Prime",
  },
  {
    icon: <FaClock />,
    title: "24Hrs+",
    subtitle: "Working Team",
  },
  {
    icon: <FaLanguage />,
    title: "Tough Process",
    subtitle: "Made Simple",
  },
  {
    icon: <FaVirusSlash />,
    title: "Trust US",
    subtitle: "Will Resolve all Errors",
  },
];

export default function CourseFeatures() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700">
          Our Commitment to You
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">
          Here's how we go the extra mile to make your journey smoother and more
          supported.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full mb-4 mx-auto">
              <div className="text-purple-600 text-xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 text-center mt-1">
              {feature.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
