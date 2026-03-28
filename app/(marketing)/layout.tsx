import type { ReactNode } from "react";
import { ConsentBanner } from "@/components/blocks/consent-banner";
import { SiteFooter } from "@/components/blocks/site-footer";
import { SiteHeader } from "@/components/blocks/site-header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <ConsentBanner />
    </>
  );
}
