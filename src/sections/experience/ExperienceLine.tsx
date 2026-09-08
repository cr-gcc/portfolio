import type { ExperienceLineProps } from "@sections/experience/types/experience.type";

export function ExperienceLine({ experiences, className }: ExperienceLineProps) {
    return (
        <ol
            className={`
                relative space-y-8
                before:absolute
                before:top-0
                before:left-2
                before:h-full
                before:w-px
                before:bg-gradient-to-b
                before:from-blue-500/10
                before:via-blue-400/50
                before:to-blue-500/10
                md:space-y-10
                md:before:left-1/2
                md:before:-translate-x-1/2
                ${className ?? ""}
            `}
        >
            {experiences?.map((experience) => (
                <li
                    key={`${experience.company}-${experience.rangeDate}`}
                    className="group relative pl-8 md:grid md:grid-cols-2 md:pl-0 md:odd:-me-3 md:even:-ms-3"
                >
                    <div className="relative flex items-start gap-4 md:gap-5 md:group-odd:flex-row-reverse md:group-odd:text-right md:group-even:order-last">
                        {/* Timeline point */}
                        <span className="absolute -left-[30px] top-1 z-10 size-3 shrink-0 rounded-full border-2 border-blue-300 bg-blue-500 shadow-[0_0_0_5px_rgba(59,130,246,0.10),0_0_18px_rgba(59,130,246,0.65)] md:static md:mt-1" />
                        {/* Content */}
                        <div className="
                            -mt-3
                            max-w-xl
                            rounded-xl
                            border border-blue-500/10
                            bg-zinc-950/35
                            px-5 py-4
                            backdrop-blur-sm
                            transition
                            duration-300
                            group-hover:border-blue-400/25
                            group-hover:bg-blue-950/10
                        ">
                            <time className="
                                inline-flex
                                rounded-md
                                border border-blue-500/15
                                bg-blue-500/10
                                px-2.5 py-1
                                text-xs font-semibold
                                tracking-wide
                                text-blue-300
                            ">{experience.rangeDate}</time>
                            <h3 className="mt-3 text-lg font-semibold text-zinc-100">{experience.role}</h3>
                            <p className="mt-1 text-sm font-medium text-blue-400">{experience.company}</p>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">{experience.description}</p>
                        </div>
                    </div>
                    <div aria-hidden="true" />
                </li>
            ))}
        </ol>
    )
}
