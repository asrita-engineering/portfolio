import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasActions = project.caseStudy || project.repo;

  return (
    <article className="card project-card">
      <div className="project-card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3>{project.title}</h3>

      <p>{project.summary}</p>

      {project.highlights && (
        <ul className="highlight-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {hasActions && (
        <div className="card-actions">
          {project.caseStudy && (
            <Link href={`/projects/${project.slug}`} className="text-link">
              Read case study →
            </Link>
          )}

          {project.repo && (
            <a
              href={project.repo}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
