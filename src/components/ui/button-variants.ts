import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none transition-[transform,color,background-color,border-color,box-shadow] [transition-duration:220ms,160ms,160ms,160ms,160ms] [transition-timing-function:linear(0,0.72_38%,1.06_68%,0.99_86%,1),ease-out,ease-out,ease-out,ease-out] active:scale-[0.97] active:[transition-duration:90ms] active:ease-out data-pressed:scale-[0.97] data-pressed:[transition-duration:90ms] data-pressed:ease-out focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_[data-icon=inline-end]]:transition-transform [&_[data-icon=inline-end]]:duration-[160ms] [&_[data-icon=inline-end]]:ease-out group-hover/button:[&_[data-icon=inline-end]]:translate-x-[3px] data-hovered:[&_[data-icon=inline-end]]:translate-x-[3px] group-hover/button:[&_[data-direction=diagonal]]:-translate-y-[3px] data-hovered:[&_[data-direction=diagonal]]:-translate-y-[3px] motion-reduce:transform-none motion-reduce:duration-150 motion-reduce:ease-out motion-reduce:[&_[data-icon]]:transform-none motion-reduce:[&_[data-icon]]:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 data-hovered:bg-primary/90",
        outline:
          "border-border bg-background text-foreground hover:bg-muted data-hovered:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent data-hovered:bg-accent aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "text-foreground hover:bg-muted hover:text-foreground data-hovered:bg-muted data-hovered:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        inverse:
          "border-primary-foreground bg-primary-foreground text-foreground hover:bg-primary-foreground/90 data-hovered:bg-primary-foreground/90",
        "inverse-outline":
          "border-primary-foreground/55 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 data-hovered:border-primary-foreground data-hovered:bg-primary-foreground/10",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 data-hovered:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline data-hovered:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-[0.8rem] in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-[54px] gap-3 px-6 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-10",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export { buttonVariants };
