import Link from "next/link";
import type { Metadata } from "next";
import { Breeze } from "../components/Breeze";

export const metadata: Metadata = {
  title: "Web design & app development services",
  description:
    "Website and mobile app design and development for Australian businesses that care about doing it right — by the same team that builds Shiftbreeze.",
  alternates: { canonical: "https://abidemediagroup.com.au/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">Build with us</span>
          <h1
            className="display mt-3"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.7rem,6.4vw,5.1rem)",
              lineHeight: 1.02,
              letterSpacing: "-.025em",
              maxWidth: 1000,
            }}
          >
            We&apos;ll build it for <span style={{ color: "var(--ember)" }}>you, too</span>.
          </h1>
          <p className="mt-7 text-[1.18rem]" style={{ color: "var(--muted)", maxWidth: 660 }}>
            The same care we put into our own products, pointed at yours. Websites and apps, designed and built end to end — by the people who&apos;ll actually be building them.
          </p>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section className="py-[96px]" style={{ background: "var(--paper-2)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7 space-y-6">

          {/* Website */}
          <article className="card p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="display" style={{ fontWeight: 800, fontSize: "2.4rem", color: "var(--ember)", lineHeight: 1 }}>01</span>
                  <span className="eyebrow">Website design</span>
                </div>
                <h2 className="display" style={{ fontWeight: 700, fontSize: "clamp(2rem,4.5vw,3rem)", lineHeight: 1.05, letterSpacing: "-.015em" }}>
                  Modern, fast websites built on the latest stack.
                </h2>
                <p className="mt-6" style={{ color: "var(--muted)", fontSize: "1.04rem" }}>
                  From marketing sites and product pages to full SaaS experiences. Built with the kind of attention to detail you&apos;d expect from a product team — fast, on-brand, and built to convert.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/services/website" className="btn btn-primary">
                    Start a website project <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <span className="eyebrow">What&apos;s included</span>
                <ul className="mt-4 space-y-3">
                  {[
                    "Design & branding",
                    "Mobile-friendly responsive layouts",
                    "Search-engine optimised",
                    "Easy-to-edit content if needed",
                    "Analytics & visitor tracking",
                    "Fast, secure hosting included",
                    "Ongoing support available",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[14.5px] leading-[1.55]">
                      <span style={{ color: "var(--ember)", marginTop: 2 }}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* App */}
          <article className="card p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="display" style={{ fontWeight: 800, fontSize: "2.4rem", color: "var(--ember)", lineHeight: 1 }}>02</span>
                  <span className="eyebrow">App design</span>
                </div>
                <h2 className="display" style={{ fontWeight: 700, fontSize: "clamp(2rem,4.5vw,3rem)", lineHeight: 1.05, letterSpacing: "-.015em" }}>
                  Native mobile apps for iOS &amp; Android.
                </h2>
                <p className="mt-6" style={{ color: "var(--muted)", fontSize: "1.04rem" }}>
                  One app, both stores. We design, build and ship — handling the App Store and Google Play submissions for you. We&apos;ve already done it for Shiftbreeze. We can do it for you, too.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/services/app" className="btn btn-primary">
                    Start an app project <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <span className="eyebrow">What&apos;s included</span>
                <ul className="mt-4 space-y-3">
                  {[
                    "iOS &amp; Android — one app, both stores",
                    "User experience design & prototyping",
                    "Backend & data setup",
                    "Push notifications",
                    "App Store &amp; Play Store submission",
                    "Effortless updates after launch",
                    "Ongoing maintenance available",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[14.5px] leading-[1.55]">
                      <span style={{ color: "var(--ember)", marginTop: 2 }}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section className="py-[96px]">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[680px] mb-[52px]">
            <span className="eyebrow">How it works</span>
            <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,3.7vw,3rem)", lineHeight: 1.06, letterSpacing: "-.02em" }}>
              A simple, transparent process.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Brief", d: "Fill out the form. Tell us about your business, your goals, what you have in mind." },
              { n: "02", t: "Quote", d: "We come back with a scope, timeline, and fixed-price quote within 2 business days." },
              { n: "03", t: "Design & build", d: "Iterative design and development, with check-ins along the way. No surprises." },
              { n: "04", t: "Launch", d: "We handle the technical launch — hosting, store submissions, analytics — and offer ongoing support." },
            ].map((s) => (
              <div key={s.n} className="card p-7">
                <p className="display" style={{ fontWeight: 800, fontSize: "2.2rem", color: "var(--ember)", lineHeight: 1, margin: "0 0 18px" }}>{s.n}</p>
                <p className="display" style={{ fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.2, margin: "0 0 8px" }}>{s.t}</p>
                <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--muted)", margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-[80px]" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="eyebrow" style={{ color: "var(--mint)" }}>Ready to start?</span>
              <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Pick a project type, fill out the brief.
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end flex-wrap gap-3">
              <Link href="/services/website" className="btn btn-primary">
                Website →
              </Link>
              <Link href="/services/app" className="btn btn-light">
                App →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
