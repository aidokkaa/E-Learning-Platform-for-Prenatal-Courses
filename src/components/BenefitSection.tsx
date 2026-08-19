import React from 'react'

const BenefitSection = () => {
  const benefits = [
    { title: "Expert Guidance", desc: "Access to top-rated OB/GYNs and certified midwives who truly listen." },
    { title: "Seamless Experience", desc: "Effortless scheduling and digital support throughout your journey." },
    { title: "Complete Holistic Care", desc: "Evidence-based programs covering everything from conception to postpartum recovery." },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Левая сторона: Заголовок */}
        <div className="sticky top-24">
          <span className="text-[#D9A384] font-medium tracking-widest uppercase text-sm">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#412B1A] mt-6 leading-tight">
            Your journey, <br />supported by <br />expertise.
          </h2>
        </div>

        {/* Правая сторона: Карточки */}
        <div className="flex flex-col gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="group flex gap-6 p-6 transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFF6F0] rounded-2xl flex items-center justify-center group-hover:bg-[#D9A384] transition-colors duration-500">
                <span className="text-[#D9A384] group-hover:text-white font-bold text-lg">0{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#412B1A] mb-2">{item.title}</h3>
                <p className="text-[#6E5949] leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection