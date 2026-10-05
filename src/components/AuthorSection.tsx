"use client";

import Image from "next/image";
import { Comfortaa, Quicksand } from "next/font/google";
import DrPhoto from '../data/img/Dr.Pregn.jpg'

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



const SECTION_TITLE = "Course Creator";

const AUTHOR = {
  photo:
    DrPhoto,
  alt: "Course author",
  name: "Dr. Ingrid Lunde",
  role: "obstetrician of the perinatal center",
};

const ACHIEVEMENTS = [
  {
    label: "2011",
    text: "Graduated from the Saint Petersburg State University (SPbU), Saint Petersburg with honors.(Russia)",
  },
  {
    label: "8+ years",
    text: "Of hands-on experience in obstetrics and prenatal care.",
  },
  {
    label: "1100+",
    text: "Successful deliveries assisted throughout her career.",
  },
  {
    label: "2024",
    text: "Created the first online course for future parents.",
  },
];


export default function AuthorSection() {
  return (
    <section
      id="author"
      className={`${quicksand.className} relative scroll-mt-20 overflow-hidden bg-white py-16 lg:py-24`}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="authorBlob" clipPathUnits="objectBoundingBox">
            <path d="M0.3,0 C0.55,0 0.75,0.12 0.88,0.4 C1,0.66 1,0.9 0.85,0.97 C0.7,1.02 0.4,1 0.2,0.86 C0.05,0.74 0,0.55 0,0.4 C0,0.15 0.12,0 0.3,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-10">
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
          <div className="relative aspect-[4/5] w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 -rotate-6 scale-[1.06] bg-[#F4E3D8]"
              style={{ clipPath: "url(#authorBlob)" }}
            />
            <div
              className="absolute inset-0"
              style={{ filter: "drop-shadow(0 22px 28px rgba(74,30,12,0.16))" }}
            >
              <div
                className="absolute inset-0 bg-[#F7E3D8]"
                style={{ clipPath: "url(#authorBlob)" }}
              >
                <Image
                  src={AUTHOR.photo}
                  alt={AUTHOR.alt}
                  fill
                  sizes="(min-width: 1024px) 440px, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            About the author
          </p>

          <h2
            className={`${comfortaa.className} font-normal uppercase leading-[1.1] tracking-[0.02em] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            {SECTION_TITLE}
          </h2>
          <div className="mt-6 inline-block max-w-full rounded-[26px] bg-[#F7E7DC] px-6 py-3 text-[15px] font-semibold leading-snug text-[#4A1E0C] sm:rounded-full lg:text-[17px]">
            {AUTHOR.name}, {AUTHOR.role}
          </div>

          <div className="mt-6 h-[3px] w-14 rounded-full bg-[#1F5B58]" />
          <ul className="relative mt-8 space-y-6">
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-[#E8D3C4]"
            />

            {ACHIEVEMENTS.map((item) => (
              <li key={item.label} className="relative pl-9">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[5px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-white ring-2 ring-[#1F5B58]"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#1F5B58]" />
                </span>

                <div
                  className={`${comfortaa.className} text-[18px] font-medium leading-tight text-[#4A1E0C] lg:text-[20px]`}
                >
                  {item.label}
                </div>
                <p className="mt-1 max-w-[460px] text-[15px] leading-[1.65] text-[#6B4A3B] lg:text-[16px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
