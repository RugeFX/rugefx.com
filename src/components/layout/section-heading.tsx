import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <motion.h2
        ref={ref}
        className="text-center font-display text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-foreground">
          {title}
        </span>
      </motion.h2>
      <motion.div
        className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}
