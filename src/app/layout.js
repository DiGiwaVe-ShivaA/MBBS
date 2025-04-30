import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyBanner from "@/components/StickyBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MbbsCollage",
  description:
    "Stay updated with NEET (UG) 2025 announcements, guides, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyBanner />
        {children}
      </body>
    </html>
  );
}
