import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      {/* Контейнер формы:
        Мы используем бордер (border-[#F2DFD3]), чтобы форма была видна 
        на фоне основного цвета сайта.
      */}
      <div 
        className="relative w-full max-w-5xl mx-auto py-20 px-8 text-center flex flex-col items-center justify-center overflow-hidden border border-[#F2DFD3] shadow-xl shadow-[#F2DFD3]/20"
        style={{
          // Тот самый сложный "не ромбовидный" радиус углов
          borderRadius: "80px 0 80px 0",
          backgroundColor: "#FFFFFF" // Белый цвет внутри формы для выделения на фоне
        }}
      >
        
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-medium text-[#412B1A] mb-6">
          Ready to get started?
        </h1>

        {/* Описание */}
        <p className="text-lg md:text-xl text-[#412B1A] opacity-80 max-w-2xl mb-10 leading-relaxed">
          Whether you're planning for pregnancy, newly expecting or looking for a new OB/GYN or midwife, we're here to help you take the next step.
        </p>

        {/* Кнопки */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-[#412B1A] text-white py-4 px-10 rounded-full font-medium hover:bg-[#5a3c24] transition duration-200">
            Find a doctor
          </button>
          <button className="bg-[#412B1A] text-white py-4 px-10 rounded-full font-medium hover:bg-[#5a3c24] transition duration-200">
            Make an appointment
          </button>
        </div>

        {/* Боковая панель */}
        <div className="absolute top-10 right-0 bg-[#FFF6F0] rounded-l-3xl p-3 border-l border-y border-[#F2DFD3] flex flex-col gap-4 items-center">
          {[Search, Calendar, MapPin].map((Icon, idx) => (
            <button key={idx} className="p-3 hover:bg-[#F2DFD3] rounded-full transition duration-150">
              <Icon className="w-6 h-6 text-[#412B1A]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;