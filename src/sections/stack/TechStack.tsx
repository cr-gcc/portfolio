import { technologyGroups } from "@/data/technologyGroups";
import { TechItem } from "./TechItem";

export function TechStack() {
    return (
        <section id="stack" className="scroll-mt-20 md:scroll-mt-16 border-t border-border py-12 sm:py-16 lg:py-20">
            <header className="mb-10">
                <span className="text-base font-semibold uppercase text-accent pb-4">
                    Tech Stack
                </span>
                <p className="mt-3 max-w-2xl text-text-secondary">
                    Tools and technologies I use to build, integrate and deploy
                    web applications.
                </p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface-soft backdrop-blur-md">
                {technologyGroups.map((group, index) => (
                    <div
                        key={group.title}
                        className={`p-4 sm:p-6 lg:p-8 ${index !== 0 ? "border-t border-border" : ""}`}
                    >
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            {group.title}
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                            {group.technologies.map((technology) => (
                                <TechItem
                                    key={technology.name}
                                    technology={technology}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}