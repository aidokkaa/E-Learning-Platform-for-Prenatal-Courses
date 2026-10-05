import React from 'react';
import {COURSES} from '../../data/courses/index'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Alex_Brush, Comfortaa, Quicksand } from 'next/font/google';

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const CoursesCatalogPage = () => {
  return (
    <div className={`${quicksand.className} bg-white`}>
      <div className="mx-auto max-w-[1180px] px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            Our programs
            <span className="h-px w-8 bg-[#DDB99F]" />
          </p>

          <h1
            className={`${comfortaa.className} mb-4 font-light leading-[1.2] text-[#4A1E0C]`}
            style={{ fontSize: 'clamp(28px,3vw,44px)' }}
          >
            Our{' '}
            <span
              className={`${alexBrush.className} ml-1 align-baseline text-[1.45em] font-normal leading-none text-[#C4705A]`}
            >
              Courses
            </span>
          </h1>

          <p className="mx-auto max-w-[540px] text-[15px] leading-[1.7] text-[#6B4A3B] [text-wrap:balance] lg:text-[16px]">
            Choose a course that helps you grow. We offer structured learning paths designed for practical results and long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#F0E1D6] bg-white p-4 shadow-[0_10px_30px_rgba(74,30,12,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DDB99F] hover:shadow-[0_24px_50px_rgba(74,30,12,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 z-10 h-[3px] origin-center scale-x-0 rounded-b-full bg-[#1F5B58] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#F4E3D8]">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <h2
                  className={`${comfortaa.className} text-[21px] font-medium leading-[1.3] text-[#4A1E0C]`}
                >
                  {course.title}
                </h2>

                <p className="mt-3 line-clamp-3 flex-grow text-[15px] leading-[1.7] text-[#6B4A3B]">
                  {course.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#F0E1D6] pt-5">
                  <span className="text-[14px] font-semibold text-[#1F5B58]">
                    View Details
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F5B58] text-white shadow-[0_6px_14px_rgba(31,91,88,0.22)] transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalogPage;
