import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aura Mama | Prenatal & Postpartum Courses",
    template: "%s | Aura Mama",
  },
  description:
    "Online courses for expecting and new mothers: prepare for birth with confidence and recover after childbirth.",
  openGraph: {
    title: "Aura Mama | Prenatal & Postpartum Courses",
    description:
      "Online courses for expecting and new mothers: prepare for birth with confidence and recover after childbirth.",
    url: "/",
    siteName: "Aura Mama",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="flex-1">
            {children}
          </main>
        <Footer></Footer>
        </body>
        
    </html>
    </ClerkProvider>
  );
}
