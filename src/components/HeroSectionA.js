import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="/images/heroimg.jpg" // ✅ This works because it's in /public/images/
        alt="College Counseling"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center px-4 sm:px-6 text-center">
        <p className="text-white text-sm sm:text-base md:text-lg mb-2 max-w-xl">
          Guiding students to their dream colleges with personalized support.
        </p>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Expert College
          <br />
          Counseling
          <br />
          Services
        </h1>
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-200 transition">
          GET STARTED
        </button>
      </div>
    </section>
  );
}
