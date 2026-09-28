"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логируем ошибку в консоль (в будущем здесь может быть Sentry)
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center bg-[#FFFDF9] my-12">
      <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4 font-bold text-2xl shadow-sm">
        !
      </div>
      <h2 className="text-2xl md:text-3xl font-serif text-[#412B1A] mb-2">
        Something went wrong!
      </h2>
      <p className="text-sm text-[#7A6251] max-w-md mb-6 leading-relaxed">
        We encountered an unexpected issue while loading this page. Please try again or refresh the page.
      </p>
      <button
        onClick={() => reset()}
        className="bg-[#412B1A] text-[#FFF6F0] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#5C4534] transition-all shadow-sm active:scale-95"
      >
        Try Again
      </button>
    </div>
  );
}