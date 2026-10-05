import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/projects";

const profile = {
  name: "Chanda Asrita",
  github: "https://github.com/asrita-engineering",
  linkedin: "https://www.linkedin.com/in/asrita-chanda/",
  email: "asritachanda@gmail.com",
};

const skillGroups = [
  {
    category: "Cloud",
    technologies: ["GCP", "AWS"],
  },
  {
    category: "Platform & Containers",
    technologies: ["Kubernetes", "Docker", "Helm", "GKE"],
  },
  {
    category: "Infrastructure as Code",
    technologies: ["Terraform"],
  },
  {
    category: "CI/CD & GitOps",
    technologies: ["GitLab CI/CD", "ArgoCD", "Git"],
  },
  {
    category: "Observability",
    technologies: ["Prometheus", "Grafana", "Datadog", "EFK"],
  },
  {
    category: "Databases & Messaging",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka"],
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero">
          <p className="eyebrow">Platform Engineer · Cloud · DevOps</p>

          <h1 className="hero-name">{profile.name}</h1>

          <h2 className="hero-title">
            Building reliable cloud infrastructure
            <br />
            and <span className="accent">developer platforms</span>.
          </h2>

          <p className="hero-summary">
            Platform Engineer focused on cloud infrastructure, Kubernetes,
            infrastructure as code, CI/CD, GitOps, and observability.
          </p>

          <div className="button-row">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>

            <a
              href={profile.github}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="/resume.pdf" className="button">
              Resume
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <p className="eyebrow">01 — About</p>

          <h2>Platform engineering focused on reliability and automation.</h2>

          <div className="prose">
            <p>
              I am a Platform Engineer focused on building and operating
              reliable cloud infrastructure and developer platforms. My work
              spans Kubernetes, infrastructure as code, CI/CD, GitOps,
              observability, and production systems.
            </p>

            <p>
              I enjoy solving infrastructure problems, automating repetitive
              workflows, improving system reliability, and building platforms
              that make software delivery faster and more predictable.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <p className="eyebrow">02 — Technologies</p>

          <h2>Tools and technologies I work with.</h2>

          <div className="card-grid">
            {skillGroups.map((group) => (
              <div className="card skill-group" key={group.category}>
                <h3>{group.category}</h3>

                <div className="tag-list">
                  {group.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <p className="eyebrow">03 — Selected Work</p>

          <h2>Engineering projects</h2>

          <div className="card-grid project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <p className="eyebrow">04 — Experience</p>

          <h2>My engineering journey.</h2>

          <ol className="timeline">
            <li className="timeline-item timeline-item-current">
              <div className="experience-header">
                <div>
                  <h3>Platform Engineer</h3>
                  <p className="company">Quantiphi</p>
                </div>

                <span className="experience-dates">2026 — Present</span>
              </div>

              <p>
                Working on cloud and platform engineering initiatives focused
                on infrastructure, automation, deployment, and reliability.
              </p>

              <div className="tag-list">
                <span className="tag">GCP</span>
                <span className="tag">Cloud</span>
                <span className="tag">Platform Engineering</span>
              </div>
            </li>

            <li className="timeline-item">
              <div className="experience-header">
                <div>
                  <h3>Platform Engineer</h3>
                  <p className="company">ZoloStays</p>
                </div>

                <span className="experience-dates">2024 — 2026</span>
              </div>

              <p>
                Worked on cloud infrastructure, Kubernetes workloads, CI/CD
                automation, GitOps deployments, observability, database
                infrastructure, and production troubleshooting.
              </p>

              <div className="tag-list">
                <span className="tag">GCP</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">Terraform</span>
                <span className="tag">GitLab CI/CD</span>
                <span className="tag">ArgoCD</span>
                <span className="tag">Prometheus</span>
                <span className="tag">Grafana</span>
              </div>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <p className="eyebrow">05 — Contact</p>

          <h2>Let&apos;s build something reliable.</h2>

          <div className="prose">
            <p>
              Interested in platform engineering, cloud infrastructure, or
              DevOps? Let&apos;s connect.
            </p>
          </div>

          <div className="button-row">
            <a href={`mailto:${profile.email}`} className="button button-primary">
              Email
            </a>

            <a
              href={profile.linkedin}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
