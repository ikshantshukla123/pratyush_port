import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pratyush Rohilla – Video Editor & Motion Graphics Designer",
    template: "%s | Pratyush Rohilla",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Pratyush Rohilla specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Pratyush Rohilla",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Pratyush Rohilla", url: "https://pratyush-port.vercel.app/" }],
  creator: "Pratyush Rohilla",
  publisher: "Pratyush Rohilla",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratyush-port.vercel.app/",
    title: "Pratyush Rohilla – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
    siteName: "Pratyush Rohilla Portfolio",
    images: [
      {
        url: "/pratyush.jpg",
        width: 1200,
        height: 630,
        alt: "Pratyush Rohilla - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratyush Rohilla – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "@your_twitter_handle", // update if you have one
    images: ["/pratyush.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://pratyush-port.vercel.app/",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />

        {/* Updated Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pratyush Rohilla",
              url: "https://your-domain.com",
              image: "/pratyush.jpg",
              sameAs: [
                "https://pratyush-port.vercel.app/",
                "https://linkedin.com/in/your-profile",
                "https://youtube.com/@your-channel",
                "https://twitter.com/your_twitter_handle",
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
