import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { formatBlogDate, getBlogPostReadTime, getLatestBlogPosts } from "@/lib/blog";
import { resources } from "@/lib/resources";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Marketing Resources and SEO Playbooks",
  description:
    "Explore 20 roofing marketing resources and SEO playbooks covering lead generation, local SEO, backlinks, GBP optimization, content, and ROI.",
  path: "/resources",
  keywords: ["marketing for roofers", "roofing marketing tools", "SEO for roofing companies"],
});

export default function ResourcesIndexPage() {
  const latestBlogPosts = getLatestBlogPosts(3);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Roofing Marketing Resources",
          description:
            "Long-form roofing SEO and marketing playbooks for roofers building search visibility, authority, and lead flow.",
          path: "/resources",
          items: resources.map((resource) => ({
            name: resource.title,
            path: `/resources/${resource.slug}`,
            description: resource.description,
          })),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Roofing Marketing Resources", path: "/resources" },
        ])}
      />

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

      <section className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
        <SectionHeading
          eyebrow="Fresh Content"
          title="New Articles Roofing Owners Are Reading"
          description="Fresh operator-focused briefs that pair with the long-form playbooks above."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {latestBlogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                {formatBlogDate(post.publishedAt)} · {getBlogPostReadTime(post)} min read
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{post.description}</p>
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
