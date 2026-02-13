import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Backlink Packages",
  description:
    "Premium roofing backlink packs with one-time pricing and direct checkout for authority-focused SEO growth.",
  path: "/backlinks",
  keywords: ["roofing backlinks", "roofing backlink packages", "roofer marketing"],
});

export default function BacklinksPage() {
  const backlog = getProductsBySilo("backlinks");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Roofing Backlink Packages",
          description:
            "Hard-to-acquire, niche-relevant authority backlink packs built for roofing companies.",
        }}
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
