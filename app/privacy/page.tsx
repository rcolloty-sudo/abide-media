import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — Abide Media Group",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#1A1A2E]">
      <nav className="px-6 md:px-14 py-5 flex items-center justify-between border-b border-[#E2DDD6]">
        <Link href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#1A1A2E" />
            <path d="M7 23L12.5 10H14.5L16 14.2L17.5 10H19.5L25 23H22.8L21.4 19.4H17.8L19 16.4L16 9.2L13 16.4L14.2 19.4H10.6L9.2 23H7Z" fill="white" />
          </svg>
          <span className="text-[1rem] font-bold tracking-tight text-[#1A1A2E]">Abide Media Group</span>
        </Link>
      </nav>

      <article className="px-6 md:px-14 py-16 max-w-[740px] mx-auto">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#888070] mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#888070] mb-12">Last updated: April 2025</p>

        <div className="prose prose-sm max-w-none text-[#4A4540] leading-relaxed space-y-8">

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">1. Who we are</h2>
            <p>Abide Media Group Pty Ltd ("we", "us", "our") is an Australian software company. We operate Rundeck (<a href="https://rundeck.com.au" className="underline hover:text-[#1A1A2E]">rundeck.com.au</a>) and CreatorLink, as well as this website at abidemediagroup.com.au. This policy explains how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">2. Information we collect</h2>
            <p>We may collect the following information when you contact us or use our products:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name and email address (when you contact us or sign up)</li>
              <li>Business name and ABN (for billing purposes)</li>
              <li>Usage data from our products (anonymised analytics)</li>
              <li>Device and browser information for technical support</li>
            </ul>
            <p className="mt-3">We do not collect sensitive information unless you explicitly provide it and it is necessary for our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">3. How we use your information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide and improve our products and services</li>
              <li>Respond to enquiries and support requests</li>
              <li>Send product updates (you can unsubscribe at any time)</li>
              <li>Meet our legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">4. Third-party services</h2>
            <p>Our products use third-party services including Supabase (database hosting), Stripe (payments), Resend (email), and Vercel (hosting). These services have their own privacy policies and handle data in accordance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">5. Data storage and security</h2>
            <p>Your data is stored on servers located in Australia and the United States (via our infrastructure providers). We take reasonable steps to protect your information from misuse, loss, and unauthorised access.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">6. Your rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at <a href="mailto:hello@abidemediagroup.com.au" className="underline hover:text-[#1A1A2E]">hello@abidemediagroup.com.au</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">7. Cookies</h2>
            <p>This website does not use tracking cookies. Our products may use session cookies necessary for authentication — these are not used for advertising or cross-site tracking.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">8. Contact</h2>
            <p>For privacy-related queries, contact us at <a href="mailto:hello@abidemediagroup.com.au" className="underline hover:text-[#1A1A2E]">hello@abidemediagroup.com.au</a>.</p>
          </section>

        </div>
      </article>

      <footer className="px-6 md:px-14 py-8 border-t border-[#E2DDD6] text-xs text-[#AAA090] flex flex-col sm:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} Abide Media Group Pty Ltd.</span>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-[#1A1A2E] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#1A1A2E] transition-colors">Terms of Use</Link>
        </div>
      </footer>
    </main>
  )
}
