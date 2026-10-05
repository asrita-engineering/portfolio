import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatusBadge } from "@/components/status-badge";
import { getProject, projects } from "@/content/projects";

// Only projects with a case study get a page; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Case study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      <SiteHeader />

      <main className="case-study">
        <section className="case-study-hero">
          <Link href="/#projects" className="text-link back-link">
            ← All projects
          </Link>

          <div className="case-study-meta">
            <p className="eyebrow">Case study</p>
            <StatusBadge status={project.status} />
          </div>

          <h1>{project.title}</h1>

          <p className="hero-summary">{project.summary}</p>

          <div className="tag-list">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          {project.repo ? (
            <div className="button-row">
              <a
                href={project.repo}
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub ↗
              </a>
            </div>
          ) : (
            <p className="case-study-note">Repository will be public soon.</p>
          )}
        </section>

        <section className="case-study-section">
          <div className="card-grid">
            <div className="card">
              <p className="eyebrow">Problem</p>
              <p className="card-body">{caseStudy.problem}</p>
            </div>
            <div className="card">
              <p className="eyebrow">My role</p>
              <p className="card-body">{caseStudy.role}</p>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">01 — Architecture</p>
          <h2>What gets built.</h2>

          <div className="table-wrapper">
            <table className="architecture-table">
              <thead>
                <tr>
                  {caseStudy.architecture.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {caseStudy.architecture.rows.map(([layer, ...cells]) => (
                  <tr key={layer}>
                    <th scope="row">{layer}</th>
                    {cells.map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">02 — Key decisions</p>
          <h2>Trade-offs and why.</h2>

          <ol className="decision-list">
            {caseStudy.decisions.map((decision) => (
              <li key={decision.title}>
                <h3>{decision.title}</h3>
                <p>{decision.reason}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">03 — How it works</p>
          <h2>Pipeline, security and cost.</h2>

          <div className="card-grid">
            {caseStudy.sections.map((section) => (
              <div className="card" key={section.heading}>
                <h3>{section.heading}</h3>
                <ul className="highlight-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">04 — Progress</p>
          <h2>Where it stands.</h2>

          <ul className="milestone-list">
            {caseStudy.milestones.map((milestone) => (
              <li key={milestone.label}>
                <span>{milestone.label}</span>
                <StatusBadge status={milestone.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">05 — Next steps</p>
          <h2>What I&apos;d add next.</h2>

          <ul className="highlight-list next-steps">
            {caseStudy.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
