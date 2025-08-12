import { motion } from "framer-motion";
import SectionHeading from "../layout/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-4xl space-y-12">
      <SectionHeading title="About Me" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="space-y-4 rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-primary">
              Journey Begins
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              My coding story started in high school when I discovered{" "}
              <span className="font-medium text-foreground">PHP</span> and{" "}
              <a
                href="https://laravel.com"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Laravel
              </a>
              . Building projects with{" "}
              <span className="font-medium text-foreground">MySQL</span> laid
              the foundation for my web development journey.
            </p>
          </div>
          
          <div className="space-y-4 rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-primary">
              Frontend Passion
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              A{" "}
              <a
                href="https://youtube.com/playlist?list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&si=pX6sixXlbWHTW2AC"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                JavaScript course
              </a>{" "}
              changed everything. I fell in love with{" "}
              <span className="font-medium text-foreground">React</span> and{" "}
              <span className="font-medium text-foreground">TypeScript</span>,
              discovering the power of modern frontend development.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="space-y-4 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 p-6"
        >
          <h3 className="font-display text-2xl font-semibold">
            Full-Stack Evolution
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            My curiosity led me to explore the backend with{" "}
            <span className="font-medium text-foreground">Node.js</span>,{" "}
            <span className="font-medium text-foreground">Express</span>, and{" "}
            <span className="font-medium text-foreground">Go</span>. Working
            with{" "}
            <span className="font-medium text-foreground">PostgreSQL</span> and{" "}
            <span className="font-medium text-foreground">MongoDB</span> rounded
            out my full-stack skillset. Each new technology fuels my passion for
            creating exceptional web experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
