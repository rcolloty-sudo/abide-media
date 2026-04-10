export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-[#0b1320]/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#4F7EF7] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="white" opacity="0.3" />
            </svg>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">Abide Media Group</span>
        </div>
        <a
          href="mailto:hello@abidemediagroup.com"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, #4F7EF7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F7EF7]/10 border border-[#4F7EF7]/20 text-[#7ba4f9] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7EF7] animate-pulse" />
            Building software for the real world
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Tools that help
            <br />
            <span className="text-[#4F7EF7]">businesses run better</span>
          </h1>

          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Abide Media Group builds practical software products that give business owners
            and their teams more clarity, control, and time.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-28 max-w-5xl mx-auto w-full">
        <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-8 text-center">
          Our Products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Rundeck */}
          <a
            href="https://rundeck.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#2D9B6F]/15 border border-[#2D9B6F]/25 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 5h12M3 9h8M3 13h10"
                    stroke="#2D9B6F"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#2D9B6F] font-medium">
                Live
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D9B6F]" />
              </span>
            </div>

            <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2D9B6F] transition-colors">
              Rundeck
            </h2>
            <p className="text-sm text-white/45 leading-relaxed">
              Workforce management for hospitality and retail. Rosters, timesheets,
              leave, tasks, food safety, and more — built for operators who want
              less admin and more visibility.
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-xs text-white/30 group-hover:text-[#2D9B6F]/70 transition-colors">
              <span>rundeck.com.au</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 8L8 2M8 2H4M8 2V6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          {/* CreatorLink */}
          <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 opacity-70">
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F7EF7]/10 border border-[#4F7EF7]/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" stroke="#4F7EF7" strokeWidth="1.75" />
                  <path
                    d="M9 2v2M9 14v2M2 9h2M14 9h2"
                    stroke="#4F7EF7"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/35 font-medium bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                Coming Soon
              </span>
            </div>

            <h2 className="text-lg font-semibold text-white/70 mb-2">
              CreatorLink
            </h2>
            <p className="text-sm text-white/35 leading-relaxed">
              A platform connecting content creators with the businesses and brands
              that want to work with them. Streamlined outreach, collaboration, and
              deal management in one place.
            </p>

            <div className="mt-6 text-xs text-white/20">
              creatorlink.com.au
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
        <span>© {new Date().getFullYear()} Abide Media Group. All rights reserved.</span>
        <a
          href="mailto:hello@abidemediagroup.com"
          className="hover:text-white/60 transition-colors"
        >
          hello@abidemediagroup.com
        </a>
      </footer>
    </main>
  );
}
