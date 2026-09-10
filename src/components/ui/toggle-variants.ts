import { cva } from "class-variance-authority";

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-full border border-transparent text-sm font-medium whitespace-nowrap outline-none transition-[transform,color,background-color,border-color,box-shadow] [transition-duration:220ms,160ms,160ms,160ms,160ms] [transition-timing-function:linear(0,0.72_38%,1.06_68%,0.99_86%,1),ease-out,ease-out,ease-out,ease-out] data-pressed:scale-[0.97] data-pressed:[transition-duration:90ms] data-pressed:ease-out data-hovered:bg-muted data-hovered:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-selected:bg-accent data-selected:text-accent-foreground motion-reduce:transform-none motion-reduce:duration-150 motion-reduce:ease-out [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent data-hovered:bg-muted",
      },
      size: {
        default:
          "h-9 min-w-9 px-3.5 text-[13px] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export { toggleVariants };
