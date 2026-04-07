import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Press Release Distribution for SEO Authority",
  description:
    "Launch roofing press release distribution for SEO authority, branded search signals, market expansion, and campaign-level visibility.",
  path: "/press-releases",
  keywords: [
    "roofing press release distribution",
    "roofing press release service",
    "roofer marketing",
    "roofing SEO packages",
  ],
});

export default function PressReleasesPage() {
  const products = getProductsBySilo("press-releases");

  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Roofing Press Release Distribution",
          description:
            "Authority, brand amplification, and search signal stacking through one-time distribution products.",
          path: "/press-releases",
          items: products.map((product) => ({
            name: product.name,
            path: `/${product.silo}/${product.slug}`,
            description: product.summary,
          })),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Roofing Press Release Distribution", path: "/press-releases" },
        ])}
      />
      <SiloOverview
        eyebrow="Press Releases"
        title="SEO Supercharged Press Releases"
        description="Authority, brand amplification, and search signal stacking. One-time purchase. No editorial guarantees."
        products={products}
        relatedLinks={[
          { href: "/backlinks", label: "Backlink Packs" },
          { href: "/resources/roofing-press-release-distribution", label: "Press Release Guide" },
          { href: "/resources/roofing-authority-building-strategy", label: "Authority Strategy" },
        ]}
      />
    </>
  );
}
