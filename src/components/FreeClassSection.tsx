"use client";

import React, { useEffect, useState } from "react";
import { Alex_Brush, Comfortaa, Quicksand } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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



const SUBMIT_URL = "/api/free-class";

const MIN_DAYS_AHEAD = 3;
const MAX_DAYS_AHEAD = 60;

const TIME_SLOTS = [
  { value: "10:00", label: "10:00 AM" },
  { value: "14:00", label: "2:00 PM" },
];

const TEXT = {
  eyebrow: "Free class",
  titleStart: "Register for your",
  titleAccent: "Free Class",
  price: "Price: $0 (Free of charge)",
  formTitle: "Reserve your free place",
  formHint: "Choose a date, preferred time slot and leave your details. We will send you the link to the live class on that day.",
  button: "Register",
  buttonLoading: "Sending...",
  consent:
    "By registering you agree to receive emails about this class. No spam, ever.",
  errorGeneral: "Something went wrong. Please try again in a moment.",

  successTitle: "Thank you for registering!",
  successText:
    "Your place is reserved. We will send you the link to the live class by email on the day you chose.",
  detailsTitle: "Details as follows:",
  whenLabel: "When:",
  accessQuestion: "How do I access the online class?",
  accessAnswer:
    "You will receive an email with the link on the day of your class. If for any reason you do not receive it, check your Spam folder or contact auramamaclub@gmail.com",
  expectTitle: "What to expect?",
  expectItems: [
    "You don't need a camera or microphone: you won't be seen or heard during the class.",
    "Got questions? Our instructor will gladly answer them in the live chat.",
    "You will leave the class feeling more confident and ready for your new arrival.",
  ],
  addToCalendar: "Add to Calendar",
  addToGoogle: "Google Calendar",
  downloadIcs: "Apple / Outlook / iCal",
};

const INFO_CHIPS = ["Online", "2 hours", "Free"];
type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "stage" | "date" | "time", string>>;

const pad = (n: number) => String(n).padStart(2, "0");

const toInputDate = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const addDays = (d: Date, days: number) => {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + days);
  return copy;
};

const formatLong = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const formatClassTime = (timeStr: string) => {
  return timeStr === "10:00" ? "10:00 AM – 12:00 PM" : "2:00 PM – 4:00 PM";
};
const getEventDates = (dateStr: string, timeStr: string) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  const h = timeStr === "10:00" ? 10 : 14;

  const start = new Date(y, m - 1, d, h, 0, 0);
  const end = new Date(y, m - 1, d, h + 2, 0, 0);

  const formatUtc = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  return { start, end, startUtc: formatUtc(start), endUtc: formatUtc(end) };
};

const getGoogleCalendarUrl = (dateStr: string, timeStr: string) => {
  const { startUtc, endUtc } = getEventDates(dateStr, timeStr);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Live Online Class",
    details: "Your free online class link will be sent to your email.",
    dates: `${startUtc}/${endUtc}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const downloadIcsFile = (dateStr: string, timeStr: string) => {
  const { startUtc, endUtc } = getEventDates(dateStr, timeStr);
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Free Online Class//EN",
    "BEGIN:VEVENT",
    `SUMMARY:Live Online Class`,
    `DESCRIPTION:Your free online class link will be sent to your email.`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "free-class.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

const TRIMESTERS = [
  { label: "First trimester", from: 1, to: 13 },
  { label: "Second trimester", from: 14, to: 27 },
  { label: "Third trimester", from: 28, to: 42 },
];

const inputClass =
  "w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-[#4A1E0C] placeholder:text-[#A58B7B] transition focus:outline-none focus:ring-2 focus:ring-[#1F5B58]/15";

export default function FreeClassSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "",
    date: "",
    time: "10:00", 
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [bounds, setBounds] = useState({ min: "", max: "" });

  useEffect(() => {
    const now = new Date();
    setBounds({
      min: toInputDate(addDays(now, MIN_DAYS_AHEAD)),
      max: toInputDate(addDays(now, MAX_DAYS_AHEAD)),
    });
  }, []);

  const setField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      e.email = "Please enter a valid email.";
    if (form.phone.trim()) {
      const digits = form.phone.replace(/\D/g, "");
      if (!/^[+()\d\s-]+$/.test(form.phone) || digits.length < 7 || digits.length > 15)
        e.phone = "Please enter a valid phone number.";
    }
    if (!form.stage) e.stage = "Please select your pregnancy week.";
    if (!form.date) e.date = "Please choose a date.";
    else if (bounds.min && form.date < bounds.min)
      e.date = `The earliest available date is ${formatLong(bounds.min)}.`;
    else if (bounds.max && form.date > bounds.max)
      e.date = `The latest available date is ${formatLong(bounds.max)}.`;
    if (!form.time) e.time = "Please choose a preferred time.";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (status === "submitting") return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          stage: form.stage,
          date: form.date,
          time: form.time,
          company: honeypot,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fieldBorder = (key: keyof Errors) =>
    errors[key]
      ? "border-[#C4705A] focus:border-[#C4705A]"
      : "border-[#F0E1D6] focus:border-[#1F5B58]";

  return (
    <section
      id="free-class"
      className={`${quicksand.className} relative scroll-mt-20 overflow-hidden bg-white px-5 py-16 lg:py-24`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[min(920px,92%)] -translate-x-1/2 rounded-[50%] bg-[#FBF3EC] lg:top-14 lg:h-[480px]"
      />

      <div className="relative mx-auto max-w-[860px]">

        <div className="mx-auto mb-10 max-w-[560px] text-center lg:mb-12">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
            <span className="h-px w-8 bg-[#DDB99F]" />
            {TEXT.eyebrow}
            <span className="h-px w-8 bg-[#DDB99F]" />
          </p>

          <h2
            className={`${comfortaa.className} mb-5 font-light leading-[1.25] text-[#4A1E0C]`}
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            {TEXT.titleStart}{" "}
            <span
              className={`${alexBrush.className} ml-1 align-baseline text-[1.45em] font-normal leading-none text-[#C4705A]`}
            >
              {TEXT.titleAccent}
            </span>
          </h2>

          <p className="inline-block rounded-full bg-[#F7E7DC] px-5 py-2 text-[15px] font-semibold text-[#4A1E0C]">
            {TEXT.price}
          </p>
        </div>
        <div className="rounded-[32px] border border-[#F0E1D6] bg-[#FFFDFB] px-5 py-8 shadow-[0_30px_70px_rgba(74,30,12,0.10)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          {status === "success" ? (
            <div aria-live="polite">
              <div className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5B58] text-white shadow-[0_8px_20px_rgba(31,91,88,0.25)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3
                  className={`${comfortaa.className} mt-5 text-[24px] font-medium leading-tight text-[#4A1E0C] lg:text-[28px]`}
                >
                  {TEXT.successTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-[1.7] text-[#6B4A3B] lg:text-[16px]">
                  {TEXT.successText}
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={getGoogleCalendarUrl(form.date, form.time)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F5B58] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(31,91,88,0.2)] transition hover:bg-[#194a48] sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {TEXT.addToGoogle}
                  </a>

                  <button
                    type="button"
                    onClick={() => downloadIcsFile(form.date, form.time)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#DDB99F] bg-white px-6 py-3 text-[13px] font-semibold text-[#4A1E0C] transition hover:bg-[#FBF3EC] sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {TEXT.downloadIcs}
                  </button>
                </div>
              </div>

              <div className="mt-9 border-t border-[#F0E1D6] pt-8">
                <h4
                  className={`${comfortaa.className} text-[18px] font-semibold text-[#4A1E0C]`}
                >
                  {TEXT.detailsTitle}
                </h4>

                <div className="mt-5 space-y-5 text-[15px] leading-[1.7] text-[#6B4A3B]">
                  <p>
                    <span className="font-semibold text-[#4A1E0C]">
                      {TEXT.whenLabel}
                    </span>{" "}
                    {formatLong(form.date)}, {formatClassTime(form.time)}
                  </p>

                  <p>
                    <span className="font-semibold text-[#4A1E0C]">
                      {TEXT.accessQuestion}
                    </span>{" "}
                    {TEXT.accessAnswer}
                  </p>

                  <div>
                    <p className="font-semibold text-[#4A1E0C]">
                      {TEXT.expectTitle}
                    </p>
                    <ul className="mt-3 space-y-3">
                      {TEXT.expectItems.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F5B58]/10 text-[#1F5B58]">
                            <svg
                              viewBox="0 0 20 20"
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="text-center">
                <h3
                  className={`${comfortaa.className} text-[22px] font-medium text-[#4A1E0C] lg:text-[26px]`}
                >
                  {TEXT.formTitle}
                </h3>
                <p className="mx-auto mt-2 max-w-[420px] text-[15px] leading-[1.65] text-[#6B4A3B]">
                  {TEXT.formHint}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {INFO_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-[#FBF3EC] px-3.5 py-1.5 text-[12px] font-semibold text-[#8A5A3C]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fc-name"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                  >
                    Name
                  </label>
                  <input
                    id="fc-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={`${inputClass} ${fieldBorder("name")}`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="fc-email"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                  >
                    Email
                  </label>
                  <input
                    id="fc-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className={`${inputClass} ${fieldBorder("email")}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="fc-phone"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                  >
                    Phone <span className="font-medium normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    id="fc-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    placeholder="+1 000 000 00 00"
                    aria-invalid={!!errors.phone}
                    className={`${inputClass} ${fieldBorder("phone")}`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="fc-stage"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                  >
                    Pregnancy week
                  </label>
                  <div className="relative">
                    <select
                      id="fc-stage"
                      value={form.stage}
                      onChange={(e) => setField("stage", e.target.value)}
                      aria-invalid={!!errors.stage}
                      className={`${inputClass} ${fieldBorder("stage")} appearance-none pr-11 ${
                        form.stage ? "" : "text-[#A58B7B]"
                      }`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="planning">Planning pregnancy</option>
                      {TRIMESTERS.map((t) => (
                        <optgroup key={t.label} label={t.label}>
                          {Array.from({ length: t.to - t.from + 1 }, (_, i) => t.from + i).map(
                            (w) => (
                              <option key={w} value={String(w)}>
                                Week {w}
                              </option>
                            )
                          )}
                        </optgroup>
                      ))}
                      <option value="postpartum">I already have a baby</option>
                    </select>
                    <svg
                      viewBox="0 0 20 20"
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A1E0C]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 7.5 5 5 5-5" />
                    </svg>
                  </div>
                  {errors.stage && (
                    <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.stage}</p>
                  )}
                </div>
                <div className="grid gap-5 sm:col-span-2 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fc-date"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                    >
                      Select date
                    </label>
                    <input
                      id="fc-date"
                      type="date"
                      value={form.date}
                      min={bounds.min || undefined}
                      max={bounds.max || undefined}
                      onChange={(e) => setField("date", e.target.value)}
                      aria-invalid={!!errors.date}
                      className={`${inputClass} ${fieldBorder("date")} [color-scheme:light]`}
                    />
                    {errors.date ? (
                      <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.date}</p>
                    ) : (
                      bounds.min && (
                        <p className="mt-1.5 text-[12px] text-[#8A6656]">
                          Available from {formatLong(bounds.min)}
                        </p>
                      )
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="fc-time"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6656]"
                    >
                      Select time slot
                    </label>
                    <div className="relative">
                      <select
                        id="fc-time"
                        value={form.time}
                        onChange={(e) => setField("time", e.target.value)}
                        aria-invalid={!!errors.time}
                        className={`${inputClass} ${fieldBorder("time")} appearance-none pr-11`}
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 20 20"
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A1E0C]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 7.5 5 5 5-5" />
                      </svg>
                    </div>
                    {errors.time && (
                      <p className="mt-1.5 text-[13px] text-[#C4705A]">{errors.time}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="fc-company">Company</label>
                <input
                  id="fc-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-6 rounded-2xl bg-[#FBEAE4] px-4 py-3 text-center text-[14px] text-[#9A4A36]"
                >
                  {TEXT.errorGeneral}
                </p>
              )}

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1F5B58] px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.2)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[260px]"
                >
                  {status === "submitting" ? TEXT.buttonLoading : TEXT.button}
                </button>

                <p className="mx-auto mt-4 max-w-[420px] text-[12px] leading-[1.6] text-[#8A6656]">
                  {TEXT.consent}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
