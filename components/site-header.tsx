import Link from "next/link";

import { NAV_LINKS } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--surface)_92%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div>
          <Link href="/" className="text-base font-bold tracking-tight text-[var(--text)]">
            RooferMarketingTools.com
          </Link>
          <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Digital Growth Infrastructure for Roofing Companies
          </p>
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>

      <div className="border-t border-[var(--border)] px-6 py-3 lg:hidden">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-4 gap-y-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
