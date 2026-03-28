import * as React from "react";
import { cn } from "@/lib/utils/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none transition placeholder:text-brand-dark/40 focus:border-brand-accent",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
