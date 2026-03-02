import Link from "next/link";

import { OWNER_EMAIL } from "@/lib/site";

type OwnerOfferCtaVariant = "hero" | "inline" | "footer";

type OwnerOfferCtaProps = {
  variant?: OwnerOfferCtaVariant;
  className?: string;
};

const subject = encodeURIComponent("Roofing business intro for 50% off offer");
const body = encodeURIComponent(
  [
    "Hi Matt,",
    "",
    "Here is a quick intro to my roofing business:",
    "- Business name:",
    "- Primary city/market:",
    "- Core service mix:",
    "- Current monthly lead goal:",
    "",
    "Please send next steps for the 50% off offer.",
  ].join("\n")
);

const mailtoHref = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;

const variantCopy: Record<
  OwnerOfferCtaVariant,
  { eyebrow: string; title: string; body: string; button: string }
> = {
  hero: {
    eyebrow: "Limited Owner Offer",
    title: "Email the Owner Directly for 50% Off",
    body: "Send a short intro to your roofing business and receive a 50% off onboarding offer.",
    button: "Email Owner",
  },
  inline: {
    eyebrow: "Direct Access",
    title: "Need a Faster Path? Email the Owner Directly",
    body: "Email matt@roofermarketingtools.com with a quick roofing business intro to request 50% off.",
    button: "Send Intro Email",
  },
  footer: {
    eyebrow: "Owner Contact",
    title: "50% Off Intro Offer Available",
    body: "Email matt@roofermarketingtools.com with your roofing business intro.",
    button: "Email matt@roofermarketingtools.com",
  },
};

export function OwnerOfferCta({ variant = "inline", className = "" }: OwnerOfferCtaProps) {
  const copy = variantCopy[variant];

  return (
    <section
      className={`rounded-2xl border border-[color:color-mix(in_srgb,var(--accent)_32%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_8%,var(--surface))] p-5 sm:p-6 ${className}`.trim()}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{copy.body}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <Link
            href={mailtoHref}
            className="motion-pulse inline-flex rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            {copy.button}
          </Link>
          <p className="text-xs text-[var(--muted)]">No call required. Email response with next-step scope.</p>
        </div>
      </div>
    </section>
  );
}
