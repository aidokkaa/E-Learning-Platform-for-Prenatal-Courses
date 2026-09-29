import Hero from '@/src/components/Hero/Hero';
import PolaroidSuccessSection from '../components/PolaroidSection';
import CourseIntro from '../components/CourseIntro/CourseIntro';
import AuthorSection from '../components/AuthorSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-[#FCECE1] rounded-full blur-[80px] -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10vw] w-[50vw] h-[50vw] bg-[#F7E5D9] rounded-full blur-[100px] opacity-70 pointer-events-none z-0" />
      <Hero />
      <PolaroidSuccessSection />
      <CourseIntro/>
      <AuthorSection/>
      <ContactSection/>
    </div>
  );
}