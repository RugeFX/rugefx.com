import { motion, useScroll, useTransform } from "framer-motion";

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-purple-500 to-primary shadow-lg shadow-primary/50"
      style={{ scaleX: scrollYProgress, opacity }}
    />
  );
}
