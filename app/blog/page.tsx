import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { blogPosts, getAllBlogTags, slugifyTag } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Marketing Blog",
  description:
    "Strategic blog content on roofing SEO, backlinks, press distribution, marketing costs, and conversion systems.",
  path: "/blog",
  keywords: ["roofing marketing", "SEO for roofing companies", "marketing for roofers"],
});

export default function BlogIndexPage() {
  const tags = getAllBlogTags();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
        <div className="relative">
          <SectionHeading
            eyebrow="Blog"
            title="Roofing Marketing Intelligence"
            description="Operational analysis on ranking systems, authority economics, and conversion architecture for roofing companies."
          />
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
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
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
