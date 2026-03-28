import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
  {
    variants: {
      variant: {
        neutral: "bg-brand-dark/6 text-brand-dark",
        accent: "bg-brand-accent/20 text-brand-dark",
        success: "bg-brand-success/15 text-brand-success",
        pending: "bg-status-pending/15 text-status-pending",
        cancelled: "bg-status-cancelled/15 text-status-cancelled"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className, variant }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
