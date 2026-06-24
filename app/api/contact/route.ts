import { NextResponse } from "next/server";
import { sendEmail, buildEmail } from "../../lib/sendEmail";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = buildEmail({
      title: "New contact message",
      subtitle: "abidemediagroup.com.au · /contact",
      rows: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Topic", value: topic || "Not specified" },
      ],
      description: message,
    });

    await sendEmail({
      subject: `Contact: ${topic || "General enquiry"} — ${name}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send message" },
      { status: 500 }
    );
  }
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));
}
