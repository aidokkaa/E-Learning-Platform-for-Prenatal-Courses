// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSectionOrganic() {
//   return (
//     /* Задали pt-20 sm:pt-22 md:pt-24 — это идеальная высота под фиксированный хедер */
//     <section className="relative w-full overflow-hidden bg-[#FFF6F0] pt-20 sm:pt-22 md:pt-24 pb-16 md:pb-24">
//       {/* Декоративный органический паттерн слева снизу */}
//       <div
//         className="absolute -bottom-10 -left-10 w-80 h-80 opacity-40 pointer-events-none z-0"
//         aria-hidden="true"
//       >
//         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#F2DFD3]">
//           <path d="M44.7,-59.1C57.3,-49.8,66.6,-35.8,70.2,-20.5C73.8,-5.2,71.7,11.4,64.8,25.8C57.9,40.1,46.2,52.2,32.4,60.2C18.6,68.2,2.7,72.1,-13.4,70.1C-29.5,68.1,-45.8,60.2,-57.4,47.7C-69,35.2,-75.9,18.1,-75.4,1.4C-74.9,-15.3,-67.1,-31.6,-55.8,-41.2C-44.5,-50.8,-29.7,-53.7,-15.3,-58.5C-0.9,-63.3,13,-70,27.5,-68.4C42,-66.8,57,-56.9,44.7,-59.1Z" transform="translate(100 100)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Текстовый блок */}
//         <div className="lg:col-span-6 space-y-6 text-left">
//           <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#412B1A] leading-[1.12] tracking-tight">
//             Dive into the <br className="hidden sm:inline" />
//             harmony of body, <br className="hidden sm:inline" />
//             mind, and soul
//           </h1>

//          <p className="text-base sm:text-lg text-[#6E5949] max-w-md leading-relaxed font-light">
//   Comprehensive guidance for pregnancy, birth, and postpartum care — supporting you every step of the way.
// </p>

//           <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
//             <Link
//               href="/courses"
//               className="inline-block px-9 py-4 bg-[#E2A676] hover:bg-[#d49462] text-white font-medium rounded-full shadow-sm hover:shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#E2A676] focus:ring-offset-2"
//             >
//               Read more
//             </Link>

//             <div className="flex items-center gap-3">
//               <div className="flex -space-x-2">
//                 <div className="w-8 h-8 rounded-full bg-[#D5A272] border-2 border-[#FFF6F0] flex items-center justify-center text-xs text-white font-bold">
//                   ★
//                 </div>
//               </div>
//               <p className="text-xs text-[#6E5949] leading-tight">
//                 Trusted by <span className="font-semibold text-[#412B1A]">1,200+</span><br />expecting mothers
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Блок с картиной */}
//         <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
          
//           <div className="absolute w-[80%] h-[80%] bg-[#F3E2D4] rounded-[60%_40%_70%_30%/40%_50%_60%_50%] -z-10 blur-sm transform rotate-6 translate-x-3 -translate-y-2" />

//           <div className="relative w-full max-w-[420px] aspect-square rounded-[180px_180px_90px_90px] sm:rounded-[220px_220px_110px_110px] overflow-hidden shadow-sm">
//             <Image
//               src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
//               alt="Woman practicing yoga and meditation"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute -bottom-2 right-4 w-12 h-12 opacity-70 pointer-events-none">
//             <svg viewBox="0 0 100 100" className="w-full h-full fill-[#E2A676]">
//               <circle cx="20" cy="20" r="7" />
//               <circle cx="50" cy="20" r="7" />
//               <circle cx="80" cy="20" r="7" />
//               <circle cx="35" cy="50" r="7" />
//               <circle cx="65" cy="50" r="7" />
//             </svg>
//           </div>

//         </div>

//       </div>

//       {/* Волна снизу */}
//       <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
//         <svg
//           className="relative block w-full h-[50px] sm:h-[80px] md:h-[110px]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0 C150,90 350,-40 500,55 C650,150 900,10 1200,60 L1200,120 L0,120 Z"
//             className="fill-white"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }
// components/HeroSection.tsx
// components/HeroSection.tsx
// components/HeroSection.tsx
// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Comfortaa, Quicksand } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const PHOTO_SRC =
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1400&auto=format&fit=crop";

const NAV = [
  { href: "#author", label: "Author" },
  { href: "#program", label: "Program" },
  { href: "#price", label: "Price" },
  { href: "#contacts", label: "Contacts" },
];


const MOBILE_MASK =
  "linear-gradient(to bottom, transparent 0%, #000 14%, #000 100%)";

function Blobs({ mask }: { mask?: string }) {
  return (
    <div
      className="absolute inset-0"
      style={mask ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M410,0 C300,150 100,350 30,650 C5,740 10,830 60,890 C100,940 170,960 240,950 C330,940 400,915 460,890 C600,830 800,760 1000,690 L1000,0 Z"
          fill="#F4E3D8"
        />
        {/* Тёмный блоб: swoosh справа, уходит под фото */}
        <path
          d="M300,290 C500,235 800,255 1000,300 L1000,757 C850,830 650,880 500,889 C420,893 350,880 300,850 Z"
          fill="#DDB99F"
        />
      </svg>
    </div>
  );
}

function PhotoBlob({ sizes }: { sizes: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{ filter: "drop-shadow(0 22px 28px rgba(74,30,12,0.18))" }}
      >
        <div
          className="absolute inset-0"
          style={{ clipPath: "url(#photoBlob)" }}
        >
          <Image
            src={PHOTO_SRC}
            alt="Mother and baby"
            fill
            priority
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  const [lang, setLang] = useState<"ENG" | "UKR">("ENG");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className={`${quicksand.className} relative flex flex-col overflow-hidden bg-[#FFFDFB] text-[#4A1E0C] lg:min-h-[780px]`}
    >
      {/* Скрытый SVG с маской для фотографии (органическая форма) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="photoBlob" clipPathUnits="objectBoundingBox">
            <path d="M0.77,0 C0.9,0 1,0.06 1,0.14 L1,0.2 C1,0.45 0.75,0.76 0.4,0.97 C0.34,1 0.27,1 0.21,0.97 C0.05,0.88 0,0.76 0,0.62 C0,0.36 0.3,0.06 0.77,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Верхняя полоска */}
      <div className="absolute left-0 top-0 z-30 h-[6px] w-full bg-[#4A2A1E]" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-[54.5vw] max-w-[760px] lg:block">
        <Blobs />

        <div
          className="absolute aspect-[565/670]"
          style={{ left: "9%", top: "12%", width: "64%" }}
        >
          <PhotoBlob sizes="30vw" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[5] h-32 w-full bg-gradient-to-b from-transparent to-white lg:h-44"
        aria-hidden="true"
      />

      {/* ===== HEADER ===== */}
      <header className="relative z-40 mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 pt-6 sm:px-6 lg:px-10 lg:pt-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#EFE4DC] bg-white text-[11px] font-semibold shadow-sm lg:h-12 lg:w-12 lg:text-[12px]">
            EP
          </div>
          <div className="text-[11px] leading-snug text-[#6B4A3B] lg:text-[12px]">
            Online courses
            <br />
            for future parents
          </div>
        </div>

        <nav className="hidden items-center gap-11 text-[14.5px] uppercase tracking-[0.06em] text-[#5A2A18] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border-2 border-[#1F5B58]">
            <button
              onClick={() => setLang("ENG")}
              className={`px-3.5 py-1.5 text-[12px] font-semibold transition-colors lg:px-4 lg:py-2 lg:text-[13px] ${
                lang === "ENG"
                  ? "bg-[#1F5B58] text-white"
                  : "bg-white text-[#1F5B58]"
              }`}
            >
              ENG
            </button>
            <button
              onClick={() => setLang("UKR")}
              className={`px-3.5 py-1.5 text-[12px] font-semibold transition-colors lg:px-4 lg:py-2 lg:text-[13px] ${
                lang === "UKR"
                  ? "bg-[#1F5B58] text-white"
                  : "bg-white text-[#1F5B58]"
              }`}
            >
              UKR
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2D3C7] bg-white/80 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[2px] w-4 rounded bg-[#4A1E0C] transition-all ${
                  menuOpen ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] h-[2px] w-4 rounded bg-[#4A1E0C] transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-4 rounded bg-[#4A1E0C] transition-all ${
                  menuOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-5 right-5 top-full mt-3 rounded-2xl border border-[#EFE4DC] bg-white p-3 shadow-[0_16px_40px_rgba(74,30,12,0.12)] sm:left-6 sm:right-6 lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-[14px] uppercase tracking-[0.06em] text-[#5A2A18] active:bg-[#F7E3D8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1180px] px-5 pb-6 pt-10 sm:px-6 lg:flex-1 lg:items-center lg:px-10 lg:pb-8 lg:pt-8">
        <div className="w-full max-w-[430px] lg:max-w-[520px] lg:pl-[4vw]">
          <p className="mb-2 text-[16px] text-[#7A5646] lg:text-[19px]">
            Class
          </p>

          <h1
            className={`${comfortaa.className} font-normal uppercase leading-[1.1] tracking-[0.02em] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(32px,3.9vw,60px)" }}
          >
            Pregnancy
            <br />
            Is A Joy!
          </h1>

          <p className="mt-4 max-w-[380px] text-[15px] leading-[1.65] text-[#6B4A3B] [text-wrap:balance] lg:mt-6 lg:max-w-[440px] lg:text-[17px]">
            In just{" "}
            <span className="mx-[-0.15em] whitespace-nowrap rounded-full bg-[#F7E3D8] px-[0.3em] py-[0.05em]">
              2 weeks
            </span>{" "}
            you will receive all the most important information about pregnancy
            with open access for 9 months!
          </p>

          <Link
            href="#program"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1F5B58] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white lg:px-11 lg:py-[18px] lg:text-[15px] shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0 sm:w-auto lg:mt-8"
          >
            Find Out More
          </Link>
          <p className="mt-4 text-[13px] text-[#6B4A3B] lg:mt-6 lg:text-[15px]">
            Trusted by <span className="font-semibold">2,000+</span> future
            mothers
          </p>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 pb-12 pt-4 lg:hidden">
        <div className="absolute right-0 top-0 h-full w-[92%] max-w-[560px] sm:w-[70%]">
          <Blobs mask={MOBILE_MASK} />
        </div>

        <div className="relative mx-auto aspect-[565/670] w-[66%] max-w-[340px] sm:max-w-[380px]">
          <PhotoBlob sizes="(max-width: 1024px) 66vw, 30vw" />
        </div>
      </div>
    </section>
  );
}


// https://dribbble.com/shots/27754401-Pregnancy-Is-a-Joy-Course-Landing-Page