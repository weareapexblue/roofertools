import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roofermarketingtools.com"),
  title: {
    default: `${SITE_NAME} | Roofing Marketing Tools`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Digital growth infrastructure for roofing companies: backlinks, press release distribution, local SEO, and SEO microsite assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('rmt-theme');
    const resolved = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = resolved;
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();`,
          }}
        />
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
