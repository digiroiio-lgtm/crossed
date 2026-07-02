import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crossedapp.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crossed — Where paths cross again",
    template: "%s | Crossed",
  },
  description:
    "Save meaningful encounters, create private memories, and reconnect when the time feels right. Crossed is a privacy-first app for travelers, nomads, events and real-life connections.",
  keywords: [
    "travel friends",
    "meet people",
    "digital nomad app",
    "networking app",
    "travel memories",
    "private social app",
    "event networking",
    "reconnect app",
    "encounter memory app",
  ],
  openGraph: {
    title: "Crossed — Where paths cross again",
    description:
      "Save meaningful encounters, create private memories, and reconnect when the time feels right.",
    url: siteUrl,
    siteName: "Crossed",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crossed — Where paths cross again",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crossed — Where paths cross again",
    description:
      "Save meaningful encounters and reconnect when the time feels right.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
