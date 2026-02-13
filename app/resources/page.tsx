import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { resources } from "@/lib/resources";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Marketing Resources",
  description:
    "20 long-form roofing SEO and marketing guides with FAQ schema, internal linking, and conversion-focused CTAs.",
  path: "/resources",
  keywords: ["marketing for roofers", "roofing marketing tools", "SEO for roofing companies"],
});

export default function ResourcesIndexPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="relative">
          <SectionHeading
            eyebrow="Resource Library"
            title="Authoritative Roofing Marketing Guides"
            description="Long-form anchor pages built as practical playbooks: query maps, KPI scorecards, execution checklists, and conversion pathways into productized implementation assets."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricCard label="Published Playbooks" value="20" />
            <MetricCard label="Core Product Paths" value="5" />
            <MetricCard label="Schema-Enhanced FAQs" value="100+" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[var(--accent)]">
              Resource Playbook
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">
              {resource.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{resource.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition group-hover:text-[var(--accent)]">
              Open Playbook
            </p>
          </Link>
        ))}
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
