import type { Metadata } from "next";
import Link from "next/link";
import { Breeze } from "../components/Breeze";
import { ContactForm } from "./form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abide Media Group. For project enquiries, partnership ideas, or just to say hi — we'd love to hear from you.",
  alternates: { canonical: "https://abidemediagroup.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12">
        <Breeze />
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-7">
          <span className="eyebrow">Get in touch</span>
          <h1
            className="display mt-3"
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.7rem,6.4vw,5.1rem)",
              lineHeight: 1.02,
              letterSpacing: "-.025em",
              maxWidth: 900,
            }}
          >
            Let&apos;s <span style={{ color: "var(--ember)" }}>talk</span>.
          </h1>
          <p className="mt-7 text-[1.18rem]" style={{ color: "var(--muted)", maxWidth: 640 }}>
            Got a project in mind, a question about our suite, or just want to say hi? Drop us a note and we&apos;ll get back to you within 2 business days.
          </p>
        </div>
      </section>

      <section className="pb-[96px]">
        <div className="w-full max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Left — direct contact */}
            <div className="md:col-span-4 space-y-9">
              <div>
                <span className="eyebrow">Email us directly</span>
                <a
                  href="mailto:hello@abidemediagroup.com.au"
                  className="display block mt-3 transition-colors hover:text-[var(--ember)]"
                  style={{ fontWeight: 700, fontSize: "clamp(0.9rem, 1.7vw, 1.2rem)", lineHeight: 1.2, color: "var(--ink)", whiteSpace: "nowrap" }}
                >
                  hello@abidemediagroup.com.au
                </a>
              </div>

              <div>
                <span className="eyebrow">Based in</span>
                <p className="display mt-3" style={{ fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.3 }}>
                  Queensland, Australia
                </p>
                <p className="mt-1 text-[14px]" style={{ color: "var(--muted)" }}>All times in AEST</p>
              </div>

              <div>
                <span className="eyebrow">Project briefs</span>
                <div className="mt-3 space-y-2.5 text-[14.5px]">
                  <p>
                    <Link href="/services/website" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ember)", paddingBottom: 2 }}>
                      Website design brief
                    </Link>
                  </p>
                  <p>
                    <Link href="/services/app" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ember)", paddingBottom: 2 }}>
                      App design brief
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — generic contact form */}
            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
