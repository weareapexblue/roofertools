import { PurchaseButton } from "@/components/purchase-button";

type ProductCardProps = {
  productId: string;
  offerId: string;
  title: string;
  priceLabel: string;
  description: string;
  buttonLabel: string;
};

export function ProductCard({
  productId,
  offerId,
  title,
  priceLabel,
  description,
  buttonLabel,
}: ProductCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {title}
      </p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)]">{priceLabel}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6">
        <PurchaseButton
          productId={productId}
          offerId={offerId}
          label={buttonLabel}
        />
      </div>
    </article>
  );
}
