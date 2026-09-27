import React from 'react';
import {COURSES} from '../../data/courses/index'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CoursesCatalogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Заголовок страницы */}
      <div className="mb-16">
        <h1 className="text-5xl font-normal text-[#412B1A] mb-4">Our Courses</h1>
        <p className="text-lg text-[#6E5949] font-light max-w-2xl">
          Choose a course that helps you grow. We offer structured learning paths designed for practical results and long-term success.
        </p>
      </div>

      {/* Сетка курсов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <Link 
            key={course.id} 
            href={`/courses/${course.slug}`}
            className="group block p-8 border border-[#EAD9CE] rounded-[32px] bg-white hover:bg-[#FFF6F0] transition-all duration-300 hover:shadow-md"
          >
            {/* Иконка или изображение курса */}
            <div className="w-16 h-16 rounded-2xl bg-[#EAD9CE] flex items-center justify-center mb-8">
              <img src={course.image} alt={course.title} className="w-10 h-10 object-cover rounded-md" />
            </div>

            <h2 className="text-2xl font-normal text-[#412B1A] mb-3 group-hover:text-[#6e3412] transition">
              {course.title}
            </h2>
            
            <p className="text-[#6E5949] font-light text-sm leading-relaxed mb-6 line-clamp-3">
              {course.description}
            </p>

            <div className="flex items-center text-[#412B1A] font-medium text-sm group-hover:gap-3 transition-all">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesCatalogPage;