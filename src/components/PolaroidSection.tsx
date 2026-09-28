"use client";

import Image from "next/image";
import Link from "next/link";
import { Alex_Brush, Montserrat } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export default function PolaroidSuccessSection() {
  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Главный контейнер с фиксированной высотой для десктопа */}
        <div className="relative min-h-[520px] flex flex-col items-center justify-start">
          
          {/* Полароид 1 (Слева сверху) */}
          <div className="hidden md:block absolute left-0 lg:left-2 top-4 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform -rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
            <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
              <Image
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600"
                alt="Happy mother with baby"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
              Mommy 29 Y.O.
            </p>
          </div>

          {/* Полароид 2 (Справа сверху) */}
          <div className="hidden md:block absolute right-0 lg:right-2 top-6 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
            <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
              <Image
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600"
                alt="Family with newborn"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
              Katrin & Samuel
            </p>
          </div>

          {/* Центральный заголовок, подзаголовок и кнопка */}
          <div className="text-center max-w-lg lg:max-w-xl mx-auto z-20 px-4 pt-2">
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#412B1A] leading-snug mb-3 tracking-tight">
              Prepare Your Mind & Body <br />
              for a <span className="italic font-serif text-[#E2A676]">Healthy Pregnancy</span>
            </h2> */}
          <h2 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-extralight text-[#3A3330] leading-relaxed tracking-tight`}>
  Prepare Your Mind &amp; Body <br />
  for a{" "}
  <span className={`${alexBrush.className} text-[#E26D85] text-4xl sm:text-5xl lg:text-6xl font-normal align-baseline ml-1`}>
    Healthy Pregnancy
  </span>
</h2>        
            <div className="mt-6 mb-12">
              <Link
                href="#courses"
                className="inline-block px-7 py-2.5 bg-[#E2A676] hover:bg-[#d49462] text-white font-medium rounded-full text-xs sm:text-sm shadow-xs hover:shadow transition duration-200 relative z-30"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Отзыв 1 (Слева снизу) */}
          <div className="hidden md:block absolute left-[3%] bottom-6 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform -rotate-2 hover:rotate-0 transition duration-300 z-10">
            <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
              &quot;The prenatal yoga classes kept me energized and calm through my second trimester. Highly recommend!&quot;
            </p>
            <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Anna, 28 weeks</span>
          </div>

          {/* Полароид 3 (Центр снизу — опушен вниз под кнопку) */}
          <div className="hidden md:block absolute left-[50%] -translate-x-[50%] top-[310px] lg:top-[290px] bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-2 hover:rotate-0 hover:scale-105 transition duration-300 w-40 lg:w-44 z-10">
            <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
              <Image
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600"
                alt="Sleeping baby"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
              Precious Moment
            </p>
          </div>

          {/* Отзыв 2 (Справа снизу) */}
          <div className="hidden md:block absolute right-[3%] bottom-6 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform rotate-3 hover:rotate-0 transition duration-300 z-10">
            <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
              &quot;Breathing techniques learned here made my delivery so much smoother than I imagined. Thank you!&quot;
            </p>
            <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Love, Mina</span>
          </div>

          {/* Адаптив для мобилок */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 mt-4">
            <div className="bg-white p-2 pb-3 rounded-xs shadow-xs border border-black/5 w-36 transform -rotate-3">
              <div className="relative w-full aspect-square overflow-hidden mb-1">
                <Image
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600"
                  alt="Mommy"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center font-serif italic text-[10px] text-[#6E5949]">Mommy 29 Y.O.</p>
            </div>

            <div className="bg-white p-2 pb-3 rounded-xs shadow-xs border border-black/5 w-36 transform rotate-3">
              <div className="relative w-full aspect-square overflow-hidden mb-1">
                <Image
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600"
                  alt="Family"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center font-serif italic text-[10px] text-[#6E5949]">Katrin & Samuel</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
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
//     <section className="bg-white pt-12 md:pt-16 pb-20 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 relative">
        
//         {/* Главный контейнер */}
//         <div className="relative flex flex-col items-center">
          
//           {/* Полароид 1 (Слева сверху) */}
//           <div className="hidden md:block absolute left-0 lg:left-2 top-2 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform -rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
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
//           <div className="hidden md:block absolute right-0 lg:right-2 top-4 bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-6 hover:rotate-0 hover:scale-105 transition duration-300 w-44 lg:w-48 z-10">
//             <div className="relative w-full aspect-square bg-[#FBF5F0] overflow-hidden mb-2 rounded-xs">
//               <Image
//                 src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600"
//                 alt="Family with newborn"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-serif italic text-[11px] text-[#6E5949]">
//               Katrin &amp; Samuel
//             </p>
//           </div>

//           {/* Блок текста и кнопки в 2 строки */}
//           <div className="text-center max-w-2xl lg:max-w-3xl mx-auto z-20 px-4 pt-4">
            
//             {/* Заголовок строго в 2 строки */}
//             <h2 className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#3A3330] leading-snug tracking-tight`}>
//               Prepare Your Mind &amp; Body <br />
//               for a{" "}
//               <span className={`${alexBrush.className} text-[#E26D85] text-5xl sm:text-6xl lg:text-7xl font-normal inline-block align-baseline ml-1`}>
//                 Healthy Pregnancy
//               </span>
//             </h2>

//             {/* Субтекст (подзаголовок) */}
//             <p className="text-[#6E5949] text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto mt-6">
//               We know this journey is tough, but you don’t have to do it alone. Get ready for labor, birth, and postpartum with expert care and guidance.
//             </p>
            
//             {/* Кнопка */}
//             <div className="mt-6 mb-8 relative z-30">
//               <Link
//                 href="#courses"
//                 className="inline-block px-8 py-3 bg-[#E2A676] hover:bg-[#d49462] text-white font-medium rounded-full text-xs sm:text-sm shadow-xs hover:shadow transition duration-200"
//               >
//                 Explore Courses
//               </Link>
//             </div>
//           </div>

//           {/* Полароид 3 (Нижний центр) */}
//           <div className="hidden md:block bg-white p-2.5 pb-4 rounded-xs shadow-md border border-black/5 transform rotate-1 hover:rotate-0 hover:scale-105 transition duration-300 w-40 lg:w-44 z-10 mt-2">
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

//           {/* Отзыв 1 (Слева снизу) */}
//           <div className="hidden md:block absolute left-[3%] bottom-2 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform -rotate-2 hover:rotate-0 transition duration-300 z-10">
//             <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
//               &quot;The prenatal yoga classes kept me energized and calm through my second trimester. Highly recommend!&quot;
//             </p>
//             <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Anna, 28 weeks</span>
//           </div>

//           {/* Отзыв 2 (Справа снизу) */}
//           <div className="hidden md:block absolute right-[3%] bottom-2 bg-[#FFF9F5] p-4 rounded-xl shadow-xs border border-[#F2DFD3] max-w-[230px] transform rotate-3 hover:rotate-0 transition duration-300 z-10">
//             <p className="text-[11px] lg:text-xs text-[#412B1A] leading-relaxed">
//               &quot;Breathing techniques learned here made my delivery so much smoother than I imagined. Thank you!&quot;
//             </p>
//             <span className="block mt-1.5 text-[10px] font-medium text-[#D5A272]">— Love, Mina</span>
//           </div>

//           {/* Мобильная версия */}
//           <div className="flex md:hidden flex-wrap justify-center gap-4 mt-6">
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
//               <p className="text-center font-serif italic text-[10px] text-[#6E5949]">Katrin &amp; Samuel</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }