import { ContactIntakeForm } from "@/components/contact-intake-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact | Multi-Location Roofing SEO",
  description:
    "Submit a multi-location roofing SEO request with target cities, growth goals, and current footprint.",
  path: "/contact",
  keywords: ["multi-location roofing SEO", "roofing SEO expansion", "contact roofing SEO"],
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Contact Form
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            Aggressive Multi-Location SEO Intake
          </h1>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
            Use this form to submit expansion scope, target markets, and rollout priorities.
            This intake is optimized for roofing operators scaling across multiple cities.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <ContactIntakeForm />
      </section>
    </div>
  );
}
