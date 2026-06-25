import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Abide Media Group collects, uses and protects your personal information, in line with the Australian Privacy Act 1988 and the Australian Privacy Principles.",
  alternates: { canonical: "https://abidemediagroup.com.au/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-[760px] mx-auto px-7 pt-20 pb-24">
        <span className="eyebrow">Legal</span>
        <h1
          className="display mt-3"
          style={{ fontWeight: 700, fontSize: "clamp(2.4rem,5vw,3.4rem)", lineHeight: 1.04, letterSpacing: "-.025em" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-3" style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: ".82rem" }}>
          Last updated: June 2026
        </p>

        <div className="legal mt-10">
          <h2>1. Who we are</h2>
          <p>
            Abide Media Group Pty Ltd (ABN 95 696 579 683) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an Australian
            software studio. We operate our own product, <a href="https://shiftbreeze.com">Shiftbreeze</a>, design and build
            websites and apps for clients, and run this website at abidemediagroup.com.au. This policy explains how we collect,
            use and protect your personal information in line with the Australian Privacy Act 1988 (Cth) and the Australian
            Privacy Principles (APPs).
          </p>

          <h2>2. Information we collect</h2>
          <p>We may collect the following when you contact us, submit a project brief, or use our products:</p>
          <ul>
            <li>Name and email address</li>
            <li>Business name and the project details you choose to share in our forms</li>
            <li>Business name and ABN, where relevant for billing</li>
            <li>Anonymised usage data from our products</li>
            <li>Device and browser information for support and security</li>
          </ul>
          <p>We don&apos;t collect sensitive information unless you choose to provide it and it is necessary for our services.</p>

          <h2>3. How we use your information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to enquiries, briefs and support requests</li>
            <li>Provide, maintain and improve our products and services</li>
            <li>Send occasional updates you can opt out of at any time</li>
            <li>Meet our legal obligations</li>
          </ul>
          <p>We don&apos;t sell, rent or trade your personal information.</p>

          <h2>4. How our forms and email work</h2>
          <p>
            When you submit a form on this site, the details are emailed to us (via Resend) and may be stored securely so we can
            manage and respond to your enquiry. We use this information only to reply to you and to deliver the services you have
            asked about.
          </p>

          <h2>5. Third-party services</h2>
          <p>
            We rely on trusted providers including Resend (email delivery), Supabase (database hosting), Stripe (payments) and
            Vercel (website hosting). Each handles data under its own privacy policy and applicable laws.
          </p>

          <h2>6. Data storage and security</h2>
          <p>
            Your data is stored on servers in Australia and the United States via our infrastructure providers. We take
            reasonable steps to protect it from misuse, loss and unauthorised access.
          </p>

          <h2>7. Your rights</h2>
          <p>
            You can access, correct, or request deletion of your personal information at any time. Email{" "}
            <a href="mailto:hello@abidemediagroup.com.au">hello@abidemediagroup.com.au</a> and we&apos;ll respond within 30 days.
          </p>

          <h2>8. Cookies</h2>
          <p>
            This website doesn&apos;t use tracking or advertising cookies. Our products may use essential session cookies needed
            for sign-in — never for cross-site tracking.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The current version will always be on this page, with its
            &quot;last updated&quot; date.
          </p>

          <h2>10. Contact</h2>
          <p>
            For any privacy question, email <a href="mailto:hello@abidemediagroup.com.au">hello@abidemediagroup.com.au</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
