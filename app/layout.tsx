import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Hassan | Full Stack Developer",
  description: "Portfolio of Ali Hassan, a Full Stack Developer specializing in MERN-stack / Next.js applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Header />
        <SmoothScrollProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
