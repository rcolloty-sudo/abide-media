import { NextResponse } from "next/server";
import { sendEmail, buildEmail } from "../../lib/sendEmail";
import { saveEnquiry } from "../../lib/saveEnquiry";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name, email, company,
      platforms, appCategory, appStage, features,
      timeline, inspiration, description,
    } = body ?? {};

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = buildEmail({
      title: "New app design brief",
      subtitle: "abidemediagroup.com.au · /services/app",
      rows: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Business", value: company },
        { label: "Platforms", value: platforms },
        { label: "App category", value: appCategory },
        { label: "Current stage", value: appStage },
        { label: "Features required", value: features },
        { label: "Timeline", value: timeline },
        { label: "Inspiration", value: inspiration },
      ],
      description,
    });

    const saved = await saveEnquiry({
      type: "app_brief",
      name,
      email,
      business: company,
      payload: { platforms, appCategory, appStage, features, timeline, inspiration, description },
    });

    let emailed = false;
    try {
      await sendEmail({
        subject: `App brief — ${name}${company ? ` (${company})` : ""}`,
        html,
        replyTo: email,
      });
      emailed = true;
    } catch (e) {
      console.error("App brief email skipped:", e);
    }

    if (!saved && !emailed) {
      return NextResponse.json(
        { error: "Couldn't save your brief right now. Please email us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("App form error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send brief" },
      { status: 500 }
    );
  }
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));
}
