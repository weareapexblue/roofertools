import { buildResourceSections, type ResourceSection } from "@/lib/resource-playbooks";
export type ResourceGuide = {
  slug: string;
  title: string;
  description: string;
  focusKeyword: string;
  relatedProductIds: string[];
  supportingResourceSlugs?: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const resources: ResourceGuide[] = [
  {
    slug: "roofer-marketing-guide",
    title: "Roofer Marketing Guide for Roofing Companies",
    description:
      "A complete roofer marketing guide for roofing companies that need stronger digital marketing, authority assets, and conversion systems.",
    focusKeyword: "roofer marketing",
    relatedProductIds: [
      "premium-roofing-backlink-packs",
      "roofing-local-seo-starter",
      "roofing-seo-microsite-7-page-lead-engine",
    ],
    supportingResourceSlugs: [
      "marketing-for-roofing-companies",
      "roofing-digital-marketing-infrastructure",
      "roofing-keyword-research-guide",
      "roofing-marketing-materials",
    ],
    faq: buildDefaultFaq("roofer marketing"),
  },
  {
    slug: "marketing-for-roofing-companies",
    title: "Marketing for Roofing Companies",
    description:
      "Marketing for roofing companies covering channel mix, SEO, digital marketing, authority building, and lead handling for profitable growth.",
    focusKeyword: "marketing for roofing companies",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "premium-roofing-backlink-packs",
      "roofing-seo-microsite-7-page-lead-engine",
    ],
    supportingResourceSlugs: [
      "roofer-marketing-guide",
      "roofing-digital-marketing-infrastructure",
      "roofing-keyword-research-guide",
      "roofing-marketing-materials",
    ],
    faq: buildDefaultFaq("marketing for roofing companies"),
  },
  {
    slug: "seo-for-roofing-companies",
    title: "SEO for Roofing Companies",
    description:
      "How roofing companies build sustained visibility with local intent coverage, authority links, and structured conversion paths.",
    focusKeyword: "SEO for roofing companies",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "premium-roofing-backlink-packs",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("SEO for roofing companies"),
  },
  {
    slug: "roofing-contractor-lead-generation",
    title: "Roofing Lead Generation",
    description:
      "Roofing lead generation strategy for roofers across branded search, service queries, city-intent capture, and sales follow-up.",
    focusKeyword: "roofing lead generation",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-local-seo-starter",
      "seo-supercharged-press-releases",
    ],
    supportingResourceSlugs: [
      "roofer-marketing-guide",
      "roofing-digital-marketing-infrastructure",
      "roofing-conversion-optimization",
      "roofing-keyword-research-guide",
    ],
    faq: buildDefaultFaq("roofing lead generation"),
  },
  {
    slug: "roofing-backlinks-explained",
    title: "Roofing Backlinks Explained",
    description:
      "What high-quality roofing backlinks are, how they work, and why contextual relevance matters more than volume.",
    focusKeyword: "roofing backlinks",
    relatedProductIds: ["premium-roofing-backlink-packs"],
    faq: buildDefaultFaq("roofing backlinks"),
  },
  {
    slug: "roofing-press-release-distribution",
    title: "Roofing Press Release Distribution",
    description:
      "How SEO-oriented press release distribution supports authority and brand-level search signals.",
    focusKeyword: "roofing press release distribution",
    relatedProductIds: ["seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing press release distribution"),
  },
  {
    slug: "local-seo-for-roofers",
    title: "Local SEO for Roofers",
    description:
      "Execution model for ranking roofing companies in local maps and organic results without wasted scope.",
    focusKeyword: "local SEO for roofers",
    relatedProductIds: ["roofing-local-seo-starter", "premium-roofing-backlink-packs"],
    faq: buildDefaultFaq("local SEO for roofers"),
  },
  {
    slug: "roofing-google-business-optimization",
    title: "Roofing Google Business Optimization",
    description:
      "Practical GBP optimization patterns that improve map pack relevance and conversion readiness.",
    focusKeyword: "roofing Google Business optimization",
    relatedProductIds: ["roofing-local-seo-starter"],
    faq: buildDefaultFaq("roofing Google Business optimization"),
  },
  {
    slug: "roofing-website-seo",
    title: "Roofing Website SEO",
    description:
      "Site architecture, service-page intent mapping, and schema strategy for scalable roofing SEO.",
    focusKeyword: "roofing website SEO",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("roofing website SEO"),
  },
  {
    slug: "roofing-authority-building-strategy",
    title: "Roofing Authority Building Strategy",
    description:
      "Authority-building playbook for roofing brands combining links, mentions, distribution, and trust assets.",
    focusKeyword: "roofing authority building strategy",
    relatedProductIds: ["premium-roofing-backlink-packs", "seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing authority building strategy"),
  },
  {
    slug: "roofing-digital-marketing-infrastructure",
    title: "Roofing Digital Marketing",
    description:
      "Digital marketing for roofers covering SEO, authority building, content, local visibility, and conversion systems that compound.",
    focusKeyword: "roofing digital marketing",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "roofing-authority-microsite-50-page-cluster-site",
      "seo-supercharged-press-releases",
    ],
    supportingResourceSlugs: [
      "roofer-marketing-guide",
      "marketing-for-roofing-companies",
      "roofing-content-marketing",
      "roofing-keyword-research-guide",
    ],
    faq: buildDefaultFaq("roofing digital marketing"),
  },
  {
    slug: "marketing-for-commercial-roofers",
    title: "Commercial Roofing Marketing",
    description:
      "Commercial roofing marketing model focused on high-ticket demand, trust framing, lifecycle content, and long-cycle conversion paths.",
    focusKeyword: "commercial roofing marketing",
    relatedProductIds: [
      "roofing-authority-microsite-50-page-cluster-site",
      "seo-supercharged-press-releases",
    ],
    supportingResourceSlugs: [
      "marketing-for-roofing-companies",
      "roofing-digital-marketing-infrastructure",
      "roofer-marketing-guide",
    ],
    faq: buildDefaultFaq("commercial roofing marketing"),
  },
  {
    slug: "marketing-for-residential-roofers",
    title: "Marketing for Residential Roofers",
    description:
      "Residential roofing growth strategy for neighborhood-level demand capture and fast-response lead systems.",
    focusKeyword: "marketing for residential roofers",
    relatedProductIds: ["roofing-local-seo-starter", "roofing-seo-microsite-7-page-lead-engine"],
    faq: buildDefaultFaq("marketing for residential roofers"),
  },
  {
    slug: "storm-season-roofing-marketing",
    title: "Storm Season Roofing Marketing",
    description:
      "Storm-season response framework to convert demand spikes into qualified booked jobs.",
    focusKeyword: "storm season roofing marketing",
    relatedProductIds: [
      "seo-supercharged-press-releases",
      "roofing-seo-microsite-7-page-lead-engine",
      "premium-roofing-backlink-packs",
    ],
    faq: buildDefaultFaq("storm season roofing marketing"),
  },
  {
    slug: "roofing-reputation-management",
    title: "Roofing Reputation Management",
    description:
      "Reputation systems for roofing companies: review velocity, sentiment control, and trust signal consistency.",
    focusKeyword: "roofing reputation management",
    relatedProductIds: ["roofing-local-seo-starter", "seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing reputation management"),
  },
  {
    slug: "roofing-content-marketing",
    title: "Content Marketing for Roofing Companies",
    description:
      "Content marketing for roofing companies that need better internal linking, sales enablement, and topical authority instead of random blog volume.",
    focusKeyword: "content marketing for roofing companies",
    relatedProductIds: ["roofing-authority-microsite-50-page-cluster-site"],
    supportingResourceSlugs: [
      "roofing-marketing-materials",
      "roofing-keyword-research-guide",
      "roofer-marketing-guide",
      "marketing-for-roofing-companies",
    ],
    faq: buildDefaultFaq("content marketing for roofing companies"),
  },
  {
    slug: "roofing-marketing-materials",
    title: "Roofing Marketing Materials",
    description:
      "Roofing marketing materials that support inspections, estimates, financing conversations, follow-up, and higher close rates.",
    focusKeyword: "roofing marketing materials",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "roofing-seo-microsite-7-page-lead-engine",
      "seo-supercharged-press-releases",
    ],
    supportingResourceSlugs: [
      "roofing-content-marketing",
      "roofing-keyword-research-guide",
      "marketing-for-roofing-companies",
      "roofer-marketing-guide",
    ],
    faq: buildDefaultFaq("roofing marketing materials"),
  },
  {
    slug: "roofing-keyword-research-guide",
    title: "Roofing Keywords: Best Keywords for Roofing Companies",
    description:
      "Best keywords for roofing companies across service, city, storm, financing, and commercial search intent.",
    focusKeyword: "roofing keywords",
    relatedProductIds: ["roofing-local-seo-starter", "roofing-seo-microsite-7-page-lead-engine"],
    supportingResourceSlugs: [
      "roofing-digital-marketing-infrastructure",
      "marketing-for-roofing-companies",
      "roofing-contractor-lead-generation",
      "roofer-marketing-guide",
    ],
    faq: buildDefaultFaq("roofing keywords"),
  },
  {
    slug: "roofing-conversion-optimization",
    title: "Roofing Conversion Optimization",
    description:
      "How roofers increase booked jobs from existing traffic through UX, offers, and lead funnel adjustments.",
    focusKeyword: "roofing conversion optimization",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("roofing conversion optimization"),
  },
  {
    slug: "roofing-search-engine-rankings",
    title: "Roofing Search Engine Rankings",
    description:
      "Ranking model for roofing keywords using authority, technical SEO, and topical coverage.",
    focusKeyword: "roofing search engine rankings",
    relatedProductIds: ["premium-roofing-backlink-packs", "roofing-local-seo-starter"],
    faq: buildDefaultFaq("roofing search engine rankings"),
  },
  {
    slug: "roofing-marketing-costs-explained",
    title: "Roofing Marketing Costs Explained",
    description:
      "Cost framework for roofing marketing channels and how to benchmark spend against margin and close rate.",
    focusKeyword: "roofing marketing costs",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "premium-roofing-backlink-packs",
      "seo-supercharged-press-releases",
    ],
    faq: buildDefaultFaq("roofing marketing costs"),
  },
  {
    slug: "roofing-marketing-roi-framework",
    title: "Roofing Marketing ROI Framework",
    description:
      "ROI operating model for roofing growth investments across SEO, authority distribution, and conversion systems.",
    focusKeyword: "roofing marketing ROI",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "roofing-authority-microsite-50-page-cluster-site",
      "premium-roofing-backlink-packs",
    ],
    faq: buildDefaultFaq("roofing marketing ROI"),
  },
];

export function getResourceSections(resource: ResourceGuide): ResourceSection[] {
  return buildResourceSections(resource);
}

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getResourceBySlug(slug))
    .filter((resource): resource is ResourceGuide => resource !== undefined);
}

export function getRelatedResources(resource: ResourceGuide, limit = 4) {
  const explicit = getResourcesBySlugs(resource.supportingResourceSlugs || []).filter(
    (candidate) => candidate.slug !== resource.slug
  );
  const explicitSlugs = new Set(explicit.map((candidate) => candidate.slug));
  const resourceTokens = tokenizeResourceText(resource);

  const fallback = resources
    .filter((candidate) => candidate.slug !== resource.slug && !explicitSlugs.has(candidate.slug))
    .map((candidate) => ({
      candidate,
      score:
        candidate.relatedProductIds.filter((id) => resource.relatedProductIds.includes(id)).length * 3 +
        tokenizeResourceText(candidate).filter((token) => resourceTokens.includes(token)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score || left.candidate.title.localeCompare(right.candidate.title)
    )
    .map(({ candidate }) => candidate);

  return [...explicit, ...fallback].slice(0, limit);
}

function buildDefaultFaq(topic: string) {
  return [
    {
      question: `How long does ${topic} typically take to produce measurable results?`,
      answer:
        "Most roofing campaigns show directional movement within the first 60-120 days when technical issues are resolved and core pages are deployed, but competitive markets may require longer authority-building windows.",
    },
    {
      question: `What are the biggest mistakes companies make with ${topic}?`,
      answer:
        "The most common mistakes are shallow page coverage, weak internal linking, low-quality backlink purchases, and tracking dashboards that report vanity metrics instead of qualified pipeline outcomes.",
    },
    {
      question: `How should roofing teams budget for ${topic}?`,
      answer:
        "Start with unit economics: target acquisition cost, average job margin, and close rate. Then allocate spend across foundational local SEO, authority assets, and conversion optimization based on expected payback windows.",
    },
    {
      question: `Can smaller roofing companies compete in ${topic}?`,
      answer:
        "Yes. Smaller teams can compete by focusing on tightly scoped city-service clusters, disciplined local optimization, and high-quality authority signals instead of broad low-quality coverage.",
    },
    {
      question: `Which KPIs matter most for ${topic}?`,
      answer:
        "Track qualified leads, lead-to-inspection rate, close rate, cost per qualified lead, and gross margin by channel. Rankings matter, but revenue-linked KPIs should guide decisions.",
    },
  ];
}

function tokenizeResourceText(resource: ResourceGuide) {
  return [...new Set(`${resource.title} ${resource.focusKeyword} ${resource.description}`
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2))];
}
