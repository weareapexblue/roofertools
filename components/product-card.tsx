import { PurchaseButton } from "@/components/purchase-button";

type ProductCardProps = {
  productId: string;
  offerId: string;
  title: string;
  priceLabel: string;
  description: string;
  buttonLabel: string;
  ctaSupport?: string;
  billingMode?: "payment" | "subscription";
  trustPoints?: string[];
};

export function ProductCard({
  productId,
  offerId,
  title,
  priceLabel,
  description,
  buttonLabel,
  ctaSupport,
  billingMode = "payment",
  trustPoints = [],
}: ProductCardProps) {
  const billingNote =
    billingMode === "subscription"
      ? "Recurring monthly billing via Stripe."
      : "One-time payment. No recurring billing.";

  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {title}
      </p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)]">{priceLabel}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
      {ctaSupport ? (
        <p className="mt-3 text-sm font-medium text-[var(--text)]">{ctaSupport}</p>
      ) : null}
      {trustPoints.length > 0 ? (
        <ul className="mt-4 space-y-1 text-xs leading-6 text-[var(--muted)]">
          {trustPoints.slice(0, 2).map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6">
        <PurchaseButton
          productId={productId}
          offerId={offerId}
          label={buttonLabel}
        />
        <p className="mt-2 text-xs text-[var(--muted)]">{billingNote}</p>
      </div>
    </article>
  );
}
