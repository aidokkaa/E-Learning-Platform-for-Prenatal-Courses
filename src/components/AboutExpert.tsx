import React from 'react'

const AboutExpert = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Заглушка под фото (можно поставить красивую иллюстрацию или атмосферное фото) */}
        <div className="w-full md:w-1/2 h-[500px] bg-[#FFF6F0] rounded-[40px] flex items-center justify-center border border-[#F2DFD3]">
           {/* Сюда ставишь свою иллюстрацию или атмосферное фото рук врача */}
           <span className="text-[#D9A384] italic">Professional expertise, gentle approach.</span>
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-medium text-[#412B1A]">Backed by medical expertise</h2>
          <p className="text-[#6E5949] leading-relaxed">
            Our programs are developed by a team of board-certified OB/GYNs and experienced midwives. 
            We bridge the gap between rigorous medical science and the gentle, holistic needs 
            of a mother-to-be.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[#412B1A]">
              <span className="w-2 h-2 rounded-full bg-[#D9A384]" /> Evidence-based protocols
            </li>
            <li className="flex items-center gap-3 text-[#412B1A]">
              <span className="w-2 h-2 rounded-full bg-[#D9A384]" /> Decades of clinical experience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutExpert
