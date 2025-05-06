// "use client";

// import { Store, Globe } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
//         {/* Franchise Card */}
//         <div className="bg-white p-8 rounded-lg shadow-md border text-center">
//           <Store size={50} className="mx-auto text-pink-500 mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Franchise</h2>
//           <p className="text-gray-600 mb-4">
//             Start your own center in your city <br />
//             Partner with us and grow together
//           </p>
//           <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-pink-50 transition">
//             Apply for Franchise
//           </button>
//         </div>

//         {/* Partnership Card */}
//         <div className="bg-white p-8 rounded-lg shadow-md border text-center">
//           <Globe size={50} className="mx-auto text-pink-500 mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Partnership Request</h2>
//           <p className="text-gray-600 mb-4">
//             For partnership and business <br />
//             development inquiries
//           </p>
//           <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-pink-50 transition">
//             hello@yourdomain.com
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Store, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Franchise Card */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center text-center">
            <Store size={40} className="text-rose-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Franchise Opportunity
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Start your own center in your city.
              <br />
              Partner with us and grow together.
            </p>
            <button className="px-4 py-1.5 bg-rose-500 text-white text-sm rounded-full hover:bg-rose-600 transition">
              Apply for Franchise
            </button>
          </div>
        </div>

        {/* Partnership Card */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center text-center">
            <Globe size={40} className="text-sky-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Partnership Request
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              For partnership and business development inquiries.
            </p>
            <a
              href="mailto:hello@yourdomain.com"
              className="px-4 py-1.5 bg-sky-500 text-white text-sm rounded-full hover:bg-sky-600 transition"
            >
              hello@yourdomain.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
