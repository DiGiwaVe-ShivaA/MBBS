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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col items-center gap-8 max-w-md w-full relative">
        {/* Franchise Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border text-center w-full z-10">
          <Store size={50} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Franchise</h2>
          <p className="text-gray-600 mb-4">
            Start your own center in your city <br />
            Partner with us and grow together
          </p>
          <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-pink-50 transition">
            Apply for Franchise
          </button>
        </div>

        {/* Arrow/Connector */}
        <div className="w-1 h-10 bg-gray-300 rounded"></div>

        {/* Partnership Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border text-center w-full z-10">
          <Globe size={50} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Partnership Request</h2>
          <p className="text-gray-600 mb-4">
            For partnership and business <br />
            development inquiries
          </p>
          <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-pink-50 transition">
            hello@yourdomain.com
          </button>
        </div>
      </div>
    </div>
  );
}
