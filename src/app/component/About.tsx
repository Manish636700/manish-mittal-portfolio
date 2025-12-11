export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* LEFT — ABOUT TEXT */}
      <div className="max-w-xl">
        <p className="text-xs font-semibold text-indigo-600 tracking-wider mb-3">
          ABOUT
        </p>

        <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
          Who I Am
        </h2>

        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          I am a DevOps Engineer with 4+ years of experience designing and automating
          cloud platforms on Azure and AWS. I focus on building scalable CI/CD systems
          and cloud-native infrastructure that help engineering teams deliver software
          faster, safer, and with greater reliability.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed">
          My strengths lie in architecting reusable Infrastructure-as-Code frameworks
          using Terraform, orchestrating workloads on Kubernetes, and implementing
          GitOps pipelines with Argo CD for fully automated, declarative deployments.
          I also bring deep experience with Azure DevOps, GitHub Actions, and
          observability tooling such as Prometheus and Grafana.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex justify-center md:justify-end">
        <div className="w-[420px] h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <img
            src="/Photos.jpg"
            alt="Manish Mittal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
