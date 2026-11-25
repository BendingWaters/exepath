import { ArrowUpRight, Briefcase, FolderOpen, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PROJECTS_DRIVE_URL =
  "https://drive.google.com/drive/folders/1jjP2Q0MLi_9YnDbsOnEsqpu39em4A9H0";

interface ProjectCategory {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
}

const categories: readonly ProjectCategory[] = [
  {
    icon: Briefcase,
    label: "Client Engagements",
    title: "Work delivered with our clients",
    description:
      "Projects where we partner with individuals, startups, and businesses to build structure, systems, and execution habits, and the goals they achieved as a result.",
  },
  {
    icon: Rocket,
    label: "Exepath-Led Initiatives",
    title: "Initiatives we run ourselves",
    description:
      "Programmes, communities, and resources Exepath builds and leads to equip more people and teams with clarity, structure, and consistent execution.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="mb-6 inline-block rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            Our Projects
          </span>

          <h2 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            Projects &amp; Achieved Goals
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            A showcase of Exepath's work, from client engagements to
            Exepath-led initiatives, and the results achieved. New projects are
            added to the folder regularly.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map(({ icon: Icon, label, title, description }) => (
            <article
              key={label}
              className="rounded-3xl border border-gray-100 bg-[#F8F9FA] p-8 transition-colors duration-300 hover:border-[#FFD600]/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD600]/10">
                <Icon className="h-5 w-5 text-[#FFD600]" aria-hidden="true" />
              </div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {label}
              </span>
              <h3 className="mb-3 text-xl font-black leading-snug text-gray-900">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href={PROJECTS_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD600] hover:text-black hover:shadow-xl active:scale-95"
          >
            <FolderOpen className="h-5 w-5" aria-hidden="true" />
            View Projects
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
