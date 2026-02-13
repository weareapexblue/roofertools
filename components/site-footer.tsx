import Link from "next/link";

import { CONTACT_EMAIL, FOOTER_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            RooferMarketingTools.com
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text)]">
            Productized digital growth assets for roofing companies. Authority, distribution,
            search real estate, and conversion infrastructure.
          </p>
          <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
            Support USA Based Tech Companies
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Strategic Connections
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
            <li>
              Enterprise SEO?{" "}
              <a
                href={FOOTER_LINKS.enterpriseSeo}
                className="font-semibold text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                Visit SEOAha.com
              </a>
            </li>
            <li>
              Google Ads Management?{" "}
              <a
                href={FOOTER_LINKS.ppc}
                className="font-semibold text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                Visit PPCKitchen.com
              </a>
            </li>
            <li>
              Built by{" "}
              <a
                href={FOOTER_LINKS.parent}
                className="font-semibold text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                Apex Blue AI
              </a>
            </li>
            <li>
              Contact:
              {" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-[var(--accent)]"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
            <Link href="/legal/refund-policy">Refund Policy</Link>
            <Link href="/legal/terms">Terms of Service</Link>
            <Link href="/legal/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
