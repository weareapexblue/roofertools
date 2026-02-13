import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">Page Not Found</h1>
      <p className="text-sm leading-7 text-[var(--muted)]">
        The requested page does not exist. Continue to the main product catalog.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
