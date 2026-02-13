import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for RooferMarketingTools.com.",
  path: "/legal/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-16 sm:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Privacy Policy</h1>
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm leading-8 text-[var(--muted)]">
        <p>
          RooferMarketingTools.com collects contact and transactional information needed to deliver
          digital products, process payments, and operate gated tool access.
        </p>
        <p className="mt-4">
          Information may include name, email address, billing metadata, and product interaction
          events. Payment information is processed via Stripe and is not stored directly on this
          application server.
        </p>
        <p className="mt-4">
          Lead-capture data may be forwarded to configured CRM or webhook endpoints for fulfillment
          and communication workflows. Data is not sold to unrelated third parties.
        </p>
        <p className="mt-4">
          By using this website, you consent to data processing for operational, analytics, and
          service-improvement purposes.
        </p>
      </section>
    </div>
  );
}
