"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Alex_Brush, Quicksand } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const BRAND = {
  name: "Aura Mama",
  tagline: "Professional education for your journey into motherhood.",
};

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "About Us", href: "#author" },
      { label: "Contact", href: "#contacts" },
    ],
  },
];

const NEWSLETTER = {
  title: "Stay Updated",
  text: "Tips and news for future parents. No spam.",
  placeholder: "Your email",
  success: "Thank you! You are subscribed.",
};

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" }
];
export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className={`${quicksand.className} bg-[#FFFDFB] text-[#4A1E0C]`}>
      <div className="mx-auto max-w-[1180px] px-6 pb-8 pt-14 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.4fr] lg:gap-10">
          <div>
            <Link
              href="/"
              className={`${alexBrush.className} text-[38px] leading-none text-[#4A1E0C]`}
            >
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-[280px] text-[15px] leading-[1.7] text-[#6B4A3B]">
              {BRAND.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2 lg:gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8A6656]">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#6B4A3B] transition-colors hover:text-[#1F5B58]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8A6656]">
              {NEWSLETTER.title}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.6] text-[#6B4A3B]">
              {NEWSLETTER.text}
            </p>

            {done ? (
              <p className="mt-4 rounded-full bg-[#F7E7DC] px-5 py-3 text-[14px] font-medium text-[#4A1E0C]">
                {NEWSLETTER.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="relative mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  {NEWSLETTER.placeholder}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={NEWSLETTER.placeholder}
                  className="w-full rounded-full border border-[#F0E1D6] bg-white py-3.5 pl-5 pr-14 text-[15px] text-[#4A1E0C] placeholder:text-[#A58B7B] transition focus:border-[#1F5B58] focus:outline-none focus:ring-2 focus:ring-[#1F5B58]/15"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1F5B58] text-white transition hover:bg-[#194a48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40 focus-visible:ring-offset-2"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-[#F0E1D6] pt-6 text-[13px] text-[#8A6656] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>

          <ul className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#1F5B58]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
