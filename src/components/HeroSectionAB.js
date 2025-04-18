"use client";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  return (
    <div className="w-full h-48 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/dosa2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay content */}
    </div>
  );
}
