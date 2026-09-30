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

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser, useClerk, SignInButton } from "@clerk/nextjs";
import { LogOut, Settings } from 'lucide-react';

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/#author" },
  { label: "My account", href: "/dashboard/profile", prefetch: false },
];

/* false — всегда показывать круг цвета сайта с первой буквой (единый стиль).
   true  — показывать фото профиля, если оно есть.
   Важно: если человек вошёл через Google, Clerk считает фото «загруженным» даже когда это
   стандартный цветной кружок с буквой от Google, поэтому при true он останется бирюзовым. */
const USE_PROFILE_PHOTO = false;

/* Аватар: круг цвета сайта с первой буквой (или фото профиля, если USE_PROFILE_PHOTO = true) */
function Avatar({ className = "h-9 w-9 text-[14px]" }: { className?: string }) {
  const { user } = useUser();

  const initial = (
    user?.firstName?.[0] ||
    user?.emailAddresses?.[0]?.emailAddress?.[0] ||
    "U"
  ).toUpperCase();

  if (USE_PROFILE_PHOTO && user?.hasImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={user.imageUrl}
        alt={user.firstName || "User avatar"}
        className={`${className} rounded-full object-cover`}
      />
    );
  }

  return (
    <span
      className={`${className} flex items-center justify-center rounded-full bg-[#412B1A] font-semibold text-[#FFF6F0]`}
    >
      {initial}
    </span>
  );
}

/* Действия аккаунта: управление профилем и выход (то же, что в меню Clerk) */
function AccountActions({ onDone }: { onDone?: () => void }) {
  const { openUserProfile, signOut } = useClerk();

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => {
          onDone?.();
          openUserProfile();
        }}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-[#4A1E0C] transition hover:bg-[#FBF3EC]"
      >
        <Settings className="h-4 w-4 text-[#1F5B58]" />
        Manage account
      </button>
      <button
        type="button"
        onClick={() => {
          onDone?.();
          signOut({ redirectUrl: "/" });
        }}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-[#4A1E0C] transition hover:bg-[#FBF3EC]"
      >
        <LogOut className="h-4 w-4 text-[#1F5B58]" />
        Sign out
      </button>
    </div>
  );
}

/* Карточка с именем и почтой */
function AccountInfo() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3 px-3 pb-3">
      <Avatar className="h-11 w-11 text-[16px]" />
      <div className="min-w-0 leading-tight">
        <div className="truncate text-[14px] font-semibold text-[#4A1E0C]">
          {user?.firstName} {user?.lastName}
        </div>
        <div className="truncate text-[12px] text-[#8A6656]">
          {user?.emailAddresses?.[0]?.emailAddress}
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  // На главной странице навбар «сливается» с hero
  const pathname = usePathname();
  const isLanding = pathname === "/";

  // На главной: прозрачный вверху, после небольшой прокрутки — матовый белый
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // бургер (мобильные)
  const [accountOpen, setAccountOpen] = useState(false); // выпадашка аватара (десктоп)
  const accountRef = useRef<HTMLDivElement>(null);

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

  // Закрываем меню при переходе на другую страницу
  useEffect(() => {
    setMenuOpen(false);
    setAccountOpen(false);
  }, [pathname]);

  // Закрытие по Escape и по клику вне выпадашки аватара
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const isTransparent = isLanding && !scrolled && !menuOpen;

  return (
    <header
      className={`${
        // На главной навбар лежит поверх hero (не занимает место в потоке)
        isLanding ? "fixed inset-x-0 top-0" : "sticky top-0"
      } z-50 border-b transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-transparent backdrop-blur-none"
          : "bg-[#FFFDFB]/80 backdrop-blur-md border-[#EAD9CE]/30"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4 md:py-5 flex items-center justify-between">
        
        {/* Логотип */}
        <Link href="/" className="text-2xl font-serif italic text-[#412B1A] flex-shrink-0">
          EduPreg
        </Link>

        {/* Меню (десктоп) */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={link.prefetch}
              className="text-[#6E5949] hover:text-[#412B1A] transition font-medium text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Кнопки входа (десктоп) */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoaded ? (
            <div className="w-20 h-10 animate-pulse bg-gray-200 rounded-full" />
          ) : isSignedIn ? (
            // Если юзер авторизован — аватар с выпадающим меню
            <div ref={accountRef} className="relative">
              <button
                type="button"
                onClick={() => setAccountOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={accountOpen}
                aria-label="Account menu"
                className="rounded-full transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40 focus-visible:ring-offset-2"
              >
                <Avatar />
              </button>

              {accountOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-[#F0E1D6] bg-[#FFFDFB] p-3 shadow-[0_20px_50px_rgba(74,30,12,0.15)]"
                >
                  <AccountInfo />
                  <div className="my-2 h-px bg-[#F0E1D6]" />
                  <AccountActions onDone={() => setAccountOpen(false)} />
                </div>
              )}
            </div>
          ) : (
            // Если юзер НЕ авторизован — ведем на /dashboard/profile
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

        {/* Бургер (только мобильные) — аватар и вход находятся внутри него */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2D3C7] bg-white/80 md:hidden"
        >
          <span className="relative block h-3 w-[18px]">
            <span
              className={`absolute left-0 h-[2px] w-[18px] rounded bg-[#412B1A] transition-all duration-300 ${
                menuOpen ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] h-[2px] w-[18px] rounded bg-[#412B1A] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-[18px] rounded bg-[#412B1A] transition-all duration-300 ${
                menuOpen ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-[#F0E1D6] bg-[#FFFDFB] p-3 shadow-[0_20px_50px_rgba(74,30,12,0.15)] md:hidden">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={link.prefetch}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-[15px] font-medium text-[#412B1A] transition hover:bg-[#FBF3EC]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="my-3 h-px bg-[#F0E1D6]" />

          {!isLoaded ? (
            <div className="mx-3 h-10 animate-pulse rounded-full bg-gray-200" />
          ) : isSignedIn ? (
            <>
              <AccountInfo />
              <AccountActions onDone={() => setMenuOpen(false)} />
            </>
          ) : (
            <div className="flex flex-col gap-2 px-1 pb-1">
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full rounded-full border border-[#E2D3C7] py-3 text-[15px] font-medium text-[#412B1A] transition hover:bg-[#FBF3EC]"
                >
                  Log In
                </button>
              </SignInButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard/profile">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full rounded-full bg-[#412B1A] py-3 text-[15px] font-medium text-[#FFF6F0] transition hover:opacity-90"
                >
                  Get Started
                </button>
              </SignInButton>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
