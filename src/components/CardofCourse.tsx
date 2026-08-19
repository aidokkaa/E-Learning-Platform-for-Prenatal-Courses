import React from 'react';
import { Course } from '@/types';
import Link from 'next/link';

interface CoursecardProps {
  item: Course;
}

const CardofCourse = ({ item }: CoursecardProps) => {
  return (
    <div className="flex flex-col p-6 border border-[#F2DFD3] rounded-[32px] hover:border-[#D1B399] transition-all duration-300">
      {/* Заголовок */}
      <h3 className="text-xl font-bold text-[#412B1A] leading-tight">{item.title}</h3>

      {/* Теги */}
      <div className="flex flex-wrap gap-2 mt-3">
        {item.category.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-[#F9F1EB] text-[#8B5A2B] rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Описание */}
      <p className="text-[#6B4F3A] mt-4 text-sm leading-relaxed flex-grow">
        {item.description}
      </p>

      {/* Цена и Ссылка */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold text-[#412B1A]">{item.price}</span>
        <Link 
          href={`/courses/${item.slug}`}
          className="text-[#8B5A2B] font-semibold hover:text-[#412B1A] transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default CardofCourse;