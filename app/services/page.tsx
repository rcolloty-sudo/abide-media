import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design services",
  description:
    "Custom website and mobile app design for businesses that care about doing it right. Built by the team behind Shiftbreeze.",
  alternates: { canonical: "https://abidemediagroup.com.au/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">Design services</span>
        </div>
        <h1 className="serif text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[1100px]">
          We build websites and apps for&nbsp;<span className="italic text-[var(--gold)]">other businesses</span>, too.
        </h1>
        <p className="mt-10 text-[var(--muted)] text-[1.05rem] leading-[1.75] max-w-[680px]">
          When we&apos;re not working on our own products, we take on a small number of selected client projects. We focus on Australian small-to-medium businesses who care about doing software properly — and we use the same tools and standards we use for our own products.
        </p>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="border-t border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28 space-y-12">

          {/* Website Design */}
          <article className="bg-[var(--cream)] border border-[var(--border)] rounded-[24px] p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="serif text-[2.4rem] text-[var(--gold)] leading-none">01</span>
                  <span className="eyebrow">Website design</span>
                </div>
                <h2 className="serif text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)]">
                  Modern, fast websites built on the latest stack.
                </h2>
                <p className="mt-6 text-[var(--muted)] text-[1.02rem] leading-[1.75]">
                  From marketing sites and product pages to full SaaS landing experiences. Built on Next.js, hosted on Vercel, designed with the kind of attention to detail you&apos;d expect from a product team.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/services/website" className="am-btn">
                    Start a website project →
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="eyebrow mb-4">What&apos;s included</p>
                <ul className="space-y-3">
                  {[
                    "Design system & branding",
                    "Custom responsive design",
                    "SEO &amp; performance optimisation",
                    "CMS integration if needed",
                    "Analytics &amp; tracking setup",
                    "Hosting on Vercel",
                    "Ongoing support available",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[14.5px] text-[var(--ink)] leading-[1.55]">
                      <span className="text-[var(--gold)] mt-1">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* App Design */}
          <article className="bg-[var(--cream)] border border-[var(--border)] rounded-[24px] p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="serif text-[2.4rem] text-[var(--gold)] leading-none">02</span>
                  <span className="eyebrow">App design</span>
                </div>
                <h2 className="serif text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)]">
                  Native mobile apps for iOS &amp; Android.
                </h2>
                <p className="mt-6 text-[var(--muted)] text-[1.02rem] leading-[1.75]">
                  Built with React Native and Expo — one codebase, both stores. We&apos;ve already done this for Shiftbreeze, navigating both App Store and Google Play submissions. We can do it for you, too.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/services/app" className="am-btn">
                    Start an app project →
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="eyebrow mb-4">What&apos;s included</p>
                <ul className="space-y-3">
                  {[
                    "iOS &amp; Android from one codebase",
                    "UI/UX design &amp; prototyping",
                    "Backend integration (Supabase, custom API, etc.)",
                    "Push notifications setup",
                    "App Store &amp; Play Store submission",
                    "Over-the-air updates (EAS)",
                    "Ongoing maintenance available",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[14.5px] text-[var(--ink)] leading-[1.55]">
                      <span className="text-[var(--gold)] mt-1">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="mb-14">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="serif text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)] max-w-[800px]">
            A simple, transparent process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { n: "01", t: "Brief", d: "Fill out the form. Tell us about your business, your goals, what you have in mind." },
            { n: "02", t: "Quote", d: "We come back with a scope, timeline, and fixed-price quote within 2 business days." },
            { n: "03", t: "Design & build", d: "Iterative design and development, with check-ins along the way. No surprises." },
            { n: "04", t: "Launch", d: "We handle the technical launch — hosting, store submissions, analytics — and offer ongoing support." },
          ].map((s) => (
            <div key={s.n} className="bg-[var(--paper)] border border-[var(--border)] rounded-[20px] p-7">
              <p className="serif text-[2.6rem] text-[var(--gold)] leading-none mb-5">{s.n}</p>
              <p className="serif text-[1.4rem] text-[var(--ink)] leading-[1.2] mb-2.5">{s.t}</p>
              <p className="text-[var(--muted)] text-[13.5px] leading-[1.6]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-[var(--gold-soft)] mb-4">Ready to start?</p>
              <h2 className="serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                Pick a project type, fill out the brief.
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end flex-wrap gap-3">
              <Link href="/services/website" className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-soft)] transition-colors text-[var(--ink)] font-semibold px-6 py-4 rounded-full text-[14px]">
                Website →
              </Link>
              <Link href="/services/app" className="inline-flex items-center gap-2 bg-transparent border border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--ink)] transition-colors text-[var(--cream)] font-semibold px-6 py-4 rounded-full text-[14px]">
                App →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
