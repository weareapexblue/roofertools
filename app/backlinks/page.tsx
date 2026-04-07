import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Backlink Packages for Authority-First Roofer SEO",
  description:
    "Buy premium roofing backlink packages for authority-focused roofer SEO, service-page support, and local ranking momentum with direct checkout.",
  path: "/backlinks",
  keywords: [
    "roofing backlinks",
    "roofing backlink packages",
    "roofer SEO backlinks",
    "roofer marketing",
  ],
});

export default function BacklinksPage() {
  const backlog = getProductsBySilo("backlinks");

  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Roofing Backlink Packages",
          description:
            "Hard-to-acquire, niche-relevant authority backlink packs built for roofing companies.",
          path: "/backlinks",
          items: backlog.map((product) => ({
            name: product.name,
            path: `/${product.silo}/${product.slug}`,
            description: product.summary,
          })),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Roofing Backlink Packages", path: "/backlinks" },
        ])}
      />
      <SiloOverview
        eyebrow="Backlinks"
        title="Premium Roofing Backlink Packs"
        description="Hard-to-acquire, niche-relevant authority backlinks built for roofing companies. One-time purchase. No monthly contract. No performance guarantees."
        products={backlog}
        relatedLinks={[
          { href: "/press-releases", label: "Press Release Distribution" },
          { href: "/local-seo", label: "Local SEO Starter" },
          { href: "/resources/roofing-backlinks-explained", label: "Backlink Strategy Guide" },
        ]}
      />
    </>
  );
}
