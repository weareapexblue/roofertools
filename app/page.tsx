import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/blog";
import { products } from "@/lib/products";
import { resources } from "@/lib/resources";
import { buildMetadata } from "@/lib/seo";
import { SITE_SUBHEAD, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Digital Growth Infrastructure for Roofing Companies",
  description:
    "RooferMarketingTools.com is a productized storefront for roofing backlinks, press release distribution, local SEO, and microsite assets.",
  path: "/",
  keywords: [
    "roofer marketing",
    "roofing marketing tools",
    "marketing for roofers",
    "SEO for roofing companies",
  ],
});

export default function HomePage() {
  const featuredResourceList = resources.slice(0, 8);
  const featuredBlog = blogPosts.slice(0, 4);

  const quickOffers = products.flatMap((product) =>
    product.offers.map((offer) => ({
      productId: product.id,
      offerId: offer.id,
      title: `${product.name} · ${offer.name}`,
      priceLabel: offer.priceLabel,
      description: offer.description,
      buttonLabel: product.ctaLabel,
      ctaSupport: product.ctaSupport,
      billingMode: offer.mode,
      trustPoints: product.ctaTrustPoints,
      href: `/${product.silo}/${product.slug}`,
    }))
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RooferMarketingTools.com",
    url: SITE_URL,
    slogan: SITE_TAGLINE,
    sameAs: ["https://seoaha.com", "https://ppckitchen.com", "https://apexblueai.com"],
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-6 py-16 sm:py-20">
      <JsonLd data={organizationSchema} />

      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-12">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_20%,transparent)] blur-3xl" />
        <div className="absolute -bottom-20 left-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_12%,transparent)] blur-3xl" />

        <div className="relative space-y-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              RooferMarketingTools.com
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl">
              {SITE_TAGLINE}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {SITE_SUBHEAD}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            <MetricCard label="Products" value="5" detail="Direct checkout" />
            <MetricCard label="Purchase Options" value="8" detail="One-time + monthly" />
            <MetricCard label="SEO Playbooks" value="20" detail="Long-form resources" />
            <MetricCard label="Free Tools" value="3" detail="Email-gated calculators" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/backlinks"
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              Start with Backlink Authority
            </Link>
            <Link
              href="/local-seo/roofing-local-seo-starter"
              className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Launch Local SEO Starter
            </Link>
            <Link
              href="/resources"
              className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore SEO Playbooks
            </Link>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
            Secure Stripe checkout. No consultation call required before purchase.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Infrastructure Layers"
          title="Built for Repeatable Roofing Growth"
          description="Each asset is mapped to a specific layer: search authority, distribution reach, local visibility, conversion architecture, or measurement control."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <LayerCard
            title="Authority"
            detail="Premium backlink placements mapped to service and city priorities."
          />
          <LayerCard
            title="Distribution"
            detail="SEO press-release campaigns for entity reinforcement and branded signal stacking."
          />
          <LayerCard
            title="Local Visibility"
            detail="Single-location local SEO cadence with recurring implementation and reporting."
          />
          <LayerCard
            title="Search Real Estate"
            detail="7-page and 50-page microsite frameworks for demand capture and conversion depth."
          />
        </div>
      </section>

      <section id="products" className="space-y-6">
        <SectionHeading
          eyebrow="Core Products"
          title="Productized Roofing Growth Assets"
          description="Transparent scope, fixed deliverables, and direct purchase flow. No consultation required before checkout."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {quickOffers.map((offer) => (
            <div key={`${offer.productId}-${offer.offerId}`} className="space-y-3">
              <ProductCard
                productId={offer.productId}
                offerId={offer.offerId}
                title={offer.title}
                priceLabel={offer.priceLabel}
                description={offer.description}
                buttonLabel={offer.buttonLabel}
                ctaSupport={offer.ctaSupport}
                billingMode={offer.billingMode}
                trustPoints={offer.trustPoints}
              />
              <Link
                href={offer.href}
                className="block text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                View Product Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <InfoPanel
          title="Free Tools"
          subtitle="ROI, Storm Revenue, Cost Comparison"
          copy="Interactive calculators with gated outputs and prompt vault access for planning and sales enablement."
          href="/free-tools"
          cta="Open Free Tools"
        />
        <InfoPanel
          title="Resource Library"
          subtitle="20 Niche SEO Playbooks"
          copy="Detailed strategic pages with query maps, KPI scorecards, tactical checklists, and conversion pathways."
          href="/resources"
          cta="View Resource Library"
        />
        <InfoPanel
          title="Blog Cluster"
          subtitle="Operational Marketing Analysis"
          copy="Practical commentary on channel economics, ranking durability, and conversion architecture for roofers."
          href="/blog"
          cta="Read Blog"
        />
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Execution Standard"
          title="How Deployment Works"
          description="All products are delivered with defined scope, quality controls, and reporting clarity."
        />

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TimelineCard
            step="01"
            title="Scope Selection"
            copy="Choose a product package aligned to service, market, and growth objective."
          />
          <TimelineCard
            step="02"
            title="Input Collection"
            copy="Submit required business inputs, target pages, and implementation constraints."
          />
          <TimelineCard
            step="03"
            title="Production + QA"
            copy="Delivery follows structured workflow with compliance and quality checkpoints."
          />
          <TimelineCard
            step="04"
            title="Handoff + Tracking"
            copy="Receive delivery confirmation, implementation notes, and next-step guidance."
          />
        </ol>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Anchor Content"
          title="Featured Resource Guides"
          description="High-value niche pages designed for search coverage and practical execution."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredResourceList.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                Resource Playbook
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">{resource.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Roofing Marketing Articles"
          description="Practical analysis for SEO performance, authority development, and conversion operations."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredBlog.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {post.tags.join(" · ")}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">{post.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8">
        <div className="grid gap-5 md:grid-cols-[1.5fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Enterprise Request
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
              Looking for Aggressive Multi-Location SEO?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Contact us and go to the form to submit your market count, target cities, and growth objective.
            </p>
          </div>
          <Link
            href="/contact#contact-form"
            className="inline-flex h-fit rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text)]">{value}</p>
      <p className="mt-1 text-xs text-[var(--muted)]">{detail}</p>
    </article>
  );
}

function LayerCard({ title, detail }: { title: string; detail: string }) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="text-base font-semibold tracking-tight text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{detail}</p>
    </article>
  );
}

function InfoPanel({
  title,
  subtitle,
  copy,
  href,
  cta,
}: {
  title: string;
  subtitle: string;
  copy: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{title}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">{subtitle}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{copy}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{cta}</p>
    </Link>
  );
}

function TimelineCard({
  step,
  title,
  copy,
}: {
  step: string;
  title: string;
  copy: string;
}) {
  return (
    <li className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">Step {step}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{copy}</p>
    </li>
  );
}
