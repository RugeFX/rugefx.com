import { useState } from "react";
import { ChevronDown, Code2, GraduationCap, UsersRound } from "lucide-react";

const primarySkills = [
  ["React", "React Native", "TypeScript", "Expo", "Laravel", "Node.js"],
  ["PostgreSQL", "MQTT", "Docker", "GitHub Actions"],
];

const additionalSkillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "PHP", "Go", "Python", "Java", "C#", "Rust", "C++"],
  },
  {
    label: "Frameworks & libraries",
    items: [
      "Next.js",
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
    items: ["Git", "MongoDB", "Figma", "Vercel", "AWS", "Fly.io"],
  },
];

export default function AboutSection() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <section id="about" className="about-section">
      <h2>About me</h2>

      <div className="about-bento">
        <article className="about-card about-story">
          <Code2 className="about-icon" aria-hidden="true" />
          <h3>
            From interfaces to <span>connected systems.</span>
          </h3>
          <div className="about-story-copy">
            <p>
              I build web and mobile apps, along with the services and
              integrations behind them.
            </p>
            <p>
              My recent work spans mobile commerce, IoT-connected weighing
              workflows, and tools that keep operational data moving.
            </p>
          </div>
          <p className="about-principle">
            I care about clear APIs, maintainable code, and software that holds
            up in everyday use.
          </p>
        </article>

        <article className="about-card about-education">
          <div className="about-card-heading">
            <GraduationCap className="about-icon" aria-hidden="true" />
            <h3>Education</h3>
          </div>
          <p className="about-card-lead">Computer Science</p>
          <p>Cakrawala University</p>
          <p className="about-secondary">
            Currently pursuing my bachelor&apos;s degree.
          </p>
          <p className="about-callout">
            Selected for the university&apos;s Talent Scouting program.
          </p>
        </article>

        <article className="about-card about-leadership">
          <div className="about-card-heading">
            <UsersRound className="about-icon" aria-hidden="true" />
            <h3>Beyond the classroom</h3>
          </div>
          <p className="about-card-lead">
            Deputy Head of Research &amp; Technology
          </p>
          <p>Student Government Association</p>
        </article>
      </div>

      <div className="about-skills">
        <div className="about-skills-heading">
          <h3>Tools I work with</h3>
          <button
            type="button"
            aria-expanded={skillsOpen}
            aria-controls="full-skill-set"
            onClick={() => setSkillsOpen((isOpen) => !isOpen)}
          >
            {skillsOpen ? "Hide full skill set" : "Full skill set"}
            <ChevronDown aria-hidden="true" />
          </button>
        </div>

        <div className="about-primary-skills">
          {primarySkills.map((line) => (
            <ul key={line.join("-")}>
              {line.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ))}
        </div>

        {skillsOpen && (
          <div id="full-skill-set" className="about-full-skills">
            {additionalSkillGroups.map((group) => (
              <div key={group.label}>
                <h4>{group.label}</h4>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
