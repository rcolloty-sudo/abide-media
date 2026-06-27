import Link from "next/link";
import type { Metadata } from "next";
import { supabaseServer } from "../lib/supabase/server";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  let email: string | null = null;
  try {
    const supabase = await supabaseServer();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
  } catch {
    // not configured / not signed in
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <header style={{ borderBottom: "1px solid var(--line)", background: "var(--card)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="w-full max-w-[1100px] mx-auto px-7 flex items-center justify-between" style={{ height: 64 }}>
          <Link href="/admin" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="display" style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-.02em" }}>Abide</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: ".66rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--pine)", background: "rgba(143,211,176,.25)", padding: "3px 9px", borderRadius: 100 }}>
              Admin
            </span>
          </Link>
          {email && (
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span className="hidden sm:inline" style={{ color: "var(--muted)", fontSize: ".85rem" }}>{email}</span>
              <form action={signOut}>
                <button type="submit" style={{ fontSize: ".85rem", color: "var(--muted)", fontWeight: 600 }}>Sign out</button>
              </form>
            </div>
          )}
          {!email && (
            <Link href="/" style={{ color: "var(--muted)", fontSize: ".85rem", fontWeight: 600 }}>← Back to site</Link>
          )}
        </div>
      </header>
      <main className="w-full max-w-[1100px] mx-auto px-7 py-10">{children}</main>
    </div>
  );
}
