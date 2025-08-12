import { useMemo, useRef, useState } from "react";
import { type Variants, motion, useInView } from "framer-motion";
import { LinkIcon, Star } from "lucide-react";
import SectionHeading from "../layout/section-heading";
import { buttonVariants } from "../ui/button";
import { Github } from "@/lib/icons";

import { type Project, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTech, setActiveTech] = useState<string | "all">("all");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const allTechnologies = useMemo(() => {
    const labels = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => labels.add(t.label)));
    return ["all", ...Array.from(labels).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTech === "all") return projects;
    return projects.filter((p) => p.technologies.some((t) => t.label === activeTech));
  }, [activeTech]);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <section id="projects" className="container mx-auto space-y-10">
      <SectionHeading title="Featured Projects" />

      {/* Tech filter pills */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {allTechnologies.map((label) => (
          <button
            key={label}
            onClick={() => setActiveTech(label as typeof activeTech)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              activeTech === label
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-accent hover:bg-accent/80"
            )}
          >
            {label}
          </button>
        ))}
      </motion.div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={cn(
          "grid gap-8",
          featuredProject ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {featuredProject && (
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <FeaturedProjectCard project={featuredProject} />
          </motion.div>
        )}
        {otherProjects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
        {!featuredProject && filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No projects match this filter.
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <p className="text-muted-foreground">
          Explore more projects on{" "}
          <a
            href="https://github.com/RugeFX"
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            my GitHub
          </a>
        </p>
      </motion.div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
          {project.siteUrl && (
            <motion.a
              href={project.siteUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ size: "sm" }),
                "gap-2 rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkIcon className="size-4" />
              Live Demo
            </motion.a>
          )}
          {project.repositoryUrl && (
            <motion.a
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-2 rounded-full border-background/50 bg-background/20 backdrop-blur-sm hover:bg-background/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="size-4 fill-current" />
              Code
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 font-display text-xl font-semibold">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <div
              key={tech.label}
              className="group/tech relative"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent transition-all hover:bg-primary hover:text-primary-foreground">
                <tech.icon className="size-4 fill-current" />
              </div>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover/tech:opacity-100">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-card shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow">
            <Star className="size-3.5" /> Featured
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <h3 className="mb-3 font-display text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mb-6 max-w-prose text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground"
              >
                <tech.icon className="size-3.5" />
                {tech.label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.siteUrl && (
              <motion.a
                href={project.siteUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "gap-2 rounded-full"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkIcon className="size-4" /> Live Demo
              </motion.a>
            )}
            {project.repositoryUrl && (
              <motion.a
                href={project.repositoryUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 rounded-full"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="size-4 fill-current" /> Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
