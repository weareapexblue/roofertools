import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing SEO Microsites for Search Real Estate",
  description:
    "Buy 7-page and 50-page roofing SEO microsite products built for search real estate, city-service coverage, conversion paths, and lead capture.",
  path: "/microsites",
  keywords: [
    "roofing SEO microsite",
    "roofing lead generation",
    "roofing microsite",
    "search real estate asset",
  ],
});

export default function MicrositesPage() {
  const products = getProductsBySilo("microsites");

  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Roofing SEO Microsites",
          description:
            "Conversion-focused and authority-scale microsite products for roofing demand capture.",
          path: "/microsites",
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
          { name: "Roofing SEO Microsites", path: "/microsites" },
        ])}
      />
      <SiloOverview
        eyebrow="Microsites"
        title="Roofing SEO Microsites"
        description="Deploy conversion-focused search assets with 7-page and 50-page frameworks. Built for direct launch, internal linking integrity, and structured data coverage."
        products={products}
        relatedLinks={[
          { href: "/resources/roofing-website-seo", label: "Website SEO Guide" },
          { href: "/resources/roofing-conversion-optimization", label: "Conversion Guide" },
          { href: "/backlinks", label: "Authority Backlinks" },
        ]}
      />
    </>
  );
}
