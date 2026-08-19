import NavBar from '@/src/components/NavBar/NavBar';
import Hero from '@/src/components/Hero/Hero';
import FAQSection from '@/src/components/FAQSection';
import CTASection from '@/src/components/CTASection';
import BenefitSection from '@/src/components/BenefitSection';
import FeaturedCourses from '@/src/components/FeaturedCourses';
import Footer from '@/src/components/Footer';
import ConsultationForm from '../components/ConsultasionForm';
import PolaroidSuccessSection from '../components/PolaroidSection';
import CourseIntro from '../components/CourseIntro/CourseIntro';

export default function Home() {
  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      {/* Мягкие фоновые пятна */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-[#FCECE1] rounded-full blur-[80px] -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10vw] w-[50vw] h-[50vw] bg-[#F7E5D9] rounded-full blur-[100px] opacity-70 pointer-events-none z-0" />

      {/* Вызываем Hero напрямую без внешних оберток и лишних pt */}
      <Hero />

      {/* Секция с полароидами */}
      <PolaroidSuccessSection />
      <CourseIntro/>
      {/* <FeaturedCourses /> */}
      <CTASection />
      <ConsultationForm />
    </div>
  );
}