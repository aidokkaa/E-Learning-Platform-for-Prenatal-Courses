"use client";

import React, { useState, useMemo } from "react";
import { getAllCourses, getAllCoursesByCategory } from "@/src/lib/courses";
import CardofCourse from "../CardofCourse";

const CATEGORIES = ["Featured", "Pregnancy", "Baby Care", "Postpartum"];

const CourseIntro = () => {
  const [category, setCategory] = useState<string>("Featured");

  const filteredCourses = useMemo(() => {
    return getAllCoursesByCategory(getAllCourses(), category);
  }, [category]);

  return (
    <section id="courses" className="bg-white relative z-10 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Заголовок и подзаголовок */}
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#412B1A] mb-4 leading-tight">
            Online <span className="italic font-serif text-[#E2A676]">Courses</span>
          </h2>
          
          <p className="text-[#6E5949] text-sm sm:text-base font-light leading-relaxed">
            Explore our expert-led programs tailored for every stage of your motherhood journey — from pregnancy to postpartum care.
          </p>
        </div>

        {/* Переключатель категорий (Pills Filter) */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? "bg-[#412B1A] text-white shadow-sm scale-105"
                    : "bg-[#FFF6F0] text-[#6E5949] hover:bg-[#F7E5D9] hover:text-[#412B1A] border border-[#F2DFD3]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Сетка карточек курсов */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredCourses.map((item) => (
              <CardofCourse key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-[#6E5949] text-sm font-light">
            No courses found in this category yet.
          </div>
        )}

      </div>
    </section>
  );
};

export default CourseIntro;