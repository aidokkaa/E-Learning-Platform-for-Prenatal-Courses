

import React from 'react';
import { Course } from '@/types';
import Link from 'next/link';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

interface CoursecardProps {
  item: Course;
}

const CardofCourse = ({ item }: CoursecardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#F0E1D6] bg-white p-7 shadow-[0_10px_30px_rgba(74,30,12,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DDB99F] hover:shadow-[0_24px_50px_rgba(74,30,12,0.10)]">
      {/* Декоративный блоб в углу */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 bg-[#F7E7DC] transition-transform duration-500 group-hover:scale-125"
        style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-9 top-20 h-2.5 w-2.5 rounded-full bg-[#DDB99F]/70"
      />

      {/* Заголовок */}
      <h3
        className={`${comfortaa.className} relative max-w-[88%] text-[21px] font-medium leading-[1.3] text-[#4A1E0C]`}
      >
        {item.title}
      </h3>

      {/* Теги */}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {item.category.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
              tag === 'Featured'
                ? 'bg-[#1F5B58]/10 text-[#1F5B58]'
                : 'bg-[#FBF3EC] text-[#8A5A3C]'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Описание */}
      <p className="relative mt-5 flex-grow text-[15px] leading-[1.7] text-[#6B4A3B]">
        {item.description}
      </p>

      {/* Цена и Ссылка */}
      <div className="relative mt-7 flex items-center justify-between border-t border-[#F0E1D6] pt-5">
        <span
          className={`${comfortaa.className} text-[26px] font-medium leading-none text-[#4A1E0C]`}
        >
          {item.price}
        </span>
        <Link
          href={`/courses/${item.slug}`}
          className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#1F5B58] transition-colors hover:text-[#194a48]"
        >
          Learn more
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F5B58] text-white shadow-[0_6px_14px_rgba(31,91,88,0.22)] transition-transform duration-300 group-hover:translate-x-0.5">
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
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardofCourse;


// import React from 'react';
// import { Course } from '@/types';
// import Link from 'next/link';
// import { Comfortaa } from 'next/font/google';

// const comfortaa = Comfortaa({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['400', '500', '600'],
//   display: 'swap',
// });

// interface CoursecardProps {
//   item: Course;
// }

// const CardofCourse = ({ item }: CoursecardProps) => {
//   return (
//     <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#F0E1D6] bg-white p-7 shadow-[0_10px_30px_rgba(74,30,12,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DDB99F] hover:shadow-[0_24px_50px_rgba(74,30,12,0.10)]">
//       {/* Тонкая акцентная линия сверху, появляется при наведении */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-[#1F5B58] transition-transform duration-300 group-hover:scale-x-100"
//       />

//       {/* Заголовок */}
//       <h3
//         className={`${comfortaa.className} relative text-[21px] font-medium leading-[1.3] text-[#4A1E0C]`}
//       >
//         {item.title}
//       </h3>

//       {/* Теги */}
//       <div className="relative mt-4 flex flex-wrap gap-2">
//         {item.category.map((tag) => (
//           <span
//             key={tag}
//             className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
//               tag === 'Featured'
//                 ? 'bg-[#1F5B58]/10 text-[#1F5B58]'
//                 : 'bg-[#FBF3EC] text-[#8A5A3C]'
//             }`}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Описание */}
//       <p className="relative mt-5 flex-grow text-[15px] leading-[1.7] text-[#6B4A3B]">
//         {item.description}
//       </p>

//       {/* Цена и Ссылка */}
//       <div className="relative mt-7 flex items-center justify-between border-t border-[#F0E1D6] pt-5">
//         <span
//           className={`${comfortaa.className} text-[26px] font-medium leading-none text-[#4A1E0C]`}
//         >
//           {item.price}
//         </span>
//         <Link
//           href={`/courses/${item.slug}`}
//           className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#1F5B58] transition-colors hover:text-[#194a48]"
//         >
//           Learn more
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F5B58] text-white shadow-[0_6px_14px_rgba(31,91,88,0.22)] transition-transform duration-300 group-hover:translate-x-0.5">
//             <svg
//               viewBox="0 0 20 20"
//               className="h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//             >
//               <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
//             </svg>
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CardofCourse;
