import { motion } from "framer-motion";

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
          <div className="absolute -left-[10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -right-[10%] top-[60%] h-[35rem] w-[35rem] rounded-full bg-purple-500/20 blur-[120px]" />
          <div className="absolute left-[50%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[100px]" />
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
