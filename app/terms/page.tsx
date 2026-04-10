import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use — Abide Media Group",
}

export default function TermsPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-sm text-[#888070] mb-12">Last updated: April 2025</p>

        <div className="prose prose-sm max-w-none text-[#4A4540] leading-relaxed space-y-8">

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">1. About these terms</h2>
            <p>These terms govern your use of the Abide Media Group website (abidemediagroup.com.au) and the products operated by Abide Media Group Pty Ltd, including Rundeck and CreatorLink. By accessing any of these services you agree to these terms. Each product may also have its own terms that apply in addition to these.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">2. Use of this website</h2>
            <p>This website is provided for information purposes only. You may not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the website in any way that breaches applicable law</li>
              <li>Attempt to gain unauthorised access to any part of our systems</li>
              <li>Transmit any unsolicited or harmful content</li>
              <li>Reproduce or redistribute our content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">3. Intellectual property</h2>
            <p>All content on this website — including text, graphics, logos, and software — is the property of Abide Media Group Pty Ltd or its licensors. Nothing on this site grants you any licence to use our intellectual property without written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">4. Disclaimer of warranties</h2>
            <p>This website and its content are provided "as is" without any warranty of any kind. We do not guarantee that the website will be uninterrupted, error-free, or free from viruses or other harmful components. To the maximum extent permitted by Australian law, we disclaim all warranties, express or implied.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">5. Limitation of liability</h2>
            <p>To the extent permitted by law, Abide Media Group Pty Ltd will not be liable for any indirect, incidental, special, or consequential loss arising from your use of this website. Our liability for any claim is limited to the amount you paid us in the 12 months preceding the claim, or AUD $100 — whichever is greater.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">6. Third-party links</h2>
            <p>This website may link to third-party websites. We do not endorse or control those sites and are not responsible for their content or practices.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws of New South Wales, Australia. You agree to submit to the non-exclusive jurisdiction of the courts of New South Wales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">8. Changes to these terms</h2>
            <p>We may update these terms from time to time. Continued use of this website after changes are posted constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A1A2E] mb-3">9. Contact</h2>
            <p>Questions about these terms? Email us at <a href="mailto:hello@abidemediagroup.com.au" className="underline hover:text-[#1A1A2E]">hello@abidemediagroup.com.au</a>.</p>
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
