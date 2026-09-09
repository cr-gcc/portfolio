import { FaHeadphonesAlt } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";
import { GrDocumentUser, GrDocumentPerformance, GrDocumentText } from "react-icons/gr";
import type { IconType } from "@sections/projects/types/projects.types";
import type { ProjectCardProps } from "@sections/projects/types/projects.types";
import type { IconType as ReactIconType } from "react-icons";

const iconMap: Record<IconType, ReactIconType> = {
    FaHeadphonesAlt,
    IoWalletSharp,
    MdCatchingPokemon,
    GrDocumentUser,
    GrDocumentPerformance,
    GrDocumentText,
};

export function ProjectCard({ project }: ProjectCardProps) {
    const Icon = iconMap[project.icon];
    return (
        <article
            className="
                group
                flex h-full flex-col
                rounded-xl
                border border-border
                bg-surface-soft
                p-6
                backdrop-blur-md
                transition
                duration-300
                hover:-translate-y-1
                hover:border-border
                hover:bg-surface-soft
                hover:shadow-2xl
                hover:shadow-blue-950/20"
        >
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {project.typeProject}
            </span>
            <div className="mb-3 flex items-center gap-3">
                <Icon className="block text-accent" size={22} />
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {project.name}
                </h3>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
                {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
                                rounded-md
                                border border-border
                                bg-surface-soft
                                px-2.5 py-1
                                text-xs font-medium
                                text-text-secondary"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-text-secondary transition hover:text-accent"
                >
                    GitHub ↗
                </a>

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-text-secondary transition hover:text-accent">
                        Live Demo ↗
                    </a>
                )}
            </div>
        </article>
    );
}