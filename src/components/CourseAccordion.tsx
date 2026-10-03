// "use client";

// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronDown, 
//   Lock, 
//   CheckCircle, 
//   PlayCircle, 
//   X, 
//   Sparkles, 
//   ArrowRight,
//   ShieldAlert
// } from 'lucide-react';

// interface Lesson {
//   title: string;
//   duration?: string;
//   videoUrl?: string;
// }

// interface Module {
//   title: string;
//   lessons: Lesson[];
// }

// interface CourseAccordionProps {
//   modules?: Module[];
//   isEnrolled?: boolean;
// }

// type ModalState = 
//   | { type: 'video'; title: string; url: string }
//   | { type: 'locked'; title: string }
//   | null;

// const CourseAccordion = ({ modules = [], isEnrolled = false }: CourseAccordionProps) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);
//   const [modalState, setModalState] = useState<ModalState>(null);

//   // Закрытие модального окна по кнопке ESC
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setModalState(null);
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   const toggleModule = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleLessonClick = (lesson: Lesson, isUnlocked: boolean) => {
//     if (isUnlocked && lesson.videoUrl) {
//       setModalState({ type: 'video', title: lesson.title, url: lesson.videoUrl });
//     } else {
//       setModalState({ type: 'locked', title: lesson.title });
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {modules.map((module, mIdx) => {
//         const hasFreeLesson = mIdx === 0;

//         return (
//           <div
//             key={mIdx}
//             className="border border-[#EAD9CE] rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
//           >
//             {/* Заголовок модуля */}
//             <button
//               onClick={() => toggleModule(mIdx)}
//               className="w-full flex items-center justify-between p-5 text-left font-medium text-[#412B1A] hover:bg-[#FFF6F0] transition"
//             >
//               <span className="text-lg font-serif">{module.title}</span>
              
//               <div className="flex items-center gap-3">
//                 {isEnrolled ? (
//                   <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
//                     <CheckCircle className="w-3.5 h-3.5" /> Unlocked
//                   </span>
//                 ) : hasFreeLesson ? (
//                   <span className="text-xs bg-[#EAD9CE]/60 text-[#412B1A] px-3 py-1 rounded-full font-medium flex items-center gap-1.5 border border-[#D5A272]/30">
//                     <PlayCircle className="w-3.5 h-3.5 text-[#D5A272]" /> Free Preview
//                   </span>
//                 ) : (
//                   <span className="text-xs bg-[#FFF6F0] text-[#6E5949] px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
//                     <Lock className="w-3.5 h-3.5" /> Locked
//                   </span>
//                 )}

//                 <ChevronDown
//                   className={`w-5 h-5 text-[#D5A272] transition-transform duration-300 ${
//                     openIndex === mIdx ? 'transform rotate-180' : ''
//                   }`}
//                 />
//               </div>
//             </button>

//             {/* Список уроков */}
//             {openIndex === mIdx && (
//               <div className="px-5 pb-5 pt-2 border-t border-[#FFF6F0] space-y-2.5">
//                 {module.lessons.map((lesson, lIdx) => {
//                   const isUnlocked = isEnrolled || (mIdx === 0 && lIdx === 0);

//                   return (
//                     <div
//                       key={lIdx}
//                       onClick={() => handleLessonClick(lesson, isUnlocked)}
//                       className={`group flex items-center justify-between p-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
//                         isUnlocked
//                           ? 'bg-[#FFF6F0]/80 text-[#412B1A] font-medium hover:bg-[#EAD9CE]/50 hover:translate-x-1'
//                           : 'bg-gray-50/70 text-gray-500 hover:bg-[#FFF6F0]/50 hover:text-[#412B1A]'
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         {isUnlocked ? (
//                           <div className="p-1.5 rounded-lg bg-white text-[#D5A272] group-hover:bg-[#412B1A] group-hover:text-[#FFF6F0] transition-colors shadow-xs">
//                             <PlayCircle className="w-4 h-4" />
//                           </div>
//                         ) : (
//                           <div className="p-1.5 rounded-lg bg-gray-200/60 text-gray-400 group-hover:bg-[#EAD9CE] group-hover:text-[#412B1A] transition-colors">
//                             <Lock className="w-4 h-4" />
//                           </div>
//                         )}
//                         <span>{lesson.title}</span>
//                       </div>

//                       <div className="flex items-center gap-3">
//                         {!isEnrolled && mIdx === 0 && lIdx === 0 && (
//                           <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase bg-[#D5A272] text-white px-2.5 py-1 rounded-full font-bold shadow-xs animate-pulse">
//                             <Sparkles className="w-3 h-3" /> Watch Preview
//                           </span>
//                         )}

//                         {lesson.duration && (
//                           <span className={`text-xs ${isUnlocked ? 'text-[#D5A272]' : 'text-gray-400'}`}>
//                             {lesson.duration}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}

//       {/* ОБЩЕЕ МОДАЛЬНОЕ ОКНО */}
//       {modalState && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#21150C]/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
//           onClick={() => setModalState(null)}
//         >
//           {/* Вариант 1: Модалка с ВИДЕО */}
//           {modalState.type === 'video' && (
//             <div 
//               className="bg-[#FFFDFB] rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] transform transition-all duration-300 animate-in zoom-in-95"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Шапка */}
//               <div className="flex justify-between items-center px-8 py-6 bg-[#FFF6F0] border-b border-[#EAD9CE]/60">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 bg-[#412B1A] text-[#FFF6F0] rounded-2xl shadow-sm">
//                     <Sparkles className="w-5 h-5 text-[#D5A272]" />
//                   </div>
//                   <div>
//                     {!isEnrolled && (
//                       <span className="text-[11px] font-bold tracking-widest text-[#D5A272] uppercase block">
//                         Free Course Preview
//                       </span>
//                     )}
//                     <h3 className="text-xl font-serif text-[#412B1A] font-semibold leading-tight">
//                       {modalState.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setModalState(null)}
//                   className="p-2.5 text-[#6E5949] hover:text-[#412B1A] bg-white rounded-full hover:bg-[#EAD9CE]/60 transition-all duration-200 hover:rotate-90 shadow-sm border border-[#EAD9CE]/40"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Видеоплеер */}
//               <div className="p-4 sm:p-6 bg-[#FFFDFB]">
//                 <div className="relative aspect-video w-full bg-[#21150C] rounded-2xl overflow-hidden shadow-inner border border-[#412B1A]/10">
//                   {modalState.url.endsWith('.mp4') ? (
//                     <video
//                       src={modalState.url}
//                       controls
//                       autoPlay
//                       className="w-full h-full object-contain"
//                     />
//                   ) : (
//                     <iframe
//                       src={modalState.url}
//                       title={modalState.title}
//                       className="w-full h-full"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* CTA снизу */}
//               {!isEnrolled && (
//                 <div className="px-8 py-5 bg-[#FFF6F0]/80 border-t border-[#EAD9CE]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
//                   <p className="text-xs text-[#6E5949] font-medium text-center sm:text-left">
//                     Понравился превью-урок? Запишитесь на курс, чтобы открыть полный доступ!
//                   </p>
//                   <a
//                     href="#enroll-form"
//                     onClick={() => setModalState(null)}
//                     className="inline-flex items-center gap-2 bg-[#412B1A] hover:bg-[#2e1f13] text-[#FFF6F0] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-105"
//                   >
//                     Записаться сейчас <ArrowRight className="w-3.5 h-3.5" />
//                   </a>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Вариант 2: Модалка для ЗАБЛОКИРОВАННОГО урока */}
//           {modalState.type === 'locked' && (
//             <div 
//               className="bg-[#FFFDFB] rounded-[2.5rem] p-8 max-w-md w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] text-center transform transition-all duration-300 animate-in zoom-in-95"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Кнопка закрытия */}
//               <button
//                 onClick={() => setModalState(null)}
//                 className="absolute top-5 right-5 p-2 text-[#6E5949] hover:text-[#412B1A] bg-[#FFF6F0] hover:bg-[#EAD9CE]/60 rounded-full transition-all duration-200 hover:rotate-90 border border-[#EAD9CE]/40"
//               >
//                 <X className="w-4 h-4" />
//               </button>

//               {/* Иконка замка */}
//               <div className="w-16 h-16 bg-[#FFF6F0] border border-[#EAD9CE] rounded-3xl flex items-center justify-center mx-auto mb-5 text-[#D5A272] shadow-sm">
//                 <Lock className="w-8 h-8" />
//               </div>

//               {/* Заголовок и описание */}
//               <span className="text-[11px] font-bold tracking-widest text-[#D5A272] uppercase block mb-1">
//                 Урок недоступен
//               </span>
//               <h3 className="text-2xl font-serif text-[#412B1A] font-semibold mb-3">
//                 {modalState.title}
//               </h3>
//               <p className="text-sm text-[#6E5949] leading-relaxed mb-6">
//                 Этот урок доступен только зарегистрированным участникам курса. Пожалуйста, запишитесь на курс, чтобы получить полный доступ ко всем материалам и видеоурокам.
//               </p>

//               {/* Кнопки действий */}
//               <div className="space-y-3">
//                 <a
//                   href="#enroll-form"
//                   onClick={() => setModalState(null)}
//                   className="w-full inline-flex items-center justify-center gap-2 bg-[#412B1A] hover:bg-[#2e1f13] text-[#FFF6F0] py-3.5 px-6 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02]"
//                 >
//                   Записаться на курс <ArrowRight className="w-4 h-4 text-[#D5A272]" />
//                 </a>
//                 <button
//                   onClick={() => setModalState(null)}
//                   className="w-full py-2.5 text-xs text-[#6E5949] hover:text-[#412B1A] transition-colors"
//                 >
//                   Закрыть
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseAccordion;

"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Lock, 
  CheckCircle, 
  PlayCircle, 
  X, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface Lesson {
  title: string;
  duration?: string;
  videoUrl?: string;
}

interface Module {
  title: string;
  lessons: Lesson[];
}

interface CourseAccordionProps {
  modules?: Module[];
  isEnrolled?: boolean;
}

type ModalState = 
  | { type: 'video'; title: string; url: string }
  | { type: 'locked'; title: string }
  | null;

const CourseAccordion = ({ modules = [], isEnrolled = false }: CourseAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalState, setModalState] = useState<ModalState>(null);

  // Закрытие модального окна по кнопке ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalState(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLessonClick = (lesson: Lesson, isUnlocked: boolean) => {
    if (isUnlocked && lesson.videoUrl) {
      setModalState({ type: 'video', title: lesson.title, url: lesson.videoUrl });
    } else {
      setModalState({ type: 'locked', title: lesson.title });
    }
  };

  return (
    <div className="space-y-4">
      {modules.map((module, mIdx) => {
        return (
          <div
            key={mIdx}
            className="border border-[#EAD9CE] rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Заголовок модуля */}
            <button
              onClick={() => toggleModule(mIdx)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-[#412B1A] hover:bg-[#FFF6F0] transition"
            >
              <span className="text-lg font-serif">{module.title}</span>
              
              <div className="flex items-center gap-3">
                {isEnrolled ? (
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5" /> Unlocked
                  </span>
                ) : (
                  <span className="text-xs bg-[#FFF6F0] text-[#6E5949] px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Locked
                  </span>
                )}

                <ChevronDown
                  className={`w-5 h-5 text-[#D5A272] transition-transform duration-300 ${
                    openIndex === mIdx ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Список уроков */}
            {openIndex === mIdx && (
              <div className="px-5 pb-5 pt-2 border-t border-[#FFF6F0] space-y-2.5">
                {module.lessons.map((lesson, lIdx) => {
                  // Все уроки закрыты, пока пользователь не записан на курс
                  const isUnlocked = isEnrolled;

                  return (
                    <div
                      key={lIdx}
                      onClick={() => handleLessonClick(lesson, isUnlocked)}
                      className={`group flex items-center justify-between p-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
                        isUnlocked
                          ? 'bg-[#FFF6F0]/80 text-[#412B1A] font-medium hover:bg-[#EAD9CE]/50 hover:translate-x-1'
                          : 'bg-gray-50/70 text-gray-500 hover:bg-[#FFF6F0]/50 hover:text-[#412B1A]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isUnlocked ? (
                          <div className="p-1.5 rounded-lg bg-white text-[#D5A272] group-hover:bg-[#412B1A] group-hover:text-[#FFF6F0] transition-colors shadow-xs">
                            <PlayCircle className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="p-1.5 rounded-lg bg-gray-200/60 text-gray-400 group-hover:bg-[#EAD9CE] group-hover:text-[#412B1A] transition-colors">
                            <Lock className="w-4 h-4" />
                          </div>
                        )}
                        <span>{lesson.title}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {lesson.duration && (
                          <span className={`text-xs ${isUnlocked ? 'text-[#D5A272]' : 'text-gray-400'}`}>
                            {lesson.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* ОБЩЕЕ МОДАЛЬНОЕ ОКНО */}
      {modalState && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#21150C]/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setModalState(null)}
        >
          {/* Вариант 1: Модалка с ВИДЕО (только для записанных на курс) */}
          {modalState.type === 'video' && (
            <div 
              className="bg-[#FFFDFB] rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] transform transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Шапка */}
              <div className="flex justify-between items-center px-8 py-6 bg-[#FFF6F0] border-b border-[#EAD9CE]/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#412B1A] text-[#FFF6F0] rounded-2xl shadow-sm">
                    <Sparkles className="w-5 h-5 text-[#D5A272]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#412B1A] font-semibold leading-tight">
                      {modalState.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setModalState(null)}
                  className="p-2.5 text-[#6E5949] hover:text-[#412B1A] bg-white rounded-full hover:bg-[#EAD9CE]/60 transition-all duration-200 hover:rotate-90 shadow-sm border border-[#EAD9CE]/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Видеоплеер */}
              <div className="p-4 sm:p-6 bg-[#FFFDFB]">
                <div className="relative aspect-video w-full bg-[#21150C] rounded-2xl overflow-hidden shadow-inner border border-[#412B1A]/10">
                  {modalState.url.endsWith('.mp4') ? (
                    <video
                      src={modalState.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <iframe
                      src={modalState.url}
                      title={modalState.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Вариант 2: Модалка для ЗАБЛОКИРОВАННОГО урока */}
          {modalState.type === 'locked' && (
            <div 
              className="bg-[#FFFDFB] rounded-[2.5rem] p-8 max-w-md w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] text-center transform transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setModalState(null)}
                className="absolute top-5 right-5 p-2 text-[#6E5949] hover:text-[#412B1A] bg-[#FFF6F0] hover:bg-[#EAD9CE]/60 rounded-full transition-all duration-200 hover:rotate-90 border border-[#EAD9CE]/40"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Иконка замка */}
              <div className="w-16 h-16 bg-[#FFF6F0] border border-[#EAD9CE] rounded-3xl flex items-center justify-center mx-auto mb-5 text-[#D5A272] shadow-sm">
                <Lock className="w-8 h-8" />
              </div>

              {/* Заголовок и описание */}
              <span className="text-[11px] font-bold tracking-widest text-[#D5A272] uppercase block mb-1">
                Урок недоступен
              </span>
              <h3 className="text-2xl font-serif text-[#412B1A] font-semibold mb-3">
                {modalState.title}
              </h3>
              <p className="text-sm text-[#6E5949] leading-relaxed mb-6">
                Этот урок доступен только зарегистрированным участникам курса. Пожалуйста, запишитесь на курс, чтобы получить полный доступ ко всем материалам и видеоурокам.
              </p>

              {/* Кнопки действий */}
              <div className="space-y-3">
                <a
                  href="#enroll-form"
                  onClick={() => setModalState(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#412B1A] hover:bg-[#2e1f13] text-[#FFF6F0] py-3.5 px-6 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02]"
                >
                  Записаться на курс <ArrowRight className="w-4 h-4 text-[#D5A272]" />
                </a>
                <button
                  onClick={() => setModalState(null)}
                  className="w-full py-2.5 text-xs text-[#6E5949] hover:text-[#412B1A] transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseAccordion;
