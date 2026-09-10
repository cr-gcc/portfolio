import { techBadgesBasic } from "@data/techBadges"

export function TechBadges() {
    return (
        <div className="flex flex-wrap gap-3">
            {
                techBadgesBasic.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div key={tech.name}
                            style={{ "--tech-color": tech.color } as React.CSSProperties}
                            className="group flex items-center gap-2.5 rounded-lg border border-border bg-surface-soft px-3.5 py-2.5 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-accent-soft hover:shadow-lg hover:shadow-blue-950/20"
                        >
                            <Icon style={{ color: tech.color }} className="h-5 w-5 text-text-secondary transition duration-200 group-hover:scale-110 group-hover:text-accent" />
                            <span className="text-sm font-medium text-text-secondary">
                                {tech.name}
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
}