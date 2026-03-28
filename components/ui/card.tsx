import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-brand-dark/10 bg-white/85 p-6 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
