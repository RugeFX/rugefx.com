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
  SiExpo,
  SiGithubactions,
} from "@icons-pack/react-simple-icons";
import icon from "../assets/RugeFX.png";
import forum from "../assets/RugeForum.png";
import personalNotes from "../assets/PersonalNotesIcon.png";
import bookshelf from "../assets/BookshelfRuge.png";
import qurbanAsyik from "../assets/QurbanAsyik.png";
import sattu from "../assets/Sattu.png";
import sga from "../assets/SGA.png";

export interface Project {
  title: string;
  category: "Mobile" | "Web Apps" | "Websites";
  description: string;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  siteUrl: string | null;
  siteLinkLabel?: string;
  additionalLinks?: {
    label: string;
    url: string;
  }[];
  repositoryUrl: string | null;
  technologies: {
    label: string;
    icon: IconType;
  }[];
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "PT. Jagad Aman Prima (Nauchara)",
    position: "Software Engineer",
    duration: "Nov 2025 - Present",
    description: [
      "Developed a client-side dashboard that streamlines vehicle weighing workflows for inbound purchase orders and outbound sales orders using React and Laravel",
      "Integrated the dashboard with on-site edge devices through MQTT and REST APIs for real-time weighing data, automated IoT controls, and approval workflows",
      "Connected the application with SAP and the client's warehouse management system to keep data flowing across their existing infrastructure",
      "Managed production deployments and server configuration on a client-provided VPS using SSH and Docker",
    ],
    technologies: ["React", "Laravel", "MQTT", "REST APIs", "Docker", "SAP"],
  },
  {
    company: "Kumorise - Qurban Asyik",
    position: "Frontend Developer",
    duration: "Mar 2025 - Apr 2026",
    description: [
      "Developed the customer-facing Qurban Asyik e-commerce mobile app with React Native and Expo",
      "Integrated product browsing, cart management, authentication, and Midtrans Snap transactions through an OpenAPI-defined backend contract",
      "Prepared and submitted multiple app versions to the Google Play Store",
      "Set up Expo Application Services for automated cloud builds and submissions",
      "Built a GitHub Actions pipeline to trigger builds on code changes",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "OpenAPI",
      "Midtrans",
      "GitHub Actions",
    ],
  },
  {
    company: "Sattu.id",
    position: "Software Engineer",
    duration: "Jan 2025 - Mar 2025",
    description: [
      "Migrated the company's internal dashboard to Retool",
      "Integrated SQL queries for dashboard tables and added search and selection filters",
      "Implemented a redesigned landing page with the UI/UX designer using TypeScript, React, and Next.js",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Retool", "SQL"],
  },
  {
    company: "Medika Propertindo Immalayos",
    position: "IT Specialist",
    duration: "May 2022 - Oct 2022",
    description: [
      "Refreshed the company's WordPress site with updated colors, images, content, layouts, and an embedded Instagram feed",
      "Modified logic in the existing website's admin and filtering features",
      "Shot and edited promotional videos, including menu slides and short-form social content",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "Adobe After Effects"],
  },
];

export const projects: Project[] = [
  {
    title: "Qurban Asyik Mobile App",
    category: "Mobile",
    description:
      "A customer-facing e-commerce app for discovering products, managing a cart, and completing Midtrans Snap transactions. Built with React Native and Expo, integrated through an OpenAPI contract, and shipped to Google Play and the App Store with EAS and GitHub Actions.",
    imageSrc: qurbanAsyik,
    imageFit: "contain",
    siteUrl:
      "https://play.google.com/store/apps/details?id=com.qurbanasyik.mobile&hl=id",
    siteLinkLabel: "Google Play",
    additionalLinks: [
      {
        label: "App Store",
        url: "https://apps.apple.com/id/app/qurban-asyik/id6753735706",
      },
    ],
    repositoryUrl: null,
    technologies: [
      {
        label: "React Native",
        icon: SiReact,
      },
      {
        label: "Expo",
        icon: SiExpo,
      },
      {
        label: "GitHub Actions",
        icon: SiGithubactions,
      },
    ],
  },
  {
    title: "Sattu.id Landing Page Redesign",
    category: "Websites",
    description:
      "A new landing page implemented with Sattu.id's UI/UX designer using TypeScript, Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion.",
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
  },
  {
    title: "SGA Cakrawala Landing Page",
    category: "Websites",
    description:
      "A landing page for the student government association of Cakrawala University, made by the Research and Technology team. Built with Typescript, React, Tailwind CSS, shadcn/ui, and Vite",
    imageSrc: sga,
    siteUrl: "https://sga-cakrawala.org",
    repositoryUrl: "https://github.com/Ristek-CU/sga-landing-page",
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
    category: "Websites",
    description:
      "My personal portfolio website, built with Typescript, React, Vite, Tailwind CSS, Radix, shadcn/ui, and Framer Motion",
    imageSrc: icon,
    siteUrl: null,
    repositoryUrl: "https://github.com/RugeFX/rugefx.com",
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
    category: "Web Apps",
    description:
      "A fully-functional forum app made for the last submission of Dicoding's React Expert course. Built with Typescript, React, Vite, Redux & Toolkit, Tailwind CSS, Radix, and SlateJS",
    imageSrc: forum,
    siteUrl: "https://forum.rugefx.com",
    repositoryUrl: "https://github.com/RugeFX/ruge-forum",
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
    category: "Web Apps",
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
    category: "Web Apps",
    description:
      "A books organizer app made for the submission of Dicoding's Front-end course. Built with HTML, Javascript, and Tailwind CSS",
    siteUrl: "https://rugefx.github.io/ruge-bookshelf",
    repositoryUrl: "https://github.com/RugeFX/ruge-bookshelf",
    imageSrc: bookshelf,
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
