import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MIN_DAYS_AHEAD = 3;
const MAX_DAYS_AHEAD = 60;
const CLASS_TIME_TEXT = "8:30am–10:30am";

const NOTIFY_EMAIL = process.env.FREE_CLASS_NOTIFY_EMAIL || "";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

const pad = (n: number) => String(n).padStart(2, "0");
const toDateString = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// Защита от вставки HTML в письмо через поля формы
const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// "2026-10-17" -> "Saturday, October 17, 2026"
const formatLong = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

const formatStage = (stage: string) => {
  if (stage === "planning") return "Planning pregnancy";
  if (stage === "postpartum") return "Already has a baby";
  return `Week ${stage}`;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, stage, date, company } = body ?? {};
    if (company) return NextResponse.json({ ok: true });

    if (typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (
      typeof email !== "string" ||
      email.length > 200 ||
      !/^\S+@\S+\.\S+$/.test(email.trim())
    ) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Телефон необязателен
    let phoneClean = "";
    if (typeof phone === "string" && phone.trim()) {
      const digits = phone.replace(/\D/g, "");
      if (!/^[+()\d\s-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
        return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
      }
      phoneClean = phone.trim();
    }

    const stageOk =
      typeof stage === "string" &&
      (stage === "planning" ||
        stage === "postpartum" ||
        (/^\d{1,2}$/.test(stage) && Number(stage) >= 1 && Number(stage) <= 42));
    if (!stageOk) {
      return NextResponse.json({ error: "Invalid stage" }, { status: 400 });
    }

    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    // Допуск в 1 день: часовой пояс сервера может отличаться от часового пояса пользователя
    const now = new Date();
    const min = new Date(now);
    min.setDate(min.getDate() + MIN_DAYS_AHEAD - 1);
    const max = new Date(now);
    max.setDate(max.getDate() + MAX_DAYS_AHEAD + 1);

    if (date < toDateString(min) || date > toDateString(max)) {
      return NextResponse.json({ error: "Date out of range" }, { status: 400 });
    }

    // Без адреса получателя данные потеряются — лучше честно вернуть ошибку
    if (!NOTIFY_EMAIL) {
      console.error("FREE_CLASS_NOTIFY_EMAIL is not set. Registration was NOT delivered.");
      return NextResponse.json({ error: "Server is not configured" }, { status: 500 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const dateLong = formatLong(date);

    // ----- Письмо ТЕБЕ с данными регистрации (клиентке ничего не отправляется) -----
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: cleanEmail, // нажмёшь «Ответить» — письмо уйдёт сразу клиентке
      subject: `New free class registration: ${cleanName}, ${dateLong}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#222;line-height:1.6;">
          <h2 style="color:#4A1E0C;margin-bottom:4px;">New registration for the free live class</h2>
          <p style="margin-top:0;color:#777;">Send the class link to this person on the chosen day.</p>

          <div style="background:#FBF3EC;border-radius:14px;padding:14px 18px;margin:18px 0;">
            <strong>Class date:</strong> ${esc(dateLong)}, ${esc(CLASS_TIME_TEXT)}
          </div>

          <table style="border-collapse:collapse;width:100%;">
            <tr><td style="padding:8px 14px 8px 0;color:#777;">Name</td><td><strong>${esc(cleanName)}</strong></td></tr>
            <tr><td style="padding:8px 14px 8px 0;color:#777;">Email</td><td><a href="mailto:${esc(cleanEmail)}">${esc(cleanEmail)}</a></td></tr>
            <tr><td style="padding:8px 14px 8px 0;color:#777;">Phone</td><td>${esc(phoneClean) || "—"}</td></tr>
            <tr><td style="padding:8px 14px 8px 0;color:#777;">Pregnancy stage</td><td>${esc(formatStage(stage))}</td></tr>
          </table>
        </div>
      `,
    });

    // Resend не бросает исключение, а возвращает { error }
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: "Email failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Free class route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}