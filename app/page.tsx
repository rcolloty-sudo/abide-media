import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">An Australian software studio · est. 2025</span>
        </div>

        <h1 className="serif text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-[var(--ink)] max-w-[1100px]">
          We build software that helps&nbsp;
          <span className="italic text-[var(--gold)]">real businesses</span> run better.
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <p className="md:col-span-7 text-[var(--muted)] text-[1.05rem] leading-[1.7] max-w-[640px]">
            Abide Media Group is a Queensland-based studio creating practical software for the way real businesses actually operate.
            We build our own SaaS suite — starting with{" "}
            <a href="https://shiftbreeze.com" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)] decoration-[1.5px] hover:text-[var(--gold)] transition-colors">
              Shiftbreeze
            </a>
            {" "}— and design custom websites and apps for other businesses too.
          </p>

          <div className="md:col-span-5 flex md:justify-end items-end">
            <div className="flex flex-wrap gap-3">
              <Link href="/suite" className="am-btn">
                See our suite
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors px-7 py-[14px] rounded-full text-[14.5px] font-semibold">
                Design services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Suite preview ────────────────────────────────── */}
      <section className="bg-[var(--paper)] border-y border-[var(--border-soft)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">Our suite</p>
              <h2 className="serif text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)]">
                Software we build, run, and use ourselves.
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link href="/suite" className="am-btn-ghost">
                See the full suite →
              </Link>
            </div>
          </div>

          {/* Featured product card — Shiftbreeze */}
          <a
            href="https://shiftbreeze.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-[var(--cream)] border border-[var(--border)] rounded-[24px] p-10 md:p-14 hover:border-[var(--gold)] transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="tag tag-gold">Live · v1.0</span>
                <h3 className="serif text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)] mt-5">
                  Shiftbreeze
                </h3>
                <p className="mt-5 text-[var(--muted)] text-[1.02rem] leading-[1.7] max-w-[520px]">
                  Workforce management and daily operations for shift-based Australian businesses. Roster, timesheets, daily checklists, cash counts — one flat-rate platform.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-[14.5px] group-hover:text-[var(--gold)] transition-colors">
                  shiftbreeze.com <span className="text-[var(--gold)]">↗</span>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="bg-[var(--ink)] rounded-[18px] p-8 text-[var(--cream)]">
                  <p className="eyebrow text-[var(--gold-soft)] mb-3">Industries</p>
                  <ul className="serif text-[1.55rem] leading-[1.45]">
                    <li>Hospitality</li>
                    <li className="italic opacity-90">Retail</li>
                    <li>Healthcare</li>
                    <li className="italic opacity-90">Childcare</li>
                    <li className="opacity-80">+ more</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>

          {/* Coming soon teaser */}
          <div className="mt-6 bg-[var(--cream-deep)] border border-dashed border-[var(--border)] rounded-[24px] p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[var(--cream)] border border-[var(--border)] flex items-center justify-center">
                  <span className="serif text-[1.6rem] text-[var(--muted)]">+</span>
                </div>
                <div>
                  <p className="eyebrow mb-1">Coming soon</p>
                  <p className="serif text-[1.45rem] text-[var(--ink)]">More products in development</p>
                </div>
              </div>
              <p className="text-[var(--muted)] text-[14.5px] max-w-[420px]">
                We&apos;re building more tools across operations, finance, and team management. Want early access?{" "}
                <Link href="/contact" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)]">
                  Get in touch
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Design services</p>
            <h2 className="serif text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[var(--ink)]">
              Building software for others, too.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link href="/services" className="am-btn-ghost">
              All services →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/services/website"
            className="group block bg-[var(--paper)] border border-[var(--border)] rounded-[20px] p-9 hover:border-[var(--gold)] transition-colors"
          >
            <p className="eyebrow mb-6">01 / Website design</p>
            <h3 className="serif text-[2rem] leading-[1.1] text-[var(--ink)] mb-4 max-w-[400px]">
              Modern, fast, on-brand websites.
            </h3>
            <p className="text-[var(--muted)] text-[15px] leading-[1.65] max-w-[440px]">
              From marketing sites to product pages. Built on Next.js, hosted on Vercel, optimised for speed and SEO.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-[14.5px] group-hover:text-[var(--gold)] transition-colors">
              Start a website project →
            </span>
          </Link>

          <Link
            href="/services/app"
            className="group block bg-[var(--paper)] border border-[var(--border)] rounded-[20px] p-9 hover:border-[var(--gold)] transition-colors"
          >
            <p className="eyebrow mb-6">02 / App design</p>
            <h3 className="serif text-[2rem] leading-[1.1] text-[var(--ink)] mb-4 max-w-[400px]">
              Native mobile apps for iOS &amp; Android.
            </h3>
            <p className="text-[var(--muted)] text-[15px] leading-[1.65] max-w-[440px]">
              Built with React Native &amp; Expo. Launch on both stores from a single codebase. We&apos;ve done it for ourselves — we can do it for you.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-[14.5px] group-hover:text-[var(--gold)] transition-colors">
              Start an app project →
            </span>
          </Link>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-[var(--gold-soft)] mb-4">Let&apos;s talk</p>
              <h2 className="serif text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                Got a project in mind, or want to chat?
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-soft)] transition-colors text-[var(--ink)] font-semibold px-7 py-4 rounded-full text-[14.5px]"
              >
                Get in touch →
              </Link>
              <p className="text-[var(--muted-soft)] text-[14px] mt-5">
                Or email us:{" "}
                <a href="mailto:hello@abidemediagroup.com.au" className="text-[var(--cream)] hover:text-[var(--gold)]">
                  hello@abidemediagroup.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
