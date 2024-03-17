import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import ThemeToggler from "../theme/theme-toggler";
import { ReactNode, useEffect } from "react";
import useActiveSectionListener from "@/hooks/use-active-section";

const sections = [
  { label: "Home", href: "hero" },
  { label: "About Me", href: "about" },
] as const;

export default function Header() {
  const [scroll] = useWindowScroll();
  const [activeSection] = useActiveSectionListener("hero");

  // TODO: remove when done dev
  useEffect(() => {
    console.log("active", activeSection);
  }, [activeSection]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-20 h-32 w-full bg-background/0 transition-[height,color,background-color] duration-300",
        {
          "h-20 border-b bg-background/50 bg-clip-padding backdrop-blur-sm backdrop-filter":
            scroll.y && scroll.y > 250,
        },
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ bounce: false, ease: "easeOut", duration: 1 }}
    >
      <div className="container mx-auto flex h-full w-full items-center justify-between text-sm md:text-base">
        <motion.h2
          className={cn(
            "cursor-grab select-none bg-transparent px-2 py-1 text-base font-bold text-foreground shadow-foreground drop-shadow transition-colors sm:text-xl",
            {
              "bg-primary text-primary-foreground": scroll.y && scroll.y > 250,
            },
          )}
          whileDrag={{ cursor: "grabbing" }}
          drag
          dragSnapToOrigin
          dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 13 }}
          whileTap={{
            scale: 0.5,
            transition: { bounce: false, ease: "easeOut", duration: 0.2 },
          }}
          transition={{ type: "spring", bounce: 0.8, duration: 1 }}
        >
          RugeFX
        </motion.h2>
        <div className="hidden items-center gap-10 md:flex">
          {sections.map(({ href, label }) => (
            <HeaderLink
              key={href}
              href={`#${href}`}
              isActive={activeSection !== "hero" && activeSection === href}
            >
              {label}
            </HeaderLink>
          ))}
          <ThemeToggler
            variant="ghost"
            className="bg-transparent ring-0 ring-primary hover:bg-primary-foreground/20 hover:ring-2"
          />
        </div>
      </div>
    </motion.header>
  );
}

interface HeaderLinkProps {
  href: string;
  isActive?: boolean;
  children: ReactNode;
}

function HeaderLink({ href, isActive = false, children }: HeaderLinkProps) {
  return (
    <a
      href={href}
      className={cn("font-semibold transition-colors hover:text-primary", {
        "text-primary": isActive,
      })}
    >
      {children}
    </a>
  );
}
