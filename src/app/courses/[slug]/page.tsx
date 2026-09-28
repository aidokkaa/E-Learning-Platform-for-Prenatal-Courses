import { COURSES } from '@/src/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, ChevronRight, Clock, Layers } from 'lucide-react';
import CourseAccordion from '@/src/components/CourseAccordion';
import EnrollButton from '@/src/components/EnrollButton';
import EnrollForm from '@/src/components/EnrollForm';
import { currentUser } from '@clerk/nextjs/server';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  // 1. Проверяем статус пользователя в Clerk
  const user = await currentUser();
  const enrolledCourses = (user?.publicMetadata?.enrolledCourses as string[]) || [];
  const isEnrolled = enrolledCourses.includes(slug);

  const totalModules = course.modules?.length || null;
  const totalLessons = course.modules?.reduce(
    (acc, mod) => acc + mod.lessons.length, 
    0
  ) || 0;


  return (
    <div className="w-full">
      {/* 1. Ограниченный по ширине контент страницы */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Хлебные крошки / Навигация */}
        <nav className="flex items-center text-sm text-[#6E5949] mb-8 font-light">
          <Link href="/" className="hover:text-[#6e3412] transition">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-[#D5A272]" />
          <Link href="/courses" className="hover:text-[#6e3412] transition">Courses</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-[#D5A272]" />
          <span className="text-[#412B1A] font-medium">{course.title}</span>
        </nav>

        {/* Двухколоночная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* ЛЕВАЯ ЧАСТЬ: Основной контент курса */}
          <div className="lg:col-span-2 space-y-9">
            <h1 className="text-4xl sm:text-5xl font-normal leading-[1.2] text-[#412B1A]">
              {course.title}
            </h1>
            <div className="w-full h-[400px] overflow-hidden rounded-[40px] bg-[#EAD9CE]">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <p className="text-[#6E5949] text-lg font-light leading-relaxed">
              {course.description}
            </p>

            <div className="flex gap-5">
              <div id="curriculum" className="flex items-center gap-1.5 font-medium text-[#412B1A]">
                <BookOpen className="w-4 h-4 text-[#D5A272]" />
                <span>{totalModules} Modules</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[#412B1A]">
                <Layers className="w-4 h-4 text-[#D5A272]" />
                <span>{totalLessons} Lessons</span>
              </div>
            </div>

            {/* Блок модулей (передаем isEnrolled для разблокировки уроков) */}
            <div className="bg-[#FFF6F0] p-8 rounded-[32px] border border-[#EAD9CE]">
              <h2 className="text-2xl font-serif italic text-[#412B1A] mb-8">Course Curriculum</h2>
              <CourseAccordion modules={course.modules} isEnrolled={isEnrolled} />
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Сайдбар */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Карточка цены и кнопка записи */}
              <div className="p-8 border border-[#EAD9CE] rounded-[32px] bg-white shadow-sm">
                <h2 className="text-4xl font-normal text-[#412B1A] mb-4">{course.price}</h2>
                <div className="text-[#6E5949] mb-8 flex items-center gap-2 font-light">
                  <Clock className="w-5 h-5 text-[#D5A272]" />
                  {course.duration}
                </div>

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
                
                {/* Передаем статус куплен ли курс в кнопку */}
                <EnrollButton courseSlug={slug} isEnrolled={isEnrolled} />
              </div>

              {/* Навигация по остальным курсам */}
              <div className="p-8 border border-[#EAD9CE] rounded-[32px] bg-white shadow-sm">
                <h3 className="font-serif italic text-[#412B1A] mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#D5A272]" /> All Courses
                </h3>
                <div className="space-y-3">
                  {COURSES.map((c) => (
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
        {/* Здесь закрылась сетка grid-cols-3 */}

      </div> 
      {/* Здесь закрылся max-w-7xl */}

      {/* 2. Полноширинная форма записи только если пользователь НЕ записан */}
      {!isEnrolled && <EnrollForm courseSlug={slug} />}
    </div>
  );
};

export default CoursePage;