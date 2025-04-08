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

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3 max-w-2xl drop-shadow-md animate-fade-in">
          Guiding students to their dream colleges <br />
          <span className="text-blue-300 font-semibold">
            with personalized support.
          </span>
        </p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-lg animate-fade-in-slow">
          <span className="text-cyan-300">Expert College</span>
          <br />
          <span className="text-pink-300">Counseling</span>
          <br />
          <span className="text-yellow-300">Services</span>
        </h1>
        <button className="bg-white text-black text-sm sm:text-base font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 animate-fade-in-delay">
          GET STARTED
        </button>
      </div>
    </section>
  );
}
