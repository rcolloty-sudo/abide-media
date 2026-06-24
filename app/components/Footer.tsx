import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-[var(--border-soft)] bg-[var(--cream-deep)]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="serif text-[1.55rem] leading-[1.3] mt-7 max-w-[380px] text-[var(--ink)]">
              An Australian software studio building tools that help businesses run better.
            </p>
            <p className="mt-7 text-[14px] text-[var(--muted)]">
              Get in touch ·{" "}
              <a href="mailto:hello@abidemediagroup.com.au" className="underline underline-offset-4 hover:text-[var(--gold)]">
                hello@abidemediagroup.com.au
              </a>
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2.5 text-[14.5px]">
              <li><Link href="/about" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">About</Link></li>
              <li><Link href="/suite" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">Our suite</Link></li>
              <li><Link href="/services" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2.5 text-[14.5px]">
              <li><Link href="/services/website" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">Website design</Link></li>
              <li><Link href="/services/app" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">App design</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Suite</p>
            <ul className="space-y-2.5 text-[14.5px]">
              <li>
                <a href="https://shiftbreeze.com" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--gold)] transition-colors">
                  Shiftbreeze ↗
                </a>
                <p className="text-[12.5px] text-[var(--muted)] mt-0.5">Workforce & operations management</p>
              </li>
              <li className="text-[var(--muted)] italic">More projects coming soon</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-[13px] text-[var(--muted)]">
          <p>© {year} Abide Media Group. Built in Queensland.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--ink)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--ink)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
