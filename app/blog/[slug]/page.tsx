import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { buildArticleSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post Not Found",
      description: "Requested blog post does not exist.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const sectionAnchors = post.sections.map((section) => ({
    heading: section.heading,
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }));

  return (
    <article className="mx-auto w-full max-w-7xl space-y-8 px-6 py-16 sm:py-20">
      <JsonLd
        data={buildArticleSchema({
          headline: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          keywords: post.tags,
        })}
      />

      <header className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            {post.tags.join(" · ")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--muted)]">{post.description}</p>
        </div>
      </header>

      <section className="grid gap-6 xl:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 xl:sticky xl:top-28">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Article Sections
          </h2>
          <ul className="mt-4 space-y-2">
            {sectionAnchors.map((entry, index) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="text-xs leading-6 text-[var(--muted)] hover:text-[var(--accent)]">
                  {index + 1}. {entry.heading}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-7">
          {post.sections.map((section) => {
            const sectionId = section.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

            return (
              <section
                id={sectionId}
                key={section.heading}
                className="scroll-mt-24 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Conversion Paths</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Deploy the strategy with direct-purchase assets aligned to this article.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/backlinks"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Backlink Packs
          </Link>
          <Link
            href="/press-releases"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Press Distribution
          </Link>
          <Link
            href="/local-seo"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Local SEO Starter
          </Link>
          <Link
            href="/microsites"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            SEO Microsites
          </Link>
        </div>
      </section>
    </article>
  );
}
