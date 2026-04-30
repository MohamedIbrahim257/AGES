import { NextResponse } from "next/server";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const topic = String(body.topic ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length > 200) {
      return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (!message || message.length > 8000) {
      return NextResponse.json({ ok: false, error: "Invalid message" }, { status: 400 });
    }

    // Hook for email provider (Resend, SendGrid, etc.) — log server-side in development
    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", { name, email, phone, topic, messageLength: message.length });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
