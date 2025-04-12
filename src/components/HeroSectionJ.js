"use client";

import { Store, Globe, Handshake } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Franchise Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 text-center">
            <div className="flex flex-col items-center gap-3">
              <Store size={48} className="text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-800">Franchise</h2>
              <p className="text-gray-600 leading-relaxed">
                Start your own center in your city.
                <br />
                Partner with us and grow together.
                <br />
                <span className="font-medium">Experience</span> &{" "}
                <span className="font-medium">Financial Resources</span>{" "}
                required.
              </p>
              <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition">
                Apply for Franchise
              </button>
            </div>
          </div>

          {/* Partnership Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 text-center">
            <div className="flex flex-col items-center gap-3">
              <Globe size={48} className="text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-800">
                Partnership Request
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For business development & growth collaboration:
              </p>
              <ul className="text-left mt-4 text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <Handshake className="w-4 h-4 text-pink-400 mt-1" />
                  <span>
                    <strong>Commissions:</strong> Fast & transparent earnings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="w-4 h-4 text-pink-400 mt-1" />
                  <span>
                    <strong>Empowering You:</strong> Webinars by experts &
                    delegates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="w-4 h-4 text-pink-400 mt-1" />
                  <span>
                    <strong>Supportive Team:</strong> Handholding and guidance
                    throughout.
                  </span>
                </li>
              </ul>
              <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition">
                Apply for Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
