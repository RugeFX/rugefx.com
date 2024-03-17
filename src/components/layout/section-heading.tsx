import { useRef } from "react";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";

interface SectionHeadingProps {
  title: string;
}

const MotionSeparator = motion(Separator);

export default function SectionHeading({ title }: SectionHeadingProps) {
  const separatorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex items-center gap-8">
      <motion.h2
        className="w-max shrink-0 cursor-grab bg-primary px-2 text-3xl font-semibold text-primary-foreground md:text-4xl "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          bounce: false,
          ease: "easeOut",
          duration: 1,
        }}
        drag="x"
        dragConstraints={separatorRef}
        whileDrag={{ cursor: "grabbing" }}
      >
        {title}
      </motion.h2>
      <MotionSeparator
        ref={separatorRef}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ bounce: false, ease: "easeInOut", duration: 1.5 }}
        className="absolute z-[-1] h-[3px] shrink origin-right bg-foreground/50"
      />
    </div>
  );
}
