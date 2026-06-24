import type { Metadata } from "next";
import { Breeze } from "../../components/Breeze";
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
      <section className="relative overflow-hidden pt-20 pb-12">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">App design · Project brief</span>
          <h1
            className="display mt-3"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.4rem,5.5vw,4.4rem)",
              lineHeight: 1.02,
              letterSpacing: "-.025em",
              maxWidth: 900,
            }}
          >
            Tell us about <span style={{ color: "var(--ember)" }}>your app</span>.
          </h1>
          <p className="mt-7 text-[1.12rem]" style={{ color: "var(--muted)", maxWidth: 640 }}>
            Fill in the brief below. We&apos;ll reply within 2 business days with thoughts on scope, technical approach, and a quote. No obligation.
          </p>
        </div>
      </section>

      <section className="pb-[96px]">
        <div className="max-w-[820px] mx-auto px-7">
          <div className="card p-8 md:p-12">
            <AppForm />
          </div>
        </div>
      </section>
    </>
  );
}
