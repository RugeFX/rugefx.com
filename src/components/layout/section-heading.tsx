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
        className="w-max shrink-0 origin-bottom cursor-grab overflow-hidden bg-primary px-2 text-3xl font-semibold text-primary-foreground md:text-4xl"
        initial={{ x: "200%", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1,
          delay: 0.2,
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
        transition={{ bounce: false, ease: "easeOut", duration: 1 }}
        className="absolute z-[-1] h-[3px] shrink origin-left bg-foreground/50"
      />
    </div>
  );
}
