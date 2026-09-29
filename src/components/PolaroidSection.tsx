// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Alex_Brush, Montserrat } from "next/font/google";

// const alexBrush = Alex_Brush({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

// const montserrat = Montserrat({
//   weight: ["200", "300", "400"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function PolaroidSuccessSection() {
//   return (
//     <section className="bg-white pt-16 md:pt-24 pb-16 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 relative">
        
//         {/* Главный контейнер с фиксированной высотой для десктопа */}
//         <div className="relative min-h-[520px] flex flex-col items-center justify-start">
          
//           {/* Полароид 1 (Слева сверху) */}
//           <div className="hidden md:block absolute left-0 lg:left-2 top-4 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform -rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
//             <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
//               <Image
//                 src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600"
//                 alt="Happy mother with baby"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
//               Mommy 29 Y.O.
//             </p>
//           </div>

//           {/* Полароид 2 (Справа сверху) */}
//           <div className="hidden md:block absolute right-0 lg:right-2 top-6 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
//             <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
//               <Image
//                 src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600"
//                 alt="Family with newborn"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
//               Katrin & Samuel
//             </p>
//           </div>

//           {/* Центральный заголовок, подзаголовок и кнопка */}
//           <div className="text-center max-w-lg lg:max-w-xl mx-auto z-20 px-4 pt-2">
//             {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#412B1A] leading-snug mb-3 tracking-tight">
//               Prepare Your Mind & Body <br />
//               for a <span className="italic font-serif text-[#E2A676]">Healthy Pregnancy</span>
//             </h2> */}
//           <h2 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-extralight text-[#3A3330] leading-relaxed tracking-tight`}>
//   Prepare Your Mind &amp; Body <br />
//   for a{" "}
//   <span className={`${alexBrush.className} text-[#E26D85] text-4xl sm:text-5xl lg:text-6xl font-normal align-baseline ml-1`}>
//     Healthy Pregnancy
//   </span>
// </h2>        
//             <div className="mt-6 mb-12">
//               <Link
//                 href="#courses"
//                 className="inline-block px-7 py-2.5 bg-[#E2A676] hover:bg-[#d49462] text-white font-medium rounded-full text-xs sm:text-sm shadow-xs hover:shadow transition duration-200 relative z-30"
//               >
//                 Explore Courses
//               </Link>
//             </div>
//           </div>

//           {/* Отзыв 1 (Слева снизу) */}
//           <div className="hidden md:block absolute left-[3%] bottom-6 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform -rotate-2 hover:rotate-0 transition duration-300 z-10">
//             <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
//               &quot;The prenatal yoga classes kept me energized and calm through my second trimester. Highly recommend!&quot;
//             </p>
//             <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Anna, 28 weeks</span>
//           </div>

//           {/* Полароид 3 (Центр снизу — опушен вниз под кнопку) */}
//           <div className="hidden md:block absolute left-[50%] -translate-x-[50%] top-[310px] lg:top-[290px] bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-2 hover:rotate-0 hover:scale-105 transition duration-300 w-40 lg:w-44 z-10">
//             <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
//               <Image
//                 src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600"
//                 alt="Sleeping baby"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
//               Precious Moment
//             </p>
//           </div>

//           {/* Отзыв 2 (Справа снизу) */}
//           <div className="hidden md:block absolute right-[3%] bottom-6 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform rotate-3 hover:rotate-0 transition duration-300 z-10">
//             <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
//               &quot;Breathing techniques learned here made my delivery so much smoother than I imagined. Thank you!&quot;
//             </p>
//             <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Love, Mina</span>
//           </div>

//           {/* Адаптив для мобилок */}
//           <div className="flex md:hidden flex-wrap justify-center gap-4 mt-4">
//             <div className="bg-white p-2 pb-3 rounded-xs shadow-xs border border-black/5 w-36 transform -rotate-3">
//               <div className="relative w-full aspect-square overflow-hidden mb-1">
//                 <Image
//                   src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600"
//                   alt="Mommy"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-center font-serif italic text-[10px] text-[#6E5949]">Mommy 29 Y.O.</p>
//             </div>

//             <div className="bg-white p-2 pb-3 rounded-xs shadow-xs border border-black/5 w-36 transform rotate-3">
//               <div className="relative w-full aspect-square overflow-hidden mb-1">
//                 <Image
//                   src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600"
//                   alt="Family"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-center font-serif italic text-[10px] text-[#6E5949]">Katrin & Samuel</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
// "use client";

import Image from "next/image";
import Link from "next/link";
import { Alex_Brush, Comfortaa, Quicksand } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const POLAROIDS = [
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
    alt: "Happy mother with baby",
    caption: "Mommy, 29 y.o.",
  },
  {
    src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600",
    alt: "Family with newborn",
    caption: "Katrin & Samuel",
  },
  {
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600",
    alt: "Sleeping baby",
    caption: "Precious moment",
  },
];

const TESTIMONIALS = [
  {
    text: "The prenatal yoga classes kept me energized and calm through my second trimester. Highly recommend!",
    name: "Anna",
    meta: "28 weeks",
  },
  {
    text: "Breathing techniques learned here made my delivery so much smoother than I imagined. Thank you!",
    name: "Mina",
    meta: "New mom",
  },
];

/* Полароид: скотч сверху, мягкая тень, подпись рукописным шрифтом */
function Polaroid({
  src,
  alt,
  caption,
  rotate,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  rotate: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative bg-white p-2.5 pb-2 shadow-[0_16px_34px_rgba(74,30,12,0.13)] ring-1 ring-[#4A1E0C]/5 transition duration-300 hover:rotate-0 hover:scale-[1.04] ${rotate} ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-3 bg-[#E6CDB9]/70 shadow-sm"
      />
      <div className="relative aspect-square w-full overflow-hidden bg-[#F4E3D8]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 190px, (min-width: 1024px) 170px, 45vw"
          className="object-cover"
        />
      </div>
      <figcaption
        className={`${alexBrush.className} pt-1 text-center text-[20px] leading-tight text-[#6B4A3B]`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-[#E2A676]"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

/* Карточка отзыва */
function Testimonial({
  text,
  name,
  meta,
  rotate,
  className = "",
}: {
  text: string;
  name: string;
  meta: string;
  rotate: string;
  className?: string;
}) {
  return (
    <blockquote
      className={`relative rounded-[22px] border border-[#F0E1D6] bg-white p-5 pt-6 shadow-[0_14px_30px_rgba(74,30,12,0.08)] transition duration-300 hover:rotate-0 ${rotate} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`${comfortaa.className} absolute -top-1 left-4 select-none text-[56px] leading-none text-[#DDB99F]`}
      >
        &ldquo;
      </span>

      <p className="relative mt-3 text-[14px] leading-[1.65] text-[#6B4A3B]">
        {text}
      </p>

      <footer className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4E3D8] text-[12px] font-semibold text-[#4A1E0C]">
            {name[0]}
          </span>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-[#4A1E0C]">
              {name}
            </div>
            <div className="text-[11px] text-[#8A6656]">{meta}</div>
          </div>
        </div>
        <Stars />
      </footer>
    </blockquote>
  );
}

export default function PolaroidSuccessSection() {
  return (
    <section
      className={`${quicksand.className} relative overflow-hidden bg-white py-16 lg:py-24`}
    >
      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">
        {/* Мягкая органическая подложка в цветах hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-2 inset-y-6 bg-[#FBF3EC] lg:inset-x-6 lg:inset-y-4"
          style={{ borderRadius: "46% 54% 50% 50% / 30% 34% 66% 70%" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-[#DDB99F]/30 lg:-right-16 lg:h-56 lg:w-56"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-2 h-32 w-32 rounded-full bg-[#F4E3D8] lg:-left-14 lg:h-44 lg:w-44"
        />

        <div className="relative lg:h-[640px]">
          {/* ===== Центральный текст ===== */}
          <div className="relative z-20 mx-auto max-w-[640px] px-2 text-center lg:pt-6">
            <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
              <span className="h-px w-8 bg-[#DDB99F]" />
              Real stories
              <span className="h-px w-8 bg-[#DDB99F]" />
            </p>

            <h2
              className={`${comfortaa.className} font-light leading-[1.3] text-[#4A1E0C]`}
              style={{ fontSize: "clamp(24px,2.5vw,38px)" }}
            >
              <span className="lg:whitespace-nowrap">
                Prepare Your Mind &amp; Body
              </span>
              <br />
              <span className="lg:whitespace-nowrap">
                for a{" "}
                <span
                  className={`${alexBrush.className} ml-1 align-baseline text-[1.4em] font-normal leading-none text-[#C4705A]`}
                >
                  Healthy Pregnancy
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.65] text-[#6B4A3B] [text-wrap:balance]">
              Gentle movement, calm breathing and practical guidance, all in one
              place and at your own pace.
            </p>

            <Link
              href="#courses"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F5B58] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0"
            >
              Explore Courses
            </Link>
          </div>

          {/* ===== ДЕСКТОП: раскладка вокруг текста ===== */}
          <div className="absolute left-0 top-6 z-10 hidden w-[170px] lg:block xl:left-2 xl:w-[190px]">
            <Polaroid {...POLAROIDS[0]} rotate="-rotate-6" />
          </div>

          <div className="absolute right-0 top-12 z-10 hidden w-[170px] lg:block xl:right-2 xl:w-[190px]">
            <Polaroid {...POLAROIDS[1]} rotate="rotate-6" />
          </div>

          <div className="absolute bottom-2 left-1/2 z-10 hidden w-[160px] -translate-x-1/2 lg:block xl:w-[175px]">
            <Polaroid {...POLAROIDS[2]} rotate="rotate-2" />
          </div>

          <div className="absolute bottom-10 left-[1%] z-10 hidden w-[250px] lg:block xl:left-[3%] xl:w-[265px]">
            <Testimonial {...TESTIMONIALS[0]} rotate="-rotate-2" />
          </div>

          <div className="absolute bottom-14 right-[1%] z-10 hidden w-[250px] lg:block xl:right-[3%] xl:w-[265px]">
            <Testimonial {...TESTIMONIALS[1]} rotate="rotate-2" />
          </div>

          {/* ===== МОБИЛЬНЫЕ / ПЛАНШЕТЫ ===== */}
          <div className="relative z-10 mt-12 lg:hidden">
            <div className="mx-auto flex max-w-[520px] flex-wrap justify-center gap-x-5 gap-y-7">
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[0]} rotate="-rotate-3" />
              </div>
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[1]} rotate="rotate-3" />
              </div>
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[2]} rotate="-rotate-2" />
              </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-[460px] flex-col gap-5">
              <Testimonial {...TESTIMONIALS[0]} rotate="-rotate-1" />
              <Testimonial {...TESTIMONIALS[1]} rotate="rotate-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
