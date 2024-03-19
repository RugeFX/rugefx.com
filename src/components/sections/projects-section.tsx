import { useRef, useState } from "react";
import { type Variants, motion, useInView } from "framer-motion";
import { LinkIcon } from "lucide-react";
import SectionHeading from "../layout/section-heading";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { buttonVariants } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Github } from "@/lib/icons";

import { type Project, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const MotionCarouselContent = motion(CarouselContent);
const MotionCarouselItem = motion(CarouselItem);

export default function ProjectsSection() {
  const carouselRef = useRef<HTMLElement>(null);
  const carouselInView = useInView(carouselRef, { once: true });

  const carouselVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="projects"
      className="container mx-auto h-full w-full space-y-8"
    >
      <SectionHeading title="Projects" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto w-full max-w-xs md:max-w-2xl lg:max-w-full"
        orientation="horizontal"
      >
        <MotionCarouselContent
          ref={carouselRef}
          variants={carouselVariants}
          initial="hidden"
          animate={carouselInView ? "show" : "hidden"}
        >
          {projects.map((project) => (
            <MotionCarouselItem
              key={project.title}
              variants={itemVariants}
              className="h-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div>
                <ProjectCard project={project} />
              </div>
            </MotionCarouselItem>
          ))}
        </MotionCarouselContent>
        <CarouselPrevious
          variant="plain"
          className="h-12 bg-background/50 bg-clip-padding ring-primary backdrop-filter hover:bg-primary-foreground/20 hover:ring-2"
        />
        <CarouselNext
          variant="plain"
          className="h-12 bg-background/50 bg-clip-padding ring-primary backdrop-filter hover:bg-primary-foreground/20 hover:ring-2"
        />
      </Carousel>
      <p className="font-light">
        See other (mostly unfinished) projects on my{" "}
        <a
          href="https://github.com/RugeFX"
          rel="noopener noreferrer"
          target="_blank"
          className="text-nowrap font-semibold text-foreground underline transition-colors hover:text-primary"
        >
          Github
        </a>
      </p>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const actionButtonsVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
    },
  };

  return (
    <Card
      className="group aspect-square h-full transition-colors hover:border hover:border-primary"
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="relative h-1/2 w-full space-y-0 overflow-hidden p-0">
        <div className="absolute grid h-full w-full content-center justify-center gap-2 bg-background/50 opacity-0 backdrop-blur-sm backdrop-filter transition-opacity group-hover:opacity-100">
          {project.siteUrl !== null && (
            <motion.a
              href={project.siteUrl}
              rel="noopener noreferrer"
              target="_blank"
              variants={actionButtonsVariants}
              initial="hidden"
              animate={isHovering ? "show" : "hidden"}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "w-32 cursor-pointer gap-2 text-sm",
              )}
            >
              <LinkIcon className="size-3" />
              Live Site
            </motion.a>
          )}
          {project.repositoryUrl !== null && (
            <motion.a
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
              variants={actionButtonsVariants}
              initial="hidden"
              animate={isHovering ? "show" : "hidden"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "w-32 cursor-pointer gap-2 text-sm",
              )}
            >
              <Github className="size-3 fill-foreground" />
              Repository
            </motion.a>
          )}
        </div>
        <img
          src={project.imageSrc}
          alt={project.title}
          className="h-full object-cover object-center"
        />
      </CardHeader>
      <CardContent className="space-y-1 border-t px-4 py-2">
        <h3 className="text-base font-medium md:text-lg xl:text-xl">
          {project.title}
        </h3>
        <p className="text-sm font-light sm:text-base">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 px-4 pb-2">
        <div className="flex h-9 items-center gap-2 border px-2 sm:h-12">
          {project.technologies.map((tech) => (
            <tech.icon
              key={tech.label}
              className="size-5 fill-foreground sm:size-7"
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
