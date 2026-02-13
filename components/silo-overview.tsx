import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import type { Product } from "@/lib/products";

type SiloOverviewProps = {
  title: string;
  eyebrow: string;
  description: string;
  products: Product[];
  relatedLinks: Array<{ href: string; label: string }>;
};

export function SiloOverview({
  title,
  eyebrow,
  description,
  products,
  relatedLinks,
}: SiloOverviewProps) {
  const bestFor = [...new Set(products.flatMap((product) => product.whoFor))].slice(0, 6);
  const scopeLimits = [...new Set(products.flatMap((product) => product.whatNot))].slice(0, 6);
  const oneTimeCount = products.flatMap((product) => product.offers).filter((offer) => offer.mode === "payment").length;
  const recurringCount = products.flatMap((product) => product.offers).filter((offer) => offer.mode === "subscription").length;

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
        <div className="relative">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricCard label="Products" value={String(products.length)} />
            <MetricCard label="One-Time Options" value={String(oneTimeCount)} />
            <MetricCard label="Recurring Options" value={String(recurringCount)} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">Best Fit Use Cases</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
            {bestFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">Scope Boundaries</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
            {scopeLimits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Available Products</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.flatMap((product) =>
            product.offers.map((offer) => (
              <div key={offer.id} className="space-y-3">
                <ProductCard
                  productId={product.id}
                  offerId={offer.id}
                  title={`${product.name} · ${offer.name}`}
                  priceLabel={offer.priceLabel}
                  description={offer.description}
                  buttonLabel={product.ctaLabel}
                  ctaSupport={product.ctaSupport}
                  billingMode={offer.mode}
                  trustPoints={product.ctaTrustPoints}
                />
                <Link
                  href={`/${product.silo}/${product.slug}`}
                  className="block text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:text-[var(--accent)]"
                >
                  Product Details
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
        <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">Related Infrastructure</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">{value}</p>
    </article>
  );
}
