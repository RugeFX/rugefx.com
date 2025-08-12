import {
  type IconType,
  SiRadixui,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiFramer,
} from "@icons-pack/react-simple-icons";
import icon from "../assets/RugeFX.png";
import forum from "../assets/RugeForum.png";
import personalNotes from "../assets/PersonalNotesIcon.png";
import bookshelf from "../assets/BookshelfRuge.png";
import sattu from "../assets/Sattu.png";
import sga from "../assets/SGA.png";

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  siteUrl: string | null;
  repositoryUrl: string | null;
  technologies: {
    label: string;
    icon: IconType;
  }[];
  featured?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Sattu.id",
    position: "Software Engineer Intern",
    duration: "Jan 2025 - Feb 2025",
    location: "Bandung, Indonesia",
    description: [
      "Developed a landing page redesign for Sattu.id, using Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion",
      "Implemented a responsive design that works on both desktop and mobile devices",
      "Created a smooth animation for the landing page using Framer Motion",
      "Optimized the website for better performance and SEO",
      "Also worked on migrating the application's superadmin panel from their internal system to Retool",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    company: "Medika Propertindo Immalayos",
    position: "IT Specialist",
    duration: "May 2022 - Oct 2022",
    location: "Jakarta, Indonesia",
    description: [
      "Updated a WordPress-based website by refreshing theme colors, updating images and content, tidying page layouts, and adding new attributes",
      "Embedded the company's Instagram feed directly into the site",
      "Shot and edited videos for business needs, including a cafe menu video and short promotional clips for the company's social media",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "Adobe After Effects"],
  },
];

export const projects: Project[] = [
  {
    title: "Sattu.id Landing Page",
    description:
      "A landing page redesign for Sattu.id, built with Typescript, NextJS, React, Tailwind CSS, shadcn/ui, and Framer Motion",
    imageSrc: sattu,
    siteUrl: "https://sattu.id",
    repositoryUrl: null,
    technologies: [
      {
        label: "NextJS",
        icon: SiNextdotjs,
      },
      {
        label: "React",
        icon: SiReact,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        label: "Shadcn/ui",
        icon: SiShadcnui,
      },
    ],
    featured: ["NextJS", "React"],
  },
  {
    title: "SGA Cakrawala Landing Page",
    description:
      "A landing page for the student government association of Cakrawala University, made by the Research and Technology team. Built with Typescript, React, Tailwind CSS, shadcn/ui, and Vite",
    imageSrc: sga,
    siteUrl: "https://sga-cakrawala.org",
    repositoryUrl: "https://github.com/Ristek-CU/sga-landing-page",
    featured: ["React", "Tailwind", "Shadcn/ui"],
    technologies: [
      {
        label: "React",
        icon: SiReact,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        label: "Shadcn/ui",
        icon: SiShadcnui,
      },
    ],
  },
  {
    title: "RugeFX Personal Website",
    description:
      "My personal portfolio website, built with Typescript, React, Vite, Tailwind CSS, Radix, shadcn/ui, and Framer Motion",
    imageSrc: icon,
    siteUrl: null,
    repositoryUrl: "https://github.com/RugeFX/rugefx.com",
    featured: ["Framer Motion", "React", "Tailwind", "Shadcn/ui"],
    technologies: [
      {
        label: "React",
        icon: SiReact,
      },
      {
        label: "Radix UI",
        icon: SiRadixui,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        label: "Shadcn/ui",
        icon: SiShadcnui,
      },
      {
        label: "Framer Motion",
        icon: SiFramer,
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
    featured: ["Redux", "React", "Tailwind", "Radix UI"],
    technologies: [
      {
        label: "React",
        icon: SiReact,
      },
      {
        label: "Redux",
        icon: SiRedux,
      },
      {
        label: "Radix UI",
        icon: SiRadixui,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
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
        icon: SiReact,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    title: "Ruge Bookshelf",
    description:
      "A books organizer app made for the submission of Dicoding's Front-end course. Built with HTML, Javascript, and Tailwind CSS",
    siteUrl: "https://rugefx.github.io/ruge-bookshelf",
    repositoryUrl: "https://github.com/RugeFX/ruge-bookshelf",
    imageSrc: bookshelf,
    featured: ["Javascript", "Tailwind"],
    technologies: [
      {
        label: "Javascript",
        icon: SiJavascript,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
    ],
  },
];
