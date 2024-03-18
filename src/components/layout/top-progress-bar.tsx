import { motion, useScroll } from "framer-motion";

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 z-30 h-1 w-full origin-left bg-gradient-to-r from-purple-900 to-primary transition-transform ease-out"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
