export default function Home() {
  const year = new Date().getFullYear()

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F1] text-[#1A1A2E]">

      {/* Nav */}
      <nav className="px-6 md:px-14 py-5 flex items-center justify-between border-b border-[#E2DDD6]">
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#1A1A2E" />
            <path d="M7 23L12.5 10H14.5L16 14.2L17.5 10H19.5L25 23H22.8L21.4 19.4H17.8L19 16.4L16 9.2L13 16.4L14.2 19.4H10.6L9.2 23H7Z" fill="white" />
            <path d="M11.3 21.2L12.6 17.8H15.1L11.3 21.2Z" fill="white" opacity="0" />
          </svg>
          <span className="text-[1.05rem] font-bold tracking-tight text-[#1A1A2E]">
            Abide Media Group
          </span>
        </div>
        <a
          href="mailto:hello@abidemediagroup.com.au"
          className="text-sm text-[#888070] hover:text-[#1A1A2E] transition-colors"
        >
          Get in touch
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-14 pt-20 pb-16 max-w-[1100px] mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-[#1A1A2E]" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#888070]">
            Australian Software Company
          </span>
        </div>

        <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#1A1A2E] max-w-[760px] mb-8">
          We build tools that help businesses run better.
        </h1>

        <p className="text-[#776B5A] text-base md:text-lg leading-relaxed max-w-[520px]">
          Abide Media Group is the company behind Rundeck and CreatorLink — practical software built for the way real businesses actually operate.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E2DDD6] mx-6 md:mx-14" />

      {/* Products */}
      <section className="px-6 md:px-14 py-16 max-w-[1100px] mx-auto w-full">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#888070] mb-10">
          Our products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Rundeck */}
          <a
            href="https://rundeck.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-[#E2DDD6] bg-white p-8 hover:border-[#1A1A2E] transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2332] flex items-center justify-center text-white font-bold text-sm">
                    R
                  </div>
                  <span className="font-bold text-[#1A1A2E]">Rundeck</span>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#2D9B6F] bg-[#2D9B6F]/10 px-2.5 py-1 rounded-full">
                  Live
                </span>
              </div>

              <p className="text-[#776B5A] text-sm leading-relaxed mb-8">
                Workforce management for hospitality and retail. Rosters, timesheets, leave requests, daily ops checklists, and a staff mobile app — all in one platform built for operators on the floor, not just the back office.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] group-hover:gap-2.5 transition-all">
              <span>rundeck.com.au</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          {/* CreatorLink */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E2DDD6] bg-[#F7F5F1] p-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1208] flex items-center justify-center font-bold text-sm text-[#faf8f4]">
                    C
                  </div>
                  <span className="font-bold text-[#1A1A2E]">CreatorLink</span>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#888070] bg-[#E2DDD6] px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <p className="text-[#998F80] text-sm leading-relaxed mb-8">
                A marketplace connecting content creators with the brands that want to work with them. Streamlined outreach, deal management, and creator discovery — built for authentic partnerships.
              </p>
            </div>

            <div className="text-sm font-semibold text-[#BBB0A0]">
              creatorlink.com.au
            </div>
          </div>

        </div>
      </section>

      {/* About strip */}
      <section className="border-t border-[#E2DDD6] bg-[#1A1A2E] px-6 md:px-14 py-14">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#555F80] mb-4">
              About us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Software that earns its place in a busy business.
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#8892A4] text-sm leading-relaxed">
              We're a small Australian software company that builds focused, well-made products. We don't do feature bloat or enterprise pricing. We build for the owner who's working the floor and the manager who needs answers quickly — not the enterprise buyer in a boardroom.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-14 py-8 border-t border-[#E2DDD6]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#AAA090]">
          <div className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#1A1A2E" />
              <path d="M7 23L12.5 10H14.5L16 14.2L17.5 10H19.5L25 23H22.8L21.4 19.4H17.8L19 16.4L16 9.2L13 16.4L14.2 19.4H10.6L9.2 23H7Z" fill="white" />
            </svg>
            <span>© {year} Abide Media Group Pty Ltd. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="mailto:hello@abidemediagroup.com.au" className="hover:text-[#1A1A2E] transition-colors">
              hello@abidemediagroup.com.au
            </a>
            <span className="text-[#D8D0C4] hidden sm:inline">·</span>
            <a href="/privacy" className="hover:text-[#1A1A2E] transition-colors">Privacy Policy</a>
            <span className="text-[#D8D0C4] hidden sm:inline">·</span>
            <a href="/terms" className="hover:text-[#1A1A2E] transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
