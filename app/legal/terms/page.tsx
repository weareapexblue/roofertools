import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of service for RooferMarketingTools.com.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-16 sm:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Terms of Service</h1>
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm leading-8 text-[var(--muted)]">
        <p>
          By purchasing or using RooferMarketingTools.com, you agree to these terms.
        </p>
        <p className="mt-4">
          No ranking guarantees are provided. No traffic guarantees are provided. No lead-volume
          guarantees are provided.
        </p>
        <p className="mt-4">
          Third-party distribution and placement outcomes are subject to publisher, network, and
          editorial approval outside direct control of RooferMarketingTools.com.
        </p>
        <p className="mt-4">
          Service timelines vary based on required inputs, approvals, and platform dependencies.
          Purchaser is responsible for providing accurate project inputs and legal business claims.
        </p>
      </section>
    </div>
  );
}
