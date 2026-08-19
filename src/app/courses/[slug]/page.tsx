import React from 'react';
import { courses } from '@/src/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, ChevronRight, Clock } from 'lucide-react';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) notFound();

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* ХЛЕБНЫЕ КРОШКИ */}
      <nav className="flex items-center text-sm text-[#6E5949] mb-8 font-light">
        <Link href="/" className="hover:text-[#6e3412] transition">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2 text-[#D5A272]" />
        <Link href="/courses" className="hover:text-[#6e3412] transition">Courses</Link>
        <ChevronRight className="w-4 h-4 mx-2 text-[#D5A272]" />
        <span className="text-[#412B1A] font-medium">{course.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ЛЕВАЯ ЧАСТЬ: Основной контент */}
        <div className="lg:col-span-2 space-y-10">
          <div className="w-full h-[400px] overflow-hidden rounded-[40px] bg-[#EAD9CE]">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover scale-105"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal leading-[1.2] text-[#412B1A]">
            {course.title}
          </h1>
          
          <p className="text-[#6E5949] text-lg font-light leading-relaxed">
            {course.description}
          </p>

          {/* Блок модулей */}
          <div className="bg-[#FFF6F0] p-8 rounded-[32px] border border-[#EAD9CE]">
            <h2 className="text-2xl font-serif italic text-[#412B1A] mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {course.modules.map((mod, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#F2DFD3]/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D5A272] text-[#FFF6F0] text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium text-[#412B1A]">{mod.title}</span>
                  </div>
                  <span className="text-sm text-[#6E5949] font-light">{mod.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Сайдбар */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            
            {/* Карточка цены и преимуществ */}
            <div className="p-8 border border-[#EAD9CE] rounded-[32px] bg-white shadow-sm">
              <h2 className="text-4xl font-normal text-[#412B1A] mb-4">{course.price}</h2>
              <div className="text-[#6E5949] mb-8 flex items-center gap-2 font-light">
                <Clock className="w-5 h-5 text-[#D5A272]" />
                {course.duration}
              </div>

              {/* Преимущества */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-[#6E5949] font-light">
                  <span className="text-lg">🎧</span> <span>Instructor support</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#6E5949] font-light">
                  <span className="text-lg">🐞</span> <span>Help in finding and fixing errors</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#6E5949] font-light">
                  <span className="text-lg">♾️</span> <span>Lifetime access to course materials</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#412B1A] text-[#FFF6F0] rounded-full font-medium text-sm uppercase tracking-wide hover:opacity-90 transition shadow-sm">
                Enroll Now
              </button>
            </div>

            {/* Карточка навигации */}
            <div className="p-8 border border-[#EAD9CE] rounded-[32px] bg-white shadow-sm">
              <h3 className="font-serif italic text-[#412B1A] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D5A272]" /> All Courses
              </h3>
              <div className="space-y-3">
                {courses.map((c) => (
                  <Link 
                    key={c.id} 
                    href={`/courses/${c.slug}`}
                    className={`block p-3 rounded-xl transition font-light text-sm ${
                      c.slug === slug 
                        ? 'text-[#412B1A] bg-[#EAD9CE] font-medium' 
                        : 'text-[#6E5949] hover:text-[#412B1A] hover:bg-[#FFF6F0]'
                    }`}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
};

export default CoursePage;