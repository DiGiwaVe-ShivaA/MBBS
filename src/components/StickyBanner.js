"use client";

import { useState } from "react";
import Link from "next/link";

export default function StickyBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-56 right-6 z-[100] w-64 h-64 bg-[#00E5FF] text-black p-4 rounded-2xl shadow-2xl flex flex-col justify-between border-2 border-[#8A05FF]">
      <div>
        <h3 className="text-lg font-bold text-[#8A05FF] mb-2">
          🌟 NEET 2025 Alert!
        </h3>
        <p className="text-sm leading-relaxed">
          Admit cards are now available.{" "}
          <Link
            href="/announcements"
            className="underline font-semibold text-white hover:text-[#8A05FF]"
          >
            View details
          </Link>
        </p>
      </div>
      <button
        onClick={() => setShow(false)}
        className="text-black self-end text-xl font-bold hover:text-[#8A05FF]"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
