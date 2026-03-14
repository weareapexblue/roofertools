import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import {
  formatBlogDate,
  getAllBlogTags,
  getBlogPostReadTime,
  getLatestBlogPosts,
  slugifyTag,
} from "@/lib/blog";
import { buildItemListSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Marketing Blog for Roofers",
  description:
    "Fresh roofing marketing articles for roofing owners on SEO, storm marketing, lead response, backlinks, financing, and conversion systems.",
  path: "/blog",
  keywords: [
    "roofing marketing blog",
    "roofing marketing ideas",
    "SEO for roofing companies",
    "marketing for roofers",
  ],
});

export default function BlogIndexPage() {
  const tags = getAllBlogTags();
  const posts = getLatestBlogPosts();
  const featuredPost = posts[0];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <JsonLd
        data={buildItemListSchema({
          name: "Roofing Marketing Blog",
          path: "/blog",
          items: posts.map((post) => ({
            name: post.title,
            path: `/blog/${post.slug}`,
            description: post.description,
          })),
        })}
      />

      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
        <div className="relative">
          <SectionHeading
            eyebrow="Blog"
            title="Roofing Marketing Intelligence"
            description="Fresh operational analysis for roofing owners and growth teams across SEO, storm demand, lead handling, financing, and conversion architecture."
          />
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Newest Brief
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">
              {featuredPost.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{featuredPost.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              {formatBlogDate(featuredPost.publishedAt)} · {getBlogPostReadTime(featuredPost)} min read
            </p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-4 inline-flex rounded-xl bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[var(--accent-strong)]"
            >
              Read Newest Brief
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${slugifyTag(tag)}`}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
              {formatBlogDate(post.publishedAt)} · {getBlogPostReadTime(post)} min read
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              {post.tags.join(" · ")}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">{post.title}</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]"
            >
              Read Article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
