import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggler from "../theme/theme-toggler";
import { type ReactNode, useState } from "react";
import useActiveSectionListener from "@/hooks/use-active-section";

const sections = [
  { label: "About Me", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
] as const;

export default function Header() {
  const [scroll] = useWindowScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSectionListener("hero");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
            className={cn(
              "font-display relative rounded-full px-4 py-1 text-2xl font-bold tracking-tight transition-all duration-700 ease-in-out",
              scroll.y && scroll.y > 50 ? "bg-primary" : "bg-transparent",
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closeMobileMenu}
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

          <nav className="flex items-center gap-4">
            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <ThemeToggler
              variant="ghost"
              className="hover:bg-accent h-10 w-10 rounded-full"
            />
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 left-0 z-50 rounded-b-3xl backdrop-blur-xl md:hidden"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.5,
              }}
              style={{
                height: "50vh",
                background:
                  "linear-gradient(to bottom, hsl(var(--background) / 0.95) 0%, hsl(var(--background) / 0.8) 70%, transparent 100%)",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center space-y-8 pt-20">
                {sections.map(({ id, label }, index) => (
                  <motion.div
                    key={id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    <MobileHeaderLink
                      id={id}
                      isActive={
                        activeSection !== "hero" && activeSection === id
                      }
                      onClose={closeMobileMenu}
                    >
                      {label}
                    </MobileHeaderLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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

interface MobileHeaderLinkProps {
  id: string;
  isActive?: boolean;
  children: ReactNode;
  onClose: () => void;
}

function MobileHeaderLink({
  id,
  isActive = false,
  children,
  onClose,
}: MobileHeaderLinkProps) {
  const onClick = () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
    onClose();
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-6 py-3 text-2xl font-medium transition-colors",
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
          className="bg-primary absolute -bottom-1 left-0 h-1 w-full rounded-full"
          layoutId="activeMobileSection"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
}
