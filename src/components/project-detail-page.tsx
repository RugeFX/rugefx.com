import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getPresentedProject } from "@/lib/project-presentation";

interface ProjectDetailPageProps {
  projectSlug: string;
}

export default function ProjectDetailPage({
  projectSlug,
}: ProjectDetailPageProps) {
  const presentedProject = getPresentedProject(projectSlug);

  if (!presentedProject) {
    return (
      <main className="grid min-h-screen place-content-center gap-5 text-center">
        <h1 className="font-display text-5xl">Project not found.</h1>
        <Link className="text-[#6f2bd7]" to="/">
          Return home
        </Link>
      </main>
    );
  }

  const { project, summary, title } = presentedProject;

  return (
    <div className="portfolio-site min-h-screen bg-[#f8f7fb] pb-20 font-sans text-[#21172f] max-[520px]:pb-10">
      <main className="mx-auto max-w-[1280px] px-8 max-[1120px]:px-6 max-[760px]:px-[18px] max-[480px]:px-[14px]">
        <nav
          className="flex min-h-28 items-center justify-between gap-6 max-[520px]:min-h-[88px]"
          aria-label="Project navigation"
        >
          <Link
            className="inline-flex items-center gap-[9px] text-sm text-[#6b5f77]"
            to="/"
            hash="projects"
          >
            <ArrowLeft size={18} /> Back to selected work
          </Link>
          <Link
            to="/"
            className="font-display text-[32px] font-bold tracking-[-2px] max-[760px]:text-[28px] max-[520px]:text-2xl"
          >
            RugeFX
          </Link>
        </nav>

        <article className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-5 max-[900px]:grid-cols-1">
          <header className="overflow-hidden rounded-[25px] bg-[#7c3aed] p-[clamp(34px,5vw,60px)] text-white max-[520px]:px-6 max-[520px]:py-[30px]">
            <p className="text-sm text-[#e6d6ff]">{project.category}</p>
            <h1 className="font-display my-[34px] text-[clamp(54px,7vw,88px)] leading-[0.98] tracking-[-5px] max-[520px]:text-[54px] max-[520px]:tracking-[-3px]">
              {title}
            </h1>
            <h2 className="max-w-[24ch] text-[21px] leading-normal font-normal text-[#f0e8ff]">
              {summary}
            </h2>
            <div
              className="mt-[42px] flex flex-wrap gap-[9px]"
              aria-label="Technology stack"
            >
              {project.technologies.map((technology) => (
                <span
                  className="inline-flex items-center gap-2 rounded-[9px] border border-[#c8a8fb] px-[11px] py-2 text-xs [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:fill-current"
                  key={technology.label}
                  title={technology.label}
                >
                  <technology.icon aria-hidden="true" />
                  {technology.label}
                </span>
              ))}
            </div>
          </header>

          {project.imageSrc && (
            <div className="grid min-h-[540px] place-items-center overflow-hidden rounded-[25px] bg-[#ede7fa] p-11 max-[900px]:min-h-[460px] max-[520px]:min-h-80 max-[520px]:p-6">
              <img
                className="h-full w-full object-contain"
                src={project.imageSrc}
                alt={`${title} project preview`}
              />
            </div>
          )}

          <div className="col-span-full grid grid-cols-[0.65fr_1.35fr] gap-[50px] overflow-hidden rounded-[25px] border border-[#eae6ef] bg-white p-11 max-[900px]:grid-cols-1 max-[900px]:gap-5 max-[520px]:px-6 max-[520px]:py-[30px]">
            <h2 className="font-display text-[28px] font-semibold tracking-[-1px]">
              About the project
            </h2>
            <p className="leading-[1.8] text-[#675d73]">
              {project.description}
            </p>
            <div className="col-start-2 flex flex-wrap gap-3 max-[900px]:col-start-1">
              {project.siteUrl && (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#ede7fa] px-[15px] py-[11px] text-[13px] text-[#6423c9]"
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.siteLinkLabel ?? "Visit project"}
                  <ArrowUpRight size={17} />
                </a>
              )}
              {project.additionalLinks?.map((link) => (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#ede7fa] px-[15px] py-[11px] text-[13px] text-[#6423c9]"
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight size={17} />
                </a>
              ))}
              {project.repositoryUrl && (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#ede7fa] px-[15px] py-[11px] text-[13px] text-[#6423c9]"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
