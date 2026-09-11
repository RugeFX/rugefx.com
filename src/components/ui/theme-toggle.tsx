import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const toggleSpring = {
  type: "spring" as const,
  duration: 0.42,
  bounce: 0.18,
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const isDark = theme === "dark";
  const positionTransition = shouldReduceMotion
    ? { duration: 0 }
    : toggleSpring;
  const iconTransition = shouldReduceMotion
    ? { duration: 0.15, ease: "easeOut" as const }
    : toggleSpring;

  return (
    <Toggle
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={cn(
        "border-portfolio-theme-toggle-border bg-portfolio-theme-toggle group/theme data-hovered:bg-portfolio-theme-toggle-hover data-selected:bg-portfolio-theme-toggle relative isolate h-11 w-[82px] overflow-hidden border p-1 shadow-sm",
        className,
      )}
      isSelected={isDark}
      onChange={(selected) => setTheme(selected ? "dark" : "light")}
    >
      <motion.span
        aria-hidden="true"
        className="bg-portfolio-theme-toggle-thumb absolute top-1 left-1 z-0 size-[34px] rounded-full shadow-sm"
        animate={{ x: isDark ? 38 : 0 }}
        initial={false}
        transition={positionTransition}
      />
      <span className="relative z-10 grid w-full grid-cols-2 place-items-center">
        <motion.span
          aria-hidden="true"
          className="grid size-[34px] place-items-center"
          animate={{
            opacity: isDark ? 0.5 : 1,
            rotate: shouldReduceMotion ? 0 : isDark ? -8 : 0,
            scale: shouldReduceMotion ? 1 : isDark ? 0.88 : 1,
          }}
          initial={false}
          transition={iconTransition}
        >
          <Sun
            className={cn(
              "size-[17px] transition-colors duration-150",
              isDark
                ? "text-portfolio-theme-toggle-icon-inactive"
                : "text-portfolio-theme-toggle-icon-active",
            )}
          />
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="grid size-[34px] place-items-center"
          animate={{
            opacity: isDark ? 1 : 0.5,
            rotate: shouldReduceMotion ? 0 : isDark ? 0 : 8,
            scale: shouldReduceMotion ? 1 : isDark ? 1 : 0.88,
          }}
          initial={false}
          transition={iconTransition}
        >
          <Moon
            className={cn(
              "size-[16px] transition-colors duration-150",
              isDark
                ? "text-portfolio-theme-toggle-icon-active"
                : "text-portfolio-theme-toggle-icon-inactive",
            )}
          />
        </motion.span>
      </span>
    </Toggle>
  );
}
