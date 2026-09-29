"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Comfortaa, Quicksand } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ============================================================
   ✏️  МЕНЯЙ ТОЛЬКО ЭТИ ДАННЫЕ — стили и логика ниже уже готовы
   ============================================================ */

const TEXT = {
  title: "Contact Us",
  subtitle: "For payment of the course or questions of interest",
  button: "Contact",
  modalTitle: "Get in touch",
  modalText: "Choose the way that suits you best.",
};

type IconName = "telegram" | "chat" | "phone" | "mail";

const CONTACTS: {
  icon: IconName;
  label: string;
  value: string; // что видит человек
  href: string; // куда ведёт
  external?: boolean; // открывать в новой вкладке
}[] = [
  {
    icon: "telegram",
    label: "Telegram",
    value: "@your_username",
    href: "https://t.me/your_username",
    external: true,
  },
  {
    icon: "chat",
    label: "Viber",
    value: "+380 00 000 00 00",
    href: "viber://chat?number=%2B380000000000",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+380 00 000 00 00",
    href: "tel:+380000000000",
  },
  {
    icon: "mail",
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
];

/* ============================================================ */

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "telegram":
      return (
        <svg {...common}>
          <path d="M21 4 3 11l5.5 2M21 4l-3 15-6-4.5M21 4 8.5 13m0 0V19l3-3.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V16h-.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 5.3 5.3l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7.5 8 5.5 8-5.5" />
        </svg>
      );
  }
}

export default function ContactSection() {
  const [open, setOpen] = useState(false); // модалка в DOM
  const [shown, setShown] = useState(false); // для плавной анимации
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openModal = () => setOpen(true);

  const closeModal = useCallback(() => {
    setShown(false);
    window.setTimeout(() => {
      setOpen(false);
      triggerRef.current?.focus();
    }, 200);
  }, []);

  // При открытии: плавное появление, блокировка прокрутки, фокус на крестик
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setShown(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Закрытие по Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  return (
    <section
      id="contacts"
      className={`${quicksand.className} relative flex min-h-[640px] scroll-mt-20 items-center justify-center overflow-hidden bg-white px-5 pb-16 pt-24 lg:min-h-[720px] lg:pb-14`}
    >
      {/* Фоновые блобы (закрыты внутри секции, к верху и низу не прилипают) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {/* Светлый — справа */}
        <path
          d="M1000,110 C960,140 890,215 820,250 C760,280 700,300 640,320 L500,330 L500,520 C560,545 600,566 700,570 C850,575 950,562 1000,545 Z"
          fill="#F8E6DE"
        />
        {/* Тёмный — слева */}
        <path
          d="M0,165 C0,140 60,120 130,122 C260,125 420,175 520,215 C600,250 640,300 640,400 C640,470 585,500 570,520 C560,540 545,570 470,572 C300,578 100,555 0,510 Z"
          fill="#E3C9B5"
        />
      </svg>

      {/* Карточка */}
      <div className="relative z-10 w-full max-w-[740px] rounded-[32px] bg-[#FFFDFB] px-6 py-12 text-center shadow-[0_30px_70px_rgba(74,30,12,0.12)] sm:rounded-[40px] sm:px-12 sm:py-14">
        <h2
          className={`${comfortaa.className} font-normal uppercase leading-[1.1] tracking-[0.02em] text-[#4A1E0C]`}
          style={{ fontSize: "clamp(28px,3vw,44px)" }}
        >
          {TEXT.title}
        </h2>

        <p className="mx-auto mt-5 max-w-[460px] text-[16px] leading-[1.65] text-[#6B4A3B] [text-wrap:balance] lg:text-[18px]">
          {TEXT.subtitle}
        </p>

        <button
          ref={triggerRef}
          type="button"
          onClick={openModal}
          aria-haspopup="dialog"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1F5B58] px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.2)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40 focus-visible:ring-offset-2"
        >
          {TEXT.button}
        </button>
      </div>

      {/* ===== Модальное окно ===== */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Затемнение (клик закрывает) */}
          <div
            onClick={closeModal}
            className={`absolute inset-0 bg-[#2B1409]/45 backdrop-blur-[3px] transition-opacity duration-200 ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Панель */}
          <div
            className={`relative w-full max-w-[440px] rounded-[30px] bg-[#FFFDFB] p-7 shadow-[0_40px_90px_rgba(74,30,12,0.3)] transition-all duration-200 ease-out sm:p-8 ${
              shown
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7E7DC] text-[#4A1E0C] transition hover:bg-[#F1D9C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m5 5 10 10M15 5 5 15" />
              </svg>
            </button>

            <h3
              id="contact-modal-title"
              className={`${comfortaa.className} pr-10 text-[26px] font-medium leading-tight text-[#4A1E0C]`}
            >
              {TEXT.modalTitle}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#6B4A3B]">
              {TEXT.modalText}
            </p>

            <ul className="mt-6 space-y-3">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-[#F0E1D6] bg-white p-3.5 transition hover:border-[#DDB99F] hover:shadow-[0_10px_24px_rgba(74,30,12,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5B58]/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E7DC] text-[#1F5B58] transition group-hover:bg-[#1F5B58] group-hover:text-white">
                      <Icon name={c.icon} />
                    </span>

                    <span className="min-w-0 flex-1 leading-tight">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A6656]">
                        {c.label}
                      </span>
                      <span className="mt-1 block truncate text-[16px] font-semibold text-[#4A1E0C]">
                        {c.value}
                      </span>
                    </span>

                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 shrink-0 text-[#8A6656] transition group-hover:translate-x-0.5 group-hover:text-[#1F5B58]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
