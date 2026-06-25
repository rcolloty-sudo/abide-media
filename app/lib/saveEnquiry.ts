import { supabaseAdmin } from "./supabase/admin";

export type EnquiryType = "contact" | "website_brief" | "app_brief";

// Persist a form submission to the `enquiries` table. Best-effort: if Supabase
// isn't configured (or the insert fails) we swallow the error so the email path
// — the primary delivery — is never blocked.
export async function saveEnquiry(input: {
  type: EnquiryType;
  name?: string;
  email?: string;
  business?: string;
  topic?: string;
  payload?: Record<string, unknown>;
}) {
  const admin = supabaseAdmin();
  if (!admin) return;
  try {
    await admin.from("enquiries").insert({
      type: input.type,
      name: input.name ?? null,
      email: input.email ?? null,
      business: input.business ?? null,
      topic: input.topic ?? null,
      payload: input.payload ?? {},
    });
  } catch (err) {
    console.error("saveEnquiry failed:", err);
  }
}
