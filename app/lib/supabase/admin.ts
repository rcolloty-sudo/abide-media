import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Service-role Supabase client. SERVER ONLY — never import into a client component.
// Bypasses RLS; used to write enquiries from the public form routes and to read
// them in the admin area. Returns null when Supabase isn't configured yet, so the
// site keeps working (forms still email) before the database is connected.
export function supabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) return null;
  // Guard against a malformed URL so callers degrade gracefully instead of throwing.
  try {
    const p = new URL(url);
    if (p.protocol !== "http:" && p.protocol !== "https:") return null;
  } catch {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
