// src/app/data.ts
import { 
    Code2, Rocket, Globe, ShieldCheck, Zap, Server, 
    Layout, Terminal, GitBranch, Cloud
} from "lucide-react";

export const PERSONAL_INFO = {
    name: "Manish Mittal DevOps Engineer",
    title: "Ship better software, faster with confidence",
    subtitle: "I help teams adopt modern DevOps practices—continuous delivery, infrastructure as code, and enterprise-grade observability—without slowing developers down.",
    email: "mittalmanish6367@gmail.com",
    location: "India (IST timezone)",
    availability: "Available for projects",
};

export const METRICS = [
    { value: "50%", label: "Lead time reduction" },
    { value: "< 1h", label: "Mean time to restore" },
    { value: "99.95%", label: "Uptime targets" },
];

export const FOUNDATIONS = [
    {
        title: "Culture of Collaboration",
        description: "Break silos between dev and ops through shared ownership, blameless postmortems, and a focus on flow.",
        icon: Globe
    },
    {
        title: "Continuous Delivery",
        description: "Automate build, test, and release so changes are small, reversible, and always shippable.",
        icon: GitBranch
    },
    {
        title: "Observable Systems",
        description: "Measure what matters—SLOs, golden signals, release health—to detect and resolve issues early.",
        icon: Zap
    }
];

export const SERVICES = [
    { title: "CI/CD at Scale", desc: "Standardized pipelines with GitHub Actions, Azure DevOps, and GitLab CI.", icon: Rocket },
    { title: "Infrastructure as Code", desc: "Cloud-native architectures using Azure Bicep, Terraform, and ARM templates.", icon: Cloud },
    { title: "Platform Engineering", desc: "Internal developer platforms with self-service templates and golden paths.", icon: Layout },
    { title: "DevSecOps", desc: "Shift-left security with SAST/DAST, container scanning, and SBOMs.", icon: ShieldCheck },
    { title: "PowerShell Automation", desc: "Advanced scripting for Windows admin, Azure automation, and task orchestration.", icon: Terminal },
    { title: "Reliability Engineering", desc: "SRE practices: error budgets, SLIs/SLOs, and chaos engineering.", icon: Code2 },
];

export const PERFORMANCE_METRICS = [
    { value: "10x", label: "Deployment frequency" },
    { value: "2h", label: "Change lead time" },
    { value: "0.1%", label: "Change failure rate" },
    { value: "30min", label: "MTTR" },
];

export const TOOLCHAIN = {
    cicd: ["GitHub Actions", "Azure DevOps", "GitLab CI", "Jenkins", "Azure Pipelines", "Git"],
    container: ["Docker", "Kubernetes", "Azure Container Apps", "AKS", "Helm", "ArgoCD", "EKS","ECR","ECS"],
    iac: ["AWS CloudFormation", "Terraform", "ARM Templates", "Ansible", "PowerShell DSC"],
    monitoring: ["Azure Monitor", "Prometheus", "Grafana", "AWS CloudWatch", "App Insights", "Log Analytics"],
    security: ["Azure Key Vault", "HashiCorp Vault", "SonarQube", "AWS SecretManager", "Trivy", "Azure Policy", "IAM","DevSecOps automation"],
    cloud: ["Microsoft Azure", "AWS", "Azure Functions", "Logic Apps"]
};

export const RECENT_WINS = [
    {
        title: "Enterprise Azure Migration",
        items: ["Hub-and-spoke network with Azure Bicep", "50+ workloads migrated to Azure", "PowerShell automation for provisioning", "99.99% uptime with Azure monitoring"],
        icon: Cloud,
        color: "bg-sky-100 text-sky-600"
    },
    {
        title: "Fintech CI/CD Modernization",
        items: ["Monolith → microservices migration", "Lead time from weeks → hours", "Azure DevOps pipelines at scale", "99.95% uptime with SLOs"],
        icon: Zap,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Healthcare DevSecOps",
        items: ["Automated SBOM & container signing", "Policy-as-code with Azure Policy", "HIPAA compliance automation", "Audit time reduced by 70%"],
        icon: ShieldCheck,
        color: "bg-indigo-100 text-indigo-600"
    }
];