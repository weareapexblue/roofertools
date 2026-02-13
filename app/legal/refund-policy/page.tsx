import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "Refund policy for RooferMarketingTools.com digital products.",
  path: "/legal/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-16 sm:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Refund Policy</h1>
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm leading-8 text-[var(--muted)]">
        <p>
          All sales are final due to the digital nature of products offered on RooferMarketingTools.com.
        </p>
        <p className="mt-4">
          Once a purchase is completed and fulfillment is initiated, refunds, charge reversals, and
          credits are not provided.
        </p>
        <p className="mt-4">
          If you experience a technical delivery issue, contact support through your order confirmation
          response channel and the team will validate delivery status.
        </p>
      </section>
    </div>
  );
}
