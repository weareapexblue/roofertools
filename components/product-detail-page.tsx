import Link from "next/link";

import { FaqSection } from "@/components/faq-section";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import type { Product } from "@/lib/products";

type ProductDetailPageProps = {
  product: Product;
  siblingLinks: Array<{ href: string; label: string }>;
};

export function ProductDetailPage({ product, siblingLinks }: ProductDetailPageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={product.categoryTitle}
              title={product.name}
              description={product.summary}
            />
            <p className="mt-6 text-sm leading-8 text-[var(--muted)]">{product.positioning}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              Available Packages
            </p>
            <ul className="mt-4 space-y-3">
              {product.offers.map((offer) => (
                <li key={offer.id} className="rounded-lg border border-[var(--border)] px-3 py-2">
                  <p className="text-sm font-semibold text-[var(--text)]">{offer.name}</p>
                  <p className="text-sm text-[var(--accent)]">{offer.priceLabel}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">Problem</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{product.problem}</p>
        </article>
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">Why It Matters</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{product.whyItMatters}</p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">What&apos;s Included</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {product.whatIncluded.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">Who It&apos;s For</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {product.whoFor.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">What It&apos;s Not</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {product.whatNot.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Delivery Workflow</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Every order follows a structured workflow with quality gates before fulfillment handoff.
        </p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {product.deliveryWorkflow.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--muted)]"
            >
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">Required Inputs</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {product.requiredInputs.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">Quality Controls</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {product.qualityControls.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">Signal Windows</h2>
          <div className="mt-4 space-y-3">
            {product.signalWindows.map((window) => (
              <div
                key={window.window}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                  {window.window}
                </p>
                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">{window.expectation}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section>
        <SectionHeading
          eyebrow="Pricing"
          title="Choose a Package"
          description="One-time and recurring options are productized for direct checkout. No consultation required before purchase."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {product.offers.map((offer) => (
            <ProductCard
              key={offer.id}
              productId={product.id}
              offerId={offer.id}
              title={offer.name}
              priceLabel={offer.priceLabel}
              description={offer.description}
              buttonLabel={product.ctaLabel}
            />
          ))}
        </div>
        <ul className="mt-6 space-y-2 text-xs leading-6 text-[var(--muted)]">
          {product.disclaimers.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </section>

      <FaqSection items={product.faq} />

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
        <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">
          Explore More Roofing Marketing Assets
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {siblingLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
