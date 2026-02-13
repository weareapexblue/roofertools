import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { getProductById } from "@/lib/products";
import { getResourceBySlug, getResourceSections, resources } from "@/lib/resources";
import { buildArticleSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return buildMetadata({
      title: "Resource Not Found",
      description: "Requested resource does not exist.",
      path: `/resources/${slug}`,
    });
  }

  return buildMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    keywords: [resource.focusKeyword, "roofing marketing tools", "SEO for roofing companies"],
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const sections = getResourceSections(resource);
  const sectionAnchors = sections.map((section) => ({
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    heading: section.heading,
  }));

  const relatedProducts = resource.relatedProductIds
    .map((id) => getProductById(id))
    .filter((item) => item !== undefined);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <JsonLd
        data={buildArticleSchema({
          headline: resource.title,
          description: resource.description,
          path: `/resources/${resource.slug}`,
          publishedAt: "2026-02-13",
          keywords: [resource.focusKeyword, "roofing marketing"],
        })}
      />
      <JsonLd data={buildFaqSchema(resource.faq)} />

      <article className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Roofing Marketing Resource
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--muted)]">{resource.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[color:color-mix(in_srgb,var(--accent)_14%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
              Focus Keyword: {resource.focusKeyword}
            </span>
            <Link
              href="/resources"
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              All Resource Guides
            </Link>
          </div>
        </div>
      </article>

      <section className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 xl:sticky xl:top-28">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Playbook Index
          </h2>
          <ul className="mt-4 space-y-2">
            {sectionAnchors.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-xs leading-6 text-[var(--muted)] transition hover:text-[var(--accent)]"
                >
                  {index + 1}. {item.heading}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
              Conversion Paths
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/backlinks" className="block text-[var(--muted)] hover:text-[var(--accent)]">
                Premium Backlink Packs
              </Link>
              <Link href="/press-releases" className="block text-[var(--muted)] hover:text-[var(--accent)]">
                SEO Press Releases
              </Link>
              <Link href="/local-seo" className="block text-[var(--muted)] hover:text-[var(--accent)]">
                Local SEO Starter
              </Link>
              <Link href="/microsites" className="block text-[var(--muted)] hover:text-[var(--accent)]">
                SEO Microsites
              </Link>
            </div>
          </div>
        </aside>

        <div className="space-y-7">
          {sections.map((section) => {
            const sectionId = section.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

            return (
              <section
                id={sectionId}
                key={section.heading}
                className="scroll-mt-24 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-5 grid gap-2 text-sm leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.kpis ? (
                  <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)]">
                    <table className="w-full border-collapse text-left text-sm text-[var(--muted)]">
                      <thead className="bg-[var(--surface-alt)] text-xs uppercase tracking-[0.09em] text-[var(--text)]">
                        <tr>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">Benchmark</th>
                          <th className="px-4 py-3">Why It Matters</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.kpis.map((row) => (
                          <tr key={row.metric} className="border-t border-[var(--border)]">
                            <td className="px-4 py-3 font-semibold text-[var(--text)]">{row.metric}</td>
                            <td className="px-4 py-3">{row.benchmark}</td>
                            <td className="px-4 py-3">{row.rationale}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.checklist ? (
                  <ol className="mt-6 space-y-2">
                    {section.checklist.map((item, index) => (
                      <li
                        key={item}
                        className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-sm leading-7 text-[var(--muted)]"
                      >
                        <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[11px] font-semibold text-white">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </section>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          Recommended Roofing Marketing Assets
        </h2>
        <p className="text-sm leading-7 text-[var(--muted)]">
          Deploy productized assets directly from this guide. No consultation required.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((product) => {
            const primaryOffer = product.offers[0];

            return (
              <div key={product.id} className="space-y-3">
                <ProductCard
                  productId={product.id}
                  offerId={primaryOffer.id}
                  title={product.name}
                  priceLabel={primaryOffer.priceLabel}
                  description={primaryOffer.description}
                  buttonLabel={product.ctaLabel}
                  ctaSupport={product.ctaSupport}
                  billingMode={primaryOffer.mode}
                  trustPoints={product.ctaTrustPoints}
                />
                <Link
                  href={`/${product.silo}/${product.slug}`}
                  className="block text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:text-[var(--accent)]"
                >
                  View Full Product Details
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <FaqSection items={resource.faq} />
    </div>
  );
}
