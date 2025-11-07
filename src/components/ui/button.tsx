import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wide border-4 border-black hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--color-pink))] text-white shadow-[4px_4px_0_hsl(0_0%_0%)] hover:shadow-[2px_2px_0_hsl(0_0%_0%)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[4px_4px_0_hsl(0_0%_0%)] hover:shadow-[2px_2px_0_hsl(0_0%_0%)]",
        outline:
          "border-4 border-black bg-white hover:bg-[hsl(var(--color-yellow))] shadow-[4px_4px_0_hsl(0_0%_0%)] hover:shadow-[2px_2px_0_hsl(0_0%_0%)]",
        secondary:
          "bg-[hsl(var(--color-blue))] text-white shadow-[4px_4px_0_hsl(0_0%_0%)] hover:shadow-[2px_2px_0_hsl(0_0%_0%)]",
        ghost: "border-0 hover:bg-[hsl(var(--color-yellow))]/30 shadow-none",
        link: "border-0 text-foreground underline-offset-4 hover:underline shadow-none",
        playful: "bg-[hsl(var(--color-yellow))] text-black shadow-[5px_5px_0_hsl(340_100%_60%)] hover:shadow-[2px_2px_0_hsl(340_100%_60%)]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-sm",
        lg: "h-16 px-10 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
