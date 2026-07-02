import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "secondary" | "outline";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
      variant === "default" && "bg-primary/10 text-primary",
      variant === "secondary" && "bg-secondary text-secondary-foreground",
      variant === "outline" &&
        "border border-border text-muted-foreground",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
