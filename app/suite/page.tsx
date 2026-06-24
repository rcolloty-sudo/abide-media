import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our suite",
  description:
    "The Abide Media Group product suite. Starting with Shiftbreeze — a workforce and operations platform for Australian shift-based businesses. More products in development.",
  alternates: { canonical: "https://abidemediagroup.com.au/suite" },
};

export default function SuitePage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">Our suite of products</span>
        </div>
        <h1 className="serif text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[1100px]">
          Software we build, run, and use&nbsp;<span className="italic text-[var(--gold)]">ourselves</span>.
        </h1>
        <p className="mt-10 text-[var(--muted)] text-[1.05rem] leading-[1.7] max-w-[640px]">
          Every product in the Abide suite is dogfooded — used by the team daily before it goes near a customer. That means fewer rough edges, more practical features, and software that actually fits the way real businesses work.
        </p>
      </section>

      {/* ── Featured: Shiftbreeze ───────────────────────── */}
      <section className="border-t border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <span className="tag tag-gold">Live · Available now</span>
              <h2 className="serif text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.015em] text-[var(--ink)] mt-6">
                Shiftbreeze
              </h2>
              <p className="mt-3 serif text-[1.5rem] text-[var(--gold)] italic">
                Workforce & operations, simplified.
              </p>
              <p className="mt-7 text-[var(--muted)] text-[1.05rem] leading-[1.75]">
                Rostering, timesheets, daily checklists, cash counts, stock takes, incident reporting, team messaging — one platform for shift-based Australian businesses. Flat pricing, no per-user fees, no lock-in contracts.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://shiftbreeze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="am-btn"
                >
                  Visit shiftbreeze.com ↗
                </a>
                <a
                  href="https://shiftbreeze.com/features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors px-7 py-[14px] rounded-full text-[14.5px] font-semibold"
                >
                  See features
                </a>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { eye: "Team", title: "Rostering", desc: "Drag & drop rosters, shift swaps, availability" },
                  { eye: "Team", title: "Timesheets", desc: "Auto-generated from clock in/out, export to payroll" },
                  { eye: "Team", title: "Leave", desc: "Annual, sick, unpaid — track balances & approvals" },
                  { eye: "Team", title: "Messaging", desc: "Team chat without sharing phone numbers" },
                  { eye: "Ops", title: "Daily checklists", desc: "Open, close & prep procedures" },
                  { eye: "Ops", title: "Cash counts", desc: "End of day cash reconciliation" },
                  { eye: "Ops", title: "Stock takes", desc: "Inventory by location and category" },
                  { eye: "Ops", title: "Incidents", desc: "WHS-compliant incident reporting" },
                ].map((f) => (
                  <div key={f.title} className="bg-[var(--cream)] border border-[var(--border)] rounded-[14px] p-5">
                    <p className="eyebrow text-[10px] mb-2">{f.eye}</p>
                    <p className="serif text-[1.2rem] text-[var(--ink)] leading-[1.2]">{f.title}</p>
                    <p className="mt-1.5 text-[var(--muted)] text-[12.5px] leading-[1.55]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming soon ─────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="mb-14">
          <p className="eyebrow mb-4">In development</p>
          <h2 className="serif text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)] max-w-[800px]">
            More tools, coming soon.
          </h2>
          <p className="mt-6 text-[var(--muted)] text-[1.02rem] leading-[1.7] max-w-[640px]">
            We&apos;re actively building several new products across operations, finance, and team management. Want to be notified or get early access?{" "}
            <Link href="/contact" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)]">
              Let us know
            </Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[var(--cream-deep)] border border-dashed border-[var(--border)] rounded-[20px] p-9">
              <p className="serif text-[3rem] text-[var(--muted-soft)] leading-none mb-6">0{i + 1}</p>
              <p className="serif text-[1.5rem] text-[var(--ink)] mb-3 leading-[1.2]">In the works</p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.65]">
                More details coming soon. Sign up below to be the first to hear when we launch.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-[var(--gold-soft)] mb-4">Stay in the loop</p>
              <h2 className="serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                Want early access to what&apos;s coming next?
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-soft)] transition-colors text-[var(--ink)] font-semibold px-7 py-4 rounded-full text-[14.5px]"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
