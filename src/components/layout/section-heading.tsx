import { useRef } from "react";
import { motion, useInView } from "motion/react";

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
        className="font-display text-center text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-foreground">{title}</span>
      </motion.h2>
      <motion.div
        className="via-primary mx-auto mt-4 h-1 w-20 bg-linear-to-r from-transparent to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}
