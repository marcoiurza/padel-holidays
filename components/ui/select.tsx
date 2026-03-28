import * as React from "react";
import { cn } from "@/lib/utils/cn";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none transition focus:border-brand-accent",
      className
    )}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";
