import icon from "../assets/RugeFX.png";
import forum from "../assets/RugeForum.png";
import personalNotes from "../assets/PersonalNotesIcon.png";
import { IconElement, Radix, React, Redux, Tailwind } from "./icons";

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  siteUrl: string | null;
  repositoryUrl: string | null;
  technologies: {
    label: string;
    icon: IconElement;
  }[];
}

export const projects: Project[] = [
  {
    title: "RugeFX Personal Website",
    description:
      "My personal portfolio website, built with Typescript, React, Vite, Tailwind CSS, Radix, shadcn/ui, and Framer Motion",
    imageSrc: icon,
    siteUrl: null,
    repositoryUrl: "https://github.com/RugeFX/rugefx.com",
    technologies: [
      {
        label: "React",
        icon: React,
      },
      {
        label: "Radix UI",
        icon: Radix,
      },
      {
        label: "Tailwind",
        icon: Tailwind,
      },
    ],
  },
  {
    title: "Ruge Forum",
    description:
      "A fully-functional forum app made for the last submission of Dicoding's React Expert course. Built with Typescript, React, Vite, Redux & Toolkit, Tailwind CSS, Radix, and SlateJS",
    imageSrc: forum,
    siteUrl: "https://forum.rugefx.com",
    repositoryUrl: "https://github.com/RugeFX/ruge-forum",
    technologies: [
      {
        label: "React",
        icon: React,
      },
      {
        label: "Redux",
        icon: Redux,
      },
      {
        label: "Radix UI",
        icon: Radix,
      },
      {
        label: "Tailwind",
        icon: Tailwind,
      },
    ],
  },
  {
    title: "Ruge Personal Notes",
    description:
      "A simple note-taking app made for the last submission of Dicoding's React Fundamentals course. Built with Javascript, React, Vite, Tailwind CSS, and Material Tailwind",
    siteUrl: "https://personal-notes.rugefx.com/",
    repositoryUrl: "https://github.com/RugeFX/ruge-personal-notes",
    imageSrc: personalNotes,
    technologies: [
      {
        label: "React",
        icon: React,
      },
      {
        label: "Tailwind",
        icon: Tailwind,
      },
    ],
  },
];
