import { NextResponse } from "next/server";
import { sendEmail, buildEmail } from "../../lib/sendEmail";
import { saveEnquiry } from "../../lib/saveEnquiry";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name, email, company, websiteCurrent,
      projectType, pages, features, designStyle,
      timeline, inspiration, description,
    } = body ?? {};

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = buildEmail({
      title: "New website design brief",
      subtitle: "abidemediagroup.com.au · /services/website",
      rows: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Business", value: company },
        { label: "Current website", value: websiteCurrent },
        { label: "Project type", value: projectType },
        { label: "Pages", value: pages },
        { label: "Design style", value: designStyle },
        { label: "Features required", value: features },
        { label: "Timeline", value: timeline },
        { label: "Inspiration", value: inspiration },
      ],
      description,
    });

    const saved = await saveEnquiry({
      type: "website_brief",
      name,
      email,
      business: company,
      payload: { websiteCurrent, projectType, pages, features, designStyle, timeline, inspiration, description },
    });

    let emailed = false;
    try {
      await sendEmail({
        subject: `Website brief — ${name}${company ? ` (${company})` : ""}`,
        html,
        replyTo: email,
      });
      emailed = true;
    } catch (e) {
      console.error("Website brief email skipped:", e);
    }

    if (!saved && !emailed) {
      return NextResponse.json(
        { error: "Couldn't save your brief right now. Please email us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Website form error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send brief" },
      { status: 500 }
    );
  }
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));
}
