// Shared email helper. Uses Resend.
// Requires env vars:
//   RESEND_API_KEY  — get from resend.com
//   FROM_EMAIL      — verified sender, e.g. "Abide Media <hello@abidemediagroup.com.au>"
//   TO_EMAIL        — destination, e.g. "hello@abidemediagroup.com.au"

import { Resend } from "resend";

const FROM = process.env.FROM_EMAIL || "Abide Media <onboarding@resend.dev>";
const TO = process.env.TO_EMAIL || "hello@abidemediagroup.com.au";

type SendOpts = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ subject, html, replyTo }: SendOpts) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(error.message || "Failed to send email");
  }
  return data;
}

// Wrap key/value pairs into a clean editorial-style HTML email
export function buildEmail(opts: {
  title: string;
  subtitle: string;
  rows: Array<{ label: string; value: string | string[] | undefined }>;
  description?: string;
}) {
  const { title, subtitle, rows, description } = opts;
  const rowsHtml = rows
    .filter((r) => {
      if (!r.value) return false;
      if (Array.isArray(r.value)) return r.value.length > 0;
      return String(r.value).trim().length > 0;
    })
    .map((r) => {
      const v = Array.isArray(r.value) ? r.value.join(", ") : r.value;
      return `
        <tr>
          <td style="padding:14px 0 4px 0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#776B5A;">${escape(r.label)}</td>
        </tr>
        <tr>
          <td style="padding:0 0 14px 0;font-size:15px;color:#1A1A2E;border-bottom:1px solid #E2DDD6;">${escape(String(v))}</td>
        </tr>
      `;
    })
    .join("");

  return `<!doctype html>
  <html><body style="margin:0;background:#F7F5F1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1A1A2E;">
    <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
      <table cellpadding="0" cellspacing="0" style="width:100%;background:#FBFAF6;border:1px solid #E2DDD6;border-radius:14px;">
        <tr>
          <td style="padding:32px 32px 8px 32px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#B68923;">${escape(subtitle)}</p>
            <h1 style="margin:8px 0 0 0;font-family:Georgia,serif;font-size:28px;font-weight:500;color:#1A1A2E;letter-spacing:-0.5px;">${escape(title)}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 32px 32px;">
            <table cellpadding="0" cellspacing="0" style="width:100%;">
              ${rowsHtml}
            </table>
            ${description ? `<div style="margin-top:24px;padding:18px 20px;background:#F7F5F1;border-radius:10px;font-size:14.5px;line-height:1.65;color:#1A1A2E;white-space:pre-wrap;">${escape(description)}</div>` : ""}
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;text-align:center;font-size:12px;color:#A89C8A;">From abidemediagroup.com.au</p>
    </div>
  </body></html>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
