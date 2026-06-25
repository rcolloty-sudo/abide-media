import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Abide Media Group's commitment to building accessible websites and apps, and how to tell us about any access barriers.",
  alternates: { canonical: "https://abidemediagroup.com.au/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-[760px] mx-auto px-7 pt-20 pb-24">
        <span className="eyebrow">Legal</span>
        <h1
          className="display mt-3"
          style={{ fontWeight: 700, fontSize: "clamp(2.4rem,5vw,3.4rem)", lineHeight: 1.04, letterSpacing: "-.025em" }}
        >
          Accessibility
        </h1>
        <p className="mt-3" style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: ".82rem" }}>
          Last updated: June 2026
        </p>

        <div className="legal mt-10">
          <h2>Our commitment</h2>
          <p>
            We believe good software should work for everyone. We design and build our own products — and the websites and apps
            we make for clients — with accessibility in mind, aiming to meet the Web Content Accessibility Guidelines (WCAG) 2.1
            at Level AA.
          </p>

          <h2>What that means in practice</h2>
          <ul>
            <li>Readable colour contrast and scalable text</li>
            <li>Keyboard-navigable menus, forms and controls</li>
            <li>Meaningful labels and alternative text for non-text content</li>
            <li>Layouts that adapt cleanly to phones, tablets and assistive technology</li>
          </ul>

          <h2>This is ongoing</h2>
          <p>
            Accessibility isn&apos;t a one-off checkbox. We keep testing and improving this website over time, and we treat
            access barriers as bugs worth fixing.
          </p>

          <h2>Tell us about a barrier</h2>
          <p>
            If anything on this site is hard to use, or you need information in a different format, let us know and we&apos;ll do
            our best to help. Email <a href="mailto:hello@abidemediagroup.com.au">hello@abidemediagroup.com.au</a> and please
            describe the page and the issue so we can look into it quickly.
          </p>
        </div>
      </div>
    </section>
  );
}
