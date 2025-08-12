import { useMemo, useRef, useState } from "react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { LinkIcon, Star } from "lucide-react";
import SectionHeading from "../layout/section-heading";
import { Button, buttonVariants } from "../ui/button";

import { type Project, projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTech, setActiveTech] = useState<string | "All">("All");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const allTechnologies = useMemo(() => {
    const labels = projects.flatMap((p) => p.technologies).map((l) => l.label);
    return ["All", ...new Set(labels)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTech === "All") return projects;

    return projects.filter((p) =>
      p.technologies.some((t) => t.label === activeTech),
    );
  }, [activeTech]);

  const featuredProject =
    activeTech === "All"
      ? filteredProjects[0]
      : filteredProjects.find((p) => p.featured?.includes(activeTech));

  const otherProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <section id="projects" className="container mx-auto space-y-10">
      <SectionHeading title="Featured Projects" />

      {/* Tech filter pills */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center items-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {allTechnologies.map((label) => (
          <Button
            key={label}
            variant={activeTech === label ? "default" : "outline"}
            onClick={() => setActiveTech(label)}
            className="rounded-full border px-4 py-1.5 text-sm transition-colors"
          >
            {label}
          </Button>
        ))}
      </motion.div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "grid gap-8",
          featuredProject ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        <AnimatePresence mode="popLayout">
          {featuredProject && (
            <motion.div
              key={featuredProject.title}
              variants={itemVariants}
              className="lg:col-span-3"
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <FeaturedProjectCard project={featuredProject} />
            </motion.div>
          )}
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
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
      className="overflow-hidden relative h-full rounded-2xl group bg-card shadow-xs hover:shadow-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut", type: "tween" }}
    >
      <div className="overflow-hidden relative aspect-video">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 from-background/80 via-background/20 bg-linear-to-t group-hover:opacity-100" />

        <div className="flex absolute right-4 bottom-4 left-4 gap-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
          {project.siteUrl && (
            <motion.a
              href={project.siteUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-primary/90 hover:bg-primary gap-2 rounded-full backdrop-blur-xs",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkIcon className="size-4" />
              Live Site
            </motion.a>
          )}
          {project.repositoryUrl && (
            <motion.a
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-background/50 bg-background/20 hover:bg-background/30 gap-2 rounded-full backdrop-blur-xs",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGithub className="fill-current size-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold font-display">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tooltip key={tech.label}>
              <TooltipTrigger className="flex justify-center items-center w-8 h-8 rounded-full transition-all bg-accent hover:bg-primary hover:text-primary-foreground">
                <tech.icon className="fill-current size-4" />
              </TooltipTrigger>
              <TooltipContent>{tech.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="overflow-hidden relative rounded-3xl shadow-md bg-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid relative gap-0 lg:grid-cols-2">
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 via-transparent to-transparent from-background/70 bg-linear-to-t" />
          <div className="inline-flex absolute top-4 left-4 gap-2 items-center px-3 py-1 text-xs font-medium rounded-full shadow-sm bg-primary text-primary-foreground">
            <Star className="size-3.5" /> Featured
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <h3 className="mb-3 text-2xl font-semibold font-display sm:text-3xl">
            {project.title}
          </h3>
          <p className="mb-6 max-w-prose text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex gap-2 items-center px-3 py-1 text-xs rounded-full border text-muted-foreground"
              >
                <tech.icon className="fill-foreground size-3.5" />
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
                  "gap-2 rounded-full",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkIcon className="size-4" /> Live Site
              </motion.a>
            )}
            {project.repositoryUrl && (
              <motion.a
                href={project.repositoryUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 rounded-full",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="fill-current size-4" /> Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
