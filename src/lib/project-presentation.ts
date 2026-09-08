import { projects, type Project } from "@/lib/data";

interface ProjectPresentationDefinition {
  sourceTitle: string;
  title: string;
  summary: string;
  slug: string;
}

export interface PresentedProject
  extends Omit<ProjectPresentationDefinition, "sourceTitle"> {
  project: Project;
}

const projectPresentationDefinitions: ProjectPresentationDefinition[] = [
  {
    sourceTitle: "Qurban Asyik Mobile App",
    title: "Qurban Asyik",
    summary: "Mobile commerce, from browsing to checkout.",
    slug: "qurban-asyik",
  },
  {
    sourceTitle: "Sattu.id Landing Page Redesign",
    title: "Sattu.id",
    summary: "A fresh website for Sattu.id.",
    slug: "sattu-id",
  },
  {
    sourceTitle: "SGA Cakrawala Landing Page",
    title: "SGA Cakrawala",
    summary: "A home for the student community.",
    slug: "sga-cakrawala",
  },
  {
    sourceTitle: "RugeFX Personal Website",
    title: "RugeFX",
    summary: "The portfolio you are exploring now.",
    slug: "rugefx",
  },
];

export const presentedProjects = projectPresentationDefinitions.map(
  ({ sourceTitle, ...presentation }): PresentedProject => {
    const project = projects.find(
      (candidate) => candidate.title === sourceTitle,
    );

    if (!project) {
      throw new Error(`Missing project data for "${sourceTitle}".`);
    }

    return { ...presentation, project };
  },
);

export function getPresentedProject(slug: string) {
  return presentedProjects.find((project) => project.slug === slug);
}
