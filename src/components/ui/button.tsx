import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-[color,background-color,stroke,opacity,box-shadow]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        plain: "bg-background hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonMotionProps: HTMLMotionProps<"button"> = {
  initial: { scale: 1 },
  whileTap: { scale: 0.9 },
};

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...buttonMotionProps}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, buttonMotionProps };
