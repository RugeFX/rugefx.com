import { useMemo, useRef, useState } from "react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { LinkIcon, Star } from "lucide-react";
import SectionHeading from "../layout/section-heading";
import { Button, buttonVariants } from "../ui/button";

import { type Project, projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projectCategories = ["All", "Mobile", "Web Apps", "Websites"] as const;

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<
    Project["category"] | "All"
  >("All");

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

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = filteredProjects[0];

  const otherProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <section
      id="projects"
      className="container mx-auto scroll-mt-28 space-y-10"
    >
      <SectionHeading title="Featured Projects" />

      {/* Project category filters */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full border px-4 py-1.5 text-sm transition-colors"
          >
            {category}
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
        className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3")}
      >
        <AnimatePresence mode="popLayout">
          {featuredProject && (
            <motion.div
              key={featuredProject.title}
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-3"
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
          <div className="text-muted-foreground col-span-full text-center">
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
            className="text-primary font-medium underline-offset-4 hover:underline"
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

function ProjectVisual({
  project,
  featured = false,
}: ProjectCardProps & { featured?: boolean }) {
  if (project.imageSrc) {
    return (
      <img
        src={project.imageSrc}
        alt={project.title}
        className={cn(
          "h-full w-full",
          project.imageFit === "contain"
            ? "bg-[#6691e2] object-contain"
            : "object-cover",
          !featured &&
            "transition-transform duration-500 group-hover:scale-110",
        )}
      />
    );
  }

  const initials = project.title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="from-primary/25 via-primary/10 flex h-full w-full items-center justify-center bg-linear-to-br to-purple-500/25 p-8">
      <div className="space-y-4 text-center">
        <div className="bg-background/80 text-primary mx-auto flex size-24 items-center justify-center rounded-3xl border text-3xl font-bold shadow-lg backdrop-blur-sm">
          {initials}
        </div>
        <p className="text-muted-foreground text-sm font-medium">
          Mobile commerce · Google Play
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-card relative h-full overflow-hidden rounded-2xl shadow-xs hover:shadow-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut", type: "tween" }}
    >
      <div className="relative aspect-video overflow-hidden">
        <ProjectVisual project={project} />
        <div className="from-background/80 via-background/20 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-4 bottom-4 left-4 flex translate-y-4 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
              {project.siteLinkLabel ?? "Live Site"}
            </motion.a>
          )}
          {project.additionalLinks?.map((link) => (
            <motion.a
              key={link.url}
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-background/50 bg-background/20 hover:bg-background/30 gap-2 rounded-full backdrop-blur-xs",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkIcon className="size-4" />
              {link.label}
            </motion.a>
          ))}
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
              <SiGithub className="size-4 fill-current" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display mb-2 text-xl font-semibold">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tooltip key={tech.label}>
              <TooltipTrigger className="bg-accent hover:bg-primary hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full transition-all">
                <tech.icon className="size-4 fill-current" />
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
      className="bg-card relative overflow-hidden rounded-3xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
          <ProjectVisual project={project} featured />
          <div className="from-background/70 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
          <div className="bg-primary text-primary-foreground absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
            <Star className="size-3.5" /> Featured
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <h3 className="font-display mb-3 text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-prose">
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.label}
                className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
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
                <LinkIcon className="size-4" />
                {project.siteLinkLabel ?? "Live Site"}
              </motion.a>
            )}
            {project.additionalLinks?.map((link) => (
              <motion.a
                key={link.url}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 rounded-full",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkIcon className="size-4" />
                {link.label}
              </motion.a>
            ))}
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
                <SiGithub className="size-4 fill-current" /> Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
