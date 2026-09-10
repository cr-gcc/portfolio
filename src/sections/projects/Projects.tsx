import { useLanguage } from "@/context/LanguageContext"
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
    const { t } = useLanguage();
    return (
        <section id="projects" className="scroll-mt-20 md:scroll-mt-16 w-full border-t border-border py-10 sm:py-16 lg:py-20">
            <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-base font-semibold uppercase text-accent">
                    {t.projects.title}
                </span>
                <a
                    href="https://github.com/cr-gcc" target="_blank"
                    className="w-fit text-sm text-accent transition hover:text-accent"
                >
                    {t.projects.all}
                </a>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    project.featured && (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    )
                ))}
            </div>
        </section>
    )
}