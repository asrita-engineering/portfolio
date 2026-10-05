export type ProjectStatus = "complete" | "in-progress" | "planned";

export type CaseStudy = {
  problem: string;
  role: string;
  architecture: {
    columns: string[];
    rows: string[][];
  };
  decisions: {
    title: string;
    reason: string;
  }[];
  sections: {
    heading: string;
    points: string[];
  }[];
  milestones: {
    label: string;
    status: ProjectStatus;
  }[];
  nextSteps: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  technologies: string[];
  highlights?: string[];
  repo?: string;
  caseStudy?: CaseStudy;
};

export const statusLabels: Record<ProjectStatus, string> = {
  complete: "Complete",
  "in-progress": "In progress",
  planned: "Planned",
};

export const projects: Project[] = [
  {
    slug: "cloud-platform-foundation",
    title: "Cloud Platform Foundation",
    summary:
      "Multi-cloud Terraform foundation for GCP and AWS: private Kubernetes clusters, private databases, container registries, and keyless CI/CD with least-privilege IAM.",
    status: "in-progress",
    technologies: [
      "Terraform",
      "GCP",
      "AWS",
      "GKE",
      "EKS",
      "Cloud SQL",
      "RDS",
      "GitHub Actions",
    ],
    highlights: [
      "GCP and AWS from one repository",
      "No long-lived cloud credentials in CI",
      "Dev and prod from one root module",
    ],
    caseStudy: {
      problem:
        "Teams need a repeatable, secure base to run Kubernetes workloads on: networking, clusters, databases, registries, and a safe way for CI to change them. Built by hand, this drifts between environments and collects long-lived credentials and over-broad IAM.",
      role: "Solo project: architecture, Terraform modules, CI/CD pipeline, and documentation.",
      architecture: {
        columns: ["Layer", "GCP", "AWS"],
        rows: [
          [
            "State & CI access",
            "Versioned GCS bucket; GitHub → GCP via Workload Identity Federation",
            "Versioned S3 bucket with native state locking; GitHub OIDC provider",
          ],
          [
            "Network",
            "Custom VPC, secondary ranges for pods and services, Cloud NAT, Private Service Access",
            "Multi-AZ VPC, public and private subnets, NAT gateways, S3 gateway endpoint",
          ],
          [
            "Kubernetes",
            "Private GKE Standard cluster, Dataplane V2, system and spot node pools",
            "EKS with private nodes, on-demand and spot managed node groups",
          ],
          [
            "Workload identity",
            "GKE Workload Identity",
            "EKS Pod Identity",
          ],
          [
            "Database",
            "Cloud SQL Postgres, private IP only, IAM authentication, point-in-time recovery",
            "RDS Postgres in private subnets, IAM authentication, Secrets Manager–managed password",
          ],
          [
            "Registry",
            "Artifact Registry with immutable tags and cleanup policies",
            "ECR with immutable tags, scan on push, lifecycle policies",
          ],
        ],
      },
      decisions: [
        {
          title: "One root module per cloud, per-environment variables",
          reason:
            "Dev and prod share the same code and differ only in their .tfvars, so they cannot drift apart structurally.",
        },
        {
          title: "Keyless CI with OIDC federation",
          reason:
            "GitHub Actions exchanges a short-lived OIDC token for cloud credentials. There are no service account keys or access keys to leak or rotate.",
        },
        {
          title: "Separate plan and apply identities",
          reason:
            "Any workflow can use the read-only plan identity. The apply identity only trusts jobs running in protected GitHub Environments, so prod changes can require approval.",
        },
        {
          title: "GKE Standard over Autopilot",
          reason:
            "Standard exposes node pools, upgrade strategy and spot capacity: the parts a platform team actually tunes.",
        },
        {
          title: "Private databases with IAM authentication",
          reason:
            "No public endpoints and no static application passwords; workloads log in with their cloud identity.",
        },
      ],
      sections: [
        {
          heading: "Delivery pipeline",
          points: [
            "Pull requests run fmt, validate, TFLint and Checkov without any cloud credentials.",
            "Plan and apply are triggered manually per cloud and environment.",
            "Apply jobs run inside GitHub Environments, so prod can require a reviewer.",
          ],
        },
        {
          heading: "Security model",
          points: [
            "Private nodes with no public IPs; outbound traffic goes through NAT.",
            "Control-plane access limited to authorized networks.",
            "Dedicated least-privilege node identities and secure-boot nodes.",
            "Default-deny ingress; SSH only through Identity-Aware Proxy.",
          ],
        },
        {
          heading: "Cost controls",
          points: [
            "Spot workload node pools that scale to zero.",
            "Zonal dev GKE cluster, covered by the GKE free tier.",
            "Billing budget alerts at 50%, 90% and 100%.",
            "Fully reproducible, so idle environments are destroyed.",
          ],
        },
      ],
      milestones: [
        {
          label: "GCP bootstrap: state bucket, keyless CI, budgets",
          status: "in-progress",
        },
        {
          label: "GCP modules: network, GKE, Cloud SQL, Artifact Registry",
          status: "in-progress",
        },
        { label: "GCP platform root for dev and prod", status: "planned" },
        { label: "AWS bootstrap and modules", status: "planned" },
        { label: "GitHub Actions pipeline", status: "planned" },
        { label: "Architecture diagrams and documentation", status: "planned" },
      ],
      nextSteps: [
        "Policy-as-code checks on plans with OPA / Conftest",
        "Cost estimates on pull requests with Infracost",
        "Scheduled drift detection",
        "Multi-account AWS layout with AWS Organizations",
      ],
    },
  },
  {
    slug: "kubernetes-platform",
    title: "Kubernetes Platform",
    summary:
      "Cloud-native platform for deploying and operating containerized applications with Kubernetes, Helm, scaling, and production-oriented workloads.",
    status: "planned",
    technologies: ["Kubernetes", "Docker", "Helm", "GKE"],
  },
  {
    slug: "gitops-cicd-platform",
    title: "GitOps CI/CD Platform",
    summary:
      "End-to-end deployment workflow using CI/CD, immutable container images, GitOps-based environment promotion, and ArgoCD.",
    status: "planned",
    technologies: ["GitLab CI/CD", "Docker", "ArgoCD", "GitOps"],
  },
  {
    slug: "observability-platform",
    title: "Observability Platform",
    summary:
      "Monitoring and alerting stack for cloud-native applications with metrics, dashboards, alerting, and operational visibility.",
    status: "planned",
    technologies: ["Prometheus", "Grafana", "Alertmanager", "Kubernetes"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
