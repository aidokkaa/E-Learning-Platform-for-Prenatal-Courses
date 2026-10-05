"use client";
import Image from "next/image";
import Link from "next/link";
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
  "https://images.unsplash.com/photo-1560707857-b897819e06fb?auto=format&fit=crop&w=1920&q=80";

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
  );
}

export default function HeroSection() {
  return (
    <section
      className={`${quicksand.className} relative flex flex-col overflow-hidden bg-[#FFFDFB] text-[#4A1E0C] lg:min-h-[780px]`}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="photoBlob" clipPathUnits="objectBoundingBox">
            <path d="M0.77,0 C0.9,0 1,0.06 1,0.14 L1,0.2 C1,0.45 0.75,0.76 0.4,0.97 C0.34,1 0.27,1 0.21,0.97 C0.05,0.88 0,0.76 0,0.62 C0,0.36 0.3,0.06 0.77,0 Z" />
          </clipPath>
        </defs>
      </svg>

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
      <div className="relative z-20 mx-auto flex w-full max-w-[1180px] px-5 pb-6 pt-28 sm:px-6 sm:pt-32 lg:flex-1 lg:items-center lg:px-10 lg:pb-8 lg:pt-24">
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
            Start with a free lesson, then get all the most important
            information about pregnancy, with lifetime access!
          </p>

          <Link
            href="#free-class"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1F5B58] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white lg:px-11 lg:py-[18px] lg:text-[15px] shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0 sm:w-auto lg:mt-8"
          >
            Get your free lesson
          </Link>

          <p className="mt-4 text-[13px] text-[#6B4A3B] lg:mt-6 lg:text-[15px]">
            Trusted by <span className="font-semibold">450+</span> future
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
