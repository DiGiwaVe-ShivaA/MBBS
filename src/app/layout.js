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
  title: "MBBS Collage | Trusted Info for NEET Aspirants",
  description:
    "Get accurate, up-to-date NEET UG 2025 updates, admit card info, and college guidance.",
  icons: {
    icon: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "MBBS Collage | Trusted Info for NEET Aspirants",
    description:
      "Stay ahead with NEET UG 2025 notifications, admit cards, and guidance.",
    url: "https://www.mbbscollage.com",
    siteName: "MBBS Collage",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MBBS Collage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBBS Collage | Trusted Info for NEET Aspirants",
    description: "Get updates, admit card info, and guidance for NEET UG 2025.",
    images: ["/og-image.png"],
  },
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
