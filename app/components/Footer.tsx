"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--ink-2)", color: "var(--paper)" }} className="pt-[72px] pb-9">
      <div className="w-full max-w-[1180px] mx-auto px-7">
        <div className="flex justify-between gap-10 flex-wrap pb-12 border-b border-white/10">
          {/* Lead */}
          <div className="max-w-[380px]">
            <Logo dark />
            <p className="mt-5 mb-5" style={{ color: "#A9BEB3" }}>
              An Australian software studio building tools that help businesses run better — and building websites and apps for the businesses that want one.
            </p>
            <a href="mailto:hello@abidemediagroup.com.au" className="btn btn-light">
              Get in touch <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Columns */}
          <div className="flex gap-[72px] flex-wrap">
            <div>
              <h4 className="m-0 mb-4 font-semibold" style={{ fontFamily: "var(--mono)", fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--mint)" }}>
                Our suite
              </h4>
              <a href="https://shiftbreeze.com" target="_blank" rel="noopener noreferrer" className="block mb-3 text-[0.98rem]" style={{ color: "#C2D4CA" }}>
                Shiftbreeze
              </a>
              <span className="block text-[0.98rem]" style={{ color: "#88A096" }}>
                More coming soon
              </span>
            </div>
            <div>
              <h4 className="m-0 mb-4 font-semibold" style={{ fontFamily: "var(--mono)", fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--mint)" }}>
                Studio
              </h4>
              <Link href="/services/website" className="block mb-3 text-[0.98rem]" style={{ color: "#C2D4CA" }}>Website design</Link>
              <Link href="/services/app" className="block mb-3 text-[0.98rem]" style={{ color: "#C2D4CA" }}>App design</Link>
              <Link href="/about" className="block mb-3 text-[0.98rem]" style={{ color: "#C2D4CA" }}>About us</Link>
            </div>
            <div>
              <h4 className="m-0 mb-4 font-semibold" style={{ fontFamily: "var(--mono)", fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--mint)" }}>
                Contact
              </h4>
              <a href="mailto:hello@abidemediagroup.com.au" className="block mb-3 text-[0.98rem]" style={{ color: "#C2D4CA" }}>
                hello@abidemediagroup.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-wrap pt-7 text-[0.85rem]" style={{ color: "#88A096" }}>
          <span>© {year} Abide Media Group Pty Ltd · ABN 95 696 579 683 · All rights reserved.</span>
          <span>
            <Link href="/privacy" style={{ color: "#88A096" }}>Privacy Policy</Link>
            &nbsp;·&nbsp;
            <Link href="/terms" style={{ color: "#88A096" }}>Terms of Use</Link>
            &nbsp;·&nbsp;
            <Link href="/accessibility" style={{ color: "#88A096" }}>Accessibility</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
