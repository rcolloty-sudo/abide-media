import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of the Abide Media Group website and products, and how our website and app engagements work.",
  alternates: { canonical: "https://abidemediagroup.com.au/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-[760px] mx-auto px-7 pt-20 pb-24">
        <span className="eyebrow">Legal</span>
        <h1
          className="display mt-3"
          style={{ fontWeight: 700, fontSize: "clamp(2.4rem,5vw,3.4rem)", lineHeight: 1.04, letterSpacing: "-.025em" }}
        >
          Terms of Use
        </h1>
        <p className="mt-3" style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: ".82rem" }}>
          Last updated: June 2026
        </p>

        <div className="legal mt-10">
          <h2>1. About these terms</h2>
          <p>
            These terms govern your use of the Abide Media Group website (abidemediagroup.com.au), operated by Abide Media Group
            Pty Ltd (ABN 95 696 579 683), and our products, including <a href="https://shiftbreeze.com">Shiftbreeze</a>. By
            accessing the website you agree to these terms. Each product, and any work we do for you, may also have its own terms
            that apply in addition to these.
          </p>

          <h2>2. Use of this website</h2>
          <p>This website is provided for information purposes. You may not:</p>
          <ul>
            <li>Use the website in any way that breaches applicable law</li>
            <li>Attempt to gain unauthorised access to any part of our systems</li>
            <li>Transmit any unsolicited or harmful content</li>
            <li>Reproduce or redistribute our content without permission</li>
          </ul>

          <h2>3. Enquiries and engagements</h2>
          <p>
            Information on this site — including pages about our website and app services — is general and not an offer, quote or
            binding agreement. Any work we take on is governed by a separate written proposal or agreement covering scope,
            timeline, pricing and deliverables. Submitting a brief or enquiry doesn&apos;t create a contract until we both agree
            those terms in writing.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            All content on this website — including text, graphics, logos and software — is the property of Abide Media Group Pty
            Ltd or its licensors. Nothing on this site grants you any licence to use our intellectual property without written
            permission.
          </p>

          <h2>5. Disclaimer of warranties</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without warranty of any kind. We don&apos;t guarantee the
            website will be uninterrupted, error-free, or free from harmful components. To the maximum extent permitted by
            Australian law, we disclaim all warranties, express or implied. Nothing in these terms excludes rights you have under
            the Australian Consumer Law that cannot lawfully be excluded.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the extent permitted by law, Abide Media Group Pty Ltd will not be liable for any indirect, incidental, special or
            consequential loss arising from your use of this website. Our liability for any claim is limited to AUD $100 or the
            amount you paid us in the 12 months before the claim, whichever is greater.
          </p>

          <h2>7. Third-party links</h2>
          <p>
            This website may link to third-party websites. We don&apos;t endorse or control those sites and aren&apos;t
            responsible for their content or practices.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of New South Wales, Australia. You agree to submit to the non-exclusive
            jurisdiction of the courts of New South Wales.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of this website after changes are posted means you accept
            the revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Email <a href="mailto:hello@abidemediagroup.com.au">hello@abidemediagroup.com.au</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
