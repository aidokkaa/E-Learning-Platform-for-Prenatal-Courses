"use client";

import {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Alex_Brush, Comfortaa, Quicksand } from "next/font/google";
import { getAllCourses, getAllCoursesByCategory } from "@/src/lib/courses";
import CardofCourse from "../CardofCourse";

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

const CATEGORIES = ["Featured", "Pregnancy", "Baby Care", "Postpartum"];
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Indicator = { x: number; y: number; w: number; h: number };

const CourseIntro = () => {
  const [category, setCategory] = useState<string>("Featured");

  const filteredCourses = useMemo(() => {
    return getAllCoursesByCategory(getAllCourses(), category);
  }, [category]);
  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<Indicator | null>(null);

  const measure = useCallback(() => {
    const el = btnRefs.current[category];
    if (!el) return;
    setIndicator({
      x: el.offsetLeft,
      y: el.offsetTop,
      w: el.offsetWidth,
      h: el.offsetHeight,
    });
  }, [category]);

  useIsoLayoutEffect(() => {
    measure();

    const track = trackRef.current;
    if (track && typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(track);
      return () => ro.disconnect();
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <section
      id="courses"
      className={`${quicksand.className} relative z-10 w-full overflow-hidden bg-white py-16 lg:py-24`}
    >
      <div className="relative mx-auto max-w-[1180px] px-6 text-center lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl lg:mb-12">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            Learn at your pace
            <span className="h-px w-8 bg-[#DDB99F]" />
          </p>

          <h2
            className={`${comfortaa.className} mb-4 font-light leading-[1.2] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            Online{" "}
            <span
              className={`${alexBrush.className} ml-1 align-baseline text-[1.45em] font-normal leading-none text-[#C4705A]`}
            >
              Courses
            </span>
          </h2>

          <p className="mx-auto max-w-[540px] text-[15px] leading-[1.7] text-[#6B4A3B] [text-wrap:balance] lg:text-[16px]">
            Explore our expert-led programs tailored for every stage of your
            motherhood journey — from pregnancy to postpartum care.
          </p>
        </div>
        <div className="mb-12 flex justify-center lg:mb-14">
          <div
            ref={trackRef}
            className="relative inline-flex max-w-full flex-wrap justify-center gap-1.5 rounded-[28px] border border-[#F0E1D6] bg-[#FBF3EC] p-1.5 sm:rounded-full"
          >
            {indicator && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 rounded-full bg-[#1F5B58] shadow-[0_6px_16px_rgba(31,91,88,0.22)] transition-[transform,width,height] duration-[450ms] ease-[cubic-bezier(0.34,1.3,0.64,1)] motion-reduce:transition-none"
                style={{
                  width: indicator.w,
                  height: indicator.h,
                  transform: `translate(${indicator.x}px, ${indicator.y}px)`,
                }}
              />
            )}

            {CATEGORIES.map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  ref={(el) => {
                    btnRefs.current[cat] = el;
                  }}
                  onClick={() => setCategory(cat)}
                  aria-pressed={isActive}
                  className={`relative z-10 cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40 sm:px-6 ${
                    isActive
                      ? `text-white ${
                          indicator ? "" : "bg-[#1F5B58]"
                        }`
                      : "text-[#6B4A3B] hover:text-[#4A1E0C]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredCourses.map((item) => (
              <CardofCourse key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md rounded-[28px] border border-dashed border-[#DDB99F] bg-[#FDF8F4] px-6 py-12 text-center text-[15px] text-[#6B4A3B]">
            No courses found in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseIntro;
