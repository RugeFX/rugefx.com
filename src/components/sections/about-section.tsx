import { motion } from "motion/react";
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
          <div className="bg-card space-y-4 rounded-2xl p-6 shadow-xs">
            <h3 className="font-display text-primary text-2xl font-semibold">
              Journey Begins
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My coding story started in high school when I discovered{" "}
              <span className="text-foreground font-medium">PHP</span> and{" "}
              <a
                href="https://laravel.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                Laravel
              </a>
              . Building projects with{" "}
              <span className="text-foreground font-medium">MySQL</span> laid
              the foundation for my web development journey.
            </p>
          </div>

          <div className="bg-card space-y-4 rounded-2xl p-6 shadow-xs">
            <h3 className="font-display text-primary text-2xl font-semibold">
              Frontend Passion
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A{" "}
              <a
                href="https://youtube.com/playlist?list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&si=pX6sixXlbWHTW2AC"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                JavaScript course
              </a>{" "}
              changed everything. I fell in love with{" "}
              <span className="text-foreground font-medium">React</span> and{" "}
              <span className="text-foreground font-medium">TypeScript</span>,
              discovering the power of modern frontend development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="from-primary/10 space-y-4 rounded-2xl bg-linear-to-br via-transparent to-purple-500/10 p-6"
        >
          <h3 className="font-display text-2xl font-semibold">
            Full-Stack Evolution
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            My curiosity led me to explore the backend with{" "}
            <span className="text-foreground font-medium">Node.js</span>,{" "}
            <span className="text-foreground font-medium">Express</span>, and{" "}
            <span className="text-foreground font-medium">Go</span>. Working
            with <span className="text-foreground font-medium">PostgreSQL</span>{" "}
            and <span className="text-foreground font-medium">MongoDB</span>{" "}
            rounded out my full-stack skillset. Each new technology fuels my
            passion for creating exceptional web experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
