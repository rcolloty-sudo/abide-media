"use client";

import { useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontFamily: "var(--mono)",
  fontSize: ".72rem",
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "var(--muted)",
} as const;

const fieldStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid var(--line-strong)",
  background: "var(--paper)",
  fontSize: 16,
} as const;

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const supabase = supabaseBrowser();
      if (!supabase) {
        setSubmitting(false);
        setError("Sign-in is temporarily unavailable. Please try again shortly.");
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) throw error;
      window.location.assign("/admin");
    } catch {
      setSubmitting(false);
      setError("Incorrect email or password.");
    }
  }

  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "60px 24px" }}>
      <div className="card" style={{ width: "100%", maxWidth: 420, padding: 36, boxShadow: "var(--shadow)" }}>
        <h1 className="display" style={{ fontWeight: 700, fontSize: "1.9rem", letterSpacing: "-.02em", marginBottom: 24 }}>
          Sign in
        </h1>

        <form onSubmit={onSubmit}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={fieldStyle}
          />

          <label htmlFor="password" style={{ ...labelStyle, marginTop: 18 }}>Password</label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={fieldStyle}
          />

          {error && <p style={{ color: "var(--ember-deep)", fontSize: ".88rem", marginTop: 12 }}>{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary mt-6"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
