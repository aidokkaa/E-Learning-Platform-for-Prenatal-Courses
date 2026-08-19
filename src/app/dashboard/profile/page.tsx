import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  // Если юзер не авторизован — принудительно перекидываем на главную
  if (!userId) {
    redirect("/");
  }

  return (
  <div className="space-y-8">
      
      {/* 🌸 ВЕРХНИЙ ВИДЖЕТ БЕРЕМЕННОСТИ */}
      <div className="bg-[#FFF6F0] border border-[#EAD9CE] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-block bg-[#EAD9CE]/60 text-[#412B1A] text-xs font-medium tracking-wider uppercase px-3.5 py-1 rounded-full mb-2">
              2nd Trimester
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#412B1A]">
              Week 24 of <span className="italic text-[#D5A272] font-serif">pregnancy</span>
            </h2>
            <p className="text-[#6E5949] text-sm font-light mt-1">
              Your baby is currently about the size of an eggplant (~11.8 in)
            </p>
          </div>
          <div className="bg-white border border-[#EAD9CE] rounded-2xl px-4 py-3 text-left sm:text-right self-start sm:self-auto">
            <span className="text-xs text-[#6E5949] block font-light">Time remaining</span>
            <span className="text-xl font-serif italic text-[#412B1A]">~112 days</span>
          </div>
        </div>

        {/* Прогресс-бар */}
        <div>
          <div className="flex justify-between text-xs text-[#6E5949] font-light mb-2">
            <span>Week 1</span>
            <span className="text-[#412B1A] font-medium">Week 24 (60%)</span>
            <span>Week 40</span>
          </div>
          <div className="w-full bg-[#EAD9CE]/50 h-2.5 rounded-full overflow-hidden p-0.5">
            <div 
              className="bg-[#D5A272] h-full rounded-full transition-all duration-500" 
              style={{ width: '60%' }}
            />
          </div>
        </div>
      </div>

      {/* 1️⃣ БЛОК: Personal Information */}
      <div className="bg-white border border-[#EAD9CE] rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-[#FFF6F0]/60 px-6 py-4 border-b border-[#EAD9CE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">👤</span>
            <h3 className="text-base font-normal text-[#412B1A]">Personal Information</h3>
          </div>
          <span className="text-xs text-[#6E5949] italic font-serif">Main profile data</span>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#412B1A] tracking-wider uppercase mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                defaultValue="Aida Sabyrova" 
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] text-[#412B1A] focus:outline-none focus:border-[#D5A272] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#412B1A] tracking-wider uppercase mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                defaultValue="aida.ms0097@gmail.com" 
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] text-[#412B1A] focus:outline-none focus:border-[#D5A272] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#412B1A] tracking-wider uppercase mb-2">
                Estimated Due Date (EDD)
              </label>
              <input 
                type="date" 
                defaultValue="2026-11-20" 
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] text-[#412B1A] focus:outline-none focus:border-[#D5A272] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#412B1A] tracking-wider uppercase mb-2">
                Phone Number
              </label>
              <input 
                type="tel" 
                defaultValue="+1 (555) 000-0000" 
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] text-[#412B1A] focus:outline-none focus:border-[#D5A272] text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button 
              type="button" 
              className="px-7 py-3 bg-[#412B1A] text-[#FFF6F0] rounded-full font-medium text-xs tracking-wider uppercase shadow-sm hover:opacity-90 transition-opacity"
            >
              Save Personal Info
            </button>
          </div>
        </div>
      </div>

      {/* 2️⃣ БЛОК: My Courses (Вместо Care & Support) */}
      <div className="bg-white border border-[#EAD9CE] rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-[#FFF6F0]/60 px-6 py-4 border-b border-[#EAD9CE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📚</span>
            <h3 className="text-base font-normal text-[#412B1A]">My Courses</h3>
          </div>
          <span className="text-xs text-[#D5A272] font-medium uppercase tracking-wider">2 Active</span>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          
          {/* Курс 1 */}
          <div className="p-5 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-serif italic text-[#D5A272]">2nd Trimester Guide</span>
              <h4 className="text-base font-medium text-[#412B1A] mt-0.5">Healthy Pregnancy & Nutrition</h4>
              <p className="text-xs text-[#6E5949] font-light mt-1">12 lessons • 4 modules</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-[#412B1A] font-medium block">75% Completed</span>
                <span className="text-[10px] text-[#6E5949] font-light">9 of 12 lessons</span>
              </div>
              <button className="px-5 py-2.5 bg-[#412B1A] text-[#FFF6F0] rounded-full text-xs font-medium tracking-wide uppercase hover:opacity-90 transition-opacity">
                Continue
              </button>
            </div>
          </div>

          {/* Курс 2 */}
          <div className="p-5 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-serif italic text-[#D5A272]">Preparation</span>
              <h4 className="text-base font-medium text-[#412B1A] mt-0.5">Labor & Birth Preparation Masterclass</h4>
              <p className="text-xs text-[#6E5949] font-light mt-1">8 lessons • 2 modules</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-[#412B1A] font-medium block">20% Completed</span>
                <span className="text-[10px] text-[#6E5949] font-light">2 of 8 lessons</span>
              </div>
              <button className="px-5 py-2.5 bg-[#412B1A] text-[#FFF6F0] rounded-full text-xs font-medium tracking-wide uppercase hover:opacity-90 transition-opacity">
                Continue
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3️⃣ БЛОК: My Certificates */}
      <div className="bg-white border border-[#EAD9CE] rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-[#FFF6F0]/60 px-6 py-4 border-b border-[#EAD9CE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎓</span>
            <h3 className="text-base font-normal text-[#412B1A]">My Certificates</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="p-5 rounded-2xl bg-[#FFF6F0]/30 border border-[#EAD9CE] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📜</span>
              <div>
                <h4 className="text-sm font-medium text-[#412B1A]">First Trimester Basics</h4>
                <p className="text-xs text-[#6E5949] font-light">Issued on June 15, 2026</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-[#412B1A] text-[#412B1A] rounded-full text-xs font-medium uppercase hover:bg-[#412B1A]/5 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}