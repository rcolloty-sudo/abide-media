import Link from "next/link";
import type { Metadata } from "next";
import { Breeze } from "../components/Breeze";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abide Media Group is a small Australian software studio. We build focused, well-made tools and design websites and apps for businesses we believe in.",
  alternates: { canonical: "https://abidemediagroup.com.au/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header (light, with breeze) ─────────────── */}
      <section className="relative overflow-hidden pt-20 pb-20">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">About us</span>
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
            Software that <span style={{ color: "var(--ember)" }}>earns its place</span>.
          </h1>
          <p className="mt-7 text-[1.18rem]" style={{ color: "var(--muted)", maxWidth: 620 }}>
            We&apos;re a small Australian studio that makes focused, well-built tools — and helps other businesses make theirs.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────── */}
      <section className="py-[96px]" style={{ background: "var(--paper-2)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="eyebrow">The name</span>
              <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(1.6rem,2.8vw,2.2rem)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Abide / əˈbaɪd /
              </h2>
              <p className="italic mt-2" style={{ color: "var(--pine)", fontWeight: 600 }}>verb</p>
              <p className="mt-2" style={{ color: "var(--muted)" }}>
                To remain. To endure. To do good work and stick around. Whatever we make, we make it to last.
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-[1.06rem]" style={{ color: "var(--ink)" }}>
              <p>
                Abide Media Group exists because most business software is built by people who&apos;ve never run the kind of business they&apos;re selling to. The result: bloated tools that solve problems nobody really has, while the actual day-to-day grind goes ignored.
              </p>
              <p style={{ color: "var(--muted)" }}>
                We build for the owner who&apos;s working the floor and the manager who needs an answer now — because that&apos;s who we&apos;ve been. Our products come out of running real businesses, not whiteboarding imaginary ones.
              </p>
              <p style={{ color: "var(--muted)" }}>
                The longer-term plan is a connected suite of practical business tools — and along the way, helping a small number of selected clients with custom website and app projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────── */}
      <section className="py-[96px]">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[680px] mb-[52px]">
            <span className="eyebrow">How we work</span>
            <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,3.7vw,3rem)", lineHeight: 1.06, letterSpacing: "-.02em" }}>
              A few things we care about.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Practical over polished", d: "Software should make the work easier. Pretty is nice. Useful is non-negotiable." },
              { n: "02", t: "Built in Australia", d: "We understand Australian award rates, payroll, and the realities of running a business here. No US-first defaults." },
              { n: "03", t: "Flat pricing, no surprises", d: "Per-user pricing is a tax on growth. Our products are flat-rate so customer growth doesn’t punish you." },
            ].map((p) => (
              <div key={p.n} className="card p-9">
                <span
                  className="display block mb-5"
                  style={{ fontWeight: 800, fontSize: "2.4rem", color: "var(--ember)", lineHeight: 1 }}
                >
                  {p.n}
                </span>
                <h3 className="display mb-2" style={{ fontWeight: 700, fontSize: "1.35rem", letterSpacing: "-.01em" }}>{p.t}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark quote section ───────────────────────── */}
      <section className="py-[96px]" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[820px]">
            <span className="eyebrow" style={{ color: "var(--mint)" }}>Founder</span>
            <h2
              className="display mt-3"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,4vw,3rem)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
              }}
            >
              Rhys Colloty — building from Queensland.
            </h2>
            <p className="mt-6 text-[1.1rem]" style={{ color: "#C2D4CA" }}>
              Background in hospitality operations and product. Started Abide Media Group to build the software he wished existed when he was running venues.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get in touch <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link href="/services" className="btn btn-light">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
