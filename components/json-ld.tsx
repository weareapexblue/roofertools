type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD requires raw JSON in script tags.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
