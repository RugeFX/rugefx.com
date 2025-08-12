import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { FileSpreadsheetIcon, MailIcon, ArrowDownIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="container flex flex-col justify-center items-center mx-auto w-full h-full min-h-screen"
      id="hero"
    >
      <div className="flex relative flex-col items-center text-center lg:items-start lg:text-left">
        <motion.div
          className="inline-flex gap-2 items-center px-4 py-2 mb-6 text-sm font-medium rounded-full border border-primary/20 bg-primary/10 text-primary backdrop-blur-xs"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="flex relative w-2 h-2">
            <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
            <span className="inline-flex relative w-2 h-2 rounded-full bg-primary"></span>
          </span>
          Available for work
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight font-display sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text via-purple-500 from-primary to-primary bg-linear-to-r">
            Ahmad Zacky
          </span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          A passionate{" "}
          <span className="font-semibold text-foreground">
            Full-Stack Developer
          </span>{" "}
          crafting beautiful, performant web experiences with modern
          technologies
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 mb-12 sm:flex-row"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.a
            className={cn(
              buttonVariants({ size: "lg" }),
              "group bg-primary shadow-primary/25 hover:shadow-primary/30 relative overflow-hidden px-8 text-base font-medium shadow-lg transition-all hover:shadow-xl",
            )}
            href="mailto:zackfxg@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex relative z-10 gap-2 items-center">
              <MailIcon className="size-5" />
              Get in touch
            </span>
            <span className="absolute inset-0 via-purple-600 opacity-0 transition-opacity duration-300 from-primary to-primary -z-10 bg-linear-to-br group-hover:opacity-100" />
          </motion.a>

          <motion.a
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hover:bg-accent hover:border-primary border-2 px-8 text-base font-medium transition-all",
            )}
            href="https://drive.google.com/file/d/1QNonavyjtoDYCT5y-DEqN2DLHcvlXIPi/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileSpreadsheetIcon className="size-5" />
            View Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.a
            className="p-3 rounded-full transition-colors group bg-accent hover:bg-primary hover:text-primary-foreground"
            href="https://github.com/RugeFX"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Github Profile"
          >
            <svg
              className="transition-transform fill-current size-6 group-hover:scale-110"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </motion.a>

          <motion.a
            className="p-3 rounded-full transition-colors group bg-accent hover:bg-primary hover:text-primary-foreground"
            href="https://linkedin.com/in/rugefx"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
          >
            <svg
              className="transition-transform fill-current size-6 group-hover:scale-110"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ArrowDownIcon className="size-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
