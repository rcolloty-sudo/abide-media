"use client";
import { createBrowserClient } from "@supabase/ssr";

// Browser Supabase client for the admin login. Returns null when the public env
// vars are missing or the URL is malformed, so the login page can show a clean
// message instead of throwing a raw "Invalid supabaseUrl" error.
export function supabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!url || !key) return null;
  try {
    const p = new URL(url);
    if (p.protocol !== "http:" && p.protocol !== "https:") return null;
  } catch {
    return null;
  }
  return createBrowserClient(url, key);
}
