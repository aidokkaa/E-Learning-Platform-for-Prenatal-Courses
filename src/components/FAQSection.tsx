"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Alex_Brush, Comfortaa, Quicksand } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const TEXT = {
  eyebrow: "FAQ",
  titleStart: "Answers to your",
  titleAccent: "Questions",
  subtitle:
    "Everything you might want to know before you start. Can't find your answer? Just write to us.",
  ctaTitle: "Still have questions?",
  ctaText: "We are happy to help you choose the right course.",
  ctaButton: "Contact us",
  ctaHref: "/#contacts",
};

const FAQS = [
  {
    q: "Who are these courses for?",
    a: "The courses are designed for future parents at any stage of pregnancy, as well as for new mothers who want to feel confident after childbirth. You can start at any time, all lessons are built so that you can begin from the very first one.",
  },
  {
    q: "Do I need any special equipment for these courses?",
    a: "No. All you need is a phone, tablet or computer with internet access. For the practical lessons a comfortable mat and a pillow are enough.",
  },
  {
    q: "How long do I have access to the materials?",
a: "After payment you get lifetime access. You can return to any lesson as many times as you need and study at your own pace.",
  },
  {
    q: "How do I get access after payment?",
    a: "Right after the payment is confirmed, the course appears in your personal account under \"My account\". If something goes wrong, contact us and we will fix it quickly.",
  },
  {
    q: "Can I get a refund if it's not a good fit?",
    a: "Yes. If the course does not suit you, contact us within 7 days after purchase and we will review your request individually.",
  },
  {
    q: "Does the course replace a doctor's consultation?",
    a: "No. The courses are educational and do not replace a consultation with your doctor. If you have any medical concerns, please talk to your healthcare provider.",
  },
  {
    q: "Can I ask the author a question?",
    a: "Yes. If you have questions about the material, you can contact us through the contact form or messenger, and we will answer as soon as possible.",
  },
];



function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
        open
          ? "rotate-180 bg-[#1F5B58] text-white shadow-[0_6px_14px_rgba(31,91,88,0.22)]"
          : "bg-[#F7E7DC] text-[#4A1E0C]"
      }`}
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
        <path d="m5 7.5 5 5 5-5" />
      </svg>
    </span>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={`${quicksand.className} bg-white`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[820px] px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
 
        <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14">
          <ol className="flex items-center gap-2 text-[14px] text-[#8A6656]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#1F5B58]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7.5 5 5 5-5 5" />
              </svg>
            </li>
            <li aria-current="page" className="font-semibold text-[#4A1E0C]">
              FAQ
            </li>
          </ol>
        </nav>

        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            {TEXT.eyebrow}
            <span className="h-px w-8 bg-[#DDB99F]" />
          </p>

          <h1
            className={`${comfortaa.className} mb-4 font-light leading-[1.25] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            {TEXT.titleStart}{" "}
            <span
              className={`${alexBrush.className} ml-1 align-baseline text-[1.45em] font-normal leading-none text-[#C4705A]`}
            >
              {TEXT.titleAccent}
            </span>
          </h1>

          <p className="mx-auto max-w-[520px] text-[15px] leading-[1.7] text-[#6B4A3B] [text-wrap:balance] lg:text-[16px]">
            {TEXT.subtitle}
          </p>
        </div>

        {/* Аккордеон */}
        <div className="space-y-3 lg:space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-[24px] border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#DDB99F] shadow-[0_18px_40px_rgba(74,30,12,0.08)]"
                    : "border-[#F0E1D6] shadow-[0_8px_24px_rgba(74,30,12,0.03)] hover:border-[#E5CDBB]"
                }`}
              >
                <h2>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[24px] px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40 lg:px-8 lg:py-6"
                  >
                    <span
                      className={`${comfortaa.className} text-[17px] font-medium leading-snug text-[#4A1E0C] lg:text-[19px]`}
                    >
                      {item.q}
                    </span>
                    <Chevron open={isOpen} />
                  </button>
                </h2>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-[15px] leading-[1.75] text-[#6B4A3B] lg:px-8 lg:pb-7 lg:pr-20 lg:text-[16px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[28px] bg-[#FBF3EC] px-6 py-10 text-center lg:mt-20 lg:px-10 lg:py-12">
          <h3
            className={`${comfortaa.className} text-[22px] font-medium text-[#4A1E0C] lg:text-[26px]`}
          >
            {TEXT.ctaTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-[400px] text-[15px] leading-[1.65] text-[#6B4A3B]">
            {TEXT.ctaText}
          </p>
          <Link
            href={TEXT.ctaHref}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F5B58] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0"
          >
            {TEXT.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
