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

const projects = [
  {
    title: "Cloud Infrastructure Platform",
    description:
      "Infrastructure-as-Code platform for provisioning and managing cloud resources with a focus on reproducibility, security, and automation.",
    technologies: ["GCP", "Terraform", "VPC", "IAM"],
  },
  {
    title: "Kubernetes Platform",
    description:
      "Cloud-native platform for deploying and operating containerized applications with Kubernetes, Helm, scaling, and production-oriented workloads.",
    technologies: ["Kubernetes", "Docker", "Helm", "GKE"],
  },
  {
    title: "GitOps CI/CD Platform",
    description:
      "End-to-end deployment workflow using CI/CD, immutable container images, GitOps-based environment promotion, and ArgoCD.",
    technologies: ["GitLab CI/CD", "Docker", "ArgoCD", "GitOps"],
  },
  {
    title: "Observability Platform",
    description:
      "Monitoring and alerting stack for cloud-native applications with metrics, dashboards, alerting, and operational visibility.",
    technologies: ["Prometheus", "Grafana", "Alertmanager", "Kubernetes"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          Asrita Engineering
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p>PLATFORM ENGINEER • CLOUD • DEVOPS</p>

        <h1>
          {profile.name}
        </h1>

        <h2 className="hero-title">
          Building reliable cloud infrastructure
          <br />
          and developer platforms.
        </h2>

        <p>
          Platform Engineer focused on cloud infrastructure, Kubernetes,
          infrastructure as code, CI/CD, GitOps, and observability.
        </p>

        <div className="hero-links">
          <a href="#projects">View Projects</a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="/resume.pdf">
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <p>ABOUT</p>

        <h2>Platform engineering focused on reliability and automation.</h2>

        <p>
          I am a Platform Engineer focused on building and operating reliable
          cloud infrastructure and developer platforms. My work spans
          Kubernetes, infrastructure as code, CI/CD, GitOps, observability,
          and production systems.
        </p>

        <p>
          I enjoy solving infrastructure problems, automating repetitive
          workflows, improving system reliability, and building platforms
          that make software delivery faster and more predictable.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <p>TECHNOLOGIES</p>

        <h2>Tools and technologies I work with.</h2>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>

              <div>
                {group.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <p>SELECTED WORK</p>

        <h2>Engineering projects</h2>

        <div>
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <p>EXPERIENCE</p>

        <h2>My engineering journey.</h2>

        <div className="experience-list">
          <article>
            <div className="experience-header">
              <div>
                <h3>Platform Engineer</h3>
                <p className="company">ZoloStays</p>
              </div>

              <span>2024 — 2026</span>
            </div>

            <p>
              Worked on cloud infrastructure, Kubernetes workloads, CI/CD
              automation, GitOps deployments, observability, database
              infrastructure, and production troubleshooting.
            </p>

            <div>
              <span>GCP</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
              <span>GitLab CI/CD</span>
              <span>ArgoCD</span>
              <span>Prometheus</span>
              <span>Grafana</span>
            </div>
          </article>

          <article>
            <div className="experience-header">
              <div>
                <h3>Platform Engineer</h3>
                <p className="company">Quantiphi</p>
              </div>

              <span>2026 — Present</span>
            </div>

            <p>
              Working on cloud and platform engineering initiatives focused on
              infrastructure, automation, deployment, and reliability.
            </p>

            <div>
              <span>GCP</span>
              <span>Cloud</span>
              <span>Platform Engineering</span>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p>CONTACT</p>

        <h2>Let's build something reliable.</h2>

        <p>
          Interested in platform engineering, cloud infrastructure, or
          DevOps? Let's connect.
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            Email
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Asrita Engineering</p>
      </footer>
    </main>
  );
}