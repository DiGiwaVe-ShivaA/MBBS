import Image from "next/image"; // or use <img> if you're not in Next.js
// import illustration from "@/public/nepal.png"; // Replace with correct path if not using Next.js

const team = [
  {
    name: "Lara Brady",
    role: "Computer, Health",
    image: "/images/med1.jpeg",
  },
  {
    name: "Mark Porter",
    role: "Language Arts, Math",
    image: "/images/med2.webp",
  },
  {
    name: "Angela Kwang",
    role: "Health, Life Skills",
    image: "/images/med3.webp",
  },
  {
    name: "Cherlyn Long",
    role: "Science, Accounts",
    image: "/images/med4.webp",
  },
];

export default function AboutSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/lago.png"
            alt="Team illustration"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <p className="text-sm font-semibold text-teal-500 uppercase mb-2">
            Namastubhyam Saraswati Edu Tech Private Limited
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Message from the Directors
          </h2>

          <p className="text-gray-600 mb-4">
            At Namastubhyam Saraswati Edu Tech Private Limited, we firmly
            believe that making the right decision at the right time and in the
            right place is the key to unlocking your potential. Our dedicated
            team of experienced counsellors is here to help steer your career
            journey and turn challenges into stepping stones for success. With
            the unwavering support of the NSET (Namastubhyam Saraswati Edu Tech)
            team, we are committed to guiding you toward a bright future in the
            field of medicine.
          </p>

          <p className="text-gray-600 mb-4">
            At NSET, we make a career to fulfill your dreams. With decades of
            experience in the education sector, we bring world-class medical
            education opportunities within reach. We collaborate with India's
            top medical colleges and universities, as well as international
            institutions in Nepal, Bangladesh, Russia, Kazakhstan, Uzbekistan,
            Philippines, Georgia, Italy, and Germany.
          </p>

          <p className="text-gray-600 mb-4">
            Our suite of specialized services covers every step of the admission
            process—from personalized career counselling and detailed
            application guidance to support with counseling procedures for
            various quotas (state, central, NRI, and management). We ensure you
            receive ethical, transparent, and responsible service, bringing
            medical education right to your doorstep.
          </p>

          <p className="text-gray-600 mb-4">
            Whether you dream of studying in India or abroad, our team is
            dedicated to ensuring you have the support and opportunities needed
            to succeed. We believe that the key to your bright future lies in
            making well-informed decisions—and we’re here to help you do just
            that.
          </p>

          <h3 className="text-xl font-bold text-pink-500 mt-8">
            Make Your Dream a Reality.
          </h3>
        </div>
      </section>

      <section className="bg-white py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        {/* Vision & Mission */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-teal-600 text-lg font-semibold mb-2">
            Empowering Dreams
          </p>
          <p className="text-gray-700 mb-4">
            We are founded on a clearly defined objective—to bring world-class
            medical education within the reach of every deserving student.
            Whether your dream is to study in India or abroad, our mission is to
            transform your aspirations into reality.
          </p>

          <p className="text-teal-600 text-lg font-semibold mb-2">
            A Trusted Partner in Your Journey
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>For over decades:</strong> Our rich legacy in the
              education sector has enabled us to help thousands of students
              realize their dream of becoming doctors.
            </li>
            <li>
              <strong>Top Medical Colleges:</strong> We work with some of
              India's foremost medical institutions and reputed universities in
              Nepal, Bangladesh, Russia, Kazakhstan, Uzbekistan, Philippines,
              Georgia, Italy, and Germany.
            </li>
            <li>
              <strong>Comprehensive Services:</strong> From admission guidance
              to managing state, central, NRI, and management quotas—we are your
              one-stop solution.
            </li>
          </ul>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Career Counselling
              </h3>
              <p className="text-gray-700">
                Our experienced counsellors provide personalized advice to help
                you choose the right course and institution, ensuring a strong
                foundation for your career.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Admission Guidance
              </h3>
              <p className="text-gray-700">
                Step-by-step assistance from document preparation to securing
                admission in UG & PG medical programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                International Education Opportunities
              </h3>
              <p className="text-gray-700">
                Support for studying abroad—visa assistance, travel planning,
                and helping you settle confidently in your new academic journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-700">
                We operate professionally, ethically, and transparently. Your
                dream of becoming a doctor is our mission.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose NSET?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Your Success is Our Priority:</strong> Proven track record
              of guiding future doctors toward their goals.
            </li>
            <li>
              <strong>Comprehensive Expertise:</strong> We facilitate every part
              of the journey—not just admission but your full academic path.
            </li>
            <li>
              <strong>Global Reach:</strong> Choose from India’s top
              institutions or reputable universities abroad through our trusted
              partnerships.
            </li>
            <li>
              <strong>A Future-Proof Investment:</strong> Education is the best
              investment—and we ensure it's fruitful with our guidance.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        {/* Vision & Mission */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-teal-600 font-medium mb-6">
            Empowering Dreams. Building Futures.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
            At <span className="font-semibold">NSET</span>, we believe that the
            right guidance at the right time can open doors to life-changing
            opportunities. Our goal is simple — to make world-class medical
            education accessible to every deserving student, whether in India or
            abroad.
          </p>
        </div>

        {/* Trusted Journey */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">
            A Trusted Partner in Your Journey
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc list-inside">
            <li>
              <strong>Legacy of Excellence:</strong> With decades of experience,
              we’ve helped thousands of students turn their dreams into reality.
            </li>
            <li>
              <strong>Global Reach:</strong> From India to countries like Nepal,
              Bangladesh, Russia, Georgia, Italy & more — we connect you to top
              medical institutions.
            </li>
            <li>
              <strong>All-in-One Support:</strong> Be it career counselling,
              admission guidance, or application handling — we’re with you every
              step of the way.
            </li>
          </ul>
        </div>

        {/* What We Offer */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            We don’t just guide, we walk the journey with you — from choosing
            the right college to stepping onto campus.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Career Counselling
              </h3>
              <p className="text-gray-700">
                Honest, personalized advice to help you pick the right path. We
                listen, we care, and we guide you accordingly.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Admission Guidance
              </h3>
              <p className="text-gray-700">
                From paperwork to final admission, our expert team simplifies
                every step for both UG and PG medical programs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Study Abroad Assistance
              </h3>
              <p className="text-gray-700">
                Visa help, travel planning, and settling in — everything you
                need for a smooth transition to your international education.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Continued Support
              </h3>
              <p className="text-gray-700">
                We’re not just a service — we’re your extended family, committed
                to your success every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose NSET */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Why Choose NSET?
          </h2>
          <p className="text-teal-600 font-medium mb-6 text-lg">
            Because your dream deserves the best path forward.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-left list-disc list-inside">
            <li>
              <strong>Your Success is Our Mission:</strong> We go above and
              beyond to make sure you get where you want to be.
            </li>
            <li>
              <strong>Expertise That Counts:</strong> From local colleges to
              international universities — we know the ins and outs.
            </li>
            <li>
              <strong>Global Connections:</strong> We work with top institutions
              across Asia and Europe to open more doors for you.
            </li>
            <li>
              <strong>Value-Driven:</strong> Education is a lifetime investment
              — and we help you make it wisely.
            </li>
          </ul>
        </div>

        {/* Motto */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-teal-600">
            “Make your dream a reality.”
          </h3>
          <p className="text-gray-500 mt-2">
            — That’s not just our motto, it’s our promise.
          </p>
        </div>
      </section>

      <section className=" bg-white text-center">
        <h3 className="text-sm font-semibold text-emerald-500 tracking-wide mb-2">
          Quisquam
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Meet The Leadership Team
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Reudiandae sint et molestiae non recusandae. Itaque earum rerum hic
          tenetur a sapiente delectus, reiciendis voluptatibus maiores alias
          consequatur.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9fc] border-t-4 border-emerald-400 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-700">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                <i className="fab fa-facebook text-purple-600"></i>
                <i className="fab fa-twitter text-purple-600"></i>
                <i className="fab fa-instagram text-purple-600"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f6f6fe] text-center">
        <h3 className="text-sm font-semibold text-emerald-500 tracking-wide mb-2">
          Mbbs wala
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Helping 4M+ Students Find Job
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          “Make your dream a reality.”
        </p>

        <div className="flex justify-center gap-8 flex-wrap items-center">
          {/* Replace src with your actual logos */}
          {[
            "/images/america.webp",
            "/images/cana.webp",
            "/images/germn.jpg",
            "/images/nepal.png",
            "/images/italy.png",
            "/images/Kyrgyzstan.jpg",
            "/images/Uzbekistan.webp",
            "/images/Georgia.webp",
            "/images/Philippines.png",
            "/images/america.webp",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="h-12 opacity-80"
            />
          ))}
        </div>
      </section>
    </>
  );
}
