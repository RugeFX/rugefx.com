import { motion } from "motion/react";
import SectionHeading from "../layout/section-heading";

const skillGroups = [
  {
    label: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Go",
      "Python",
      "Java",
      "C#",
      "Rust",
      "C++",
    ],
  },
  {
    label: "Frameworks & libraries",
    items: [
      "React",
      "React Native",
      "Expo",
      "Laravel",
      "Next.js",
      "Node.js",
      "Hapi",
      "Fastify",
      "NestJS",
      "Hono",
      "Tailwind CSS",
      "Gin",
      "Fiber",
      "Axum",
    ],
  },
  {
    label: "Platforms & tools",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "MQTT",
      "Figma",
      "Vercel",
      "AWS",
      "Fly.io",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto max-w-4xl scroll-mt-28 space-y-12"
    >
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
              Engineering profile
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I build across the stack, from responsive React interfaces and
              React Native apps to Laravel and Node.js services. I enjoy turning
              operational requirements into dependable products with clear API
              contracts and maintainable systems.
            </p>
          </div>

          <div className="bg-card space-y-4 rounded-2xl p-6 shadow-xs">
            <h3 className="font-display text-primary text-2xl font-semibold">
              Education & leadership
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am pursuing a Bachelor&apos;s Degree in Computer Science at
              Cakrawala University. Alongside my studies, I serve as Deputy Head
              of Research and Technology in the Student Government Association
              and was selected for the university&apos;s Talent Scouting
              program.
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
            From interfaces to infrastructure
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            My recent work includes mobile commerce, IoT-connected weighing
            workflows, real-time MQTT integrations, SAP and warehouse-system
            synchronization, CI pipelines, app-store releases, and Docker-based
            production deployments. That range lets me work comfortably from
            product UI through integration and delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-card space-y-6 rounded-2xl p-6 shadow-xs"
        >
          <h3 className="font-display text-2xl font-semibold">
            Selected skills
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="space-y-3">
                <h4 className="text-primary text-sm font-semibold">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
