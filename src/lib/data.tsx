import icon from "../assets/RugeFX.png";
import forum from "../assets/RugeForum.png";
import personalNotes from "../assets/PersonalNotesIcon.png";
import { Radix, React, Redux, Tailwind } from "./icons";

export const projects = [
  {
    title: "RugeFX Personal Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, praesentium maxime dicta quia officiis sit facilis corporis id? Ea neque magni in repellat culpa accusantium, optio dolor pariatur! Corrupti, voluptatem.",
    imageSrc: icon,
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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, praesentium maxime dicta quia officiis sit facilis corporis id? Ea neque magni in repellat culpa accusantium, optio dolor pariatur! Corrupti, voluptatem.",
    imageSrc: forum,
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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, praesentium maxime dicta quia officiis sit facilis corporis id? Ea neque magni in repellat culpa accusantium, optio dolor pariatur! Corrupti, voluptatem.",
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
