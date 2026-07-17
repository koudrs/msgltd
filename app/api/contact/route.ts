import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "Middleton Services Group <notificaciones@koudrs.com>";
const TO = ["ceo@msgltd.net", "vp@msgltd.net"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  sector?: string;
  message?: string;
  locale?: string;
  company?: string; // honeypot — real users never see this field
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend success, send nothing.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const sector = (body.sector ?? "").trim().slice(0, 200);
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Missing or invalid fields" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New inquiry — ${sector || "General"} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Asset / sector: ${sector || "—"}`,
      `Language: ${body.locale ?? "en"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
