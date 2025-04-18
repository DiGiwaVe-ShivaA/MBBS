import Image from "next/image";

export default function TestimonialsBanner() {
  const testimonials = [
    {
      quote: "A terrific piece of praise",
      img: "/avatar1.jpg",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A fantastic bit of feedback",
      img: "/avatar2.jpg",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A genuinely glowing review",
      img: "/avatar3.jpg",
      name: "Name",
      description: "Description",
    },
  ];

  return (
    <div className="bg-[#f9f9f9] px-4 py-10 space-y-8">
      {/* Testimonials */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-lg p-6 w-full sm:w-64 max-w-xs shadow-md bg-white border transition ${
              i === 0 ? "border-blue-500" : "border-transparent"
            }`}
          >
            <p className="text-base sm:text-lg italic mb-4 text-gray-700">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={t.img}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500">{t.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="bg-white border-4 border-orange-400 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left */}
        <div className="w-full md:w-1/2 bg-white px-6 py-10 flex items-center justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
            10 YEARS
            <br />
            OF SUCCESS
          </h2>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 bg-gray-800 px-6 py-10 flex flex-col items-center justify-center text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6">
            Transform Confusion Into Confidence – Schedule Your Free Career
            Counselling Call!
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold text-sm sm:text-base">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
