import { Fragment, useState } from "react";
import { ChevronDown, Code2, GraduationCap, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <section id="about" className="scroll-mt-6">
      <h2 className="font-display mb-7 text-[44px] leading-[1.15] font-semibold tracking-[-2px] max-[760px]:mb-6 max-[760px]:text-[35px]">
        About me
      </h2>

      <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-5 max-[1120px]:grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:gap-4">
        <article className="border-portfolio-border row-span-2 flex min-h-[550px] flex-col rounded-[25px] border bg-white p-[clamp(30px,3.5vw,44px)] max-[1120px]:col-span-2 max-[1120px]:row-span-1 max-[1120px]:min-h-[500px] max-[760px]:col-span-1 max-[760px]:min-h-[520px] max-[760px]:p-[30px] max-[480px]:min-h-[540px] max-[480px]:px-6 max-[480px]:py-[26px]">
          <Code2
            className="border-portfolio-brand text-portfolio-brand-strong h-[42px] w-[42px] shrink-0 rounded-[9px] border-2 [stroke-width:1.8] p-[7px]"
            aria-hidden="true"
          />
          <h3 className="font-display mt-[31px] mb-7 max-w-[12ch] text-[clamp(42px,4.5vw,60px)] leading-[1.08] font-semibold tracking-[-3px] max-[1120px]:max-w-[13ch] max-[760px]:text-[clamp(40px,11vw,52px)] max-[760px]:tracking-[-2.5px] max-[480px]:mt-[27px] max-[480px]:text-[38px] max-[480px]:tracking-[-2px]">
            From interfaces to{" "}
            <span className="text-portfolio-brand-strong">
              connected systems.
            </span>
          </h3>
          <div className="text-portfolio-copy max-w-[48ch] text-lg leading-[1.55] max-[760px]:text-[17px] [&_p+p]:mt-[18px]">
            <p>
              I build web and mobile apps, along with the services and
              integrations behind them.
            </p>
            <p>
              My recent work spans mobile commerce, IoT-connected weighing
              workflows, and tools that keep operational data moving.
            </p>
          </div>
          <p className="text-portfolio-copy before:border-portfolio-divider relative mt-auto max-w-[52ch] pt-[58px] text-base leading-[1.55] before:absolute before:inset-x-0 before:top-[29px] before:border-t">
            I care about clear APIs, maintainable code, and software that holds
            up in everyday use.
          </p>
        </article>

        <article className="border-portfolio-border bg-portfolio-tint rounded-[25px] border p-[clamp(30px,3.5vw,44px)] max-[760px]:min-h-[260px] max-[760px]:p-[30px] max-[480px]:px-6 max-[480px]:py-[26px]">
          <div className="mb-[30px] flex items-center gap-[17px] max-[480px]:items-start">
            <GraduationCap
              className="text-portfolio-brand-strong h-[38px] w-[38px] shrink-0 [stroke-width:1.8]"
              aria-hidden="true"
            />
            <h3 className="font-display text-[27px] leading-[1.15] font-semibold tracking-[-1px] max-[480px]:text-2xl">
              Education
            </h3>
          </div>
          <p className="mb-[3px] text-xl leading-[1.4] font-semibold">
            Computer Science
          </p>
          <p className="text-base leading-[1.55]">Cakrawala University</p>
          <p className="text-portfolio-copy-muted mt-1 text-base leading-[1.55]">
            Currently pursuing my bachelor&apos;s degree.
          </p>
          <p className="border-portfolio-divider-strong mt-5 border-t pt-5 text-base leading-[1.55]">
            Selected for the university&apos;s Talent Scouting program.
          </p>
        </article>

        <article className="border-portfolio-ink-strong bg-portfolio-ink-strong rounded-[25px] border p-[clamp(30px,3.5vw,44px)] text-white max-[760px]:min-h-[260px] max-[760px]:p-[30px] max-[480px]:px-6 max-[480px]:py-[26px]">
          <div className="mb-[27px] flex items-center gap-[17px] max-[480px]:items-start">
            <UsersRound
              className="text-portfolio-on-dark-muted h-[38px] w-[38px] shrink-0 [stroke-width:1.8]"
              aria-hidden="true"
            />
            <h3 className="font-display text-[27px] leading-[1.15] font-semibold tracking-[-1px] max-[480px]:text-2xl">
              Beyond the classroom
            </h3>
          </div>
          <p className="text-portfolio-on-dark mb-[3px] text-xl leading-[1.4] font-semibold">
            Deputy Head of Research &amp; Technology
          </p>
          <p className="text-portfolio-on-dark-muted text-base leading-normal">
            Student Government Association
          </p>
        </article>
      </div>

      <div className="border-portfolio-border mt-5 rounded-[25px] border bg-white px-9 pt-7 pb-[30px] max-[760px]:mt-4 max-[760px]:px-[30px] max-[760px]:py-[27px] max-[480px]:p-6">
        <div className="mb-[19px] flex items-center justify-between gap-6 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2.5">
          <h3 className="font-display text-[25px] font-semibold tracking-[-0.8px]">
            Tools I work with
          </h3>
          <Button
            variant="link"
            size="sm"
            type="button"
            aria-expanded={skillsOpen}
            aria-controls="full-skill-set"
            onPress={() => setSkillsOpen((isOpen) => !isOpen)}
          >
            {skillsOpen ? "Hide full skill set" : "Full skill set"}
            <ChevronDown
              className={cn(
                "transition-transform duration-200",
                skillsOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </Button>
        </div>

        <div className="text-portfolio-copy text-base leading-[1.8]">
          {primarySkills.map((line) => (
            <ul className="flex flex-wrap" key={line.join("-")}>
              {line.map((skill, index) => (
                <Fragment key={skill}>
                  <li className="inline-flex items-center">{skill}</li>
                  {index < line.length - 1 && (
                    <li
                      className="text-portfolio-separator mx-2.5"
                      aria-hidden="true"
                    >
                      ·
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          ))}
        </div>

        {skillsOpen && (
          <div
            id="full-skill-set"
            className="border-portfolio-border mt-[23px] grid grid-cols-3 gap-7 border-t pt-[23px] max-[760px]:grid-cols-1 max-[760px]:gap-5"
          >
            {additionalSkillGroups.map((group) => (
              <div key={group.label}>
                <h4 className="text-portfolio-brand-strong mb-[7px] text-[13px] font-semibold">
                  {group.label}
                </h4>
                <p className="text-portfolio-copy-muted text-[13px] leading-[1.65]">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
