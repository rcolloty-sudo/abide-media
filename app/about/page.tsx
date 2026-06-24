import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abide Media Group is an Australian software studio founded by Rhys Colloty. We build practical SaaS tools and design websites and apps for other businesses.",
  alternates: { canonical: "https://abidemediagroup.com.au/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">About Abide Media Group</span>
        </div>
        <h1 className="serif text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[1100px]">
          Practical software, built by people who&apos;ve actually run businesses.
        </h1>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="border-y border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-4">Our mission</p>
              <p className="serif text-[1.8rem] leading-[1.2] text-[var(--ink)]">
                Make the boring parts of running a business&nbsp;
                <span className="italic text-[var(--gold)]">a lot less boring</span>.
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-[var(--ink)] text-[1.05rem] leading-[1.75]">
              <p>
                Most business software is built by people who&apos;ve never run the kind of business they&apos;re selling to. The result: bloated tools that solve problems nobody really has, while the actual day-to-day grind goes ignored.
              </p>
              <p className="text-[var(--muted)]">
                Abide Media Group exists to fix that. We build tools we&apos;d want to use ourselves — clean, fast, and focused on the work that actually fills a manager&apos;s day. Rostering, daily checklists, cash counts, timesheets, the unglamorous stuff.
              </p>
              <p className="text-[var(--muted)]">
                We&apos;re also picky about the businesses we work with. If you&apos;re building something interesting and need a website or app to match — we&apos;d love to help with that too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder / Story ──────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="bg-[var(--ink)] text-[var(--cream)] rounded-[24px] p-10">
              <p className="eyebrow text-[var(--gold-soft)] mb-4">Founder</p>
              <p className="serif text-[2rem] leading-[1.1] mb-6">Rhys Colloty</p>
              <p className="text-[var(--muted-soft)] text-[15px] leading-[1.7]">
                Based in Queensland, Australia. Background in hospitality operations and product. Started Abide Media Group to build the software he wished existed when he was running venues.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">The story</p>
            <div className="space-y-5 text-[var(--ink)] text-[1.05rem] leading-[1.75]">
              <p>
                Abide Media Group was founded in 2025 out of frustration with the existing landscape of workforce and operations software. After years running shift-based hospitality businesses, it was clear there was a gap: tools that were either too basic to be useful, or so bloated and expensive they made small operators feel locked out.
              </p>
              <p className="text-[var(--muted)]">
                Our first product, <a href="https://shiftbreeze.com" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)]">Shiftbreeze</a>, is a workforce and ops platform built specifically for Australian shift-based businesses — flat-rate pricing, no per-user fees, and the daily-ops features that most platforms still leave out.
              </p>
              <p className="text-[var(--muted)]">
                The longer-term plan is a connected suite of practical business tools — and along the way, helping a small number of selected clients with custom website and app projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ──────────────────────────────────── */}
      <section className="border-t border-[var(--border-soft)] bg-[var(--cream-deep)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-14">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="serif text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.015em] text-[var(--ink)] max-w-[800px]">
              A few things we care about.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Practical over polished", d: "Software should make the work easier. Pretty is nice. Useful is non-negotiable." },
              { n: "02", t: "Built in Australia", d: "We understand Australian award rates, payroll, and the realities of running a business here. No US-first defaults." },
              { n: "03", t: "Flat pricing, no surprises", d: "Per-user pricing is a tax on growth. Our products are flat-rate. Customer growth shouldn't punish you." },
            ].map((p) => (
              <div key={p.n} className="bg-[var(--cream)] border border-[var(--border)] rounded-[20px] p-9">
                <p className="serif text-[3rem] text-[var(--gold)] leading-none mb-6">{p.n}</p>
                <h3 className="serif text-[1.5rem] text-[var(--ink)] mb-3 leading-[1.2]">{p.t}</h3>
                <p className="text-[var(--muted)] text-[14.5px] leading-[1.65]">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <h2 className="serif text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)] max-w-[700px] mx-auto">
          Want to work with us, or just say hi?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="am-btn">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors px-7 py-[14px] rounded-full text-[14.5px] font-semibold">
            See our services
          </Link>
        </div>
      </section>
    </>
  );
}
