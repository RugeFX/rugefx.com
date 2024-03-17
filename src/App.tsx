import { motion, useScroll } from "framer-motion";
import { useMouse } from "@uidotdev/usehooks";

import Header from "./components/layout/header";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import ProjectsSection from "./components/sections/projects-section";
import Footer from "./components/layout/footer";

export default function App() {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 z-30 h-1 w-full origin-left bg-gradient-to-r from-purple-900 to-primary transition-transform ease-out"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-10 flex size-[150px] items-center justify-center rounded-full blur-[120px] transition-all duration-500 ease-out md:size-[300px] md:blur-[200px]"
        style={{
          background: "linear-gradient(hsl(var(--primary)) 60%, rgb(7 56 202))",
          translate: `calc(${mouse.elementX}px - 50%) calc(${mouse.elementY}px - 50%) 0`,
        }}
      />
      <div className="fixed left-0 top-0 hidden h-full w-full" ref={ref} />

      <Header />
      <main className="-mt-32 mb-12 grid gap-20 bg-gradient-to-b from-primary/50 to-transparent to-[25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, bounce: false }}
          className="absolute top-0 z-[-1] h-full w-full animate-pulse bg-transparent"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary)) 1.6500000000000001px, transparent 1.6500000000000001px), radial-gradient(hsl(var(--primary)) 1.6500000000000001px, transparent 1.6500000000000001px)",
            backgroundSize: "66px 66px",
            backgroundPosition: "0 0,33px 33px",
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1))",
          }}
        />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
