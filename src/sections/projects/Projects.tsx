import { Link } from "react-router"
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
    return (
        <div className="w-full border-t border-zinc-200/10">
            <section className="py-10">
                <div className="mb-4 flex justify-between">
                    <span className="text-base font-semibold uppercase text-blue-400">
                        Selected work
                    </span>
                    <Link
                        to="/projects"
                        className="text-base text-blue-400"
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