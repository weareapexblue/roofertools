import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing SEO Microsites",
  description:
    "7-page and 50-page roofing SEO microsite products designed as conversion and search real estate assets.",
  path: "/microsites",
  keywords: ["roofing SEO microsite", "roofing lead generation", "search real estate asset"],
});

export default function MicrositesPage() {
  const products = getProductsBySilo("microsites");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Roofing SEO Microsites",
          description:
            "Conversion-focused and authority-scale microsite products for roofing demand capture.",
        }}
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
