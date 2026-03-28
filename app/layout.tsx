import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { sharedSeo } from "@/lib/content/site-content";
import { siteConfig } from "@/config/site";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: sharedSeo.home.title,
  description: sharedSeo.home.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
