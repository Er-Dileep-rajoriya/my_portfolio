import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageCopy } from "@/content/pages";
import { profile } from "@/content/profile";
import { indexingRobots } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  preload: false,
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

const homeTitle = `${profile.name} | Software Engineer & Full-Stack Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: homeTitle,
    template: `%s — ${profile.name}`,
  },
  description: pageCopy.home.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [...profile.knowsAbout, "freelance", "portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: profile.locale,
    siteName: profile.name,
    title: homeTitle,
    description: pageCopy.home.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: pageCopy.home.description,
  },
  robots: indexingRobots(),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${inter.variable} ${jetbrainsMono.variable} ${satoshi.variable} h-full antialiased`}
      lang="en"
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main className="flex-1 pt-16" id="content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
