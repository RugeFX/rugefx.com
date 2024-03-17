import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { FileSpreadsheetIcon, MailIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="container mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center border-b lg:items-start"
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
        className="mt-4 flex flex-col justify-center gap-2 sm:flex-row"
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
        <div className="flex justify-center gap-2 sm:justify-start">
          <motion.a
            className={cn(
              buttonVariants({
                variant: "plain",
              }),
              "group relative h-10 overflow-hidden p-[2px] sm:h-12",
            )}
            href="mailto:zackfxg@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,#393BB2_50%,hsl(var(--background))_100%)] transition-opacity group-hover:opacity-60" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 bg-background px-3 py-1 text-xs font-medium text-primary backdrop-blur-3xl sm:text-sm">
              <MailIcon className="size-5" />
              Contact me
            </span>
          </motion.a>
          <motion.a
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 gap-2 border-2 border-foreground px-3 text-xs sm:h-12 sm:text-sm",
            )}
            href="https://github.com/RugeFX"
            rel="noopener noreferrer"
            target="_blank"
            whileTap={{ scale: 0.9 }}
          >
            <FileSpreadsheetIcon className="size-5" />
            My Resume
          </motion.a>
        </div>
        <div className="flex justify-center gap-2 sm:justify-start">
          <motion.a
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "size-10 border-2 border-foreground sm:size-12",
            )}
            href="https://github.com/RugeFX"
            rel="noopener noreferrer"
            target="_blank"
            whileTap={{ scale: 0.9 }}
            aria-label="Github Profile"
          >
            <svg
              className="size-5 fill-foreground sm:size-7"
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
              "size-10 border-2 border-foreground sm:size-12",
            )}
            href="https://linkedin.com/in/rugefx"
            rel="noopener noreferrer"
            target="_blank"
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn Profile"
          >
            <svg
              className="size-5 fill-foreground sm:size-7"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
