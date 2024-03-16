import { Moon, Sun } from "lucide-react";
import { Button, type ButtonVariantProps } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-provider";
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeTogglerProps {
  variant?: ButtonVariantProps["variant"];
  className?: string;
}

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

export default function ThemeToggler({
  variant = "outline",
  className,
}: ThemeTogglerProps) {
  const { theme, toggleTheme } = useTheme();

  const moonVariants: Variants = {
    hidden: {
      scale: 0.25,
      rotate: "180deg",
      y: "-200%",
      transition: { ease: "circOut" },
    },
    show: {
      scale: 1,
      rotate: "0deg",
      y: 0,
      transition: { type: "spring", bounce: 0.5, duration: 1 },
    },
  };

  const sunVariants: Variants = {
    ...moonVariants,
    hidden: {
      ...moonVariants.hidden,
      y: "200%",
    },
  };

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={toggleTheme}
      className={cn("relative overflow-hidden", className)}
    >
      <MotionSun
        variants={sunVariants}
        initial="hidden"
        animate={theme === "light" ? "show" : "hidden"}
        className="h-[1.2rem] w-[1.2rem]"
      />
      <MotionMoon
        variants={moonVariants}
        initial="hidden"
        animate={theme === "dark" ? "show" : "hidden"}
        className="absolute h-[1.2rem] w-[1.2rem]"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
