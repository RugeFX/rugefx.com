import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { motion } from "motion/react";
import ThemeToggler from "../theme/theme-toggler";
import { type ReactNode } from "react";
import useActiveSectionListener from "@/hooks/use-active-section";

const sections = [
  { label: "Home", id: "hero" },
  { label: "About Me", id: "about" },
  { label: "Projects", id: "projects" },
] as const;

export default function Header() {
  const [scroll] = useWindowScroll();
  const activeSection = useActiveSectionListener("hero");

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scroll.y && scroll.y > 50
          ? "bg-background/80 shadow-xs backdrop-blur-xl"
          : "bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <motion.a
          href="#hero"
          className="font-display relative text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="from-primary to-primary bg-linear-to-r via-purple-500 bg-clip-text text-transparent">
            RugeFX
          </span>
          <motion.span
            className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <nav className="flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {sections.map(({ id, label }) => (
              <HeaderLink
                key={id}
                id={id}
                isActive={activeSection !== "hero" && activeSection === id}
              >
                {label}
              </HeaderLink>
            ))}
          </div>

          <ThemeToggler
            variant="ghost"
            className="hover:bg-accent h-10 w-10 rounded-full"
          />
        </nav>
      </div>
    </motion.header>
  );
}

interface HeaderLinkProps {
  id: string;
  isActive?: boolean;
  children: ReactNode;
}

function HeaderLink({ id, isActive = false, children }: HeaderLinkProps) {
  const onClick = () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.span
          className="bg-primary absolute -bottom-px left-0 h-0.5 w-full"
          layoutId="activeSection"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
}
