// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

// const Navbar = () => {
//   const { isSignedIn, isLoaded } = useUser();

//   return (
//     <header className="sticky top-0 z-50 bg-[#FFFDFB]/80 backdrop-blur-md border-b border-[#EAD9CE]/30">
//       <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
//         {/* Логотип */}
//         <Link href="/" className="text-2xl font-serif italic text-[#412B1A] flex-shrink-0">
//           EduPreg
//         </Link>

//         {/* Меню */}
//         <div className="hidden md:flex items-center gap-10">
//           <Link href="/" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">Home</Link>
//           <Link href="/courses" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">Courses</Link>
//           <Link href="/faq" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">FAQ</Link>
//           <Link href="/about" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">About Us</Link>
//           <Link href="/dashboard/profile" prefetch={false} className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">My account</Link>
//         </div>

//         {/* Кнопки входа (Условный рендеринг) */}
//         <div className="flex items-center gap-4">
//           {!isLoaded ? (
//             <div className="w-20 h-10 animate-pulse bg-gray-200 rounded-full" />
//           ) : isSignedIn ? (
//             // Если юзер авторизован — показываем аватарку
//             <UserButton />
//           ) : (
//             // Если юзер НЕ авторизован — ведем на /dashboard/profile
//             <>
//               <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
//                 <button className="text-[#412B1A] font-medium text-[15px] hover:text-[#6e3412] transition">
//                   Log In
//                 </button>
//               </SignInButton>
//               <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
//                 <button className="bg-[#412B1A] text-[#FFF6F0] px-6 py-2.5 rounded-full font-medium text-[15px] hover:opacity-90 transition shadow-sm">
//                   Get Started
//                 </button>
//               </SignInButton>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isLanding) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  const isTransparent = isLanding && !scrolled;

  return (
    <header
      className={`${
        isLanding ? "fixed inset-x-0 top-0" : "sticky top-0"
      } z-50 border-b transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-transparent backdrop-blur-none"
          : "bg-[#FFFDFB]/80 backdrop-blur-md border-[#EAD9CE]/30"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Логотип */}
        <Link href="/" className="text-2xl font-serif italic text-[#412B1A] flex-shrink-0">
          EduPreg
        </Link>

        {/* Меню */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">Home</Link>
          <Link href="/courses" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">Courses</Link>
          <Link href="/faq" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">FAQ</Link>
          <Link href="/about" className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">About Us</Link>
          <Link href="/dashboard/profile" prefetch={false} className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]">My account</Link>
        </div>

        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div className="w-20 h-10 animate-pulse bg-gray-200 rounded-full" />
          ) : isSignedIn ? (
    
            <UserButton />
          ) : (
      
            <>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
                <button className="text-[#412B1A] font-medium text-[15px] hover:text-[#6e3412] transition">
                  Log In
                </button>
              </SignInButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
                <button className="bg-[#412B1A] text-[#FFF6F0] px-6 py-2.5 rounded-full font-medium text-[15px] hover:opacity-90 transition shadow-sm">
                  Get Started
                </button>
              </SignInButton>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
