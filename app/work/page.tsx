import Link from "next/link";
import type { Metadata } from "next";
import { Breeze } from "../components/Breeze";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "A selection of homepages designed and built by Abide Media Group — from trades to hospitality, retail and our own software. Bespoke, fast, made to convert.",
  alternates: { canonical: "https://abidemediagroup.com.au/work" },
};

type Project = {
  slug: string;
  name: string;
  url: string;
  cat: string;
  tag: "Concept" | "Live product";
  desc: string;
};

const PROJECTS: Project[] = [
  {
    slug: "plumber",
    name: "AquaFix Plumbing",
    url: "aquafixplumbing.com.au",
    cat: "Trade · Plumbing",
    tag: "Concept",
    desc: "A bold, trust-first site for a 24/7 emergency plumber — built to turn searches into booked jobs.",
  },
  {
    slug: "shiftbreeze",
    name: "Shiftbreeze",
    url: "shiftbreeze.com",
    cat: "SaaS · Workforce app",
    tag: "Live product",
    desc: "Our own product: a complete workforce & operations platform for hospitality and retail — rosters, timesheets, checklists and a staff app.",
  },
  {
    slug: "restaurant",
    name: "Olive & Ember",
    url: "oliveandember.com.au",
    cat: "Hospitality",
    tag: "Concept",
    desc: "An atmospheric homepage for a wood-fired restaurant — menu, story and one-tap table reservations.",
  },
  {
    slug: "coffee",
    name: "Driftwood Coffee Roasters",
    url: "driftwoodcoffee.com.au",
    cat: "Retail · E-commerce",
    tag: "Concept",
    desc: "A clean storefront for a specialty roaster — shoppable beans, subscriptions and customer reviews.",
  },
  {
    slug: "pilates",
    name: "Stillwater Pilates",
    url: "stillwaterpilates.com.au",
    cat: "Health & wellness",
    tag: "Concept",
    desc: "A calm, elegant site for a boutique studio — class timetable and membership pricing.",
  },
];

function Tag({ tag }: { tag: Project["tag"] }) {
  const live = tag === "Live product";
  return (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontSize: ".62rem",
        fontWeight: 600,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: 100,
        color: live ? "var(--pine)" : "var(--ember-deep)",
        background: live ? "rgba(143,211,176,.28)" : "rgba(234,106,71,.13)",
      }}
    >
      {tag}
    </span>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">Our work</span>
          <h1
            className="display mt-3"
            style={{ fontWeight: 700, fontSize: "clamp(2.7rem,6.4vw,5.1rem)", lineHeight: 1.02, letterSpacing: "-.025em", maxWidth: 1000 }}
          >
            Design that <span style={{ color: "var(--ember)" }}>does the job.</span>
          </h1>
          <p className="mt-7 text-[1.18rem]" style={{ color: "var(--muted)", maxWidth: 660 }}>
            A selection of homepages we&apos;ve designed and built — a mix of our own product and concept
            work that shows the range. Every one is bespoke, fast, and made to convert. Click any design to
            see the full page.
          </p>
        </div>
      </section>

      <section className="pb-[96px]">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {PROJECTS.map((p) => (
              <div key={p.slug} className="card" style={{ overflow: "hidden", boxShadow: "var(--shadow)" }}>
                <a
                  href={`/work/${p.slug}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:-translate-y-1"
                  aria-label={`View the full ${p.name} homepage design`}
                >
                  {/* browser chrome */}
                  <div
                    style={{
                      background: "#e7ece8",
                      borderBottom: "1px solid var(--line)",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E96A5E", display: "inline-block" }} />
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E8B24A", display: "inline-block" }} />
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#5FB87E", display: "inline-block" }} />
                    <span
                      style={{
                        marginLeft: 8,
                        fontFamily: "var(--mono)",
                        fontSize: ".72rem",
                        color: "var(--muted)",
                        background: "#fff",
                        border: "1px solid var(--line)",
                        borderRadius: 100,
                        padding: "3px 14px",
                      }}
                    >
                      {p.url}
                    </span>
                  </div>
                  {/* screenshot (top-cropped) */}
                  <div style={{ height: 300, overflow: "hidden", background: "#fff" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/work/${p.slug}-thumb.png`}
                      alt={`${p.name} homepage design`}
                      style={{ width: "100%", display: "block" }}
                      loading="lazy"
                    />
                  </div>
                </a>

                <div style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                    <Tag tag={p.tag} />
                    <span style={{ fontFamily: "var(--mono)", fontSize: ".7rem", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {p.cat}
                    </span>
                  </div>
                  <h3 className="display" style={{ fontWeight: 700, fontSize: "1.4rem", letterSpacing: "-.01em" }}>{p.name}</h3>
                  <p style={{ color: "var(--muted)", marginTop: 6, fontSize: "1.02rem" }}>{p.desc}</p>
                  <a
                    href={`/work/${p.slug}.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, color: "var(--ink)", fontWeight: 600 }}
                  >
                    View full design <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[88px]" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7 flex items-center justify-between gap-8 flex-wrap">
          <div>
            <span className="eyebrow" style={{ color: "var(--mint)" }}>Your turn</span>
            <h2 className="display mt-3" style={{ fontWeight: 700, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
              Like what you see? Let&apos;s build yours.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Tell us what you&apos;re building <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
