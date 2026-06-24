import type { Metadata } from "next";
import { WebsiteForm } from "./form";

export const metadata: Metadata = {
  title: "Website design brief",
  description:
    "Tell us about your website project. We'll come back to you within 2 business days with a scope, timeline, and quote.",
  alternates: { canonical: "https://abidemediagroup.com.au/services/website" },
};

export default function WebsiteServicePage() {
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="rule" />
          <span className="eyebrow">Website design · Project brief</span>
        </div>
        <h1 className="serif text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[900px]">
          Let&apos;s build something good.
        </h1>
        <p className="mt-8 text-[var(--muted)] text-[1.05rem] leading-[1.75] max-w-[640px]">
          Fill in the brief below. We&apos;ll reply within 2 business days with thoughts, a rough scope, and a fixed-price quote. No obligation — just a clear path forward.
        </p>
      </section>

      <section className="border-t border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[820px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <WebsiteForm />
        </div>
      </section>
    </>
  );
}
