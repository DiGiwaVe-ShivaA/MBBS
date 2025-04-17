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
    <div className="bg-[#f9f9f9] p-6 space-y-8">
      {/* Testimonials */}
      <div className="flex gap-4 justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-lg p-4 w-64 shadow-md bg-white border ${
              i === 0 ? "border-blue-500" : "border-transparent"
            }`}
          >
            <p className="text-lg italic mb-4">“{t.quote}”</p>
            <div className="flex items-center gap-3">
              <Image
                src={t.img}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="bg-white border-4 border-orange-400 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-white px-8 py-10 flex items-center justify-center">
          <h2 className="text-5xl font-extrabold text-black leading-tight text-center md:text-left">
            10 YEARS
            <br />
            OF SUCCESS
          </h2>
        </div>
        <div className="w-full md:w-1/2 bg-gray-800 px-8 py-10 flex flex-col items-center justify-center text-center md:text-left">
          <p className="text-2xl font-semibold text-white mb-6">
            Transform Confusion Into Confidence – Schedule Your Free Career
            Counselling Call!
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-md font-bold">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
