import { motion } from "framer-motion";

import Header from "./components/layout/header";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import ProjectsSection from "./components/sections/projects-section";
import Footer from "./components/layout/footer";
import BackgroundShine from "./components/layout/background-shine";
import TopProgressBar from "./components/layout/top-progress-bar";

export default function App() {
  return (
    <>
      {/* BG / Miscellaneous */}
      <TopProgressBar />
      <BackgroundShine />
      {/* Main content */}
      <Header />
      <main className="-mt-32 mb-20 grid gap-20 bg-gradient-to-b from-primary/50 to-transparent to-[25rem]">
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
