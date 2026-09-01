import { techBadgesBasic } from "@data/techBadges"

export function TechBadges() {
    return (
        <div className="flex flex-wrap gap-3">
            {
                techBadgesBasic.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={tech.name}
                            className="
                                group flex items-center gap-2.5
                                rounded-lg border border-blue-500/15
                                bg-zinc-950/40 px-3.5 py-2.5
                                backdrop-blur-md
                                transition
                                duration-200
                                hover:-translate-y-0.5
                                hover:border-blue-400/30
                                hover:bg-blue-500/5
                                hover:shadow-lg
                                hover:shadow-blue-950/20
                                "
                        >
                            <Icon
                                className="
                                h-5 w-5 text-zinc-400
                                transition duration-200
                                group-hover:scale-110
                                group-hover:text-blue-400
                                "
                            />
                            <span className="text-sm font-medium text-zinc-300">
                                {tech.name}
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
}