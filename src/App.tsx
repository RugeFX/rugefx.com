import { buttonVariants } from "./components/ui/button";
import ThemeToggler from "./components/theme/theme-toggler";
import { cn } from "./lib/utils";
import { motion, useScroll } from "framer-motion";
import { useMouse, useWindowScroll } from "@uidotdev/usehooks";
import { FileSpreadsheetIcon, MailIcon } from "lucide-react";

export default function App() {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const [scroll] = useWindowScroll();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 z-30 h-1 w-full origin-left bg-gradient-to-r from-purple-900 to-primary transition-transform ease-out"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-10 flex size-[150px] items-center justify-center rounded-full blur-[120px] transition-all duration-500 ease-out md:size-[300px] md:blur-[200px]"
        style={{
          background: "linear-gradient(hsl(var(--primary)) 60%, rgb(7 56 202))",
          translate: `calc(${mouse.elementX}px - 50%) calc(${mouse.elementY}px - 50%) 0`,
        }}
      />
      <div className="fixed left-0 top-0 hidden h-full w-full" ref={ref} />
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
                "bg-primary text-primary-foreground":
                  scroll.y && scroll.y > 250,
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
            <a
              href="#hero"
              className="font-semibold transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-semibold transition-colors hover:text-primary"
            >
              About Me
            </a>
            <ThemeToggler className="bg-transparent hover:border-primary hover:bg-primary-foreground/20" />
          </div>
        </div>
      </motion.header>
      <main className="-mt-32 grid gap-20 bg-gradient-to-b from-primary/50 to-transparent to-[25rem]">
        <div
          className="absolute top-0 z-[-1] h-full w-full animate-pulse bg-transparent"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary)) 1.6500000000000001px, transparent 1.6500000000000001px), radial-gradient(hsl(var(--primary)) 1.6500000000000001px, transparent 1.6500000000000001px)",
            backgroundSize: "66px 66px",
            backgroundPosition: "0 0,33px 33px",
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1))",
          }}
        />
        <section
          className="container mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center lg:items-start"
          id="hero"
        >
          <p className="text-lg font-semibold leading-none text-primary md:text-2xl">
            Hello World!
          </p>
          <motion.h1
            className="text-nowrap text-4xl font-bold leading-none after:hidden after:text-base after:font-medium after:content-['a.k.a._RugeFX'] sm:text-6xl md:text-center md:text-7xl md:after:inline"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ bounce: false, ease: "easeOut", duration: 1 }}
          >
            I'm <span className="text-primary">Ahmad Zacky</span>
          </motion.h1>
          <motion.h2
            className="mt-2 w-max bg-primary px-2 text-lg font-light text-primary-foreground sm:text-2xl md:text-3xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              bounce: false,
              ease: "easeOut",
              duration: 0.5,
            }}
          >
            A <span className="font-medium">Full-stack</span> Web Developer
          </motion.h2>
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              bounce: false,
              ease: "easeOut",
              duration: 0.5,
            }}
          >
            <motion.a
              className={cn(
                buttonVariants({
                  variant: "plain",
                }),
                "group relative h-12 overflow-hidden p-[2px]",
              )}
              href="mailto:zackfxg@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,#393BB2_50%,hsl(var(--background))_100%)] transition-opacity group-hover:opacity-60" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 bg-background px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
                <MailIcon className="size-5" />
                Contact me
              </span>
            </motion.a>
            <motion.a
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2 border-2 border-foreground px-3",
              )}
              href="https://github.com/RugeFX"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
            >
              <FileSpreadsheetIcon className="size-5" />
              My Resume
            </motion.a>
            <motion.a
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "size-12 border-2 border-foreground",
              )}
              href="https://github.com/RugeFX"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              aria-label="Github Profile"
            >
              <svg
                className="size-7 fill-foreground"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </motion.a>
            <motion.a
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "size-12 border-2 border-foreground",
              )}
              href="https://linkedin.com/in/rugefx"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <svg
                className="size-7 fill-foreground"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </motion.div>
        </section>
        <section id="about" className="h-screen"></section>
      </main>
    </>
  );
}
