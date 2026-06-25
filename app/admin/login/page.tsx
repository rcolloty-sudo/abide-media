"use client";

import { useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

export default function AdminLogin() {
  const configured = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");
    try {
      const supabase = supabaseBrowser();
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: false,
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      setStatus("sent");
    } catch (err: unknown) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Couldn't send the link. Check the email and try again.");
    }
  }

  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "60px 24px" }}>
      <div className="card" style={{ width: "100%", maxWidth: 420, padding: 36, boxShadow: "var(--shadow)" }}>
        <span className="eyebrow">Abide · Admin</span>
        <h1 className="display mt-3" style={{ fontWeight: 700, fontSize: "1.9rem", letterSpacing: "-.02em" }}>
          Sign in
        </h1>

        {!configured ? (
          <p className="mt-4" style={{ color: "var(--muted)", fontSize: ".98rem" }}>
            The admin portal isn&apos;t connected to its database yet. Add the Supabase environment
            variables to enable sign-in.
          </p>
        ) : status === "sent" ? (
          <p className="mt-4" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6 }}>
            Check your inbox — we&apos;ve sent a secure sign-in link to{" "}
            <strong style={{ color: "var(--ink)" }}>{email}</strong>. Open it on this device to continue.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6">
            <label className="am-label" htmlFor="email" style={{ display: "block", marginBottom: 8, fontFamily: "var(--mono)", fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
              Owner email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@abidemediagroup.com.au"
              className="am-input"
              style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid var(--line-strong)", background: "var(--paper)", fontSize: 16 }}
            />
            {status === "error" && (
              <p style={{ color: "var(--ember-deep)", fontSize: ".88rem", marginTop: 10 }}>{msg}</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-5"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {status === "sending" ? "Sending…" : "Email me a sign-in link"}
              <span className="arr" aria-hidden="true">→</span>
            </button>
            <p className="mt-4" style={{ color: "var(--muted-light)", fontSize: ".8rem", lineHeight: 1.5 }}>
              Access is restricted to the Abide owner account. No password needed — we email you a
              one-time link.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
