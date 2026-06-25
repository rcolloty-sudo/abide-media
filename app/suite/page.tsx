import Link from "next/link";
import type { Metadata } from "next";
import { Breeze } from "../components/Breeze";

export const metadata: Metadata = {
  title: "Our suite",
  description:
    "The Abide Media Group product suite. Starting with Shiftbreeze — a workforce and operations platform for Australian shift-based businesses. More products in development.",
  alternates: { canonical: "https://abidemediagroup.com.au/suite" },
};

export default function SuitePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">Our suite</span>
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
            One product live. <span style={{ color: "var(--ember)" }}>More on the way.</span>
          </h1>
          <p className="mt-7 text-[1.18rem]" style={{ color: "var(--muted)", maxWidth: 640 }}>
            Every tool we make is built for the operator on the floor — not the buyer in a boardroom. Focused, well-made, and priced like we&apos;d want to pay for it ourselves.
          </p>
        </div>
      </section>

      {/* ── Featured: Shiftbreeze ──────────────────── */}
      <section className="py-[96px]" style={{ background: "var(--paper-2)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="card p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    style={{
                      width: 60, height: 60, borderRadius: 16,
                      background: "linear-gradient(150deg, var(--pine), var(--ink))",
                      color: "var(--mint)",
                      display: "grid", placeItems: "center",
                      fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.7rem",
                    }}
                  >
                    S
                  </div>
                  <span className="status status--live"><span className="dot"></span>Live · Available now</span>
                </div>

                <h2 className="display" style={{ fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,3.6rem)", lineHeight: 1.02, letterSpacing: "-.02em" }}>
                  Shiftbreeze
                </h2>
                <p className="mt-2" style={{ fontFamily: "var(--display)", fontWeight: 600, color: "var(--ember)", fontSize: "1.3rem" }}>
                  Workforce & operations, simplified.
                </p>
                <p className="mt-6" style={{ color: "var(--muted)", fontSize: "1.06rem" }}>
                  Rostering, timesheets, daily checklists, cash counts, stock takes, incident reporting, team messaging — one platform for shift-based Australian businesses. Flat pricing, no per-user fees, no lock-in.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="https://shiftbreeze.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit Shiftbreeze <span className="arr" aria-hidden="true">→</span>
                  </a>
                  <a href="https://shiftbreeze.com/features" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    See features
                  </a>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="suite-feature-grid grid grid-cols-2 gap-3">
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
                    <div key={f.title} className="rounded-[14px] p-5" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "0.66rem",
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: f.eye === "Team" ? "var(--pine)" : "var(--ember-deep)",
                        }}
                      >
                        {f.eye}
                      </span>
                      <p className="display mt-2" style={{ fontWeight: 700, fontSize: "1.12rem", lineHeight: 1.2, margin: 0 }}>{f.title}</p>
                      <p className="mt-1.5 text-[12.5px] leading-[1.55]" style={{ color: "var(--muted)", margin: 0 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming soon ──────────────────────────────── */}
      <section className="py-[96px]">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[680px] mb-[52px]">
            <span className="eyebrow">In development</span>
            <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,3.7vw,3rem)", lineHeight: 1.06, letterSpacing: "-.02em" }}>
              More tools, coming soon.
            </h2>
            <p className="mt-4 text-[1.06rem]" style={{ color: "var(--muted)" }}>
              We&apos;re actively building several new products across operations, finance, and team management. Want to be notified or get early access?{" "}
              <Link href="/contact" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ember)", paddingBottom: 2 }}>Let us know</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-[22px] p-9"
                style={{ background: "transparent", border: "1.5px dashed var(--line-strong)" }}
              >
                <div
                  className="w-[42px] h-[42px] rounded-[12px] grid place-items-center mb-3.5"
                  style={{ border: "1.5px dashed var(--line-strong)", color: "var(--muted-light)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="display" style={{ fontWeight: 700, fontSize: "1.18rem", color: "var(--muted)", margin: 0 }}>
                  Coming soon
                </p>
                <p className="mt-1 text-[0.96rem]" style={{ color: "var(--muted)", margin: 0 }}>
                  More details soon. Sign up below to be the first to hear when we launch.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────── */}
      <section className="py-[80px]" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="eyebrow" style={{ color: "var(--mint)" }}>Stay in the loop</span>
              <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Want early access to what&apos;s coming next?
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link href="/contact" className="btn btn-primary">
                Get in touch <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
