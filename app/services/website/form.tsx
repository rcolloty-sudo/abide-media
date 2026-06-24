"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  websiteCurrent: string;
  projectType: string;
  pages: string;
  features: string[];
  designStyle: string;
  timeline: string;
  budget: string;
  inspiration: string;
  description: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  websiteCurrent: "",
  projectType: "",
  pages: "",
  features: [],
  designStyle: "",
  timeline: "",
  budget: "",
  inspiration: "",
  description: "",
};

const PROJECT_TYPES = [
  "New marketing site",
  "Redesign of existing site",
  "Product / SaaS landing page",
  "E-commerce store",
  "Other",
];

const FEATURE_OPTIONS = [
  "Contact / lead form",
  "Booking system",
  "Online payments",
  "Blog / CMS",
  "Multi-language",
  "Customer portal / login",
  "Analytics & tracking",
];

const TIMELINES = ["ASAP", "Within 4 weeks", "Within 8 weeks", "Within 3 months", "Flexible / no rush"];
const BUDGETS = ["Under $3k", "$3k–$8k", "$8k–$15k", "$15k+", "Not sure yet"];

export function WebsiteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleFeature(f: string) {
    setForm((s) => ({
      ...s,
      features: s.features.includes(f) ? s.features.filter((x) => x !== f) : [...s.features, f],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) return;
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/services-website", {
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
          Thanks — we&apos;ll review your project details and get back to you within 2 business days with thoughts, a rough scope, and a quote.
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
              placeholder="you@business.com"
              className="am-input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="am-label">Business name</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Your company"
              className="am-input"
            />
          </div>
          <div>
            <label className="am-label">Current website (if any)</label>
            <input
              type="text"
              value={form.websiteCurrent}
              onChange={(e) => setForm({ ...form, websiteCurrent: e.target.value })}
              placeholder="example.com"
              className="am-input"
            />
          </div>
        </div>
      </fieldset>

      {/* Project */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">02 · The project</legend>
        <div>
          <label className="am-label">What kind of website?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PROJECT_TYPES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setForm({ ...form, projectType: p })}
                className={`text-left px-4 py-3 rounded-[10px] border transition-colors text-[14.5px] ${
                  form.projectType === p
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--border)] bg-[var(--paper-2)] text-[var(--ink)] hover:border-[var(--ink)]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="am-label">Approx. number of pages</label>
            <select
              value={form.pages}
              onChange={(e) => setForm({ ...form, pages: e.target.value })}
              className="am-input"
            >
              <option value="">Select...</option>
              <option value="1-3">1–3 pages</option>
              <option value="4-8">4–8 pages</option>
              <option value="9-15">9–15 pages</option>
              <option value="15+">15+ pages</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label className="am-label">Design style</label>
            <select
              value={form.designStyle}
              onChange={(e) => setForm({ ...form, designStyle: e.target.value })}
              className="am-input"
            >
              <option value="">Select...</option>
              <option value="minimal">Minimal &amp; clean</option>
              <option value="bold">Bold &amp; colourful</option>
              <option value="editorial">Editorial &amp; refined</option>
              <option value="playful">Playful &amp; friendly</option>
              <option value="not-sure">Not sure — open to ideas</option>
            </select>
          </div>
        </div>

        <div>
          <label className="am-label">Features you&apos;ll need (select any)</label>
          <div className="flex flex-wrap gap-2">
            {FEATURE_OPTIONS.map((f) => {
              const on = form.features.includes(f);
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => toggleFeature(f)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-medium border transition-colors ${
                    on
                      ? "bg-[var(--ember)] border-[var(--ember)] text-white"
                      : "bg-[var(--paper-2)] border-[var(--border)] text-[var(--ink)] hover:border-[var(--ember)]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </fieldset>

      {/* Timeline & budget */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">03 · Timeline &amp; budget</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="am-label">Timeline</label>
            <select
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              className="am-input"
            >
              <option value="">Select...</option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="am-label">Budget (AUD)</label>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="am-input"
            >
              <option value="">Select...</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Tell us more */}
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-2">04 · Tell us more</legend>
        <div>
          <label className="am-label">Inspiration / references (optional)</label>
          <input
            type="text"
            value={form.inspiration}
            onChange={(e) => setForm({ ...form, inspiration: e.target.value })}
            placeholder="Links to sites you like, or describe the vibe..."
            className="am-input"
          />
        </div>
        <div>
          <label className="am-label">Project description *</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Tell us about your business, your goals for this website, and anything else we should know."
            className="am-input"
          />
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
