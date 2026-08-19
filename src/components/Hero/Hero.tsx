"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSectionOrganic() {
  return (
    /* Задали pt-20 sm:pt-22 md:pt-24 — это идеальная высота под фиксированный хедер */
    <section className="relative w-full overflow-hidden bg-[#FFF6F0] pt-20 sm:pt-22 md:pt-24 pb-16 md:pb-24">
      {/* Декоративный органический паттерн слева снизу */}
      <div
        className="absolute -bottom-10 -left-10 w-80 h-80 opacity-40 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#F2DFD3]">
          <path d="M44.7,-59.1C57.3,-49.8,66.6,-35.8,70.2,-20.5C73.8,-5.2,71.7,11.4,64.8,25.8C57.9,40.1,46.2,52.2,32.4,60.2C18.6,68.2,2.7,72.1,-13.4,70.1C-29.5,68.1,-45.8,60.2,-57.4,47.7C-69,35.2,-75.9,18.1,-75.4,1.4C-74.9,-15.3,-67.1,-31.6,-55.8,-41.2C-44.5,-50.8,-29.7,-53.7,-15.3,-58.5C-0.9,-63.3,13,-70,27.5,-68.4C42,-66.8,57,-56.9,44.7,-59.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Текстовый блок */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#412B1A] leading-[1.12] tracking-tight">
            Dive into the <br className="hidden sm:inline" />
            harmony of body, <br className="hidden sm:inline" />
            mind, and soul
          </h1>

         <p className="text-base sm:text-lg text-[#6E5949] max-w-md leading-relaxed font-light">
  Comprehensive guidance for pregnancy, birth, and postpartum care — supporting you every step of the way.
</p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/courses"
              className="inline-block px-9 py-4 bg-[#E2A676] hover:bg-[#d49462] text-white font-medium rounded-full shadow-sm hover:shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#E2A676] focus:ring-offset-2"
            >
              Read more
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#D5A272] border-2 border-[#FFF6F0] flex items-center justify-center text-xs text-white font-bold">
                  ★
                </div>
              </div>
              <p className="text-xs text-[#6E5949] leading-tight">
                Trusted by <span className="font-semibold text-[#412B1A]">1,200+</span><br />expecting mothers
              </p>
            </div>
          </div>
        </div>

        {/* Блок с картиной */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
          
          <div className="absolute w-[80%] h-[80%] bg-[#F3E2D4] rounded-[60%_40%_70%_30%/40%_50%_60%_50%] -z-10 blur-sm transform rotate-6 translate-x-3 -translate-y-2" />

          <div className="relative w-full max-w-[420px] aspect-square rounded-[180px_180px_90px_90px] sm:rounded-[220px_220px_110px_110px] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
              alt="Woman practicing yoga and meditation"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-2 right-4 w-12 h-12 opacity-70 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#E2A676]">
              <circle cx="20" cy="20" r="7" />
              <circle cx="50" cy="20" r="7" />
              <circle cx="80" cy="20" r="7" />
              <circle cx="35" cy="50" r="7" />
              <circle cx="65" cy="50" r="7" />
            </svg>
          </div>

        </div>

      </div>

      {/* Волна снизу */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[50px] sm:h-[80px] md:h-[110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,55 C650,150 900,10 1200,60 L1200,120 L0,120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}