import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.8rem] leading-none whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-night-2 text-fog/85",
        quiet: "border-transparent bg-night-3/70 text-mist",
        live: "border-pulse/30 bg-pulse/10 text-pulse",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
);
