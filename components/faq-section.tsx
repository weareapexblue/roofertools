type FaqSectionProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 id="faq-heading" className="text-xl font-semibold tracking-tight text-[var(--text)]">
        FAQ
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--text)]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
