"use client";

import { useState } from "react";
import Link from "next/link";

export default function StickyBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-56 right-6 z-[100] w-72 h-44 bg-[#00E5FF] text-black p-4 rounded-2xl shadow-2xl flex flex-col justify-between border-2 border-[#8A05FF]">
      <div className="relative overflow-hidden h-28">
        <div className="animate-vertical-marquee hover:[animation-play-state:paused] space-y-4">
          <div className="text-sm leading-relaxed text-center">
            <h3 className="text-lg font-bold text-[#8A05FF] mb-1">
              🚨 Update NEET Counseling 2025! (UG and PG)
            </h3>
            🎟 Admit cards are out now!{" "}
            <Link
              href="/announcements"
              className="underline font-semibold text-white hover:text-[#8A05FF]"
            >
              View details
            </Link>
          </div>
          <div className="text-sm leading-relaxed text-center">
            ✅ NEET 2025 Results are live.{" "}
            <a
              href="https://exams.nta.ac.in/NEET/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-white hover:text-[#8A05FF]"
            >
              Check your result
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShow(false)}
        className="text-black self-end text-xl font-bold hover:text-[#8A05FF] mt-2"
        aria-label="Dismiss banner"
      >
        ✕
      </button>

      {/* Custom styles for vertical marquee animation */}
      <style jsx>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-vertical-marquee {
          display: flex;
          flex-direction: column;
          animation: vertical-marquee 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
