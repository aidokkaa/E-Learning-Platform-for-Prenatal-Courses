import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MIN_DAYS_AHEAD = 3;
const MAX_DAYS_AHEAD = 60;
const CLASS_TIME_TEXT = "8:30am–10:30am";
const TIME_ZONE = "America/Chicago";

const NOTIFY_EMAIL = process.env.FREE_CLASS_NOTIFY_EMAIL || "";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

const pad = (n: number) => String(n).padStart(2, "0");

const chicagoToday = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const addDays = (value: string, days: number) => {
  const [y, m, d] = value.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
};

const tzAbbr = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    timeZoneName: "short",
  }).formatToParts(new Date(Date.UTC(y, m - 1, d, 17)));
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "CT";
};

const formatTime = (value: string) => {
  const [h, min] = value.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  return `${h % 12 || 12}:${pad(min)}${suffix}`;
};

const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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
    const { name, email, phone, stage, date, time, company } = body ?? {};
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
    if (time !== undefined && (typeof time !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time))) {
      return NextResponse.json({ error: "Invalid time" }, { status: 400 });
    }

    const today = chicagoToday();
    const minDate = addDays(today, MIN_DAYS_AHEAD - 1);
    const maxDate = addDays(today, MAX_DAYS_AHEAD + 1);

    if (date < minDate || date > maxDate) {
      return NextResponse.json({ error: "Date out of range" }, { status: 400 });
    }
    if (!NOTIFY_EMAIL) {
      console.error("FREE_CLASS_NOTIFY_EMAIL is not set. Registration was NOT delivered.");
      return NextResponse.json({ error: "Server is not configured" }, { status: 500 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const dateLong = formatLong(date);
    const timeText = `${time ? formatTime(time) : CLASS_TIME_TEXT} ${tzAbbr(date)}`;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: cleanEmail, 
      subject: `New free class registration: ${cleanName}, ${dateLong} ${timeText}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#222;line-height:1.6;">
          <h2 style="color:#4A1E0C;margin-bottom:4px;">New registration for the free live class</h2>
          <p style="margin-top:0;color:#777;">Send the class link to this person on the chosen day.</p>

          <div style="background:#FBF3EC;border-radius:14px;padding:14px 18px;margin:18px 0;">
            <strong>Class date:</strong> ${esc(dateLong)}, ${esc(timeText)}
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