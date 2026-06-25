"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", topic: "", message: "" };

const TOPICS = [
  "General enquiry",
  "Shiftbreeze question",
  "Custom project / design service",
  "Partnership / collaboration",
  "Media / press",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setForm(INITIAL);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--mint-soft)] flex items-center justify-center mx-auto mb-6">
          <span className="text-[var(--pine)] text-[2rem]">✓</span>
        </div>
        <h2 className="display text-[2rem] text-[var(--ink)] leading-[1.1] mb-3">Message sent.</h2>
        <p className="text-[var(--muted)] text-[15px] leading-[1.65] max-w-[400px] mx-auto">
          Thanks for reaching out — we&apos;ll be in touch within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-8 md:p-10 space-y-6">
      <div>
        <p className="eyebrow mb-2">Send us a message</p>
        <p className="display text-[1.7rem] text-[var(--ink)] leading-[1.2]">
          Tell us a bit about what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="am-label">Your name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Alex Smith"
            className="am-input"
          />
        </div>
        <div>
          <label className="am-label">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@email.com"
            className="am-input"
          />
        </div>
      </div>

      <div>
        <label className="am-label">What&apos;s this about?</label>
        <select
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="am-input"
        >
          <option value="">Select a topic...</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="am-label">Message *</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us what you need..."
          className="am-input"
          rows={6}
        />
      </div>

      {status === "error" && (
        <div className="bg-[#FEE2E2] border border-[#FECACA] text-[#991B1B] rounded-[10px] px-5 py-3.5 text-[14px]">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-[13px] text-[var(--muted)]">
          Or email us: <a href="mailto:hello@abidemediagroup.com.au" className="underline underline-offset-4 text-[var(--ink)] break-all">hello@abidemediagroup.com.au</a>
        </p>
        <button type="submit" disabled={loading} className="btn btn-primary w-full sm:w-auto justify-center shrink-0">
          {loading ? "Sending..." : "Send message →"}
        </button>
      </div>
    </form>
  );
}
