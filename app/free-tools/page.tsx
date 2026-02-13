import { FreeToolsSuite } from "@/components/free-tools-suite";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free Roofing Marketing Tools",
  description:
    "Interactive roofing SEO ROI calculator, storm revenue estimator, cost comparison tool, and gated Elite Roofing Prompt Vault.",
  path: "/free-tools",
  keywords: ["roofing marketing tools", "roofing SEO ROI calculator", "storm revenue estimator"],
});

export default function FreeToolsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Free Roofing Marketing Tools",
          description:
            "Email-gated calculator suite and prompt vault for roofing marketing planning.",
        }}
      />

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <SectionHeading
          eyebrow="Free Tools"
          title="Roofer Growth Calculator Suite + Elite Prompt Vault"
          description="Use operational calculators to model ROI, storm-response revenue, and channel economics. Results and prompt downloads are email-gated."
        />
      </section>

      <FreeToolsSuite />
    </div>
  );
}
