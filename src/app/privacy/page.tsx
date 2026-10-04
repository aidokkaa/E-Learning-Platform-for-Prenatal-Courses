import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Comfortaa, Quicksand } from "next/font/google";

export const metadata: Metadata = {
  title: "Privacy Policy | EduPreg",
};

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



const SITE_NAME = "Aura Mama";
const CONTACT_EMAIL = "auramamaclub.com"; 
const LAST_UPDATED = "October 3, 2026";

type Section = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

const SECTIONS: Section[] = [
  {
    title: "1. Who we are",
    paragraphs: [
      `${SITE_NAME} is an online education platform for future and new parents. This policy explains what personal information we collect, why we collect it and how we protect it.`,
    ],
  },
  {
    title: "2. Information we collect",
    list: [
      "Account details: your name and email address when you sign up or sign in.",
      "Free class registration: your name, email, phone number (optional), pregnancy week and the class date you choose.",
      "Course enrollment: your email, the course you applied for and payment confirmations (such as a receipt) that you send us.",
      "Technical data: basic information such as browser type and pages visited, collected through cookies and server logs.",
    ],
  },
  {
    title: "3. How we use your information",
    list: [
      "To create your account and give you access to the courses you enrolled in.",
      "To send you the link to the live class on the day you selected and to answer your questions.",
      "To process and confirm course payments.",
      "To make the platform work properly and to improve it.",
    ],
    paragraphs: ["We do not sell your personal information."],
  },
  {
    title: "4. Pregnancy information",
    paragraphs: [
      "The pregnancy week you provide is used only to help us prepare relevant content for the class. You share it voluntarily, we do not use it for advertising and we do not share it with third parties.",
    ],
  },
  {
    title: "5. Who we share it with",
    paragraphs: [
      "We share data only with service providers that help us run the platform, and only as much as needed for their service. These include our sign-in provider (Clerk), our email provider (Resend) and our hosting provider. We may also disclose information if required by law.",
    ],
  },
  {
    title: "6. How long we keep it",
    paragraphs: [
      "We keep your information for as long as your account is active or as needed to provide the service. You can ask us to delete it at any time.",
    ],
  },
  {
    title: "7. Your rights",
    paragraphs: [
      `You can ask us to show, correct or delete the personal information we hold about you, or to stop sending you emails. Write to us at ${CONTACT_EMAIL} and we will respond as soon as possible.`,
    ],
  },
  {
    title: "8. Cookies",
    paragraphs: [
      "We use cookies that are necessary for signing in and keeping the site secure. If we add analytics, we will update this policy.",
    ],
  },
  {
    title: "9. Security and children",
    paragraphs: [
      "We take reasonable steps to protect your information, but no online service can be completely secure. Our platform is intended for adults and is not directed at children under 18.",
    ],
  },
  {
    title: "10. Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date of the latest update is shown at the top of this page.",
    ],
  },
];

/* ============================================================ */

export default function PrivacyPage() {
  return (
    <div className={`${quicksand.className} bg-white`}>
      <div className="mx-auto max-w-[760px] px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
        <nav aria-label="Breadcrumb" className="mb-10 lg:mb-12">
          <ol className="flex items-center gap-2 text-[14px] text-[#8A6656]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#1F5B58]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="font-semibold text-[#4A1E0C]">
              Privacy Policy
            </li>
          </ol>
        </nav>

        {/* Заголовок */}
        <header className="mb-10 lg:mb-12">
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            Legal
          </p>
          <h1
            className={`${comfortaa.className} font-light leading-[1.2] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px] text-[#8A6656]">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        {/* Разделы */}
        <div className="space-y-9">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2
                className={`${comfortaa.className} text-[19px] font-medium leading-snug text-[#4A1E0C] lg:text-[21px]`}
              >
                {section.title}
              </h2>

              {section.paragraphs?.map((text) => (
                <p
                  key={text}
                  className="mt-3 text-[15px] leading-[1.75] text-[#6B4A3B] lg:text-[16px]"
                >
                  {text}
                </p>
              ))}

              {section.list && (
                <ul className="mt-3 space-y-2.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-[1.7] text-[#6B4A3B] lg:text-[16px]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F5B58]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Контакт */}
        <div className="mt-14 rounded-[24px] bg-[#FBF3EC] px-6 py-7 text-center">
          <p className="text-[15px] text-[#6B4A3B]">
            Questions about this policy? Write to us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-[#1F5B58] underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
