import { useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Linkedin,
} from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Link } from "@tanstack/react-router";
import indonesiaMap from "@/assets/indonesia.svg";
import { workExperiences, type WorkExperience } from "@/lib/data";
import {
  presentedProjects,
  type PresentedProject,
} from "@/lib/project-presentation";
import AboutSection from "@/components/sections/about-section";
import { Button, LinkButton } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const categories = ["All", "Mobile", "Websites"] as const;
const navigationItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "projects"],
] as const;
const resume =
  "https://docs.google.com/document/d/1Fh4tgO5LSXGCdzDGPtST5pniM-a08Ar-O8dW1SvMmDY/edit?usp=sharing";
const sectionTitleClass =
  "font-display text-[44px] leading-[1.15] font-semibold tracking-[-2px] max-[760px]:text-[35px]";
const heroCardClass = "rounded-[25px]";
const socialCardClass =
  "relative flex h-full min-h-[180px] min-w-0 flex-col overflow-hidden rounded-[25px] px-[30px] py-[26px] transition-transform duration-200 hover:-translate-y-1 max-[1120px]:min-h-[170px] max-[760px]:min-h-[158px] max-[760px]:p-6 max-[480px]:p-[22px]";
const portfolioRootClass =
  "bg-portfolio-canvas text-portfolio-ink min-h-screen font-sans [&_a]:no-underline [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-offset-[5px] [&_a:focus-visible]:outline-portfolio-focus [&_button:focus-visible]:outline-[3px] [&_button:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:outline-portfolio-focus motion-reduce:[&_*]:scroll-auto motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:transition-none";
const experienceStackClass =
  "relative h-[280svh] pl-[52px] max-[760px]:pl-9 max-[480px]:pl-0 max-[360px]:h-auto max-[360px]:pl-0 short-viewport:h-auto short-viewport:pl-0 motion-reduce:h-auto motion-reduce:pl-0";
const experienceStageClass =
  "sticky top-(--experience-stack-top) h-[calc(100svh-var(--experience-stack-top)-15px)] before:absolute before:top-[38px] before:bottom-0 before:left-[-37px] before:w-px before:bg-portfolio-divider-strong max-[760px]:before:left-[-27px] max-[480px]:before:hidden max-[360px]:relative max-[360px]:top-auto max-[360px]:h-auto short-viewport:relative short-viewport:top-auto short-viewport:h-auto short-viewport:before:hidden motion-reduce:relative motion-reduce:top-auto motion-reduce:h-auto motion-reduce:before:hidden";
const experienceCardClass =
  "absolute inset-x-0 top-0 min-h-[470px] rounded-[25px] border border-portfolio-stack-border bg-white text-portfolio-ink shadow-portfolio-stack before:absolute before:top-[31px] before:left-[-45px] before:size-[15px] before:rounded-full before:border-2 before:border-portfolio-brand before:bg-portfolio-canvas before:shadow-portfolio-timeline-dot max-[760px]:min-h-[580px] max-[760px]:before:top-[34px] max-[760px]:before:left-[-34px] max-[760px]:before:size-[13px] max-[480px]:min-h-[600px] max-[480px]:rounded-[20px] max-[480px]:before:hidden max-[360px]:relative max-[360px]:inset-auto max-[360px]:mb-5 max-[360px]:min-h-0 max-[360px]:transform-none! short-viewport:relative short-viewport:inset-auto short-viewport:mb-5 short-viewport:min-h-0 short-viewport:transform-none! motion-reduce:relative motion-reduce:inset-auto motion-reduce:mb-5 motion-reduce:min-h-0 motion-reduce:transform-none!";

interface HeroCardMotion {
  bounce: number;
  delay: number;
  duration: number;
}

const heroRevealEase: [number, number, number, number] = [0.19, 1, 0.22, 1];
const heroCardVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "scale(0.975)",
  },
  visible: ({ bounce, delay, duration }: HeroCardMotion) => ({
    opacity: 1,
    transform: "scale(1)",
    transition: {
      opacity: { delay, duration: 0.22, ease: heroRevealEase },
      transform: { bounce, delay, duration, type: "spring" },
    },
  }),
};
const heroTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { delay, duration: 0.22, ease: heroRevealEase },
  }),
};
const desktopHeroDelays = {
  main: 0,
  about: 0.06,
  github: 0.1,
  linkedin: 0.14,
  x: 0.18,
  location: 0.22,
  current: 0.26,
};
const stackedHeroDelays = {
  main: 0,
  github: 0.06,
  linkedin: 0.1,
  x: 0.14,
  about: 0.18,
  location: 0.22,
  current: 0.26,
};

let hasPlayedHeroEntrance = false;

export default function PortfolioSite() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.slice(1) || "home",
  );
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pendingSectionRef = useRef<string | null>(null);
  const [shouldPlayHeroEntrance] = useState(() => !hasPlayedHeroEntrance);
  const [usesStackedHeroLayout] = useState(
    () => window.matchMedia("(max-width: 1120px)").matches,
  );
  const shouldReduceHeroMotion = useReducedMotion();
  const shouldAnimateHeroCards =
    shouldPlayHeroEntrance && !shouldReduceHeroMotion;
  const heroCardInitial = shouldAnimateHeroCards ? "hidden" : false;
  const heroDelays = usesStackedHeroLayout
    ? stackedHeroDelays
    : desktopHeroDelays;
  const visibleProjects = presentedProjects.filter(
    ({ project }) => category === "All" || project.category === category,
  );

  useEffect(() => {
    if (shouldPlayHeroEntrance) {
      hasPlayedHeroEntrance = true;
    }
  }, [shouldPlayHeroEntrance]);

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash.slice(1) || "home");
    };

    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenuThenScroll = (sectionId: string) => {
    pendingSectionRef.current = sectionId;
    setMenuOpen(false);
  };

  const completeMobileNavigation = () => {
    const sectionId = pendingSectionRef.current;
    if (!sectionId) return;

    pendingSectionRef.current = null;
    window.requestAnimationFrame(() => {
      window.history.pushState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: shouldReduceHeroMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className={portfolioRootClass}>
      <div className="mx-auto max-w-[1280px] px-8 max-[1120px]:px-6 max-[760px]:px-[18px] max-[480px]:px-[14px]">
        <header
          className={cn(
            "border-portfolio-border-soft relative mt-4 mb-5 flex h-[76px] items-center justify-between rounded-[24px] border bg-white px-5 pl-7",
            "max-[760px]:mt-3 max-[760px]:mb-4 max-[760px]:grid max-[760px]:h-auto max-[760px]:grid-cols-[1fr_auto] max-[760px]:px-3 max-[760px]:py-3 max-[760px]:pl-5",
            menuOpen && "max-[760px]:shadow-portfolio-card",
          )}
        >
          <a
            href="#home"
            className="font-display text-[28px] font-bold tracking-[-2px]"
            onClick={(event) => {
              if (!menuOpen) return;
              event.preventDefault();
              closeMenuThenScroll("home");
            }}
          >
            RugeFX
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 text-sm min-[760px]:flex"
          >
            {navigationItems.map(([label, id]) => {
              const isActive = activeSection === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2.5 font-medium transition-colors duration-150",
                    isActive
                      ? "bg-portfolio-tint text-portfolio-brand"
                      : "text-portfolio-ink hover:bg-portfolio-canvas",
                  )}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <LinkButton
            size="sm"
            className="h-10 gap-2.5 px-4 max-[760px]:hidden"
            href="mailto:zackfxg@gmail.com"
          >
            Contact me
            <ArrowUpRight
              size={17}
              data-icon="inline-end"
              data-direction="diagonal"
            />
          </LinkButton>
          <Button
            variant="ghost"
            size="icon"
            ref={menuButtonRef}
            className="text-portfolio-brand max-[760px]:bg-portfolio-tint max-[760px]:data-hovered:bg-portfolio-tint-active hidden max-[760px]:flex max-[760px]:size-12"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onPress={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
          <AnimatePresence
            initial={false}
            onExitComplete={completeMobileNavigation}
          >
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                className="col-span-2 hidden overflow-hidden max-[760px]:block"
                initial={
                  shouldReduceHeroMotion ? false : { height: 0, opacity: 0 }
                }
                animate={{ height: "auto", opacity: 1 }}
                exit={
                  shouldReduceHeroMotion
                    ? { display: "none" }
                    : { height: 0, opacity: 0 }
                }
                transition={
                  shouldReduceHeroMotion
                    ? { duration: 0 }
                    : {
                        height: { duration: 0.22, ease: heroRevealEase },
                        opacity: { duration: 0.16, ease: "easeOut" },
                      }
                }
              >
                <div className="border-portfolio-border-soft mt-3 border-t pt-2">
                  {navigationItems.map(([label, id]) => {
                    const isActive = activeSection === id;

                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "group/nav font-display flex min-h-14 items-center justify-between rounded-[15px] px-4 text-[18px] font-medium tracking-[-0.4px] transition-colors duration-150",
                          isActive
                            ? "bg-portfolio-tint text-portfolio-brand"
                            : "text-portfolio-ink hover:bg-portfolio-canvas",
                        )}
                        onClick={(event) => {
                          event.preventDefault();
                          closeMenuThenScroll(id);
                        }}
                      >
                        <span>{label}</span>
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            className="bg-portfolio-brand size-2 rounded-full"
                          />
                        ) : (
                          <ArrowRight
                            aria-hidden="true"
                            className="text-portfolio-copy-subtle size-[18px] transition-transform duration-150 group-hover/nav:translate-x-0.5"
                          />
                        )}
                      </a>
                    );
                  })}
                  <a
                    className="group/contact bg-portfolio-brand font-display mt-2 flex min-h-14 items-center justify-between rounded-[15px] px-4 text-[18px] font-medium tracking-[-0.4px] text-white"
                    href="mailto:zackfxg@gmail.com"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Contact me</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-[18px] transition-transform duration-150 group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>
        <main>
          <MotionConfig reducedMotion="user">
            <motion.section
              id="home"
              className="grid scroll-mt-6 grid-cols-[1.15fr_1fr] gap-[22px] max-[1120px]:grid-cols-1 max-[760px]:gap-4"
              aria-label="Introduction"
              initial={
                shouldPlayHeroEntrance && shouldReduceHeroMotion
                  ? { opacity: 0 }
                  : false
              }
              animate={
                shouldPlayHeroEntrance && shouldReduceHeroMotion
                  ? { opacity: 1 }
                  : undefined
              }
              transition={{ duration: 0.15, ease: heroRevealEase }}
            >
              <div className="flex min-w-0 flex-col gap-5 max-[760px]:gap-4">
                <motion.div
                  className={cn(
                    heroCardClass,
                    "bg-portfolio-brand flex-1 p-12 text-white max-[1120px]:p-[clamp(36px,6vw,56px)] max-[760px]:px-[30px] max-[760px]:py-[34px] max-[480px]:px-6 max-[480px]:py-[30px] min-[1121px]:min-h-[540px]",
                  )}
                  data-hero-motion="main"
                  variants={heroCardVariants}
                  initial={heroCardInitial}
                  animate="visible"
                  custom={{
                    bounce: 0.1,
                    delay: heroDelays.main,
                    duration: 0.52,
                  }}
                >
                  <motion.h1
                    className="font-display mb-[35px] text-[clamp(65px,7.8vw,108px)] leading-[1.02] font-semibold tracking-[-7px] max-[1120px]:text-[clamp(76px,11vw,108px)] max-[1120px]:tracking-[-6px] max-[760px]:mb-[25px] max-[760px]:text-[clamp(66px,16vw,92px)] max-[760px]:tracking-[-4px] max-[480px]:text-[clamp(58px,18vw,78px)] max-[480px]:tracking-[-3px]"
                    variants={heroTextVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={0.08}
                  >
                    Ahmad
                    <br />
                    Zacky<span>.</span>
                  </motion.h1>
                  <motion.div
                    variants={heroTextVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={0.15}
                  >
                    <h2 className="mb-6 text-[26px] font-medium tracking-[-1px] max-[760px]:text-2xl">
                      Software engineer
                    </h2>
                    <p className="text-portfolio-on-brand text-[21px] leading-[1.55] max-[760px]:text-[19px]">
                      Building web, mobile, and
                      <br className="desktop-break" /> connected systems.
                    </p>
                    <div className="mt-[42px] flex flex-wrap gap-3.5 max-[1120px]:gap-2.5 max-[760px]:mt-8 max-[480px]:grid max-[480px]:grid-cols-1">
                      <LinkButton
                        variant="inverse"
                        size="lg"
                        className="max-[1120px]:h-12 max-[1120px]:px-[18px] max-[480px]:w-full"
                        href="mailto:zackfxg@gmail.com"
                      >
                        Get in touch
                        <ArrowUpRight
                          data-icon="inline-end"
                          data-direction="diagonal"
                        />
                      </LinkButton>
                      <LinkButton
                        variant="inverse-outline"
                        size="lg"
                        className="max-[1120px]:h-12 max-[1120px]:px-[18px] max-[480px]:w-full"
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View resume
                      </LinkButton>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-2 max-[760px]:gap-4">
                  <motion.div
                    data-hero-motion="github"
                    variants={heroCardVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={{
                      bounce: 0.12,
                      delay: heroDelays.github,
                      duration: 0.43,
                    }}
                  >
                    <a
                      className={cn(
                        socialCardClass,
                        "bg-portfolio-ink-strong text-white",
                      )}
                      href="https://github.com/RugeFX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiGithub size={38} aria-hidden="true" />
                      <ArrowUpRight className="absolute top-[27px] right-[25px]" />
                      <h2 className="mt-[18px] mb-1 text-[23px] font-medium tracking-[-0.8px] max-[480px]:text-xl">
                        GitHub
                      </h2>
                      <span className="text-portfolio-on-dark-muted text-sm">
                        RugeFX
                      </span>
                    </a>
                  </motion.div>
                  <motion.div
                    data-hero-motion="linkedin"
                    variants={heroCardVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={{
                      bounce: 0.12,
                      delay: heroDelays.linkedin,
                      duration: 0.43,
                    }}
                  >
                    <a
                      className={cn(
                        socialCardClass,
                        "bg-portfolio-tint text-portfolio-brand-strong",
                      )}
                      href="https://linkedin.com/in/rugefx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin size={38} aria-hidden="true" />
                      <ArrowUpRight className="absolute top-[27px] right-[25px]" />
                      <h2 className="text-portfolio-ink mt-[18px] mb-1 text-[23px] font-medium tracking-[-0.8px] max-[480px]:text-xl">
                        LinkedIn
                      </h2>
                      <span className="text-sm">Ahmad Zacky</span>
                    </a>
                  </motion.div>
                  <motion.div
                    className="max-[760px]:col-span-2"
                    data-hero-motion="x"
                    variants={heroCardVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={{
                      bounce: 0.12,
                      delay: heroDelays.x,
                      duration: 0.43,
                    }}
                  >
                    <a
                      className={cn(
                        socialCardClass,
                        "border-portfolio-border text-portfolio-ink border bg-white max-[760px]:min-h-[140px]",
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
                      <span className="text-portfolio-copy-muted text-sm">
                        @RugeDev
                      </span>
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-5 max-[760px]:gap-4">
                <motion.div
                  className="border-portfolio-border-soft flex-1 rounded-[25px] border bg-white p-11 max-[1120px]:p-[clamp(34px,5vw,52px)] max-[760px]:p-[30px]"
                  data-hero-motion="about"
                  variants={heroCardVariants}
                  initial={heroCardInitial}
                  animate="visible"
                  custom={{
                    bounce: 0.1,
                    delay: heroDelays.about,
                    duration: 0.52,
                  }}
                >
                  <h2 className="font-display mb-7 text-[33px] font-semibold tracking-[-1.3px] max-[1120px]:text-[32px] max-[760px]:text-[28px]">
                    A bit about me.
                  </h2>
                  <p className="mb-[26px] text-[21px] leading-[1.6] last:mb-0 max-[1120px]:max-w-[38ch] max-[1120px]:text-xl max-[760px]:max-w-none max-[760px]:text-lg">
                    I'm a primarily self-taught developer based in Bekasi,
                    Indonesia.
                  </p>
                  <p className="mb-[26px] text-[21px] leading-[1.6] last:mb-0 max-[1120px]:max-w-[38ch] max-[1120px]:text-xl max-[760px]:max-w-none max-[760px]:text-lg">
                    My work spans mobile commerce apps, websites, and
                    operational dashboards that connect with on-site devices.
                  </p>
                </motion.div>
                <div className="grid min-h-[260px] flex-1 grid-cols-2 gap-5 max-[1120px]:min-h-[280px] max-[760px]:min-h-[235px] max-[760px]:gap-4 max-[480px]:min-h-0 max-[480px]:flex-none max-[480px]:grid-cols-1">
                  <motion.div
                    className="bg-portfolio-tint relative flex flex-col overflow-hidden rounded-[25px] p-[27px] max-[1120px]:p-[30px] max-[760px]:p-[22px] max-[480px]:min-h-[220px]"
                    data-hero-motion="location"
                    variants={heroCardVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={{
                      bounce: 0.12,
                      delay: heroDelays.location,
                      duration: 0.43,
                    }}
                  >
                    <h2 className="text-[23px] leading-[1.4] font-medium tracking-[-0.8px] max-[760px]:text-[21px]">
                      Bekasi,
                      <br />
                      Indonesia
                    </h2>
                    <div className="relative min-h-[140px] flex-1">
                      <IndonesiaLocationMap />
                    </div>
                  </motion.div>
                  <motion.a
                    className="bg-portfolio-ink-strong flex flex-col rounded-[25px] p-7 text-white max-[1120px]:p-[30px] max-[760px]:p-[22px] max-[480px]:min-h-[220px]"
                    href="#experience"
                    data-hero-motion="current"
                    variants={heroCardVariants}
                    initial={heroCardInitial}
                    animate="visible"
                    custom={{
                      bounce: 0.12,
                      delay: heroDelays.current,
                      duration: 0.43,
                    }}
                  >
                    <h2 className="text-[23px] leading-[1.4] font-medium tracking-[-0.8px] max-[760px]:text-[21px]">
                      Currently
                    </h2>
                    <p className="my-5 mb-8 text-[22px] leading-normal max-[1120px]:max-w-[22ch] max-[760px]:text-[19px]">
                      Building operational tools at Nauchara.
                    </p>
                    <span className="text-portfolio-on-dark-accent mt-auto flex items-center gap-1.5 text-sm max-[760px]:text-xs">
                      My experience <ArrowUpRight size={17} />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.section>
          </MotionConfig>
          <div className="mt-[75px] max-[760px]:mt-[45px]">
            <AboutSection />
          </div>
          <section
            className="scroll-mt-6 pt-[76px] [--experience-stack-step:74px] [--experience-stack-top:18px] max-[760px]:pt-[52px] max-[760px]:[--experience-stack-step:76px] max-[760px]:[--experience-stack-top:12px] max-[480px]:[--experience-stack-step:70px] max-[480px]:[--experience-stack-top:10px]"
            id="experience"
          >
            <div className="mb-9 flex items-end justify-between gap-[30px] max-[760px]:mb-7 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
              <h2 className={sectionTitleClass}>Experience</h2>
              <p className="text-portfolio-copy-muted flex items-center gap-2.5 text-sm leading-normal max-[760px]:max-w-[34ch] [&_svg]:h-[17px] [&_svg]:w-[17px]">
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
              <ToggleGroup
                className="flex flex-wrap gap-[5px] max-[480px]:gap-1"
                aria-label="Filter projects"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={[category]}
                onSelectionChange={(keys) => {
                  const selectedCategory = Array.from(keys)[0];

                  if (
                    typeof selectedCategory === "string" &&
                    categories.includes(
                      selectedCategory as (typeof categories)[number],
                    )
                  ) {
                    setCategory(
                      selectedCategory as (typeof categories)[number],
                    );
                  }
                }}
              >
                {categories.map((item) => (
                  <ToggleGroupItem
                    className="max-[480px]:px-[11px]"
                    key={item}
                    id={item}
                    size="default"
                  >
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
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
        <footer className="bg-portfolio-brand mt-20 rounded-t-[25px] p-[45px] text-white max-[760px]:px-6 max-[760px]:py-[30px]">
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
          <div className="border-portfolio-footer-line text-portfolio-on-brand mt-[50px] flex flex-wrap justify-between gap-5 border-t pt-7 text-xs">
            <span>© {new Date().getFullYear()} Ahmad Zacky</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function IndonesiaLocationMap() {
  const maskId = `indonesia-map-${useId().replace(/:/g, "")}`;

  return (
    <svg
      aria-hidden="true"
      className="text-portfolio-brand absolute inset-x-[-10px] bottom-[-6px] h-[132px] w-[calc(100%+20px)] overflow-visible"
      preserveAspectRatio="xMidYMid meet"
      viewBox="-2.65 150.83 1210.3 561.34"
    >
      <defs>
        <mask
          id={maskId}
          x="-2.65"
          y="150.83"
          width="1210.3"
          height="561.34"
          maskUnits="userSpaceOnUse"
        >
          <image
            href={indonesiaMap}
            x="-2.65"
            y="150.83"
            width="1210.3"
            height="561.34"
            preserveAspectRatio="none"
          />
        </mask>
      </defs>

      <rect
        className="fill-current opacity-20"
        x="-2.65"
        y="150.83"
        width="1210.3"
        height="561.34"
        mask={`url(#${maskId})`}
      />

      <g transform="translate(311 569)">
        <circle
          className="motion-safe:animate-location-pulse origin-center fill-current [transform-box:fill-box]"
          r="22"
        />
        <circle
          className="stroke-portfolio-tint fill-current"
          r="17"
          strokeWidth="8"
        />
      </g>
    </svg>
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
    <div className={experienceStackClass} ref={stackRef}>
      <div className={experienceStageClass} ref={stageRef}>
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
      className={cn(
        experienceCardClass,
        index === 0 && "bg-portfolio-tint",
        index === 1 &&
          "border-portfolio-brand bg-portfolio-brand before:bg-portfolio-brand text-white",
        index === 3 &&
          "border-portfolio-ink-strong bg-portfolio-ink-strong before:border-portfolio-ink-strong before:bg-portfolio-ink-strong text-white",
      )}
      style={reduceMotion ? { zIndex: 10 + index } : { y, zIndex: 10 + index }}
    >
      <header
        className={cn(
          "border-portfolio-stack-line grid min-h-[84px] grid-cols-[minmax(0,1.35fr)_minmax(150px,0.8fr)_auto] items-center gap-7 border-b px-[34px] py-5 max-[760px]:min-h-[86px] max-[760px]:grid-cols-[minmax(0,1fr)_auto] max-[760px]:gap-x-4 max-[760px]:gap-y-[5px] max-[760px]:px-[22px] max-[760px]:py-[15px] max-[480px]:min-h-20 max-[480px]:px-[18px] max-[480px]:py-3.5",
          usesDarkSurface && "border-white/20",
        )}
      >
        <h3 className="font-display overflow-hidden text-xl leading-tight font-semibold tracking-[-0.6px] text-ellipsis whitespace-nowrap max-[760px]:col-span-2 max-[760px]:text-[17px] max-[480px]:text-[15px]">
          {experience.company}
        </h3>
        <p
          className={cn(
            "text-sm leading-[1.4] max-[760px]:text-xs max-[480px]:text-[11px]",
            usesDarkSurface && "text-portfolio-on-brand-muted",
          )}
        >
          {experience.position}
        </p>
        <span
          className={cn(
            "text-sm leading-[1.4] whitespace-nowrap max-[760px]:text-xs max-[480px]:text-[11px]",
            usesDarkSurface && "text-portfolio-on-brand-muted",
          )}
        >
          {experience.duration}
        </span>
      </header>
      <div className="grid-areas-experience max-[760px]:grid-areas-experience-single grid min-h-[385px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] gap-x-[50px] gap-y-7 px-[42px] pt-[38px] pb-[30px] max-[760px]:min-h-[494px] max-[760px]:grid-cols-1 max-[760px]:gap-[26px] max-[760px]:px-6 max-[760px]:pt-[30px] max-[760px]:pb-6 max-[480px]:min-h-[518px] max-[480px]:px-5 max-[480px]:pt-[26px] max-[480px]:pb-[21px]">
        <p className="grid-area-lead font-display max-w-[31ch] text-[23px] leading-[1.4] font-medium tracking-[-0.7px] max-[760px]:max-w-[35ch] max-[760px]:text-[21px] max-[480px]:text-[19px]">
          {experience.description[0]}
        </p>
        <div
          className={cn(
            "grid-area-details border-portfolio-stack-line-strong border-l pl-[42px] max-[760px]:border-t max-[760px]:border-l-0 max-[760px]:pt-[25px] max-[760px]:pl-0",
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
            "grid-area-tech text-portfolio-copy-muted flex flex-wrap self-end text-[13px] leading-[1.7]",
            usesDarkSurface && "text-portfolio-on-dark-muted",
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
            "grid-area-hint text-portfolio-copy-subtle inline-flex items-center gap-[7px] justify-self-end text-xs [&_svg]:h-3.5 [&_svg]:w-3.5",
            usesDarkSurface && "text-portfolio-on-dark-muted",
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
        "group border-portfolio-border-soft hover:border-portfolio-border-hover hover:shadow-portfolio-card flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-white text-inherit transition-[transform,border-color,box-shadow] duration-250 ease-in-out hover:-translate-y-1",
        getProjectLayoutClass(project.slug, isBento),
      )}
      data-project={project.slug}
      to="/projects/$projectSlug"
      params={{ projectSlug: project.slug }}
      aria-label={`View ${project.title} project details`}
    >
      <div
        className={cn(
          "bg-portfolio-tint flex min-h-0 flex-1 items-center justify-center overflow-hidden",
          project.project.imageFit === "contain" && "bg-portfolio-media p-7",
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
            <p className="text-portfolio-copy-muted mt-1 text-sm leading-normal">
              {project.summary}
            </p>
          </div>
          <ArrowUpRight
            className="text-portfolio-brand mt-[3px] shrink-0 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
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
              className="bg-portfolio-tint-soft text-portfolio-brand-strong inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:fill-current"
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
