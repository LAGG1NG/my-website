import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getSiteConfig } from "@/lib/content";
import "./globals.css";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: {
    default: site.siteName,
    template: site.titleTemplate,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language} suppressHydrationWarning>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased transition-colors dark:bg-neutral-950 dark:text-stone-100">
        <div className="flex min-h-screen flex-col">
          <SiteHeader site={site} />
          <main className="flex-1 py-8 sm:py-12">
            <Container>{children}</Container>
          </main>
          <SiteFooter site={site} />
        </div>
      </body>
    </html>
  );
}
