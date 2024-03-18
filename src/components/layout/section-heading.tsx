import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "../ui/separator";

interface SectionHeadingProps {
  title: string;
}

const MotionSeparator = motion(Separator);

export default function SectionHeading({ title }: SectionHeadingProps) {
  const separatorRef = useRef<HTMLDivElement>(null);
  const inView = useInView(separatorRef, { once: true });

  return (
    <div className="relative flex items-center gap-8 overflow-x-hidden">
      <motion.h2
        className="w-max shrink-0 origin-bottom cursor-grab overflow-hidden bg-primary px-2 text-xl font-semibold text-primary-foreground sm:text-3xl md:text-4xl"
        initial={{ x: "200%", opacity: 0 }}
        animate={
          inView && {
            x: 0,
            opacity: 1,
          }
        }
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 1,
          delay: 0.2,
        }}
        drag="x"
        dragConstraints={separatorRef}
        dragTransition={{ bounceDamping: 9, bounceStiffness: 200 }}
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
      >
        {title}
      </motion.h2>
      <MotionSeparator
        ref={separatorRef}
        initial={{ scaleX: 0.1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ bounce: false, ease: "easeOut", duration: 1 }}
        className="absolute z-[-1] h-[3px] shrink origin-left bg-foreground/50"
      />
    </div>
  );
}
