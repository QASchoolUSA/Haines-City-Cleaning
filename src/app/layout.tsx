import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ReviewJsonLd from "@/components/ReviewJsonLd";
import { absoluteUrl, siteName } from "@/lib/site";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hainescitycleaning.com"),
  applicationName: siteName,
  title: {
    default: "Haines City Cleaning | Professional House & Commercial Cleaning Services in FL",
    template: "%s | Haines City Cleaning",
  },
  description:
    "Top-rated cleaning services in Haines City, FL. Residential house cleaning, commercial office cleaning, move-out/move-in cleans, and post-construction cleanup. Reliable, local, and professional.",
  keywords: [
    "haines city cleaning",
    "house cleaning in haines city fl",
    "residential cleaning in haines city fl",
    "commercial cleaning in haines city fl",
    "post construction cleaning in haines city fl",
    "move out cleaning in haines city fl",
    "cleaning services polk county",
    "maid service haines city",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName,
    title: "Haines City Cleaning | Professional Cleaning Services",
    description: "Expert residential and commercial cleaning in Haines City, FL. Book your trusted local cleaners today.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Haines City Cleaning — Professional cleaning services in Haines City, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haines City Cleaning | Professional Cleaning Services",
    description: "Expert residential and commercial cleaning in Haines City, FL.",
    images: ["/og/default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <JsonLd />
        <ReviewJsonLd />
        <Header />
        {children}
        <Footer />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
