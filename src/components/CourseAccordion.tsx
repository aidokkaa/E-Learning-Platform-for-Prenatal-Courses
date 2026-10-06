"use client";

import { useState, useEffect, useRef } from 'react';
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
  | { type: 'soon'; title: string }
  | null;

const CourseAccordion = ({ modules = [], isEnrolled = false }: CourseAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalState, setModalState] = useState<ModalState>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalState(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (modalState) {
      closeButtonRef.current?.focus();
    } else if (lastFocusedRef.current) {
      lastFocusedRef.current.focus();
      lastFocusedRef.current = null;
    }
  }, [modalState]);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLessonClick = (lesson: Lesson, isUnlocked: boolean) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    if (!isUnlocked) {
      setModalState({ type: 'locked', title: lesson.title });
    } else if (lesson.videoUrl) {
      setModalState({ type: 'video', title: lesson.title, url: lesson.videoUrl });
    } else {
      setModalState({ type: 'soon', title: lesson.title });
    }
  };

  return (
    <div className="space-y-4">
      {modules.map((module, mIdx) => {
        const isOpen = openIndex === mIdx;
        return (
          <div
            key={mIdx}
            className="border border-[#EAD9CE] rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => toggleModule(mIdx)}
              aria-expanded={isOpen}
              aria-controls={`module-panel-${mIdx}`}
              id={`module-button-${mIdx}`}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-[#412B1A] hover:bg-[#FFF6F0] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D5A272]"
            >
              <span className="text-lg font-serif">{module.title}</span>
              
              <div className="flex items-center gap-3">
                {isEnrolled ? (
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" /> Unlocked
                  </span>
                ) : (
                  <span className="text-xs bg-[#FFF6F0] text-[#6E5949] px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" /> Locked
                  </span>
                )}

                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 text-[#D5A272] transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            {isOpen && (
              <ul
                id={`module-panel-${mIdx}`}
                aria-labelledby={`module-button-${mIdx}`}
                className="px-5 pb-5 pt-2 border-t border-[#FFF6F0] space-y-2.5"
              >
                {module.lessons.map((lesson, lIdx) => {
                  const isUnlocked = isEnrolled;

                  return (
                    <li key={lIdx}>
                      <button
                        type="button"
                        onClick={() => handleLessonClick(lesson, isUnlocked)}
                        aria-haspopup="dialog"
                        className={`group w-full text-left flex items-center justify-between p-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272] ${
                          isUnlocked
                            ? 'bg-[#FFF6F0]/80 text-[#412B1A] font-medium hover:bg-[#EAD9CE]/50 hover:translate-x-1'
                            : 'bg-gray-50/70 text-gray-500 hover:bg-[#FFF6F0]/50 hover:text-[#412B1A]'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isUnlocked ? (
                            <span className="p-1.5 rounded-lg bg-white text-[#D5A272] group-hover:bg-[#412B1A] group-hover:text-[#FFF6F0] transition-colors shadow-xs">
                              <PlayCircle className="w-4 h-4" aria-hidden="true" />
                            </span>
                          ) : (
                            <span className="p-1.5 rounded-lg bg-gray-200/60 text-gray-400 group-hover:bg-[#EAD9CE] group-hover:text-[#412B1A] transition-colors">
                              <Lock className="w-4 h-4" aria-hidden="true" />
                            </span>
                          )}
                          <span>
                            {lesson.title}
                            {!isUnlocked && <span className="sr-only"> (locked)</span>}
                          </span>
                        </span>

                        {lesson.duration && (
                          <span className={`text-xs ${isUnlocked ? 'text-[#D5A272]' : 'text-gray-400'}`}>
                            {lesson.duration}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
      {modalState && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#21150C]/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setModalState(null)}
        >
          {modalState.type === 'video' && (
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="lesson-modal-title"
              className="bg-[#FFFDFB] rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] transform transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-8 py-6 bg-[#FFF6F0] border-b border-[#EAD9CE]/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#412B1A] text-[#FFF6F0] rounded-2xl shadow-sm">
                    <Sparkles className="w-5 h-5 text-[#D5A272]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 id="lesson-modal-title" className="text-xl font-serif text-[#412B1A] font-semibold leading-tight">
                      {modalState.title}
                    </h3>
                  </div>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close video"
                  onClick={() => setModalState(null)}
                  className="p-2.5 text-[#6E5949] hover:text-[#412B1A] bg-white rounded-full hover:bg-[#EAD9CE]/60 transition-all duration-200 hover:rotate-90 shadow-sm border border-[#EAD9CE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272]"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
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
          {modalState.type === 'soon' && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="lesson-modal-title"
              aria-describedby="lesson-modal-desc"
              className="bg-[#FFFDFB] rounded-[2.5rem] p-8 max-w-md w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] text-center transform transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close"
                onClick={() => setModalState(null)}
                className="absolute top-5 right-5 p-2 text-[#6E5949] hover:text-[#412B1A] bg-[#FFF6F0] hover:bg-[#EAD9CE]/60 rounded-full transition-all duration-200 hover:rotate-90 border border-[#EAD9CE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
              <div className="w-16 h-16 bg-[#FFF6F0] border border-[#EAD9CE] rounded-3xl flex items-center justify-center mx-auto mb-5 text-[#D5A272] shadow-sm">
                <PlayCircle className="w-8 h-8" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#D5A272] uppercase block mb-1">
                Video coming soon
              </span>
              <h3 id="lesson-modal-title" className="text-2xl font-serif text-[#412B1A] font-semibold mb-3">
                {modalState.title}
              </h3>
              <p id="lesson-modal-desc" className="text-sm text-[#6E5949] leading-relaxed mb-6">
                We're preparing this lesson right now. It will appear here as soon as it's ready — your access is already active.
              </p>
              <button
                type="button"
                onClick={() => setModalState(null)}
                className="w-full bg-[#412B1A] hover:bg-[#2e1f13] text-[#FFF6F0] py-3.5 px-6 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272] focus-visible:ring-offset-2"
              >
                Got it
              </button>
            </div>
          )}
          {modalState.type === 'locked' && (
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="lesson-modal-title"
              aria-describedby="lesson-modal-desc"
              className="bg-[#FFFDFB] rounded-[2.5rem] p-8 max-w-md w-full shadow-[0_25px_60px_-15px_rgba(65,43,26,0.3)] relative border border-[#EAD9CE] text-center transform transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close"
                onClick={() => setModalState(null)}
                className="absolute top-5 right-5 p-2 text-[#6E5949] hover:text-[#412B1A] bg-[#FFF6F0] hover:bg-[#EAD9CE]/60 rounded-full transition-all duration-200 hover:rotate-90 border border-[#EAD9CE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
              <div className="w-16 h-16 bg-[#FFF6F0] border border-[#EAD9CE] rounded-3xl flex items-center justify-center mx-auto mb-5 text-[#D5A272] shadow-sm">
                <Lock className="w-8 h-8" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#D5A272] uppercase block mb-1">
                Lesson unavailable
              </span>
              <h3 id="lesson-modal-title" className="text-2xl font-serif text-[#412B1A] font-semibold mb-3">
                {modalState.title}
              </h3>
              <p id="lesson-modal-desc" className="text-sm text-[#6E5949] leading-relaxed mb-6">
                This lesson is available only to registered course participants. Please enroll in the course to get full access to all materials and video lessons.
              </p>
              <div className="space-y-3">
                <a
                  href="#enroll-form"
                  onClick={() => setModalState(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#412B1A] hover:bg-[#2e1f13] text-[#FFF6F0] py-3.5 px-6 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A272] focus-visible:ring-offset-2"
                >
                  Enroll in the course <ArrowRight className="w-4 h-4 text-[#D5A272]" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setModalState(null)}
                  className="w-full py-2.5 text-xs text-[#6E5949] hover:text-[#412B1A] transition-colors focus:outline-none focus-visible:underline"
                >
                  Close
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
