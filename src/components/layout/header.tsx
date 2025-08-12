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
      <div className="container flex justify-between items-center mx-auto h-20">
        <motion.a
          href="#hero"
          className={cn(
            "font-display relative rounded-full px-4 py-1 text-2xl font-bold tracking-tight transition-all duration-700 ease-in-out",
            scroll.y && scroll.y > 50 ? "bg-primary" : "bg-transparent",
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className={cn(
              "from-primary to-primary bg-linear-to-r via-purple-500 bg-clip-text transition-colors duration-700 ease-in-out",
              scroll.y && scroll.y > 50 ? "text-white" : "text-transparent",
            )}
          >
            RugeFX
          </span>
        </motion.a>

        <nav className="flex gap-8 items-center">
          <div className="hidden gap-8 items-center md:flex">
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
            className="w-10 h-10 rounded-full hover:bg-accent"
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
