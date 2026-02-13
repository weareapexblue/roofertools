export type ProductSilo = "backlinks" | "press-releases" | "local-seo" | "microsites";

export type ProductOffer = {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
  stripePriceEnv: string;
  mode: "payment" | "subscription";
};

export type Product = {
  id: string;
  silo: ProductSilo;
  slug: string;
  name: string;
  categoryTitle: string;
  summary: string;
  positioning: string;
  whatIncluded: string[];
  whoFor: string[];
  whatNot: string[];
  problem: string;
  whyItMatters: string;
  deliveryWorkflow: string[];
  requiredInputs: string[];
  qualityControls: string[];
  signalWindows: Array<{ window: string; expectation: string }>;
  disclaimers: string[];
  ctaLabel: string;
  ctaSupport: string;
  ctaTrustPoints: string[];
  offers: ProductOffer[];
  faq: Array<{ question: string; answer: string }>;
};

export const products: Product[] = [
  {
    id: "premium-roofing-backlink-packs",
    silo: "backlinks",
    slug: "premium-roofing-backlink-packs",
    name: "Premium Roofing Backlink Packs",
    categoryTitle: "Roofing Backlinks",
    summary:
      "Hard-to-acquire, niche-relevant authority backlinks built for roofing companies that need ranking momentum without a monthly contract.",
    positioning:
      "Backlinks are treated as strategic authority assets, not bulk volume. Each placement is selected for relevance and trust signals that support roofing service pages and location pages.",
    whatIncluded: [
      "Publisher outreach and placement prospecting for roofing-relevant and construction-adjacent websites",
      "Anchor text planning mapped to your service and location priorities",
      "Indexability and placement validation prior to handoff",
      "Delivery report with live URL evidence",
      "Recommended internal link targets for each acquired link",
    ],
    whoFor: [
      "Roofing companies expanding into competitive metro areas",
      "Teams that already have service/location pages and need authority lift",
      "Operators replacing low-quality backlink vendors with quality-first acquisition",
    ],
    whatNot: [
      "Not a monthly SEO retainer",
      "Not mass directory submissions",
      "Not a ranking guarantee or traffic guarantee",
    ],
    problem:
      "Most roofers either buy low-quality links that devalue over time or delay authority building until competitors have already captured search demand.",
    whyItMatters:
      "Authority gaps directly affect local pack visibility and organic rankings for high-intent roofing queries. Strategic links shorten time-to-trust for new service lines and city pages.",
    deliveryWorkflow: [
      "Market and competitor link gap benchmark against your current top service and city pages",
      "Publisher prospecting with topical, geographic, and trust filters",
      "Anchor text and destination URL map review with risk balancing",
      "Outreach, placement negotiation, and publication sequencing",
      "Placement verification, indexability QA, and handoff report",
    ],
    requiredInputs: [
      "Primary target URLs and preferred service/location priorities",
      "Brand and compliance notes (claims, regulated language, legal constraints)",
      "Existing backlink profile or SEO audit if available",
      "Any restricted anchor terms you want excluded",
    ],
    qualityControls: [
      "Contextual relevance check before placement approval",
      "Outbound neighborhood and topical fit validation",
      "Anchor diversity and over-optimization risk scoring",
      "Live URL confirmation plus crawl/index checks before delivery",
    ],
    signalWindows: [
      {
        window: "Weeks 1-3",
        expectation: "Placements begin publishing as publisher approvals finalize.",
      },
      {
        window: "Weeks 4-8",
        expectation: "Target pages often show improved crawl frequency and trust signals.",
      },
      {
        window: "Months 2-4",
        expectation:
          "Ranking and local visibility impact becomes clearer when link quality is aligned to strong on-page assets.",
      },
    ],
    disclaimers: [
      "One-time purchase. No monthly contract.",
      "No performance guarantees.",
      "Placements are subject to editorial and publisher acceptance.",
    ],
    ctaLabel: "Secure Backlink Checkout",
    ctaSupport:
      "Get authority placement production started immediately after secure Stripe checkout.",
    ctaTrustPoints: [
      "Secure Stripe payment processing",
      "No consultation call required",
      "Direct order confirmation workflow",
    ],
    offers: [
      {
        id: "single-premium-link",
        name: "Single Premium Link",
        priceLabel: "$700",
        description: "One authority placement for focused ranking support.",
        stripePriceEnv: "STRIPE_PRICE_BACKLINK_SINGLE",
        mode: "payment",
      },
      {
        id: "3-pack-authority-stack",
        name: "3-Pack Authority Stack",
        priceLabel: "$1,500",
        description: "Three placements to reinforce service and location authority.",
        stripePriceEnv: "STRIPE_PRICE_BACKLINK_3PACK",
        mode: "payment",
      },
      {
        id: "10-pack-domination-stack",
        name: "10-Pack Domination Stack",
        priceLabel: "$3,000",
        description: "Ten placements for aggressive authority acceleration.",
        stripePriceEnv: "STRIPE_PRICE_BACKLINK_10PACK",
        mode: "payment",
      },
    ],
    faq: [
      {
        question: "How fast are links delivered?",
        answer:
          "Delivery cadence depends on publisher response windows and editorial acceptance, but most orders begin publishing within 2-4 weeks.",
      },
      {
        question: "Can I choose anchors and target pages?",
        answer:
          "Yes. You can provide preferred anchors and URLs. Final optimization choices are validated against risk and relevance before publication.",
      },
      {
        question: "Are these links white-hat?",
        answer:
          "Placements are acquired through manual outreach and contextual relevance standards, with no automated spam submissions.",
      },
    ],
  },
  {
    id: "seo-supercharged-press-releases",
    silo: "press-releases",
    slug: "seo-supercharged-press-releases",
    name: "SEO Supercharged Press Releases",
    categoryTitle: "Press Release Distribution",
    summary:
      "Authority, brand amplification, and search signal stacking through distribution designed for roofing market visibility.",
    positioning:
      "Press distribution is used as an authority-support layer to reinforce entity recognition, branded search signals, and campaign-level visibility.",
    whatIncluded: [
      "SEO-focused release structure with keyword intent alignment",
      "Distribution network submission and processing",
      "Link placement guidance aligned to product/service priorities",
      "Campaign report with published endpoint tracking",
      "Optional AI-enhanced wire distribution mode",
    ],
    whoFor: [
      "Roofing brands launching new markets, offers, or expansions",
      "Teams needing reputation-safe authority amplification",
      "Operators stacking signals with backlink and on-site SEO campaigns",
    ],
    whatNot: [
      "Not guaranteed media pickup",
      "Not investigative journalism placement",
      "Not a substitute for full content strategy",
    ],
    problem:
      "Roofing companies often rely only on page-level SEO and miss broader authority signals that support branded credibility and entity recognition.",
    whyItMatters:
      "Distribution supports search ecosystems beyond a single page, improving consistency across branded mentions, syndicated visibility, and query trust layers.",
    deliveryWorkflow: [
      "Campaign intake and objective framing (launch, expansion, trust reinforcement)",
      "Release angle development with entity and keyword signal planning",
      "Compliance and editorial normalization for distribution readiness",
      "Wire submission and endpoint distribution processing",
      "Post-distribution reporting with publication footprint summary",
    ],
    requiredInputs: [
      "Core announcement or campaign event details",
      "Approved business claims, citations, and legal-safe language",
      "Preferred landing page targets and brand assets",
      "Geographic emphasis if market-specific amplification is needed",
    ],
    qualityControls: [
      "Headline and lead-paragraph relevance scoring for roofing intent",
      "Link placement and anchor compliance checks before submission",
      "Distribution network fit review by campaign objective",
      "Published endpoint verification and archive logging",
    ],
    signalWindows: [
      {
        window: "Days 3-10",
        expectation: "Syndication footprint and branded mention velocity increases.",
      },
      {
        window: "Weeks 2-6",
        expectation:
          "Entity and brand consistency signals strengthen alongside ongoing SEO activity.",
      },
      {
        window: "Months 1-3",
        expectation:
          "Contribution to authority stack becomes more visible when combined with page-level optimization and backlinks.",
      },
    ],
    disclaimers: [
      "One-time purchase. No editorial guarantees.",
      "Third-party distribution endpoints are subject to publisher policies.",
      "No ranking guarantees or traffic guarantees.",
    ],
    ctaLabel: "Secure Press Release Checkout",
    ctaSupport:
      "Launch distribution workflow immediately with direct checkout and intake handoff.",
    ctaTrustPoints: [
      "Secure Stripe payment processing",
      "Campaign intake starts after purchase",
      "One-time purchase with defined scope",
    ],
    offers: [
      {
        id: "press-release-standard",
        name: "Standard Mode",
        priceLabel: "$700",
        description: "Core SEO-focused release and distribution workflow.",
        stripePriceEnv: "STRIPE_PRICE_PRESS_STANDARD",
        mode: "payment",
      },
      {
        id: "press-release-ai-mode",
        name: "AI Mode (Enhanced AI Wire Distribution)",
        priceLabel: "$1,200",
        description: "Expanded AI-enhanced distribution coverage.",
        stripePriceEnv: "STRIPE_PRICE_PRESS_AI",
        mode: "payment",
      },
    ],
    faq: [
      {
        question: "Do you guarantee publication on specific news websites?",
        answer:
          "No. Distribution endpoints depend on third-party acceptance and network availability at submission time.",
      },
      {
        question: "Can this help local rankings?",
        answer:
          "Press distribution supports authority and brand signal layers, which can complement local SEO, backlinks, and on-site optimization.",
      },
      {
        question: "Can I submit my own draft?",
        answer:
          "Yes. Client drafts are accepted and normalized for compliance, clarity, and distribution readiness.",
      },
    ],
  },
  {
    id: "roofing-local-seo-starter",
    silo: "local-seo",
    slug: "roofing-local-seo-starter",
    name: "Roofing Local SEO Starter Package",
    categoryTitle: "Local SEO",
    summary:
      "Single-location local SEO infrastructure built for roofers who need consistent visibility without enterprise complexity.",
    positioning:
      "This package is purpose-built for one GBP-driven roofing location and provides measurable monthly activity without over-scoping.",
    whatIncluded: [
      "1 keyword topic + 1 location focus",
      "Up to 20 tracking keywords",
      "10 backlinks per month",
      "1 onsite blog post per month",
      "1 page optimization per month",
      "Uptime monitoring",
      "White-labeled dashboard",
      "Monthly PDF report",
    ],
    whoFor: [
      "Single-location roofing businesses with active Google Business Profiles",
      "Operators replacing fragmented freelancers with a standardized delivery model",
      "Teams needing recurring reporting and predictable scope",
    ],
    whatNot: [
      "Not intended for multi-location enterprises",
      "Not paid ads management",
      "Not a performance guarantee",
    ],
    problem:
      "Many roofers have basic websites but no consistent monthly SEO execution tied to local intent and measurable keyword movement.",
    whyItMatters:
      "Local visibility compounds through consistent publishing, optimization, and off-site authority activity. A structured starter scope prevents random, low-impact SEO tasks.",
    deliveryWorkflow: [
      "Month-start strategy checkpoint for keyword topic and city focus",
      "On-page optimization sprint for one priority page",
      "Monthly blog production and publication in your site workflow",
      "Backlink delivery and local relevance reinforcement",
      "Tracking, dashboard updates, and monthly PDF performance reporting",
    ],
    requiredInputs: [
      "Primary location, GBP URL, and service focus priorities",
      "Website access or publishing workflow for content updates",
      "Core offers, seasonal priorities, and excluded service areas",
      "Preferred reporting recipients and cadence",
    ],
    qualityControls: [
      "Keyword tracking integrity checks across desktop and mobile",
      "On-page QA for title, heading, and internal link consistency",
      "Backlink pacing review to avoid unnatural monthly patterns",
      "Report-level reconciliation of completed deliverables vs scope",
    ],
    signalWindows: [
      {
        window: "Month 1",
        expectation:
          "Technical and on-page consistency improves while baseline rankings are benchmarked.",
      },
      {
        window: "Months 2-3",
        expectation:
          "Directional movement for tracked local queries and stronger service-page relevance.",
      },
      {
        window: "Months 4+",
        expectation:
          "Compounding local visibility and lead consistency when cadence is maintained.",
      },
    ],
    disclaimers: [
      "Ideal for single GBP roofing locations.",
      "No ranking guarantees or traffic guarantees.",
      "Monthly subscription billing.",
    ],
    ctaLabel: "Launch Local SEO Monthly",
    ctaSupport:
      "Start monthly local SEO execution for one roofing location with recurring delivery cadence.",
    ctaTrustPoints: [
      "Secure recurring billing via Stripe",
      "Single-location scope clarity",
      "Monthly reporting and activity tracking",
    ],
    offers: [
      {
        id: "local-seo-starter-monthly",
        name: "Local SEO Starter",
        priceLabel: "$499/month",
        description: "Recurring local SEO execution for one roofing location.",
        stripePriceEnv: "STRIPE_PRICE_LOCAL_SEO_STARTER",
        mode: "subscription",
      },
    ],
    faq: [
      {
        question: "Is this right for multiple locations?",
        answer:
          "This starter package is optimized for one primary GBP location. Multi-location builds should use an expanded SEO framework.",
      },
      {
        question: "Will you redesign my entire website?",
        answer:
          "No. The package includes monthly content and page optimization within the defined scope.",
      },
      {
        question: "How are results reported?",
        answer:
          "You receive dashboard access plus a monthly PDF summary of activities and tracked keyword movement.",
      },
    ],
  },
  {
    id: "roofing-seo-microsite-7-page-lead-engine",
    silo: "microsites",
    slug: "roofing-seo-microsite-7-page-lead-engine",
    name: "Roofing SEO Microsite – 7 Page Lead Engine™",
    categoryTitle: "Microsites",
    summary:
      "A focused seven-page SEO funnel designed to capture high-intent roofing demand in a specific market.",
    positioning:
      "The 7-page build prioritizes speed-to-launch and conversion architecture for targeted service/location opportunities.",
    whatIncluded: [
      "High-intent domain research",
      "7-page SEO funnel structure",
      "Local schema",
      "Conversion-focused copy",
      "Structured internal linking",
      "Deployed SEO framework",
    ],
    whoFor: [
      "Roofers entering a new city or service vertical",
      "Teams needing a dedicated lead engine separate from a legacy website",
      "Operators testing market demand before full expansion",
    ],
    whatNot: [
      "Not ongoing management",
      "Not a 50-page topical cluster build",
      "Not ad account management",
    ],
    problem:
      "Generic websites often bury high-intent service demand behind weak architecture, causing slow rankings and low conversion performance.",
    whyItMatters:
      "A scoped microsite can ship faster, align internal links to buyer intent, and convert visitors with focused page purpose.",
    deliveryWorkflow: [
      "Discovery and market-intent blueprint for service and location targeting",
      "Domain and architecture approval for the 7-page funnel map",
      "Copy, schema, and internal-link framework production",
      "Deployment and technical QA on page speed, tracking, and indexability",
      "Launch handoff with growth recommendations for the next 90 days",
    ],
    requiredInputs: [
      "Target city/service priorities and offer positioning",
      "Brand voice guardrails and legal/compliance constraints",
      "Preferred CRM/form destination for lead routing",
      "Analytics and conversion event requirements",
    ],
    qualityControls: [
      "Intent alignment check per page against buyer stage",
      "Schema and structured-data validation pre-launch",
      "Internal-link flow audit for crawl and conversion support",
      "Mobile rendering and page speed QA before handoff",
    ],
    signalWindows: [
      {
        window: "Weeks 1-2 post-launch",
        expectation: "Indexation and baseline visibility establishment.",
      },
      {
        window: "Weeks 3-8",
        expectation:
          "Early movement on long-tail and city-intent terms as internal links settle.",
      },
      {
        window: "Months 2-4",
        expectation:
          "Conversion and ranking lift becomes clearer with authority support and ongoing content additions.",
      },
    ],
    disclaimers: [
      "One-time build. No ongoing management.",
      "No ranking guarantees.",
      "Timeline depends on content approvals and launch dependencies.",
    ],
    ctaLabel: "Start 7 Page Build",
    ctaSupport:
      "Begin your 7-page SEO microsite build with direct checkout and production onboarding.",
    ctaTrustPoints: [
      "Secure Stripe payment processing",
      "One-time project with defined deliverables",
      "Deployment-ready handoff included",
    ],
    offers: [
      {
        id: "microsite-7-page",
        name: "7 Page Lead Engine™",
        priceLabel: "$2,500",
        description: "Focused microsite deployment for lead generation.",
        stripePriceEnv: "STRIPE_PRICE_MICROSITE_7",
        mode: "payment",
      },
    ],
    faq: [
      {
        question: "Do I own the microsite assets?",
        answer:
          "Yes. Final delivered assets and deployable structure are transferred at completion.",
      },
      {
        question: "Can this be used with my main domain?",
        answer:
          "It can support either a dedicated domain strategy or a subdomain strategy based on campaign goals.",
      },
      {
        question: "Does this include monthly SEO support?",
        answer: "No. This product is a one-time deployment framework.",
      },
    ],
  },
  {
    id: "roofing-authority-microsite-50-page-cluster-site",
    silo: "microsites",
    slug: "roofing-authority-microsite-50-page-cluster-site",
    name: "Roofing Authority Microsite – 50 Page Cluster Site™",
    categoryTitle: "Microsites",
    summary:
      "A comprehensive topical cluster build positioned as long-term search real estate for roofing brands.",
    positioning:
      "This is a search real estate asset engineered for market depth, entity reinforcement, and long-tail demand capture.",
    whatIncluded: [
      "City cluster pages",
      "Service cluster pages",
      "FAQ clusters",
      "Insurance + storm pages",
      "Long-tail buyer pages",
      "Structured data",
      "Internal linking architecture",
      "Fully deployed SEO framework",
    ],
    whoFor: [
      "Roofing companies targeting regional authority across multiple city-service combinations",
      "Teams investing in long-term organic acquisition infrastructure",
      "Operators building defensible search coverage versus local competitors",
    ],
    whatNot: [
      "Not a basic brochure website",
      "Not ad-only campaign support",
      "Not ongoing managed SEO",
    ],
    problem:
      "Single-page service strategies leave major long-tail demand uncaptured and make it hard to compete in dense metro markets.",
    whyItMatters:
      "Cluster architecture expands topical relevance, improves crawl efficiency through planned internal links, and increases qualified entry points from search.",
    deliveryWorkflow: [
      "Market cluster planning for city, service, FAQ, insurance, and storm layers",
      "Page taxonomy and internal-link architecture mapping",
      "Content system deployment with schema and long-tail intent targeting",
      "Technical publishing QA and cluster-level crawl validation",
      "Launch documentation and expansion roadmap handoff",
    ],
    requiredInputs: [
      "Primary and secondary markets with service priorities",
      "Insurance/storm positioning rules and legal-safe phrasing",
      "Brand assets, proof points, and trust elements",
      "Tracking framework for form, call, and appointment events",
    ],
    qualityControls: [
      "Duplicate-topic and cannibalization prevention during cluster build",
      "Entity and service consistency checks across all page groups",
      "Internal-link distribution audit to protect crawl budget efficiency",
      "Structured-data validation at scale before full launch",
    ],
    signalWindows: [
      {
        window: "Month 1",
        expectation: "Large-scale indexation and crawl-priority stabilization.",
      },
      {
        window: "Months 2-4",
        expectation:
          "Long-tail query growth and stronger topical authority signals across service clusters.",
      },
      {
        window: "Months 4-8",
        expectation:
          "Compounding entry-page traffic and improved ranking resilience in competitive cities.",
      },
    ],
    disclaimers: [
      "One-time build and deployment.",
      "No ranking guarantees or traffic guarantees.",
      "Build timeline depends on data inputs and publishing stack readiness.",
    ],
    ctaLabel: "Start 50 Page Build",
    ctaSupport:
      "Lock in cluster-site production and launch your search real-estate asset build.",
    ctaTrustPoints: [
      "Secure Stripe payment processing",
      "Structured 50-page deployment framework",
      "One-time build with implementation handoff",
    ],
    offers: [
      {
        id: "microsite-50-page",
        name: "50 Page Cluster Site™",
        priceLabel: "$6,000",
        description: "Search real estate deployment for authority-scale growth.",
        stripePriceEnv: "STRIPE_PRICE_MICROSITE_50",
        mode: "payment",
      },
    ],
    faq: [
      {
        question: "How is the 50-page structure organized?",
        answer:
          "The framework combines city, service, FAQ, insurance, and storm content layers with controlled internal linking paths.",
      },
      {
        question: "Is this overkill for one location?",
        answer:
          "For single-location campaigns, the 7-page lead engine is usually the better fit unless expansion is immediate.",
      },
      {
        question: "Can this integrate with existing analytics?",
        answer:
          "Yes. Tracking tags and event measurement can be integrated during deployment.",
      },
    ],
  },
];

export function getProductBySiloAndSlug(silo: string, slug: string) {
  return products.find((product) => product.silo === silo && product.slug === slug);
}

export function getProductsBySilo(silo: ProductSilo) {
  return products.filter((product) => product.silo === silo);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
