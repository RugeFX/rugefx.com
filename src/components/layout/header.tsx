import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import ThemeToggler from "../theme/theme-toggler";
import { type ReactNode } from "react";
import useActiveSectionListener from "@/hooks/use-active-section";
import { Button } from "../ui/button";

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
          {sections.map(({ id, label }) => (
            <HeaderLink
              key={id}
              id={id}
              isActive={activeSection !== "hero" && activeSection === id}
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
    <Button
      variant={"plain"}
      onClick={onClick}
      className={cn(
        "bg-transparent p-0 font-semibold transition-colors hover:text-primary",
        {
          "text-primary": isActive,
        },
      )}
    >
      {children}
    </Button>
  );
}
