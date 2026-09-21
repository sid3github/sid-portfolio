import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Siddharth Padwal — Senior Frontend & Agentic AI Engineer",
  description:
    "Senior Frontend Developer with 7+ years building production web products across EdTech, healthcare, sports data, and telecom — shipping 3–5× faster with parallel AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-bg text-fg`}>
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
