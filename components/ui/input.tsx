import * as React from "react";
import { cn } from "@/lib/utils/cn";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none ring-0 transition placeholder:text-brand-dark/40 focus:border-brand-accent",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
