"use client";

import { useState } from 'react';
import Link from 'next/link';
import { faqItems } from '@/src/data/faqData';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-[#FFF6F0]">
      <div className="max-w-3xl mx-auto">
        
        {/* Хлебные крошки (прижаты влево) */}
        <div className="mb-8 flex items-center gap-2 text-sm text-[#6E5949]">
          <Link 
            href="/" 
            className="hover:text-[#412B1A] font-medium transition-colors"
          >
            Главная
          </Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-[#412B1A] font-semibold">FAQ</span>
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl font-medium text-[#412B1A] mb-10 text-center">
          Answers to your Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#F2DFD3] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleQuestion(item.id)}
              >
                <span className="font-semibold text-[#412B1A] text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 text-[#412B1A] shrink-0 ml-4 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-[#412B1A] opacity-80 leading-relaxed text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;