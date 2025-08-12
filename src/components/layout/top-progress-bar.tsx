import { motion, useScroll, useTransform } from "motion/react";

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className="from-primary to-primary shadow-primary/50 fixed top-0 z-60 h-1 w-full origin-left bg-linear-to-r via-purple-500 shadow-lg"
      style={{ scaleX: scrollYProgress, opacity }}
    />
  );
}
