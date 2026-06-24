import { NextResponse } from "next/server";
import { sendEmail, buildEmail } from "../../lib/sendEmail";

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

    await sendEmail({
      subject: `Website brief — ${name}${company ? ` (${company})` : ""}`,
      html,
      replyTo: email,
    });

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
