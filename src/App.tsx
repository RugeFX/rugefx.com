import { motion } from "motion/react";

import Header from "./components/layout/header";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import ProjectsSection from "./components/sections/projects-section";
import Footer from "./components/layout/footer";
import TopProgressBar from "./components/layout/top-progress-bar";

export default function App() {
  return (
    <>
      <TopProgressBar />
      <div className="relative min-h-screen overflow-hidden">
        <motion.div
          className="pointer-events-none fixed inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        >
          <div className="bg-primary/20 absolute top-[20%] -left-[10%] h-160 w-160 rounded-full blur-[120px]" />
          <div className="absolute top-[60%] -right-[10%] h-140 w-140 rounded-full bg-purple-500/20 blur-[120px]" />
          <div className="bg-primary/10 absolute top-[10%] left-[50%] h-120 w-120 rounded-full blur-[100px]" />
        </motion.div>

        <Header />

        <main className="relative z-10">
          <HeroSection />
          <div className="space-y-32 py-32">
            <AboutSection />
            <ProjectsSection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
