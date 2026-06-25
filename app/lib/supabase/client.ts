"use client";
import { createBrowserClient } from "@supabase/ssr";

// Browser Supabase client — used by the admin login page to request a magic link.
export function supabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
