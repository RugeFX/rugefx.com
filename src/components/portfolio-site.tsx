import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Menu,
  X,
  Linkedin,
} from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Link } from "@tanstack/react-router";
import { workExperiences, type WorkExperience } from "@/lib/data";
import {
  presentedProjects,
  type PresentedProject,
} from "@/lib/project-presentation";
import AboutSection from "@/components/sections/about-section";
import { cn } from "@/lib/utils";

const categories = ["All", "Mobile", "Websites"] as const;
const resume =
  "https://docs.google.com/document/d/1Fh4tgO5LSXGCdzDGPtST5pniM-a08Ar-O8dW1SvMmDY/edit?usp=sharing";
const sectionTitleClass =
  "font-display text-[44px] leading-[1.15] font-semibold tracking-[-2px] max-[760px]:text-[35px]";
const heroCardClass = "rounded-[25px]";
const socialCardClass =
  "relative min-h-[180px] min-w-0 overflow-hidden rounded-[25px] px-[30px] py-[26px] transition-transform duration-200 hover:-translate-y-1 max-[1120px]:min-h-[170px] max-[760px]:min-h-[158px] max-[760px]:p-6 max-[480px]:p-[22px]";

export default function PortfolioSite() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = presentedProjects.filter(
    ({ project }) => category === "All" || project.category === category,
  );
  return (
    <div className="portfolio-site min-h-screen bg-[#f8f7fb] font-sans text-[#21172f]">
      <div className="mx-auto max-w-[1280px] px-8 max-[1120px]:px-6 max-[760px]:px-[18px] max-[480px]:px-[14px]">
        <header className="relative flex h-28 items-center justify-between max-[760px]:h-[88px]">
          <a
            href="#home"
            className="font-display text-[32px] font-bold tracking-[-2px] max-[760px]:text-[28px]"
          >
            RugeFX
          </a>
          <nav
            aria-label="Main navigation"
            className={cn(
              "hidden gap-[38px] text-sm min-[761px]:flex",
              menuOpen &&
                "max-[760px]:absolute max-[760px]:inset-x-0 max-[760px]:top-[75px] max-[760px]:z-10 max-[760px]:flex max-[760px]:justify-between max-[760px]:gap-2.5 max-[760px]:rounded-[18px] max-[760px]:border max-[760px]:border-[#eae6ef] max-[760px]:bg-white max-[760px]:p-6",
            )}
          >
            {[
              ["About", "about"],
              ["Experience", "experience"],
              ["Work", "projects"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="flex items-center gap-3 text-sm text-[#7c3aed] max-[760px]:mr-5 max-[760px]:ml-auto max-[480px]:mr-3.5"
            href="mailto:zackfxg@gmail.com"
          >
            Contact <ArrowUpRight size={19} />
          </a>
          <button
            className="hidden max-[760px]:block"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        <main>
          <section
            id="home"
            className="grid scroll-mt-6 grid-cols-[1.15fr_1fr] gap-[22px] max-[1120px]:grid-cols-1 max-[760px]:gap-4"
            aria-label="Introduction"
          >
            <div className="flex min-w-0 flex-col gap-5 max-[760px]:gap-4">
              <div
                className={cn(
                  heroCardClass,
                  "flex-1 bg-[#7c3aed] p-12 text-white max-[1120px]:p-[clamp(36px,6vw,56px)] max-[760px]:px-[30px] max-[760px]:py-[34px] max-[480px]:px-6 max-[480px]:py-[30px] min-[1121px]:min-h-[540px]",
                )}
              >
                <h1 className="font-display mb-[35px] text-[clamp(65px,7.8vw,108px)] leading-[1.02] font-semibold tracking-[-7px] max-[1120px]:text-[clamp(76px,11vw,108px)] max-[1120px]:tracking-[-6px] max-[760px]:mb-[25px] max-[760px]:text-[clamp(66px,16vw,92px)] max-[760px]:tracking-[-4px] max-[480px]:text-[clamp(58px,18vw,78px)] max-[480px]:tracking-[-3px]">
                  Ahmad
                  <br />
                  Zacky<span>.</span>
                </h1>
                <h2 className="mb-6 text-[26px] font-medium tracking-[-1px] max-[760px]:text-2xl">
                  Software engineer
                </h2>
                <p className="text-[21px] leading-[1.55] text-[#f1e9ff] max-[760px]:text-[19px]">
                  Building web, mobile, and
                  <br className="desktop-break" /> connected systems.
                </p>
                <div className="mt-[42px] flex flex-wrap gap-3.5 max-[1120px]:gap-2.5 max-[760px]:mt-8 max-[480px]:grid max-[480px]:grid-cols-1">
                  <a
                    className="inline-flex items-center justify-center gap-3 rounded-[40px] border border-white bg-white px-6 py-[17px] text-sm text-[#21172f] max-[1120px]:px-[18px] max-[1120px]:py-3.5 max-[480px]:w-full"
                    href="mailto:zackfxg@gmail.com"
                  >
                    Get in touch <ArrowUpRight size={18} />
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-3 rounded-[40px] border border-[#c4a4ff] bg-transparent px-6 py-[17px] text-sm text-white max-[1120px]:px-[18px] max-[1120px]:py-3.5 max-[480px]:w-full"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View resume
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-2 max-[760px]:gap-4">
                <a
                  className={cn(socialCardClass, "bg-[#21142f] text-white")}
                  href="https://github.com/RugeFX"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub size={38} aria-hidden="true" />
                  <ArrowUpRight className="absolute top-[27px] right-[25px]" />
                  <h2 className="mt-[18px] mb-1 text-[23px] font-medium tracking-[-0.8px] max-[480px]:text-xl">
                    GitHub
                  </h2>
                  <span className="text-sm text-[#d7bbfa]">RugeFX</span>
                </a>
                <a
                  className={cn(socialCardClass, "bg-[#ede7fa] text-[#6f2bde]")}
                  href="https://linkedin.com/in/rugefx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={38} aria-hidden="true" />
                  <ArrowUpRight className="absolute top-[27px] right-[25px]" />
                  <h2 className="mt-[18px] mb-1 text-[23px] font-medium tracking-[-0.8px] text-[#21172f] max-[480px]:text-xl">
                    LinkedIn
                  </h2>
                  <span className="text-sm">Ahmad Zacky</span>
                </a>
                <a
                  className={cn(
                    socialCardClass,
                    "border border-[#e3dce9] bg-white text-[#21172f] max-[760px]:col-span-2 max-[760px]:min-h-[140px]",
                  )}
                  href="https://twitter.com/RugeDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiX size={34} aria-hidden="true" />
                  <ArrowUpRight className="absolute top-[27px] right-[25px]" />
                  <h2 className="mt-[18px] mb-1 text-[23px] font-medium tracking-[-0.8px] max-[480px]:text-xl">
                    X
                  </h2>
                  <span className="text-sm text-[#71657c]">@RugeDev</span>
                </a>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-5 max-[760px]:gap-4">
              <div className="flex-1 rounded-[25px] border border-[#eae6ef] bg-white p-11 max-[1120px]:p-[clamp(34px,5vw,52px)] max-[760px]:p-[30px]">
                <h2 className="font-display mb-7 text-[33px] font-semibold tracking-[-1.3px] max-[1120px]:text-[32px] max-[760px]:text-[28px]">
                  A bit about me.
                </h2>
                <p className="mb-[26px] text-[21px] leading-[1.6] last:mb-0 max-[1120px]:max-w-[38ch] max-[1120px]:text-xl max-[760px]:max-w-none max-[760px]:text-lg">
                  I'm a primarily self-taught developer based in Bekasi,
                  Indonesia.
                </p>
                <p className="mb-[26px] text-[21px] leading-[1.6] last:mb-0 max-[1120px]:max-w-[38ch] max-[1120px]:text-xl max-[760px]:max-w-none max-[760px]:text-lg">
                  My work spans mobile commerce apps, websites, and operational
                  dashboards that connect with on-site devices.
                </p>
              </div>
              <div className="grid min-h-[260px] flex-1 grid-cols-2 gap-5 max-[1120px]:min-h-[280px] max-[760px]:min-h-[235px] max-[760px]:gap-4 max-[480px]:min-h-0 max-[480px]:flex-none max-[480px]:grid-cols-1">
                <div className="relative flex flex-col overflow-hidden rounded-[25px] bg-[#ede7fa] p-[27px] max-[1120px]:p-[30px] max-[760px]:p-[22px] max-[480px]:min-h-[220px]">
                  <h2 className="text-[23px] leading-[1.4] font-medium tracking-[-0.8px] max-[760px]:text-[21px]">
                    Bekasi,
                    <br />
                    Indonesia
                  </h2>
                  <div
                    className="relative grid min-h-[140px] flex-1 place-items-center text-[#7c3aed]"
                    aria-hidden="true"
                  >
                    <div className="map-streets" />
                    <MapPin
                      className="relative [stroke-width:1.4] [filter:drop-shadow(0_6px_5px_#bda4e5)]"
                      color="#ede7fa"
                      size={45}
                      fill="currentColor"
                    />
                  </div>
                </div>
                <a
                  className="flex flex-col rounded-[25px] bg-[#21142f] p-7 text-white max-[1120px]:p-[30px] max-[760px]:p-[22px] max-[480px]:min-h-[220px]"
                  href="#experience"
                >
                  <h2 className="text-[23px] leading-[1.4] font-medium tracking-[-0.8px] max-[760px]:text-[21px]">
                    Currently
                  </h2>
                  <p className="my-5 mb-8 text-[22px] leading-normal max-[1120px]:max-w-[22ch] max-[760px]:text-[19px]">
                    Building operational tools at Nauchara.
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 text-sm text-[#d3b4ff] max-[760px]:text-xs">
                    My experience <ArrowUpRight size={17} />
                  </span>
                </a>
              </div>
            </div>
          </section>
          <div className="mt-[75px] max-[760px]:mt-[45px]">
            <AboutSection />
          </div>
          <section
            className="scroll-mt-6 pt-[76px] [--experience-stack-step:74px] [--experience-stack-top:18px] max-[760px]:pt-[52px] max-[760px]:[--experience-stack-step:76px] max-[760px]:[--experience-stack-top:12px] max-[480px]:[--experience-stack-step:70px] max-[480px]:[--experience-stack-top:10px]"
            id="experience"
          >
            <div className="mb-9 flex items-end justify-between gap-[30px] max-[760px]:mb-7 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
              <h2 className={sectionTitleClass}>Experience</h2>
              <p className="flex items-center gap-2.5 text-sm leading-normal text-[#6c5f78] max-[760px]:max-w-[34ch] [&_svg]:h-[17px] [&_svg]:w-[17px]">
                Scroll through the work that shaped how I build.
                <ArrowDown aria-hidden="true" />
              </p>
            </div>
            <ExperienceStack />
          </section>
          <section
            className="scroll-mt-6 pt-[76px] max-[760px]:pt-[52px]"
            id="projects"
          >
            <div className="mb-7 flex items-center justify-between gap-6 max-[760px]:flex-col max-[760px]:items-start">
              <h2 className={sectionTitleClass}>Selected work</h2>
              <div
                className="flex flex-wrap gap-[5px] max-[480px]:gap-1"
                aria-label="Filter projects"
              >
                {categories.map((item) => (
                  <button
                    className={cn(
                      "cursor-pointer rounded-[30px] px-3.5 py-[9px] text-[13px] text-[#645972] max-[480px]:px-[11px] max-[480px]:py-2",
                      category === item && "bg-[#eae1f9] text-[#6021be]",
                    )}
                    key={item}
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={cn(
                "grid [grid-auto-flow:dense] grid-cols-12 gap-5",
                category === "All" &&
                  "[grid-auto-rows:296px] max-[1120px]:auto-rows-auto",
              )}
            >
              {visibleProjects.map((project) => (
                <PreviewProject
                  key={project.slug}
                  project={project}
                  isBento={category === "All"}
                />
              ))}
            </div>
          </section>
        </main>
        <footer className="mt-20 rounded-t-[25px] bg-[#7c3aed] p-[45px] text-white max-[760px]:px-6 max-[760px]:py-[30px]">
          <div>
            <h2 className="font-display mb-5 text-[42px] tracking-[-1.5px] max-[760px]:text-[32px]">
              Let’s build something.
            </h2>
            <a
              className="inline-flex items-center gap-2"
              href="mailto:zackfxg@gmail.com"
            >
              zackfxg@gmail.com <ArrowUpRight />
            </a>
          </div>
          <div className="mt-[50px] flex flex-wrap justify-between gap-5 border-t border-[#ffffff40] pt-7 text-xs text-[#eee3ff]">
            <span>© {new Date().getFullYear()} Ahmad Zacky</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ExperienceStack() {
  const stackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageMetrics, setStageMetrics] = useState({ height: 800, step: 74 });
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateMetrics = () => {
      const computedStyle = window.getComputedStyle(stage);
      const step = Number.parseFloat(
        computedStyle.getPropertyValue("--experience-stack-step"),
      );
      const nextMetrics = {
        height: stage.clientHeight,
        step: Number.isFinite(step) ? step : 74,
      };

      setStageMetrics((current) =>
        current.height === nextMetrics.height &&
        current.step === nextMetrics.step
          ? current
          : nextMetrics,
      );
    };

    updateMetrics();
    const observer = new ResizeObserver(updateMetrics);
    observer.observe(stage);
    window.addEventListener("resize", updateMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return (
    <div className="experience-stack" ref={stackRef}>
      <div className="experience-stack-stage" ref={stageRef}>
        {workExperiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={index}
            count={workExperiences.length}
            progress={scrollYProgress}
            stageHeight={stageMetrics.height}
            step={stageMetrics.step}
            reduceMotion={Boolean(shouldReduceMotion)}
          />
        ))}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  count: number;
  progress: MotionValue<number>;
  stageHeight: number;
  step: number;
  reduceMotion: boolean;
}

function ExperienceCard({
  experience,
  index,
  count,
  progress,
  stageHeight,
  step,
  reduceMotion,
}: ExperienceCardProps) {
  const usesDarkSurface = index === 1 || index === 3;
  const segmentCount = Math.max(count - 1, 1);
  const segmentStart = index === 0 ? 0 : (index - 1) / segmentCount;
  const segmentEnd = index === 0 ? 1 : index / segmentCount;
  const y = useTransform(
    progress,
    [segmentStart, segmentEnd],
    index === 0 ? [0, 0] : [stageHeight + 32, index * step],
  );

  return (
    <motion.article
      className="experience-stack-card"
      data-experience-index={index}
      style={reduceMotion ? undefined : { y }}
    >
      <header
        className={cn(
          "grid min-h-[84px] grid-cols-[minmax(0,1.35fr)_minmax(150px,0.8fr)_auto] items-center gap-7 border-b border-[rgba(91,63,117,0.18)] px-[34px] py-5 max-[760px]:min-h-[86px] max-[760px]:grid-cols-[minmax(0,1fr)_auto] max-[760px]:gap-x-4 max-[760px]:gap-y-[5px] max-[760px]:px-[22px] max-[760px]:py-[15px] max-[480px]:min-h-20 max-[480px]:px-[18px] max-[480px]:py-3.5",
          usesDarkSurface && "border-white/20",
        )}
      >
        <h3 className="font-display overflow-hidden text-xl leading-tight font-semibold tracking-[-0.6px] text-ellipsis whitespace-nowrap max-[760px]:col-span-2 max-[760px]:text-[17px] max-[480px]:text-[15px]">
          {experience.company}
        </h3>
        <p
          className={cn(
            "text-sm leading-[1.4] max-[760px]:text-xs max-[480px]:text-[11px]",
            usesDarkSurface && "text-[#eadfff]",
          )}
        >
          {experience.position}
        </p>
        <span
          className={cn(
            "text-sm leading-[1.4] whitespace-nowrap max-[760px]:text-xs max-[480px]:text-[11px]",
            usesDarkSurface && "text-[#eadfff]",
          )}
        >
          {experience.duration}
        </span>
      </header>
      <div className="experience-card-body">
        <p className="experience-card-lead font-display max-w-[31ch] text-[23px] leading-[1.4] font-medium tracking-[-0.7px] max-[760px]:max-w-[35ch] max-[760px]:text-[21px] max-[480px]:text-[19px]">
          {experience.description[0]}
        </p>
        <div
          className={cn(
            "experience-card-details border-l border-[rgba(91,63,117,0.22)] pl-[42px] max-[760px]:border-t max-[760px]:border-l-0 max-[760px]:pt-[25px] max-[760px]:pl-0",
            usesDarkSurface && "border-white/20",
          )}
        >
          <h4 className="mb-[18px] text-base font-semibold">
            What I worked on
          </h4>
          <ul className="list-disc pl-5 text-sm leading-[1.65] max-[480px]:text-[13px] [&_li+li]:mt-3">
            {experience.description.slice(1).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "experience-card-tech flex flex-wrap self-end text-[13px] leading-[1.7] text-[#655873]",
            usesDarkSurface && "text-[#d8cbed]",
          )}
          aria-label="Technology stack"
        >
          {experience.technologies?.map((tech, techIndex) => (
            <span className="inline-flex items-center" key={tech}>
              {tech}
              {techIndex < (experience.technologies?.length ?? 0) - 1 && (
                <span className="mx-2 opacity-65" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
        <p
          className={cn(
            "experience-scroll-hint inline-flex items-center gap-[7px] justify-self-end text-xs text-[#776a83] [&_svg]:h-3.5 [&_svg]:w-3.5",
            usesDarkSurface && "text-[#cbb8e2]",
          )}
          aria-hidden="true"
        >
          {index === count - 1 ? "End of the stack" : "Keep scrolling"}
          <ArrowDown />
        </p>
      </div>
    </motion.article>
  );
}

function getProjectLayoutClass(slug: string, isBento: boolean): string {
  if (!isBento) {
    return "col-span-6 min-h-[420px] max-[1120px]:min-h-[400px] max-[900px]:col-span-12 max-[900px]:min-h-[410px] max-[760px]:min-h-[390px] max-[480px]:min-h-[360px]";
  }

  if (slug === "qurban-asyik") {
    return "col-span-7 row-span-2 max-[1120px]:col-span-12 max-[1120px]:row-auto max-[1120px]:min-h-[560px] max-[900px]:min-h-[520px] max-[760px]:min-h-[500px] max-[480px]:min-h-[460px]";
  }

  if (slug === "rugefx") {
    return "col-span-12 max-[1120px]:col-span-6 max-[1120px]:row-auto max-[1120px]:min-h-[400px] max-[900px]:col-span-12 max-[900px]:min-h-[410px] max-[760px]:min-h-[390px] max-[480px]:min-h-[360px]";
  }

  return "col-span-5 max-[1120px]:col-span-6 max-[1120px]:row-auto max-[1120px]:min-h-[400px] max-[900px]:col-span-12 max-[900px]:min-h-[410px] max-[760px]:min-h-[390px] max-[480px]:min-h-[360px]";
}

interface PreviewProjectProps {
  project: PresentedProject;
  isBento: boolean;
}

function PreviewProject({ project, isBento }: PreviewProjectProps) {
  return (
    <Link
      className={cn(
        "group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#eae6ef] bg-white text-inherit transition-[transform,border-color,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:border-[#cdb8ef] hover:shadow-[0_18px_42px_rgba(53,31,80,0.09)]",
        getProjectLayoutClass(project.slug, isBento),
      )}
      data-project={project.slug}
      to="/projects/$projectSlug"
      params={{ projectSlug: project.slug }}
      aria-label={`View ${project.title} project details`}
    >
      <div
        className={cn(
          "flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#ede7fa]",
          project.project.imageFit === "contain" && "bg-[#edf2e9] p-7",
        )}
      >
        <img
          className={cn(
            "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]",
            project.project.imageFit === "contain" && "object-contain",
          )}
          src={project.project.imageSrc}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </div>
      <div className="shrink-0 px-[22px] pt-5 pb-[22px] max-[760px]:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.8px]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-normal text-[#675d73]">
              {project.summary}
            </p>
          </div>
          <ArrowUpRight
            className="mt-[3px] shrink-0 text-[#7c3aed] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            aria-hidden="true"
          />
        </div>
        <div
          className="mt-[15px] flex flex-wrap gap-[7px]"
          aria-label="Technology stack"
        >
          {project.project.technologies.map((technology) => (
            <span
              key={technology.label}
              className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#f0e9fb] text-[#6f2bd7] [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:fill-current"
              title={technology.label}
              aria-label={technology.label}
            >
              <technology.icon aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
