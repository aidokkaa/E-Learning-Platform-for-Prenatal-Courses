"use client";

import React from "react";
import { ShoppingBag, Check } from 'lucide-react';
import { courses } from "@/src/data/courses"; // Убедись, что путь к данным верный

export default function BundleForPregnancy() {
  return (
    <section className="py-20 px-4 bg-[#FFF6F0]/50">
      <div className="max-w-7xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-[#F2DFD3]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Левая колонка: Оффер */}
          <div className="md:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-[#FCECE1] rounded-full text-[#D5A272] text-xs uppercase tracking-widest font-semibold italic">
                Best Value
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#412B1A] tracking-tight leading-tight mt-6">
                "Happy Mom" Complete Bundle
              </h2>
              <p className="text-[#6E5949] text-base leading-relaxed mt-6">
                Everything you need for a calm pregnancy and safe childbirth in one expert-led package.
                From managing early symptoms to your baby’s first months.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-5xl font-bold text-[#412B1A]">$99.0</span>
                <span className="text-lg text-[#D5A272] line-through ml-3">$217.0</span>
              </div>
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-[#412B1A] text-white rounded-full font-medium tracking-wide hover:bg-[#2a1d12] transition-all w-full shadow-lg">
                <ShoppingBag strokeWidth={1.5} size={20} />
                Enroll in Bundle
              </button>
              <p className="text-xs text-[#6E5949] text-center">
                Instant access to all {courses.length} courses
              </p>
            </div>
          </div>

          {/* Правая колонка: Состав бандла */}
          <div className="md:col-span-8">
            <h3 className="text-xl font-medium text-[#412B1A] mb-8">What's included:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-start gap-4 p-5 bg-[#FFF6F0] rounded-3xl border border-[#F2DFD3]/50 hover:border-[#D9A384] transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Check size={20} className="text-[#D9A384]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#412B1A] leading-tight mb-1">
                      {course.title}
                    </h4>
                    <p className="text-xs text-[#6E5949]">
                      {course.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}