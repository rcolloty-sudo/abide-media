"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/suite", label: "Our suite" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[var(--cream)]/85 backdrop-blur-lg border-b border-[var(--border-soft)]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[14.5px] font-medium tracking-tight ${
                  active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                } transition-colors`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-[14px] font-semibold text-[var(--cream)] bg-[var(--ink)] hover:bg-[var(--gold)] transition-colors px-5 py-2.5 rounded-full"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-soft)] bg-[var(--cream)]">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname?.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-[17px] font-medium py-3 ${
                    active ? "text-[var(--ink)]" : "text-[var(--muted)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-[var(--ink)] text-[var(--cream)] font-semibold rounded-full py-3.5 text-[15px]"
            >
              Start a project →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
