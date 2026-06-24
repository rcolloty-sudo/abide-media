import type { Metadata } from "next";
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
      <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">Get in touch</span>
        </div>
        <h1 className="serif text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-[1100px]">
          Let&apos;s talk.
        </h1>
        <p className="mt-8 text-[var(--muted)] text-[1.05rem] leading-[1.75] max-w-[640px]">
          Got a project in mind, a question about our suite, or just want to say hi? Drop us a note and we&apos;ll get back to you within 2 business days.
        </p>
      </section>

      <section className="border-t border-[var(--border-soft)] bg-[var(--paper)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left — Direct contact details */}
            <div className="md:col-span-4 space-y-8">
              <div>
                <p className="eyebrow mb-3">Email us directly</p>
                <a
                  href="mailto:hello@abidemediagroup.com.au"
                  className="serif text-[1.6rem] text-[var(--ink)] hover:text-[var(--gold)] transition-colors break-all"
                >
                  hello@abidemediagroup.com.au
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">Based in</p>
                <p className="serif text-[1.4rem] text-[var(--ink)] leading-[1.3]">
                  Queensland, Australia
                </p>
                <p className="mt-1 text-[var(--muted)] text-[14px]">All times in AEST</p>
              </div>

              <div>
                <p className="eyebrow mb-3">Project briefs</p>
                <div className="space-y-2 text-[14.5px]">
                  <p>
                    <a href="/services/website" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)] hover:text-[var(--gold)]">
                      Website design brief
                    </a>
                  </p>
                  <p>
                    <a href="/services/app" className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--gold)] hover:text-[var(--gold)]">
                      App design brief
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — General contact form */}
            <div className="md:col-span-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
