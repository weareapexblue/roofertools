export const SITE_NAME = "RooferMarketingTools.com";
export const SITE_TAGLINE = "Digital Growth Infrastructure for Roofing Companies";
export const SITE_SUBHEAD = "Authority. Distribution. Search Real Estate. USA Based.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://roofermarketingtools.com";

export const NAV_LINKS = [
  { href: "/backlinks", label: "Backlinks" },
  { href: "/press-releases", label: "Press Releases" },
  { href: "/local-seo", label: "Local SEO" },
  { href: "/microsites", label: "Microsites" },
  { href: "/free-tools", label: "Free Tools" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  enterpriseSeo: "https://seoaha.com",
  ppc: "https://ppckitchen.com",
  parent: "https://apexblueai.com",
};
