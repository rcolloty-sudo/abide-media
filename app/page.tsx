import Link from "next/link";
import { Breeze } from "./components/Breeze";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[72px] pb-[92px] md:pt-[88px] md:pb-[110px]">
        <Breeze />

        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span
            className="inline-flex items-baseline gap-[.7em] flex-wrap mb-7"
            style={{
              background: "rgba(255,255,255,.6)",
              border: "1px solid var(--line)",
              padding: ".5em .95em",
              borderRadius: "100px",
            }}
          >
            <span className="display" style={{ fontWeight: 700, fontSize: "1rem" }}>abide</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: ".8rem", color: "var(--muted)" }}>/əˈbaɪd/</span>
            <span className="italic" style={{ fontSize: ".85rem", color: "var(--pine)", fontWeight: 600 }}>verb</span>
            <span className="hidden sm:inline" style={{ fontSize: ".85rem", color: "var(--muted)" }}>
              — to remain; to endure; to do good work and stick around.
            </span>
          </span>

          <h1
            className="display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.7rem,6.4vw,5.1rem)",
              lineHeight: 1.02,
              letterSpacing: "-.025em",
              margin: "0 0 .5em",
              maxWidth: 900,
            }}
          >
            We design and build the websites and apps your business{" "}
            <span style={{ color: "var(--ember)", whiteSpace: "nowrap" }}>runs on.</span>
          </h1>

          <p
            className="mb-9"
            style={{
              fontSize: "clamp(1.08rem,1.9vw,1.32rem)",
              color: "var(--muted)",
              maxWidth: 620,
            }}
          >
            Abide Media Group is an Australian software studio. We design and build websites, online stores and mobile apps for businesses — start to finish, by the people who&apos;ll actually build them.
          </p>

          <div className="flex gap-3.5 flex-wrap mb-10">
            <Link href="/services" className="btn btn-primary">
              Build with us <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link href="/suite" className="btn btn-ghost">
              See what we&apos;ve built
            </Link>
          </div>

          <div className="flex gap-2.5 flex-wrap">
            <span className="badge"><span className="dot"></span>Australian-made</span>
            <span className="badge"><span className="dot"></span>Built by operators</span>
            <span className="badge"><span className="dot"></span>No lock-in, no bloat</span>
          </div>
        </div>
      </section>

      {/* ── Suite ──────────────────────────────────────── */}
      <section className="py-[96px]" id="suite">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[680px] mb-[52px]">
            <span className="eyebrow">Our suite</span>
            <h2
              className="display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,3.7vw,3rem)",
                lineHeight: 1.06,
                letterSpacing: "-.02em",
                margin: ".4em 0 .35em",
              }}
            >
              Apps we built to help businesses run better.
            </h2>
            <p className="text-[1.08rem]" style={{ color: "var(--muted)", margin: 0, maxWidth: 560 }}>
              We don&apos;t just build for clients — we build and run our own. Shiftbreeze is one we made from the ground up: the same standard of work we bring to every website and app we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-5">
            {/* Featured product */}
            <a
              href="https://shiftbreeze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card relative overflow-hidden p-[38px] min-h-[340px] flex flex-col justify-between subtle-hover transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div
                aria-hidden="true"
                style={{
                  content: "''",
                  position: "absolute",
                  right: -90,
                  bottom: -90,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 40%, rgba(30,123,240,.32), transparent 68%)",
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-[1]">
                <div className="flex items-center gap-4 mb-[22px]">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "#1E7BF0",
                      display: "grid",
                      placeItems: "center",
                      flex: "0 0 auto",
                    }}
                    aria-hidden="true"
                  >
                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                      <path d="M 14 22 Q 24 16 34 22 T 50 22" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 12 33 Q 22 27 32 33 T 46 33" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 17 44 Q 25 40 33 44" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="display" style={{ fontWeight: 700, fontSize: "1.5rem", letterSpacing: "-.01em" }}>
                      Shiftbreeze
                    </div>
                    <span className="status status--live mt-1.5"><span className="dot"></span>Live</span>
                  </div>
                </div>
                <p className="text-[1.04rem]" style={{ color: "var(--muted)", margin: 0, maxWidth: "46ch" }}>
                  Workforce management for hospitality and retail. Rosters, timesheets, leave requests, daily ops checklists, and a staff mobile app — all in one place, built for the people actually running the floor.
                </p>
              </div>
              <span className="relative z-[1] mt-7 inline-flex items-center gap-1.5 font-semibold" style={{ color: "var(--ink)" }}>
                Visit Shiftbreeze <span className="arr" aria-hidden="true">→</span>
              </span>
            </a>

            {/* Coming soon stack */}
            <div className="flex flex-col gap-[22px]">
              {[
                { title: "In the workshop", body: "The next tool is in development. We’ll announce it when it’s ready to earn its place." },
                { title: "More coming soon", body: "We add a tool to the suite only when it solves a real problem better than the spreadsheet it replaces." },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-[22px] p-9 flex-1 flex flex-col justify-center min-h-[159px]"
                  style={{ background: "transparent", border: "1.5px dashed var(--line-strong)" }}
                >
                  <div
                    aria-hidden="true"
                    className="w-[42px] h-[42px] rounded-[12px] grid place-items-center mb-3.5"
                    style={{ border: "1.5px dashed var(--line-strong)", color: "var(--muted-light)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                  <div className="display text-[1.18rem]" style={{ fontWeight: 700, color: "var(--muted)" }}>{s.title}</div>
                  <p className="text-[0.96rem] mt-1" style={{ color: "var(--muted)", margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-[96px]" id="services" style={{ background: "var(--paper-2)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="max-w-[680px] mb-[52px]">
            <span className="eyebrow">Build with us</span>
            <h2 className="display" style={{ fontWeight: 700, fontSize: "clamp(2rem,3.7vw,3rem)", lineHeight: 1.06, letterSpacing: "-.02em", margin: ".4em 0 .35em" }}>
              We&apos;ll build it for you, too.
            </h2>
            <p className="text-[1.08rem]" style={{ color: "var(--muted)", margin: 0, maxWidth: 560 }}>
              The same care we put into our own products, pointed at yours. Websites and apps, designed and built end to end — by the people who&apos;ll actually be building them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-[34px]">
            {/* Website */}
            <Link href="/services/website" className="card p-9 block transition-transform hover:-translate-y-1" style={{ boxShadow: "var(--shadow)" }}>
              <div
                aria-hidden="true"
                className="w-[54px] h-[54px] rounded-[15px] grid place-items-center mb-[22px]"
                style={{ background: "rgba(234,106,71,.12)", color: "var(--ember-deep)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 8h18M7 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="display" style={{ fontWeight: 700, fontSize: "1.4rem", letterSpacing: "-.01em", margin: "0 0 .5em" }}>
                Website design
              </h3>
              <p style={{ color: "var(--muted)", margin: "0 0 20px", fontSize: "1.02rem" }}>
                Marketing sites, booking flows, online stores. Fast, modern and built to convert — designed to look like you, not a template.
              </p>
              <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
                {["Marketing sites", "E-commerce", "Booking & forms", "SEO-ready"].map((tag) => (
                  <li key={tag} style={{ fontFamily: "var(--mono)", fontSize: ".74rem", color: "var(--pine)", background: "var(--paper)", border: "1px solid var(--line)", padding: ".45em .75em", borderRadius: 100 }}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>

            {/* App */}
            <Link href="/services/app" className="card p-9 block transition-transform hover:-translate-y-1" style={{ boxShadow: "var(--shadow)" }}>
              <div
                aria-hidden="true"
                className="w-[54px] h-[54px] rounded-[15px] grid place-items-center mb-[22px]"
                style={{ background: "rgba(234,106,71,.12)", color: "var(--ember-deep)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M11 18.5h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="display" style={{ fontWeight: 700, fontSize: "1.4rem", letterSpacing: "-.01em", margin: "0 0 .5em" }}>
                App design
              </h3>
              <p style={{ color: "var(--muted)", margin: "0 0 20px", fontSize: "1.02rem" }}>
                iOS and Android apps, from first sketch to the App Store. Product design, build and launch — the whole thing, handled.
              </p>
              <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
                {["iOS & Android", "Product design", "Build & ship", "Launch support"].map((tag) => (
                  <li key={tag} style={{ fontFamily: "var(--mono)", fontSize: ".74rem", color: "var(--pine)", background: "var(--paper)", border: "1px solid var(--line)", padding: ".45em .75em", borderRadius: 100 }}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </div>

          {/* Studio CTA strip */}
          <div className="card flex items-center justify-between gap-6 flex-wrap p-[34px_40px]">
            <div>
              <h3 className="display" style={{ fontWeight: 700, fontSize: "1.35rem", margin: "0 0 .2em" }}>
                Got something you want built?
              </h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                Tell us what you&apos;re working on. We&apos;ll tell you honestly whether we&apos;re the right people for it.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Tell us what you&apos;re building <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About (dark) ──────────────────────────────── */}
      <section className="py-[96px]" id="about" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-8 items-center">
            <div>
              <span className="eyebrow" style={{ color: "var(--mint)" }}>About us</span>
              <h2 className="display" style={{ fontWeight: 700, fontSize: "clamp(2rem,3.8vw,3.1rem)", lineHeight: 1.05, letterSpacing: "-.02em", margin: ".4em 0 0" }}>
                Software that earns its place.
              </h2>
              <div style={{ borderLeft: "3px solid var(--ember)", paddingLeft: 22, marginTop: 32, fontFamily: "var(--display)", fontWeight: 600, fontSize: "1.45rem", lineHeight: 1.35, color: "var(--mint)" }}>
                “The Dude abides — and so do we.”
                <span style={{ color: "var(--paper)", display: "block", fontFamily: "var(--body)", fontWeight: 500, fontSize: ".95rem", marginTop: 14 }}>
                  Whatever we make, we make it to last. That&apos;s the whole idea behind the name.
                </span>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-[1.1rem]" style={{ color: "#C2D4CA", margin: 0 }}>
                We&apos;re a small Australian studio that builds focused, well-made things.{" "}
                <strong style={{ color: "#fff", fontWeight: 600 }}>No feature bloat, no enterprise pricing, no boardroom theatre.</strong>
              </p>
              <p className="text-[1.1rem]" style={{ color: "#C2D4CA", margin: 0 }}>
                We build for the owner who&apos;s working the floor and the manager who needs an answer now — because that&apos;s who we&apos;ve been. Our tools come out of running real businesses, not whiteboarding imaginary ones.
              </p>
              <p className="text-[1.1rem]" style={{ color: "#C2D4CA", margin: 0 }}>
                And when a business would rather have us build their website or app than wrestle it themselves, we do that too — with the same standard we hold our own products to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
