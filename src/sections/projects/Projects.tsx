import { Link } from "react-router"
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
    return (
        <div id="projects" className="scroll-mt-20 md:scroll-mt-16 w-full border-t border-border">
            <section className="py-10">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-semibold uppercase text-accent sm:text-base">
                        Selected work
                    </span>
                    <Link
                        to="/projects"
                        className="w-fit text-sm text-accent transition hover:text-accent sm:text-base"
                    >
                        View all projects
                    </Link>
                </div>
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
        </div>
    )
}