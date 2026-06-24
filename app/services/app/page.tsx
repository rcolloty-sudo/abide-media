import type { Metadata } from "next";
import { AppForm } from "./form";

export const metadata: Metadata = {
  title: "App design brief",
  description:
    "Tell us about your mobile app project. We'll come back to you within 2 business days with a scope, timeline, and quote.",
  alternates: { canonical: "https://abidemediagroup.com.au/services/app" },
};

export default function AppServicePage() {
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="rule" />
          <span className="eyebrow">App design · Project brief</span>
        </div>
        <h1 className="serif text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[900px]">
          Tell us about your app.
        </h1>
        <p className="mt-8 text-[var(--muted)] text-[1.05rem] leading-[1.75] max-w-[640px]">
          Fill in the brief below. We&apos;ll reply within 2 business days with thoughts on scope, technical approach, and a quote. No obligation.
        </p>
      </section>

      <section className="border-t border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[820px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <AppForm />
        </div>
      </section>
    </>
  );
}
