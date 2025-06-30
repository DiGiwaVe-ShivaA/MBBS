import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#4080ee] text-white py-12">
      <div className="lg:px-12 max-w-7xl mx-auto px-6">
        {/* Upper Section */}
        <div className="grid grid-cols-1 border-b border-gray-300 gap-8 md:grid-cols-3 pb-8">
          {/* Logo Section */}
          <div className="flex flex-col text-center items-center md:items-center">
             <Image src="/images/mbbslogo.png" alt="Logo" width={140} height={50} className="object-fill" />
            <p className="text-center text-gray-200 text-sm md:text-left mt-3">
              Your trusted guide to a career in medicine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 text-left gap-x-6 gap-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Explore Colleges", link: "/colleges/india" },
                {
                  name: "Courses",
                  link: "/courses/ug/mbbs",
                },
                // { name: "Career", link: "/career" },
                // { name: "Blogs", link: "/blogs" },
                { name: "NEET 2025", link: "/NEET2025" },
                { name: "Services", link: "/services" },
              ].map(({ name, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  className="flex text-white hover:underline items-center transition"
                >
                  <span className="mr-2">➤</span> {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Details
            </h3>
            <a
              href="tel:+918109380429"
              className="flex text-white items-center"
            >
              <FaPhoneAlt className="text-green-300 mr-2" /> +91 8109380429
            </a>
            <p className="flex text-white items-center mt-2">
              <FaEnvelope className="text-yellow-300 mr-2" />{" "}
              nsetpvtltd@gmail.com
            </p>
            <p className="flex text-white items-start mt-2">
              <FaMapMarkerAlt className="text-red-300 mr-2 mt-1" />
              APURVA ENCLAVE, NARELA SHANKARI, MADHYA PRADESH
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-between items-center md:flex-row mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              {
                icon: FaFacebookF,
                link: "https://www.facebook.com/share/1ZAU1GRZKr/",
                bg: "bg-[#1877F2]", // Facebook Blue
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/nset.pvt.ltd?igsh=YXRvdWF0c2VkOGx4",
                bg: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600", // Instagram gradient
              },
              {
                icon: FaYoutube,
                link: "https://youtube.com/@nset-b6f?si=FA34n5xgpGXEFa8K",
                bg: "bg-[#0A66C2]", // LinkedIn Blue
              },
            ].map(({ icon: Icon, link, bg }, index) => (
              <Link
                key={index}
                href={link}
                className={`text-white p-3 rounded-full transition duration-300 ${bg} shadow-md hover:scale-110`}
                aria-label="Social Media"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-200 text-sm md:mt-0 mt-4">
            © {new Date().getFullYear()} B'a'Doc. All Rights Reserved. Designed
            By <span className="text-green-200 font-semibold">DIGIWAVE</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="flex flex-col bottom-6 fixed right-6 space-y-3 z-50">
        <Link
          href="#"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} className="text-white" />
        </Link>
      </div>
    </footer>
  );
}
