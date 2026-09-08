import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getPresentedProject } from "@/lib/project-presentation";
import "@/portfolio.css";

interface ProjectDetailPageProps {
  projectSlug: string;
}

export default function ProjectDetailPage({
  projectSlug,
}: ProjectDetailPageProps) {
  const presentedProject = getPresentedProject(projectSlug);

  if (!presentedProject) {
    return (
      <main className="project-detail-missing">
        <h1>Project not found.</h1>
        <Link to="/">Return home</Link>
      </main>
    );
  }

  const { project, summary, title } = presentedProject;

  return (
    <div className="portfolio-site project-detail-page">
      <main className="preview-shell">
        <nav className="project-detail-nav" aria-label="Project navigation">
          <Link to="/" hash="projects">
            <ArrowLeft size={18} /> Back to selected work
          </Link>
          <Link to="/" className="preview-wordmark">
            RugeFX
          </Link>
        </nav>

        <article className="project-detail">
          <header className="project-detail-header">
            <p>{project.category}</p>
            <h1>{title}</h1>
            <h2>{summary}</h2>
            <div className="project-detail-stack" aria-label="Technology stack">
              {project.technologies.map((technology) => (
                <span key={technology.label} title={technology.label}>
                  <technology.icon aria-hidden="true" />
                  {technology.label}
                </span>
              ))}
            </div>
          </header>

          {project.imageSrc && (
            <div className="project-detail-image">
              <img src={project.imageSrc} alt={`${title} project preview`} />
            </div>
          )}

          <div className="project-detail-copy">
            <h2>About the project</h2>
            <p>{project.description}</p>
            <div className="project-detail-links">
              {project.siteUrl && (
                <a href={project.siteUrl} target="_blank" rel="noreferrer">
                  {project.siteLinkLabel ?? "Visit project"}
                  <ArrowUpRight size={17} />
                </a>
              )}
              {project.additionalLinks?.map((link) => (
                <a
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
