import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyMobileCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-dark/10 bg-brand-light/95 p-4 backdrop-blur md:hidden">
      <Link href={href} className="block">
        <Button className="w-full">{label}</Button>
      </Link>
    </div>
  );
}
