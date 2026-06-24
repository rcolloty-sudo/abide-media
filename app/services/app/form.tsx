"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  platforms: string[];
  appCategory: string;
  appStage: string;
  features: string[];
  timeline: string;
  inspiration: string;
  description: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  platforms: [],
  appCategory: "",
  appStage: "",
  features: [],
  timeline: "",
  inspiration: "",
  description: "",
};

const PLATFORMS = ["iOS", "Android", "Both", "Not sure"];

const APP_CATEGORIES = [
  "Business / SaaS tool",
  "Customer-facing app",
  "Internal team app",
  "Marketplace / two-sided",
  "Booking / reservations",
  "Content / media",
  "Other",
];

const APP_STAGES = [
  "Just an idea",
  "Designs or mockups ready",
  "Existing app to rebuild",
  "Existing app to improve",
];

const FEATURE_OPTIONS = [
  "User accounts / login",
  "Push notifications",
  "In-app payments",
  "Camera / photo upload",
  "GPS / location",
  "Messaging / chat",
  "Offline support",
  "Real-time updates",
  "Maps & geocoding",
  "Calendar / scheduling",
];

const TIMELINES = ["ASAP", "Within 2 months", "Within 4 months", "Within 6 months", "Flexible"];

export function AppForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleArr(field: "platforms" | "features", v: string) {
    setForm((s) => ({
      ...s,
      [field]: s[field].includes(v) ? s[field].filter((x) => x !== v) : [...s[field], v],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) return;
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/services-app", {
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
      setErrorMsg(err.message || "Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[var(--mint-soft)] flex items-center justify-center mx-auto mb-6">
          <span className="text-[var(--pine)] text-[2rem]">✓</span>
        </div>
        <h2 className="display text-[2.4rem] text-[var(--ink)] leading-[1.1] mb-4">Brief received.</h2>
        <p className="text-[var(--muted)] text-[1.02rem] leading-[1.7] max-w-[460px] mx-auto">
          Thanks — we&apos;ll review your project and get back to you within 2 business days with thoughts and a quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* About you */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">01 · About you</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="am-label">Your name *</label>
            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Smith" className="am-input" />
          </div>
          <div>
            <label className="am-label">Email *</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.com" className="am-input" />
          </div>
        </div>
        <div>
          <label className="am-label">Business name</label>
          <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" className="am-input" />
        </div>
      </fieldset>

      {/* The app */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">02 · The app</legend>

        <div>
          <label className="am-label">Platforms (select all that apply)</label>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => {
              const on = form.platforms.includes(p);
              return (
                <button key={p} type="button" onClick={() => toggleArr("platforms", p)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-colors ${
                    on ? "bg-[var(--ember)] border-[var(--ember)] text-white" : "bg-[var(--paper-2)] border-[var(--border)] text-[var(--ink)] hover:border-[var(--ember)]"
                  }`}>
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="am-label">What kind of app?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {APP_CATEGORIES.map((c) => (
              <button key={c} type="button" onClick={() => setForm({ ...form, appCategory: c })}
                className={`text-left px-4 py-3 rounded-[10px] border transition-colors text-[14.5px] ${
                  form.appCategory === c
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--border)] bg-[var(--paper-2)] text-[var(--ink)] hover:border-[var(--ink)]"
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="am-label">Where are you at?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {APP_STAGES.map((s) => (
              <button key={s} type="button" onClick={() => setForm({ ...form, appStage: s })}
                className={`text-left px-4 py-3 rounded-[10px] border transition-colors text-[14.5px] ${
                  form.appStage === s
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--border)] bg-[var(--paper-2)] text-[var(--ink)] hover:border-[var(--ink)]"
                }`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="am-label">Features you&apos;ll need (select any)</label>
          <div className="flex flex-wrap gap-2">
            {FEATURE_OPTIONS.map((f) => {
              const on = form.features.includes(f);
              return (
                <button key={f} type="button" onClick={() => toggleArr("features", f)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-medium border transition-colors ${
                    on ? "bg-[var(--ember)] border-[var(--ember)] text-white" : "bg-[var(--paper-2)] border-[var(--border)] text-[var(--ink)] hover:border-[var(--ember)]"
                  }`}>
                  {f}
                </button>
              );
            })}
          </div>
        </div>

      </fieldset>

      {/* Timeline */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">03 · Timeline</legend>
        <div>
          <label className="am-label">When do you need it?</label>
          <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="am-input">
            <option value="">Select...</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </fieldset>

      {/* Tell us more */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">04 · Tell us more</legend>
        <div>
          <label className="am-label">Inspiration / similar apps (optional)</label>
          <input type="text" value={form.inspiration} onChange={(e) => setForm({ ...form, inspiration: e.target.value })} placeholder="Apps you like, or describe the vibe..." className="am-input" />
        </div>
        <div>
          <label className="am-label">Project description *</label>
          <textarea required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Tell us about the problem you're solving, who the app is for, and anything else we should know." className="am-input" />
        </div>
      </fieldset>

      {status === "error" && (
        <div className="bg-[#FEE2E2] border border-[#FECACA] text-[#991B1B] rounded-[10px] px-5 py-3.5 text-[14px]">
          {errorMsg}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-[13px] text-[var(--muted)]">
          Or email us at <a href="mailto:hello@abidemediagroup.com.au" className="underline underline-offset-4 text-[var(--ink)]">hello@abidemediagroup.com.au</a>
        </p>
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? "Sending..." : "Submit brief →"}
        </button>
      </div>
    </form>
  );
}
