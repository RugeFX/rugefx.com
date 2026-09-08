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
import "@/portfolio.css";

const categories = ["All", "Mobile", "Websites"] as const;
const resume =
  "https://docs.google.com/document/d/1Fh4tgO5LSXGCdzDGPtST5pniM-a08Ar-O8dW1SvMmDY/edit?usp=sharing";

export default function PortfolioSite() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = presentedProjects.filter(
    ({ project }) => category === "All" || project.category === category,
  );
  return (
    <div className="portfolio-site">
      <div className="preview-shell">
        <header className="preview-header">
          <a href="#home" className="preview-wordmark">
            RugeFX
          </a>
          <nav
            aria-label="Main navigation"
            className={menuOpen ? "preview-nav is-open" : "preview-nav"}
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
          <a className="preview-contact" href="mailto:zackfxg@gmail.com">
            Contact <ArrowUpRight size={19} />
          </a>
          <button
            className="preview-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        <main>
          <section id="home" className="intro-grid" aria-label="Introduction">
            <div className="intro-left">
              <div className="intro-card">
                <h1>
                  Ahmad
                  <br />
                  Zacky<span>.</span>
                </h1>
                <h2>Software engineer</h2>
                <p>
                  Building web, mobile, and
                  <br className="desktop-break" /> connected systems.
                </p>
                <div className="intro-actions">
                  <a className="preview-button" href="mailto:zackfxg@gmail.com">
                    Get in touch <ArrowUpRight size={18} />
                  </a>
                  <a
                    className="preview-button outline"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View resume
                  </a>
                </div>
              </div>
              <div className="social-grid">
                <a
                  className="social-card github-card"
                  href="https://github.com/RugeFX"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub size={38} aria-hidden="true" />
                  <ArrowUpRight className="card-arrow" />
                  <h2>GitHub</h2>
                  <span>RugeFX</span>
                </a>
                <a
                  className="social-card linkedin-card"
                  href="https://linkedin.com/in/rugefx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={38} aria-hidden="true" />
                  <ArrowUpRight className="card-arrow" />
                  <h2>LinkedIn</h2>
                  <span>Ahmad Zacky</span>
                </a>
                <a
                  className="social-card x-card"
                  href="https://twitter.com/RugeDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiX size={34} aria-hidden="true" />
                  <ArrowUpRight className="card-arrow" />
                  <h2>X</h2>
                  <span>@RugeDev</span>
                </a>
              </div>
            </div>
            <div className="intro-right">
              <div className="bio-card">
                <h2>A bit about me.</h2>
                <p>
                  I'm a primarily self-taught developer based in Bekasi,
                  Indonesia.
                </p>
                <p>
                  My work spans mobile commerce apps, websites, and operational
                  dashboards that connect with on-site devices.
                </p>
              </div>
              <div className="detail-grid">
                <div className="location-card">
                  <h2>
                    Bekasi,
                    <br />
                    Indonesia
                  </h2>
                  <div className="map-art" aria-hidden="true">
                    <div className="map-streets" />
                    <MapPin size={45} fill="currentColor" />
                  </div>
                </div>
                <a className="current-card" href="#experience">
                  <h2>Currently</h2>
                  <p>Building operational tools at Nauchara.</p>
                  <span>
                    My experience <ArrowUpRight size={17} />
                  </span>
                </a>
              </div>
            </div>
          </section>
          <div className="preview-about">
            <AboutSection />
          </div>
          <section
            className="preview-section preview-experience"
            id="experience"
          >
            <div className="experience-section-top">
              <h2>Experience</h2>
              <p>
                Scroll through the work that shaped how I build.
                <ArrowDown aria-hidden="true" />
              </p>
            </div>
            <ExperienceStack />
          </section>
          <section className="preview-section" id="projects">
            <div className="section-top">
              <h2>Selected work</h2>
              <div className="project-filters" aria-label="Filter projects">
                {categories.map((item) => (
                  <button
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
              className={`preview-projects ${category === "All" ? "is-bento" : "is-filtered"}`}
            >
              {visibleProjects.map((project) => (
                <PreviewProject key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
        <footer className="preview-footer">
          <div>
            <h2>Let’s build something.</h2>
            <a href="mailto:zackfxg@gmail.com">
              zackfxg@gmail.com <ArrowUpRight />
            </a>
          </div>
          <div className="footer-bottom">
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
      <header className="experience-card-header">
        <h3>{experience.company}</h3>
        <p>{experience.position}</p>
        <span>{experience.duration}</span>
      </header>
      <div className="experience-card-body">
        <p className="experience-card-lead">{experience.description[0]}</p>
        <div className="experience-card-details">
          <h4>What I worked on</h4>
          <ul>
            {experience.description.slice(1).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="experience-card-tech" aria-label="Technology stack">
          {experience.technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <p className="experience-scroll-hint" aria-hidden="true">
          {index === count - 1 ? "End of the stack" : "Keep scrolling"}
          <ArrowDown />
        </p>
      </div>
    </motion.article>
  );
}

function PreviewProject({ project }: { project: PresentedProject }) {
  return (
    <Link
      className="preview-project"
      data-project={project.slug}
      to="/projects/$projectSlug"
      params={{ projectSlug: project.slug }}
      aria-label={`View ${project.title} project details`}
    >
      <div
        className={`project-image ${project.project.imageFit === "contain" ? "contain" : ""}`}
      >
        <img
          src={project.project.imageSrc}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </div>
      <div className="project-copy">
        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <ArrowUpRight className="project-arrow" aria-hidden="true" />
        </div>
        <div className="project-stack" aria-label="Technology stack">
          {project.project.technologies.map((technology) => (
            <span
              key={technology.label}
              className="project-tech"
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
