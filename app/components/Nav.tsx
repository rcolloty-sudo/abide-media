"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/suite", label: "Our suite" },
  { href: "/services", label: "Build with us" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The admin portal has its own chrome — hide the marketing nav there.
  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? "rgba(239,243,236,0.92)" : "rgba(239,243,236,0.78)",
        backdropFilter: "saturate(160%) blur(14px)",
        WebkitBackdropFilter: "saturate(160%) blur(14px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "border-color .3s ease, background .3s ease",
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[72px]">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0" aria-label="Abide Media Group home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[34px]" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="font-medium text-[0.97rem] transition-colors"
                style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = active ? "var(--ink)" : "var(--muted)")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/admin"
            className="font-medium text-[0.97rem] transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Log in
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Get in touch <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`block w-5 h-[1.5px] transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} style={{ background: "var(--ink)" }} />
          <span className={`block w-5 h-[1.5px] transition-opacity ${open ? "opacity-0" : "opacity-100"}`} style={{ background: "var(--ink)" }} />
          <span className={`block w-5 h-[1.5px] transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} style={{ background: "var(--ink)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
          <nav className="px-7 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname?.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-medium py-3"
                  style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="text-[17px] font-medium py-3"
              style={{ color: "var(--muted)" }}
            >
              Log in
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 justify-center"
            >
              Get in touch <span className="arr" aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
