import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Press Release Distribution",
  description:
    "SEO supercharged press release distribution for roofing authority and brand signal amplification.",
  path: "/press-releases",
  keywords: ["roofing press release distribution", "roofer marketing", "roofing SEO packages"],
});

export default function PressReleasesPage() {
  const products = getProductsBySilo("press-releases");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Roofing Press Release Distribution",
          description:
            "Authority, brand amplification, and search signal stacking through one-time distribution products.",
        }}
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
