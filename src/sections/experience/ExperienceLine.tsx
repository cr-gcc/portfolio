import type { ExperienceLineProps } from "@sections/experience/types/experience.type";

export function ExperienceLine({ experiences, className }: ExperienceLineProps) {
    return (
        <ol
            className={`relative space-y-10 before:absolute before:top-0 before:left-1/2 before:h-full before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-accent/10 before:via-accent/50 before:to-accent/10 ${className ?? ""}`}
        >
            {experiences?.map((experience) => (
                <li
                    key={`${experience.company}-${experience.rangeDate}`}
                    className="group relative pl-8 md:grid md:grid-cols-2 md:pl-0 md:odd:-me-3 md:even:-ms-3"
                >
                    <div className="relative flex items-start gap-4 md:gap-5 md:group-odd:flex-row-reverse md:group-odd:text-right md:group-even:order-last">
                        {/* Timeline point */}
                        <span className="absolute -left-[30px] top-1 z-10 size-3 shrink-0 rounded-full border-2 border-accent/40 bg-accent transition-all duration-300 group-hover:scale-150 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_24px_rgba(59,130,246,0.85)] md:static md:mt-1" />
                        {/* Content */}
                        <div className="-mt-3 max-w-xl rounded-xl border border-border bg-surface-soft px-5 py-4 backdrop-blur-sm transition duration-300 hover:border-accent/30 hover:bg-accent-soft">
                            <time className="inline-flex rounded-md border border-border bg-accent-soft px-2.5 py-1 text-xs font-semibold tracking-wide text-accent">
                                {experience.rangeDate}
                            </time>
                            <h3 className="mt-3 text-lg font-semibold text-text-primary">
                                {experience.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-accent">
                                {experience.company}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                    <div aria-hidden="true" />
                </li>
            ))}
        </ol>
    )
}
